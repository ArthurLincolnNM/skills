---
name: pmbok-quickref
description: Fast lookup for PMBOK formulas — EVM, CPI, SPI, PERT, critical path, communication channels.
---
# PMBOK — Quick Reference
Lookup tables for fast retrieval during problem solving and exam prep. All critical formulas, EVM dashboard, CPM, PERT, communication channels, and decision frameworks in one place.
**Trigger phrases:** `pmbok qr`, `quick reference`, `ITTO`, `tabela`, `fórmula`, `fórmulas`, `formulas`, `CPI`, `SPI`, `EAC`, `caminho crítico`, `PERT`

**Load always:** When user asks for a specific formula, comparison table, or decision framework.
**MANDATORY READ:** `references/decisions.md` — decision trees and "which process/contract/strategy?" lookup.
**Do NOT load** decisions.md unless user asks "what should I do?" or "which process?" first.
---
## Navigation
| Need | Load |
|------|------|
| EVM formulas, EAC, TCPI | `#evm` (below) |
| CPM, critical path, float | `#cpm` (below) |
| Communication channels | `#channels` (below) |
| PERT estimate | `#pert` (below) |
| COQ breakdown | `references/formulas.md` |
| Risk strategies | `references/decisions.md` |
| Contract types | `references/decisions.md` |
| Conflict resolution | `references/decisions.md` |
| "What process handles this?" | `references/decisions.md` |
---
## NEVER
- **NEVER calculate EAC without stating the assumption**
  **Instead:** State which formula: `BAC/CP` (rate continues), `AC + (BAC-EV)/CP` (new rate), `AC + Bottom-up ETC`
  **Why:** The EAC formula changes the answer. BAC/CP assumes past CP continues. Wrong assumption → wrong answer.
- **NEVER accept TCPI when BAC-EV = 0 (at project end)**
  **Instead:** TCPI is undefined at 100% complete. Verify BAC-EV > 0 before calculating.
  **Why:** Division by zero. At project end, EAC = AC and TCPI is meaningless.
- **NEVER give SV (in $) when the question asks for SPI (in ratio)**
  **Instead:** State both: SV = -$30,000 (behind) AND SPI = 0.88 (behind). Different units, different question.
  **Why:** PMI exam questions are precise about units. "schedule variance" ≠ "schedule performance index".
- **NEVER calculate CP when AC = 0**
  **Instead:** CP = EV/0 → undefined. Check AC > 0 first.
  **Why:** Division by zero. No money spent yet? Verify data validity before calculating.
- **NEVER use float = 0 as the sole indicator of critical path**
  **Instead:** Identify zero-float paths, then verify which is the longest. Multiple CPs exist.
  **Why:** Longest path AND zero float define the critical path. Zero float alone misses parallel paths.
---
## EVM Quick Dashboard
```
BAC = Budget at Completion
EV  = Earned Value (% completo × BAC)
PV  = Planned Value (% planejado × BAC)
AC  = Actual Cost (custo real)
─────────────────────────────────────────
CPI = EV/AC  |  SPI = EV/PV
CV  = EV-AC  |  SV  = EV-PV
─────────────────────────────────────────
EAC = BAC/CPI    (common assumption)
VAC = BAC-EAC    (variance at completion)
TCPI = (BAC-EV)/(BAC-AC)
─────────────────────────────────────────
CPI < 1  → over budget
SPI < 1  → behind schedule
TCPI > 1  → need better rate
```
## Communication Channels
```
n( n - 1 )
──────────────
    2
```
| People | Channels |
|--------|---------|
| 3 | 3 |
| 5 | 10 |
| 10 | 45 |
| 15 | 105 |
| 50 | 1.225 |
## PERT
```
Estimate = (O + 4M + P) / 6
Sigma   = (P - O) / 6
```
## Critical Path
```
ES = Early Start   = max(EF of predecessors)
EF = Early Finish = ES + Duration
LS = Late Start   = min(LS of successors) - Duration
LF = Late Finish = min(LS of successors)
Float = LS - ES  (or LF - EF)
CP = zero float activities
```
## Formulas Summary Table
| What | Formula | Units |
|------|---------|-------|
| Schedule variance | SV = EV - PV | $ (currency) |
| Cost variance | CV = EV - AC | $ (currency) |
| Schedule performance | SPI = EV / PV | ratio |
| Cost performance | CPI = EV / AC | ratio |
| Estimate at completion | EAC = BAC / CPI | currency |
| Variance at completion | VAC = BAC - EAC | currency |
| To-complete index | TCPI = (BAC-EV)/(BAC-AC) | ratio |
| PERT estimate | (O+4M+P)/6 | time |
| Communication channels | n(n-1)/2 | number |
