#!/usr/bin/env node
/**
 * prepare-context.js
 * Prepares interview context: reads topic, repo, or job description.
 * Usage:
 *   node prepare-context.js --topic "kubernetes"
 *   node prepare-context.js --repo /path/to/local/repo
 *   node prepare-context.js --repo https://github.com/user/repo
 *   node prepare-context.js --job "link or text of job description"
 *   node prepare-context.js --help
 */

import { execSync } from 'child_process';
import { existsSync, readdirSync, readFileSync, statSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILL_DIR = path.join(__dirname, '..');
const TMP_DIR = path.join(SKILL_DIR, 'assets', 'tmp');

const args = process.argv.slice(2);

if (args.includes('--help') || args.length === 0) {
  console.log(`Usage:
  node prepare-context.js --topic "kubernetes"
  node prepare-context.js --repo /path/to/local/repo
  node prepare-context.js --repo https://github.com/user/repo
  node prepare-context.js --job "link or job description text"
`);
  process.exit(0);
}

function getArg(flag) {
  const i = args.indexOf(flag);
  if (i === -1) return null;
  return args[i + 1] || null;
}

const topic = getArg('--topic');
const repo = getArg('--repo');
const job = getArg('--job');

if (!topic && !repo && !job) {
  console.error('ERROR: provide at least one of --topic, --repo, or --job');
  process.exit(1);
}

// File extensions considered code/config (relevant files to read)
const RELEVANT_EXTENSIONS = new Set([
  '.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.kt', '.swift',
  '.go', '.rs', '.cpp', '.c', '.h', '.cs', '.rb', '.php',
  '.yaml', '.yml', '.json', '.toml', '.gradle', '.xml',
  '.sh', '.bash', '.zsh', '.fish',
  '.md', '.txt', '.env.example', '.Dockerfile', 'Dockerfile',
  '.html', '.css', '.scss',
  '.tf', '.hcl', '.sql',
]);

const IGNORE_DIRS = new Set([
  'node_modules', '.git', '.gradle', 'build', 'dist', 'out',
  '__pycache__', '.venv', 'venv', '.idea', '.vscode',
  'vendor', 'target', '.cache', 'coverage', '.nyc_output',
]);

const MAX_FILES = 40;
const MAX_FILE_SIZE = 30 * 1024; // 30KB per file

function collectRelevantFiles(dir, collected = [], depth = 0) {
  if (depth > 6 || collected.length >= MAX_FILES) return collected;

  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return collected;
  }

  // Prioritize important files first
  const priority = ['README.md', 'package.json', 'build.gradle', 'Cargo.toml',
    'pyproject.toml', 'setup.py', 'go.mod', 'Dockerfile', 'docker-compose.yml',
    'AndroidManifest.xml', 'Info.plist', '.env.example'];

  entries.sort((a, b) => {
    const pa = priority.indexOf(a);
    const pb = priority.indexOf(b);
    if (pa !== -1 && pb !== -1) return pa - pb;
    if (pa !== -1) return -1;
    if (pb !== -1) return 1;
    return 0;
  });

  for (const entry of entries) {
    if (collected.length >= MAX_FILES) break;
    if (IGNORE_DIRS.has(entry)) continue;

    const fullPath = path.join(dir, entry);
    let stat;
    try {
      stat = statSync(fullPath);
    } catch {
      continue;
    }

    if (stat.isDirectory()) {
      collectRelevantFiles(fullPath, collected, depth + 1);
    } else {
      const ext = path.extname(entry) || entry;
      if (RELEVANT_EXTENSIONS.has(ext) && stat.size <= MAX_FILE_SIZE) {
        collected.push(fullPath);
      }
    }
  }

  return collected;
}

function readFileSafe(filePath) {
  try {
    return readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

let output = { type: null, summary: '', files: [] };

// --- TOPIC ---
if (topic) {
  output.type = 'topic';
  output.summary = topic;
  console.log(JSON.stringify(output));
  process.exit(0);
}

// --- REPO ---
if (repo) {
  let repoPath = repo;
  const isRemote = repo.startsWith('http://') || repo.startsWith('https://') || repo.startsWith('git@');

  if (isRemote) {
    if (!existsSync(TMP_DIR)) mkdirSync(TMP_DIR, { recursive: true });

    const repoName = repo.split('/').pop().replace('.git', '') || 'cloned-repo';
    repoPath = path.join(TMP_DIR, repoName);

    if (existsSync(repoPath)) {
      // Already cloned
    } else {
      try {
        execSync(`git clone --depth 1 "${repo}" "${repoPath}"`, { stdio: 'pipe', timeout: 60000 });
      } catch (e) {
        console.error(`ERROR: failed to clone repository: ${e.message}`);
        process.exit(1);
      }
    }
  } else {
    if (!existsSync(repoPath)) {
      console.error(`ERROR: local path does not exist: ${repoPath}`);
      process.exit(1);
    }
  }

  const files = collectRelevantFiles(repoPath);

  if (files.length === 0) {
    console.error('ERROR: no relevant files found in repository');
    process.exit(1);
  }

  output.type = 'repo';
  output.summary = repo;
  output.repoPath = repoPath;
  output.files = files.map(f => ({
    path: path.relative(repoPath, f),
    content: readFileSafe(f) || '[unreadable]',
  }));

  console.log(JSON.stringify(output));
  process.exit(0);
}

// --- JOB ---
if (job) {
  output.type = 'job';
  output.summary = job;
  console.log(JSON.stringify(output));
  process.exit(0);
}
