# PMBOK 6th — Key Formulas & Charts
## EVM Formulas
```
EARNED VALUE (EV)
EV = % Complete × BAC  (or: EV = Budgeted Cost of Work Performed)
EV = valor que foi "ganho" até agora no projeto

PLANNED VALUE (PV)
PV = % Scheduled × BAC  (or: Budgeted Cost of Work Scheduled)
PV = valor planejado até agora

ACTUAL COST (AC)
AC = Actual Cost of Work Performed
AC = custo real incorrido até agora

VARIANCE ANALYSIS
SV (Schedule Variance, $)  = EV - PV
CV (Cost Variance, $)   = EV - AC
SV > 0 = ahead of schedule; SV < 0 = behind schedule
CV > 0 = under budget;   CV < 0 = over budget

PERFORMANCE INDICES
SPI = EV / PV  (Schedule Performance Index)
CPI = EV / AC  (Cost Performance Index)
SPI > 1.0 = ahead of schedule;  SPI < 1.0 = behind
CPI > 1.0 = under budget;       CPI < 1.0 = over budget

ESTIMATES
EAC = BAC / CPI                     (most common assumption)
EAC = AC + (BAC - EV) / CPI        (overwrite rate)
EAC = AC + Bottom-Up ETC           (new estimate)
EAC = AC + (BAC - EV) / (CPI × SPI)  (atypical)
VAC = BAC - EAC                  (Variance at Completion)
ETC = EAC - AC                  (Estimate to Complete)

TO-COMPLETE PERFORMANCE INDEX
TCPI = (BAC - EV) / (BAC - AC)  (based on BAC)
TCPI = (BAC - EV) / (EAC - AC) (based on EAC)
TCPI > 1.0 = need to perform BETTER than average
TCPI < 1.0 = can perform WORSE than average
TCPI = 1.0 = exactly at budget

FOREcasting (simplified)
To complete: ETC = BAC - EV (pure)
To complete: ETC = (BAC - EV) / CPI (adjusted)
```
### EVM Dashboard Matrix
| Status  | SPI | CPI | Situation |
|--------|-----|-----|----------|
| Green  | ≥1  | ≥1  | on track |
| Yellow | <1  | ≥1  | schedule problem |
| Red    | ≥1  | <1  | cost problem |
| Critical | <1 | <1 | both problems |
### EVM Interpretation Rules
1. SPI < 0.85 → significantly behind
2. CPI < 0.90 → significantly over
3. When EAC exceeds BAC → project over budget
4. TCPI > 1.2 → aggressive recovery plan needed
5. SV in $, SPI in ratio. Both measure schedule but in different units.

## PERT Estimate
```
PERT = (O + 4M + P) / 6
Standard Deviation = (P - O) / 6
Variance = [(P - O) / 6]²
```
Where: O = Optimistic, M = Most Likely, P = Pessimistic
Note: PERT assumes a beta distribution (4 points weighted more than endpoints)
```
Example: O=4, M=8, P=24
PERT = (4 + 4×8 + 24) / 6 = (4+32+24)/6 = 60/6 = 10 days
Sigma = (24-4)/6 = 20/6 = 3.33 days
```
### PERT Variance for Path (sum of activity variances on critical path)
## CPM — Critical Path Method
```
Forward Pass:
ES = max(EF of all predecessors)
EF = ES + Duration
LF = min(LS of all successors)
LS = LF - Duration
Total Float = LF - EF = LS - ES
Critical Path = activities with TOTAL FLOAT = 0
```
### CPM Rules
1. The critical path determines the MINIMUM project duration
2. You CANNOT compress activities not on the critical path
3. Compressing non-critical activities does NOT shorten the project
4. Crashing = adding resources (cost) to shorten duration
5. Fast Tracking = overlapping activities (risk)
6. Multiple critical paths = increased risk
### Crashing Cost Formula
```
Crash Cost per Day = (Crash Cost - Normal Cost) / (Normal Time - Crash Time)
Crash until: crash cost per day > benefit OR no more compressible activities
```
## Communication Channels
```
Channels = n(n - 1) / 2
```
Where: n = number of people (including sender)
```
5 people:  5×4/2 = 10 channels
10 people: 10×9/2 = 45 channels
50 people: 50×49/2 = 1225 channels
```
## EMV (Expected Monetary Value)
```
EMV = Probability × Impact (in currency)
Decision Tree Analysis: sum of EMVs to choose path with highest expected value
```
## Point of Total Assumption (Fixed Price Contracts)
The point after which the seller absorbs additional cost risk. Before this point, buyer bears risk. After this point, seller bears risk.

## Cost of Quality (COQ)
```
COQ = Cost of Conformance + Cost of Nonconformance
Conformance = Prevention Costs + Appraisal Costs
Nonconformance = Internal Failure + External Failure
```