---
name: pmbok-dashboard
description: Central hub for PMBOK. Routes to core, quickref, tutor, or exercises based on user need.
---
# PMBOK — Dashboard
Central hub for the PMBOK study system. Coordinates access to the knowledge base, tutoring, exercises, and quick reference. One entry point for all PMBOK learning needs.
**Trigger phrases:** `pmbok`, `estudo pmbok`, `gerenciamento de projetos`, `projeto`, `gerenciar projeto`, `project management`, `pmp`, `certificação pmp`, `skills pmbok`
**Trigger phrases (sub-skills):** `pmbok core`, `pmbok tutor`, `pmbok ex`, `pmbok qr`
**Load always:** When user mentions PMBOK, project management knowledge areas, processes, PMP exam prep.
---## NEVER
- **NEVER load all 4 skills at once** — load only what's needed to avoid token waste and context bloat
  **Instead:** Match user's intent to exactly one skill mode, then load that skill
  **Why:** Dashboard's job is routing, not content delivery. Dumping 4 skills blocks context for actual work.
- **NEVER repeat content that lives in sub-skills** — the Content Coverage list duplicates what each skill delivers
  **Instead:** Delete Content Coverage. Let routing logic, not content duplication, guide activation
  **Why:** Activation content in the dashboard competes with the target skill's body for context space.
- **NEVER use vague mode descriptions ("Understand a topic", "Do a quiz") without expert-level trigger refinement**
  **Instead:** Each mode must have domain-specific trigger phrases that map directly to PMBOK concepts
  **Why:** Broad prompts like "entender" activate the dashboard again instead of routing to the target skill.

## System Overview
```
pmbok-dashboard (ESTE)
  ├── pmbok-core (base de conhecimento)
  ├── pmbok-quickref (fórmulas e tabelas)
  ├── pmbok-tutor (quiz e drills)
  └── pmbok-exercises (casos e problemas)
```
**Load flow:**
1. If user needs KNOWLEDGE → load pmbok-core
2. If user needs QUICK LOOKUP → load pmbok-quickref
3. If user wants to PRACTICE → load pmbok-tutor
4. If user has a PROBLEM → load pmbok-exercises
5. If ambiguous → load dashboard + ask which mode
---## 4 Skills — Quick Description
| Skill | Trigger | Purpose |
|-------|---------|---------|
| **pmbok-core** | `/pmbok core` | Full knowledge base: 49 processes, 10 KAs, 5 PGs, ITTOs, EVM, CPM |
| **pmbok-quickref** | `/pmbok qr` | Fast lookup: formulas, ITTO tables, decision frameworks, contracts |
| **pmbok-tutor** | `/pmbok tutor` | Quiz: MC, V/F, discursivo, flashcard, estudo de caso |
| **pmbok-exercises** | `/pmbok ex` | Case studies: análise passo-a-passo, resolução de problemas |
---## 4 Learning Modes
### Mode 1: Knowledge (pmbok-core)
"Quero entender [tema]."
→ Load core → Navigate to KA reference → Explain with ITTOs
### Mode 2: Lookup (pmbok-quickref)
"Qual é a fórmula do [CPI/SPI/EAC]?" / "Quais são os ITTOs de [process]?"
→ Load quickref → Show formula/ITTO → Interpret
### Mode 3: Practice (pmbok-tutor)
"Faça um quiz" / "Teste meu conhecimento" / "Drill de EVM"
→ Load tutor → Present exercises → Evaluate → Recommend study areas
### Mode 4: Problem Solving (pmbok-exercises)
"Como resolvo esse problema?" / "Tenho um projeto em crise"
→ Load exercises → Present case → Analyze → Recommend solution
---## Direct Commands
| Command | Loads |
|---------|-------|
| `/pmbok` | dashboard (this) |
| `/pmbok core` | pmbok-core |
| `/pmbok qr` | pmbok-quickref |
| `/pmbok tutor` | pmbok-tutor |
| `/pmbok ex` | pmbok-exercises |
| `/pmbok all` | all 4 skills |
---## How to Start
Ask the user: "O que você quer fazer?"
1. **"Entender um tema"** → load pmbok-core
2. **"Fazer um quiz"** → load pmbok-tutor
3. **"Resolver um problema"** → load pmbok-exercises
4. **"Consultar uma fórmula"** → load pmbok-quickref