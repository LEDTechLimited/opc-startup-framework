# How to Use the OPC Startup Framework

> Step-by-step adoption guide. Read this once before starting.

---

## Phase 0 — Setup (15 min)

### What you need
- A folder for your business's strategic stack (e.g., `~/Documents/[Business Name]/Strategy/`)
- An AI tool with file-attachment support (Claude Projects, Custom GPT, Gemini Gem, or NotebookLM)
- 60-90 minutes for the kickoff questionnaire (uninterrupted)
- This framework's 5 files (you have them)

### Copy the framework into your business folder
```
[Business Name]/Strategy/
├── 00_Framework_Reference.md          ← from framework
├── 01_Kickoff_Questionnaire.md        ← from framework (you'll fill this)
├── 02_Master_Blueprint_TEMPLATE.md    ← from framework (rename to drop "_TEMPLATE")
├── 03_AI_System_Prompt.md             ← from framework
└── Strategic_Decisions_Log.md         ← create new (start empty)
```

---

## Phase 1 — Read the Framework (30 min)

Open `00_Framework_Reference.md` and read all 6 sections in one sitting:

1. The 7 Execution Layers
2. The Strategic Stack
3. The Daily Filter
4. The Golden Triangle Engine
5. OPC Operating Principles
6. Hormozi Toolkit

**Don't skim**. The questionnaire's quality depends on you internalizing the framework first. If a concept doesn't click, sit with it. If it still doesn't click, write down the question and ask your AI tool to explain it back using your industry as an example.

---

## Phase 2 — Answer the Kickoff Questionnaire (60-90 min)

Open `01_Kickoff_Questionnaire.md`. Block 60-90 min. Phone airplane mode. No interruptions.

### Discipline rules

1. **No fabrication**. If you don't know an answer, write `[NEED VALIDATION]` and add it to Bridge Work (Section G). Don't guess proof points — unverified claims poison Pillar 5.

2. **Be specific**. "Tech industry" is wrong. "B2B SaaS for solo accountants in the US" is right.

3. **First principles for ICP**. Section D and E push you past surface answers. Don't write "customers want reliability." Write "customers fear losing the contract if reliability fails — this is career risk, not equipment risk."

4. **Be honest about your stage**. If you're at Stage 1 (PMF), don't write Stage 3 answers. The framework calibrates to your reality.

5. **Section C5 (5 Concrete Proof Points)**. If you can't list 5 today, that's a critical signal. Pause the questionnaire, run proof point validation, return when you can.

### Common pitfalls

- **Picking 3 conflicting archetypes** in B1 (e.g., "Sennheiser × DJI × Apple") — pick ONE and let it constrain you
- **Defining tiers as discount ladder** when you said you want premium positioning — these conflict; resolve in C2
- **Writing aspirational claims** in C5 instead of verifiable ones — kill aspirational, list only what's true today

---

## Phase 3 — Fill the Master Blueprint (30 min)

Open `02_Master_Blueprint.md` (you renamed it from the template). Transfer your questionnaire answers into the corresponding sections.

The blueprint has 13 sections. Each section's `[FILL: ...]` placeholder cites the questionnaire question (e.g., `[FILL: B1]` means "use your answer from B1").

### Self-review before locking

Read the blueprint cover-to-cover. Ask:
- Does my Pillar 4 (Sales Model) actually match my Pillar 2 (Tier Audience)? E.g., if Top tier is consultative B2B, the lead channel must support that — not pure self-serve commerce.
- Do my 5 Pillars contradict each other? E.g., "Premium positioning" + "Mass-market scale" can't both win.
- Are my proof points all verifiable? Does anything need a source citation?
- Is my Bridge Work honest? If you have 7 things needing validation but listed only 1, you're hiding from yourself.

### Locking the blueprint

When satisfied:
1. Change `🟡 DRAFT` → `🔒 LOCKED v1.0`
2. Add today's date
3. Sign with your name
4. Create the first entry in `Strategic_Decisions_Log.md`:
   ```
   ## [DATE] — Master Blueprint v1.0 Locked
   Decision: Adopted OPC Startup Framework. Master Blueprint v1.0 is authoritative.
   Rejected alternatives: [any positioning options you considered and rejected]
   Files affected: master_blueprint.md (created)
   ```

---

## Phase 4 — Configure Your AI Co-Pilot (15 min)

Pick your tool:

### Option A — Claude Projects (recommended for most)
1. Go to claude.ai → Create new Project
2. Name it "[Business Name] Strategic Co-Pilot"
3. Open `03_AI_System_Prompt.md`. Customize `[BUSINESS NAME]` → your name
4. Paste the customized prompt into Project's "Custom instructions"
5. Upload your filled `02_Master_Blueprint.md` to Project knowledge
6. (Optional) Upload `00_Framework_Reference.md` for deeper context
7. Test: "What layer am I currently working on?" — AI should answer Layer 1 (locked) → Layer 2 (Bridge Work pending)

### Option B — Custom GPT
1. ChatGPT → Explore GPTs → Create
2. Paste customized prompt as instructions
3. Attach blueprint as Knowledge file
4. Save as private GPT

### Option C — Gemini Gem
1. Gemini → Gems → New Gem
2. Paste customized prompt
3. Attach blueprint
4. Test cross-document reasoning

### Option D — NotebookLM (best for research/synthesis)
1. NotebookLM → New notebook
2. Upload `00_Framework_Reference.md` + your blueprint + (optional) industry research docs
3. Use the notebook for ICP research, competitor analysis, content brainstorming
4. Generate Audio Overview to listen during commute

---

## Phase 5 — Start Executing (Layer 2 onwards)

### Bridge Work first
Before Layer 2 starts, complete:
- Proof point validation (Questionnaire G1)
- Diagnostics (G2)
- Resources/tools/hires (G3)

Don't skip. This is where most founders waste 3 months on Layer 5 content for the wrong audience.

### Layer 2 — Positioning & ICP
Use your AI co-pilot to:
- Run Power.ai Prompt 2 (Problem Prioritization) per tier
- Run Power.ai Prompt 6 (Competitor Weakness Map)
- Run Power.ai Prompt 3 (Offer Creation) per tier
- Draft `icp_personas.md` (with first-principle drivers)
- Draft `hero_product_mapping.md`
- Draft `messaging_matrix.md`
- Draft `competitor_mapping.md`

Lock Layer 2 when all 4 docs exist and pass Daily Filter.

### Layer 3 → Layer 7
Same pattern: AI co-pilot helps draft each Layer's deliverables. Lock when complete. Move to next.

**Reference Power.ai 7-prompt mapping**:
- Prompt 1 → Layer 1 (validation)
- Prompts 2 + 3 + 6 → Layer 2 (positioning)
- Prompt 4 → Layer 5 (distribution)
- Prompts 5 + 6 → Layer 6 (channel)
- Prompt 7 → Layer 7 + cross-Layer roadmap

(See your `Reference_Prompts.md` companion doc once you create it.)

---

## Quarterly Maintenance — Golden Triangle Loop

Every quarter, run the 6-phase loop (see `00_Framework_Reference.md` Section 4):

| Phase | Action | Duration |
|-------|--------|----------|
| 1. Listen | Collect Top tier feedback (calls, tickets, forums) | 1 week |
| 2. Map | Map needs to Product Form gaps | 2 hours |
| 3. Prioritize | Rank by WTP × Urgency | 1 hour with founder |
| 4. Ship | Build / write / engineer | Varies |
| 5. Measure | Track reliability + satisfaction + retention | Ongoing |
| 6. Recycle | Convert wins into Layer 5/6 marketing material | 4-8 hours |

Document each quarter's loop in your `OPC_Operating_Model.md` companion doc.

---

## When to amend the Master Blueprint

The blueprint is locked, but lockable doesn't mean immovable. Amend when:

- A pillar collapses under reality (e.g., Pillar 1 Ecosystem turns out to be 2 components, not 3)
- Tier model needs revision (separate crowds → ladder, or vice versa)
- A proof point is invalidated (don't keep it; remove)
- Market shifts (e.g., new competitor changes positioning logic)

To amend:
1. Open `Strategic_Decisions_Log.md`. Append entry with reason.
2. Edit blueprint. Bump version (1.0 → 1.1).
3. Update "Date Locked" header.
4. Re-load blueprint into your AI co-pilot.
5. Notify your team (if any).

Don't amend casually. Frequent amendments = unstable strategy.

---

## Failure modes to watch for

### "I'm doing Layer 5 work but Layer 2 isn't locked"
**Cause**: Tactic addiction. You'd rather write content than face the harder positioning work.
**Fix**: Stop. Return to Layer 2. Lock it. Then Layer 5 has direction.

### "My AI co-pilot keeps suggesting generic tactics"
**Cause**: The blueprint isn't loaded as primary context, or it's too thin.
**Fix**: Re-attach blueprint. Verify your `[FILL: ...]` placeholders are actually filled, not left as placeholders. Make Pillar 5 (Proof Points) more specific.

### "Every tactic is failing the Daily Filter"
**Cause**: Either your tactics are bad OR your Pillars are too narrow.
**Fix**: Review your Pillars. If 80% of your tactical ideas fail the filter, the Pillars may be over-constrained. Consider amending (Strategic Decisions Log).

### "Bridge Work has been pending for 3 months"
**Cause**: Procrastination. Bridge Work is often the hardest because it confronts your unverified claims.
**Fix**: Pick the smallest Bridge Work item. Schedule it for tomorrow. Do it. Repeat.

### "I disagree with my AI co-pilot"
**Cause**: Either AI is wrong or your blueprint is unclear.
**Fix**: If AI cited a specific blueprint section, re-read that section. If you still disagree, you may need to amend the blueprint. AI is reading your stated strategy — if it suggests something you reject, your strategy and your gut are misaligned.

---

## Sharing this framework

This framework is freely shareable. If you find it useful, send the framework folder to other founders / friends. They go through the same Phase 0-5.

Your Master Blueprint is **yours** — don't share that publicly unless you mean to.

If you adapt the framework for client work or workshops, attribution is appreciated.

---

## Companion documents you'll build over time

As your business matures, your strategic stack grows:

| Doc | When to create | Purpose |
|-----|----------------|---------|
| Master Blueprint | Now | WHAT your business is |
| Strategic Decisions Log | Now | Permanent decision history |
| OPC Operating Model | After Layer 2 locks | Quarterly Golden Triangle reviews |
| Hormozi Offer Money Model | After Layer 2 locks | Per-tier offer specs |
| Reference Prompts Library | After Layer 2 locks | Tactical execution toolkit |
| Per-Layer deliverables | As each Layer is worked | Content of each Layer's locked outputs |

---

*How to Use v1.0 — 2026-05-02*
