---
name: tech-interview
description: >
  Simula entrevista técnica com programador sênior.
  Ativa com: me entrevista sobre X, simula entrevista técnica, praticar entrevista de vaga.
compatibility: Node.js >= 18, git
---

# Tech Interview

Simula uma entrevista técnica conduzida por um programador sênior. Suporta três modos de contexto: tópico livre (ex: "kubernetes"), repositório de código (local ou remoto), ou vaga de emprego (link ou texto). Gera ao final um relatório detalhado de desempenho + roadmap de estudo em Markdown.

Leia `references/interview-rules.md` antes de iniciar qualquer entrevista. Esse arquivo contém as regras completas de condução, avaliação e formato do relatório.

## Setup

Run once before first use:
```bash
cd ~/.pi/agent/skills/tech-interview
```
Nenhuma dependência npm necessária. Apenas Node.js >= 18 e `git` instalados.

## Uso

### Passo 1 — Identificar o contexto da entrevista

Verifique o que o usuário forneceu:

**Opção A — Tópico:**
O usuário mencionou uma tecnologia ou área (ex: "kubernetes", "desenvolvimento android", "cybersec").
→ Vá para o Passo 2 diretamente.

**Opção B — Repositório local:**
O usuário forneceu um caminho local (ex: `/home/user/meu-projeto`).
```bash
node scripts/prepare-context.js --repo "/caminho/do/repositorio"
```

**Opção C — Repositório remoto:**
O usuário forneceu uma URL de repositório (ex: `https://github.com/user/repo`).
```bash
node scripts/prepare-context.js --repo "https://github.com/user/repo"
```
IMPORTANTE: O clone pode demorar. Informe ao usuário que está clonando.

**Opção D — Vaga de emprego:**
O usuário forneceu um link ou texto de vaga.
```bash
node scripts/prepare-context.js --job "link ou texto da vaga"
```

Se o script retornar `ERROR:`, informe o erro ao usuário e encerre.

Se a opção for B ou C, leia o JSON retornado. O campo `files` contém os arquivos relevantes do repositório com seus conteúdos. Analise esses arquivos para preparar perguntas específicas sobre o projeto.

### Passo 2 — Perguntar o nível de dificuldade

Após identificar o contexto, pergunte ao usuário:

> "Antes de começar, qual nível de dificuldade você quer para essa entrevista?
> **1 — Estagiário** | **2 — Júnior** | **3 — Pleno** | **4 — Sênior**"

Aguarde a resposta antes de continuar.

### Passo 3 — Preparar e apresentar os blocos

Após receber o nível:
1. Monte os blocos de tema com base no contexto e nível (mínimo 3 blocos, mínimo 2 perguntas por bloco)
2. Informe ao usuário quantos blocos serão cobertos e os temas gerais
3. Avise que ele pode digitar `fim` ou `encerrar` a qualquer momento para interromper e receber o relatório

Exemplo:
> "Ótimo. Vamos cobrir 4 blocos: Fundamentos, Arquitetura, Ferramentas e Boas Práticas. Mínimo de 8 perguntas no total. Pode digitar 'fim' se quiser encerrar antes."

### Passo 4 — Conduzir a entrevista

Siga as regras em `references/interview-rules.md`.

Regras críticas durante a condução:
- Apresente um bloco por vez
- Dentro de cada bloco, faça as perguntas uma a uma — aguarde a resposta antes de fazer a próxima
- Se a resposta for incompleta ou vaga, faça UM follow-up antes de passar à próxima pergunta
- NUNCA revele respostas corretas durante a entrevista
- Registre mentalmente cada resposta com classificação (✅ Correto / ⚠️ Parcial / ❌ Incorreto)

Se o usuário digitar `fim` ou `encerrar` a qualquer momento → pule para o Passo 5.

Ao terminar todos os blocos, pergunte:
> "Encerramos os blocos planejados. Quer continuar com mais perguntas ou encerrar e receber o relatório?"

### Passo 5 — Gerar e salvar o relatório

1. Gere o relatório completo seguindo o formato em `references/interview-rules.md` (seção "Relatório Final")
2. Defina o nome do arquivo: `relatorio-entrevista-<topico-ou-repo>-<YYYY-MM-DD>.md`
3. Salve o relatório:
```bash
node scripts/save-report.js --output "./relatorio-entrevista-<nome>.md" --content "<conteudo markdown>"
```
IMPORTANTE: Se o conteúdo for longo, use stdin em vez de --content:
```bash
echo "<conteudo>" | node scripts/save-report.js --output "./relatorio-entrevista-<nome>.md"
```
4. Se o script retornar `SUCCESS:`, informe ao usuário o caminho do arquivo salvo.
5. Se retornar `ERROR:`, mostre o erro e apresente o relatório diretamente no terminal.

## Exemplos

**Exemplo 1 — Tópico:**
Usuário diz: "me entrevista sobre kubernetes"
→ Passo 1: contexto = tópico "kubernetes"
→ Passo 2: perguntar nível
→ Passo 3: montar blocos (ex: Conceitos, Workloads, Networking, Segurança)
→ Conduzir entrevista

**Exemplo 2 — Repositório remoto:**
Usuário diz: "me entrevista com base nesse repo: https://github.com/user/meu-app"
→ Executar: `node scripts/prepare-context.js --repo "https://github.com/user/repo"`
→ Analisar arquivos retornados
→ Perguntar nível → conduzir entrevista focada no projeto

**Exemplo 3 — Vaga:**
Usuário diz: "simula entrevista para essa vaga: https://jobs.example.com/123"
→ Executar: `node scripts/prepare-context.js --job "https://jobs.example.com/123"`
→ Perguntar nível → formular perguntas baseadas nos requisitos da vaga

**Exemplo 4 — Encerramento antecipado:**
Usuário digita `fim` no meio da entrevista
→ Diga: "Entendido, vou gerar o relatório com as perguntas respondidas até agora."
→ Executar Passo 5

## Tratamento de erros

- `ERROR: failed to clone repository` → repositório inválido, privado ou sem git instalado. Peça URL correta ou repo local.
- `ERROR: local path does not exist` → caminho incorreto. Peça o caminho correto.
- `ERROR: no relevant files found` → repositório sem arquivos reconhecíveis. Pergunte ao usuário o tópico manualmente.
- `ERROR: report content is empty` → conteúdo vazio. Apresente o relatório diretamente no chat.

## IMPORTANT

- ALWAYS leia `references/interview-rules.md` antes de iniciar a entrevista
- NEVER revele respostas corretas durante a entrevista
- ALWAYS aguarde a resposta do usuário antes de fazer a próxima pergunta
- NEVER faça mais de um follow-up por pergunta
- O relatório deve conter TODAS as perguntas feitas, mesmo em encerramento antecipado
- O arquivo de relatório deve ser salvo no diretório de trabalho atual do usuário (`./<nome>.md`)
