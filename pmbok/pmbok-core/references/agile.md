# PMBOK 6th — Agile & Hybrid Approaches

## Predictive vs. Agile vs. Hybrid

| Dimension | Predictive (Waterfall) | Agile | Hybrid |
|-----------|----------------------|-------|--------|
| Scope | Fixed upfront | Emergent, evolves | Fixed high-level, flexible details |
| Requirements | Fully defined at start | Defined per iteration | Mixed |
| Delivery | Single final delivery | Incremental deliveries | Phased + incremental |
| Change | Controlled via CCB | Expected and welcomed | CCB for major; agile for minor |
| Planning | Detailed upfront | Rolling wave / sprint-by-sprint | Both layers |
| Best for | Stable, well-defined scope | Uncertain, innovative, fast-changing | Most real-world projects |

### When to choose each
- **Predictive:** construction, compliance, hardware, fixed contracts
- **Agile:** software products, R&D, innovation, evolving requirements
- **Hybrid:** large projects with stable infrastructure + variable product features

---

## Scrum Framework

### Roles
| Scrum Role | PMBOK Equivalent | Responsibility |
|-----------|-----------------|---------------|
| **Product Owner** | Key Stakeholder / Sponsor | Owns backlog, defines priorities, accepts deliverables |
| **Scrum Master** | PM (servant-leader) | Removes impediments, facilitates ceremonies, protects team |
| **Development Team** | Project Team | Self-organizing, cross-functional, delivers increment |

### Artifacts
| Artifact | Description | PMBOK Equivalent |
|---------|-------------|-----------------|
| **Product Backlog** | Ordered list of all desired features | Requirements Documentation + Scope |
| **Sprint Backlog** | Items selected for current sprint + plan | Activity List + Schedule |
| **Increment** | Working product at end of sprint | Deliverable |
| **Definition of Done (DoD)** | Shared quality criteria for "complete" | Quality Metrics / Acceptance Criteria |

### Ceremonies (Events)
| Ceremony | Timebox | Purpose | PMBOK Process Group |
|---------|---------|---------|-------------------|
| **Sprint Planning** | ≤ 8h (4-week sprint) | Select backlog items, define sprint goal | Planning |
| **Daily Scrum** | 15 min | Sync, surface impediments | Executing / M&C |
| **Sprint Review** | ≤ 4h | Demo increment, collect feedback | Executing (Validate Scope) |
| **Sprint Retrospective** | ≤ 3h | Inspect and adapt the process | M&C (Manage Quality) |

### Key Metrics
```
Velocity        = story points completed per sprint (average)
Burndown Chart  = remaining work (y) vs. time (x) — should trend to zero
Burnup Chart    = completed work (y) vs. time (x) — shows scope changes
Lead Time       = request → delivery
Cycle Time      = start working → delivery
```

---

## Kanban

### Core Principles
1. **Visualize the workflow** — all work visible on the board
2. **Limit WIP (Work in Progress)** — cap items per column to expose bottlenecks
3. **Manage flow** — optimize for continuous delivery, not iterations
4. **Make policies explicit** — everyone knows the rules
5. **Improve collaboratively** — kaizen (continuous improvement)

### Kanban vs. Scrum
| | Scrum | Kanban |
|--|-------|--------|
| Cadence | Fixed sprints (1–4 weeks) | Continuous flow |
| Roles | PO, SM, Dev Team | No prescribed roles |
| WIP limit | Implicit (sprint scope) | Explicit per column |
| Changes | Only between sprints | Anytime (respecting WIP) |
| Best for | Feature development | Maintenance, support, ops |

---

## Hybrid Approach

### Structure
- **Predictive layer:** governance, budget, milestones, contracts, stakeholder reporting
- **Agile layer:** delivery, team execution, requirements refinement, iteration

### Common Hybrid Patterns
| Pattern | Description |
|---------|-------------|
| **Agile-in-Waterfall** | Phases are predictive; delivery within each phase is iterative |
| **Rolling Wave** | Near-term work planned in detail; far-term work planned at high level |
| **Scrumban** | Scrum structure + Kanban flow controls |

### Decision Criteria for Hybrid
- Regulatory or contractual constraints → keep predictive governance
- Uncertain product features → use agile for delivery
- Large teams or distributed teams → add predictive coordination layer

---

## EVM in Agile Context

Traditional EVM uses % complete × BAC. In agile, story points replace % complete:

```
EV (agile) = (completed story points / total story points) × BAC
PV (agile) = (planned story points by now / total story points) × BAC
AC          = actual cost incurred (same as predictive)

CPI = EV / AC  → cost efficiency per point delivered
SPI = EV / PV  → are we delivering points at planned rate?
```

**Key difference:** In agile, scope can change. If backlog grows, BAC and total story points must be recalculated — EAC becomes a rolling forecast, not a fixed projection.

---

## Key Agile Concepts for PMP Exam

| Concept | Definition |
|---------|-----------|
| **Timebox** | Fixed-length period with a defined goal; cannot be extended |
| **Iteration / Sprint** | One timebox cycle; produces a working increment |
| **Backlog Refinement** | Ongoing activity to groom, estimate, and prioritize backlog items |
| **Velocity** | Average story points delivered per sprint; used to forecast release dates |
| **Definition of Done** | Shared team agreement on what "complete" means for any item |
| **Impediment** | Anything blocking team progress; Scrum Master's responsibility to remove |
| **Spike** | Time-boxed research task to reduce uncertainty before estimating |
| **Servant Leadership** | PM/SM style: support team, remove obstacles, enable self-organization |
| **Empirical process control** | Transparency + Inspection + Adaptation (Scrum's 3 pillars) |

---

## Agile Mindset vs. PMI Mindset Comparison

| Topic | Traditional PMI | Agile PMI |
|-------|----------------|-----------|
| PM Role | Authority, planner, controller | Servant-leader, facilitator |
| Change | Controlled, minimized | Expected, embraced |
| Planning | Comprehensive upfront | Adaptive, just-in-time |
| Success | On scope/schedule/cost | Customer value delivered |
| Team | Directed | Self-organizing |
| Risk | Identified and mitigated upfront | Managed via short cycles and feedback |
