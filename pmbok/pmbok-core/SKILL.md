---
name: pmbok-core
description: Reference knowledge base for PMBOK — 49 processes, 10 Knowledge Areas, 5 Process Groups, ITTOs, EVM, CPM, Agile, Scrum, Kanban, Hybrid.
---
# PMBOK — Core Knowledge Base
Reference knowledge base for PMBOK (49 processes, 5 Process Groups, 10 Knowledge Areas). All ITTO directionality, EVM, CPM, and PERT. Acts as the "DNA" for the PMBOK tutoring and exercise system.
**Trigger phrases:** `pmbok`, `processo pmbok`, `área de conhecimento`, `grupo de processo`, `ITTO`, `PERT`, `EVM`, `caminho crítico`, `Earned Value`, `ágil`, `agile`, `scrum`, `kanban`, `híbrido`, `hybrid`, `sprint`, `iterativo`, `backlog`, `velocity`
**Load always:** When user needs reference knowledge about PMBOK processes, formulas, or ITTOs.
**MANDATORY READ (per Navigation routing):**
- `references/overview.md` — framework overview (5 PGs, 10 KAs, 49 processes map)
- `references/formulas.md` — EVM, PERT, CPM, communication channels, COQ
- `references/ka-all.md` — all 10 KAs with processes and ITTOs
- `references/agile.md` — Agile, Scrum, Kanban, Hybrid, EVM in agile context
**Do NOT load** these references on every invocation — only when user asks about the specific topic.
---
## Navigation
| Need | Load |
|------|------|
| "What's the overview?" | `references/overview.md` |
| "What's the formula for X?" | `references/formulas.md` |
| "Tell me about KA X" | `references/ka-all.md` |
| "ITTOs for process X" | `references/ka-all.md` (search by process name) |
| "Agile, Scrum, Kanban, híbrido, sprint, backlog" | `references/agile.md` |
---
## NEVER
- **NEVER cite a process without `[KA] > [PG] > [Process]`**
  **Instead:** Always use the three-part format
  **Why:** Many processes share similar names. "[Plan]" alone is ambiguous.
- **NEVER list ITTOs without INPUT or OUTPUT label**
  **Instead:** State: "As INPUT:" or "As OUTPUT:". ITTOs are directional — an output of Process A becomes an input to Process B.
  **Why:** Direction is what makes ITTOs testable on the PMP exam.
- **NEVER explain a formula without defining every variable in the formula's unit**
  **Instead:** `CPI = EV / AC` → "CPI = Earned Value ($) ÷ Actual Cost ($)" — always state currency units
  **Why:** PMI exam questions test whether you know what EV and AC are measured in.
- **NEVER confuse flags ($) with indices (ratio)**
  **Instead:** SV < 0 → behind schedule ($). SPI < 1 → behind schedule (ratio). Different units.
  **Why:** Both measure schedule but in different systems. Mixing them is the #1 EVM error.
- **NEVER apply predictive EVM directly to agile without adjusting for story points**
  **Instead:** In agile, EV = (completed points / total points) × BAC. BAC is a rolling forecast, not fixed.
  **Why:** Backlog grows in agile. Fixed BAC assumption invalidates EVM projections.
---
## Quick Process Map (Navigation Aid)
Use this to orient before loading a reference file.
### 5 Process Groups × 10 Knowledge Areas → 49 processes
| PG | Key Output | # Processes |
|----|---------|------------|
| Initiating (IN) | Project Charter, Stakeholder Register | 2 |
| Planning (PL) | Project Management Plan + all baselines | 24 |
| Executing (EX) | Deliverables, work performance data | 10 |
| Monitoring & Controlling (MC) | Change requests, performance reports | 12 |
| Closing (CL) | Final product, archived records, lessons learned | 1 |
### EVM At-a-Glance
```
CPI = EV/AC  (cost perf — CPI<1 over budget)
SPI = EV/PV  (schedule perf — SPI<1 behind)
EAC = BAC/CPI  (most common assumption)
TCPI = (BAC-EV)/(BAC-AC)
```
### CPM At-a-Glance
```
ES = max(EF of predecessors)
LF = min(LS of successors)
Float = LS-ES = LF-EF
Critical Path = zero float activities
```
### Communication Channels
```
n(n-1)/2
```
### Risk EMV
```
EMV = Probability × Impact
```