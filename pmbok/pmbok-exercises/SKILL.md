---
name: pmbok-exercises
description: PMBOK case studies and problem solving — analyze scenarios, apply frameworks, recommend solutions.
---
# PMBOK — Case Studies & Problem Solving
Analyze complex project scenarios step-by-step. Identify issues, map to PMBOK processes, recommend solutions, apply EVM, CPM, decision frameworks. For PMP exam practice and real-world project problem solving.
**Trigger phrases:** `caso pmbok`, `estudo de caso`, `problema`, `análise`, `cenário`, `situação`, `projeto em crise`, `resolução de problemas`, `case study`, `problem solving`
**Load always:** when user presents a project scenario, case study, or "what should I do?" question.
**MANDATORY READ:** `references/cases.md` for the case study database.
**Load after:** pmbok-quickref for formulas and decision frameworks.
---## NEVER
- **NEVER give a solution without identifying the ROOT cause first**
  **Instead:** Analyze → Identify root cause → Map to process → Recommend solution
  **Why:** Symptom treatment vs root cause treatment. PMI tests root cause identification.
- **NEVER propose a solution outside PMBOK processes**
  **Instead:** Map problem to Knowledge Area → Identify process → Follow process → Escalate if needed
  **Why:** PMBOK is a process framework. The answer is always in the processes.
- **NEVER skip the EVM analysis when numbers are provided**
  **Instead:** Always calculate CPI, SPI, EAC when financial or schedule data is present
  **Why:** Data provided in scenarios is always relevant.
- **NEVER give generic advice ("comunicação", "melhorar comunicação")**
  **Instead:** Be specific: "Use [specific tool/technique] from [KA] > [PG] > [Process] to address [specific issue]"
  **Why:** PMI exam answers are specific and process-based.
- **NEVER skip the "what process handles this?" check**
  **Instead:** Ask "Which process group and knowledge area is responsible?" before recommending action
  **Why:** PMBOK is organized by process. Matching problem → process is the framework.
- **NEVER present an answer without citing the PMBOK section**
  **Instead:** Always include [KA] > [PG] > [Process] and the relevant ITTOs
  **Why:** PMP exam requires linking actions to PMBOK sections.
---
## Problem Solving Framework
### Step 1: SINTOMA (Symptom)
Identify what the user is describing. Is it a people problem? Process problem? Data problem?
### Step 2: CAUSA ROOT (Root Cause)
Apply "5 Whys" or fishbone to identify the REAL cause.
| Sintoma Comum | Causa Root Frequente | Processo Responsável | KA |
|---------|---------|---------|---|
| Budget overrun | Scope creep sem CCB | Control Scope / Perform ICC | Scope / Integration |
| Schedule delay | Dependencies not managed | Control Schedule | Schedule |
| Quality defect | No quality standards | Control Quality | Quality |
| Stakeholder upset | No engagement | Manage Stakeholder Engagement | Stakeholder |
| Team conflict | Unclear RACI | Manage Team | Resource |
| Change explosion | No scope baseline | Define Scope / Create WBS | Scope |
| Communication failure | No comms plan | Plan Communications | Communications |
### Step 3: MAPEAR PROCESSO (Process Mapping)
Map to PMBOK:
- What PG is this? (Initiating / Planning / Executing / M&CG / Closing)
- What KA is this? (check all 10)
- What SPECIFIC process handles this? (49 processes)
### Step 4: RECOMENDAR SOLUÇÃO (Solution Recommendation)
Be specific. Reference process and ITTOs.
### Step 5: VERIFICAR RESULTADO (Verify)
How would you know if the solution worked? What metric or indicator?
---
## EVM Analysis Template (always fill)
```DADO:
BAC = [value]   PV = [value]   EV = [value]   AC = [value]
CALCULADO:
SV  = EV - PV = [value]  → [ahead/behind] schedule
SPI = EV / PV = [value]  → [>1/<1] = [ahead/behind]
CV  = EV - AC = [value]  → [over/under] budget
CPI = EV / AC = [value]  → [<1/>1] = [over/under] budget
EAC = [formula] = [value]
VAC = BAC - EAC = [value]
CONCLUSÃO:
[status in plain language — is the project on/off track for schedule and budget?]
RECOMENDAÇÃO:
[recovery action mapped to process]
```
## Case Analysis Template
```## Caso #[N] — [Título]
**Cenário:** [brief scenario description]
**Sintomas Identificados:** [list of symptoms]
**Análise EVM:** [EVM template above, if numbers present]
**Causa Root:** [root cause identification]
**Processo PMBOK Responsável:** [KA] > [PG] > [Process]
**ITTOs Relevantes:**
  - Inputs: [relevant inputs]
  - Tools & Techniques: [relevant tools]
  - Outputs: [relevant outputs]
**Recomendações de Ação:** [specific, process-based]
1. [First action — always start with the most impactful]
2. [Second action]
3. [Third action]
**Indicadores de Sucesso:** [how to measure improvement]
**Revisar também:** [related KAs or processes to check]
**Revisão PMBOK:** [specific sections to study for this type of problem]
```
## Quick Reference
- EVM formulas → pmbok-quickref / formulas
- CPM → pmbok-quickref / formulas
- Risk strategies → pmbok-quickref / references / risk.ld
- Stakeholder grid → pmbok-quickref / references / stakeholders.ld
- Conflict resolution → pmbok-quickref / references / conflict.ld