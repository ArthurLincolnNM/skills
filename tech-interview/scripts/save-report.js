#!/usr/bin/env node
/**
 * save-report.js
 * Saves the interview report + roadmap to a markdown file.
 * Usage:
 *   node save-report.js --output /path/to/report.md --content "markdown content here"
 *   node save-report.js --help
 *
 * The content is read from stdin if --content is not passed.
 */

import { writeFileSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);

if (args.includes('--help')) {
  console.log(`Usage:
  node save-report.js --output /path/to/report.md --content "markdown content"
  echo "content" | node save-report.js --output /path/to/report.md
`);
  process.exit(0);
}

function getArg(flag) {
  const i = args.indexOf(flag);
  if (i === -1) return null;
  return args[i + 1] || null;
}

const outputPath = getArg('--output');
const content = getArg('--content');

if (!outputPath) {
  console.error('ERROR: --output is required');
  process.exit(1);
}

const resolvedPath = path.resolve(outputPath);

async function run() {
  let reportContent = content;

  if (!reportContent) {
    // Read from stdin
    const chunks = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk);
    }
    reportContent = Buffer.concat(chunks).toString('utf-8');
  }

  if (!reportContent || reportContent.trim() === '') {
    console.error('ERROR: report content is empty');
    process.exit(1);
  }

  try {
    mkdirSync(path.dirname(resolvedPath), { recursive: true });
    writeFileSync(resolvedPath, reportContent, 'utf-8');
    console.log(`SUCCESS: report saved to ${resolvedPath}`);
  } catch (e) {
    console.error(`ERROR: could not write file: ${e.message}`);
    process.exit(1);
  }
}

run();
