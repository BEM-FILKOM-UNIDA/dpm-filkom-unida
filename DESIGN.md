# DESIGN.md — DPM FILKOM UNIDA Website

## Direction

- **Theme:** Ink (Hallmark v2), dealt 2/3 for this prompt. Paper, neutral ink, Epilogue, hairline rules, and one teal accent reserved for active states.
- **Idea:** The site is a notice printed by a body that keeps records. It is not a brochure for a council: it is a register of who serves, what the council decides, and the card a student sends in.
- **Audience:** FILKOM UNIDA students with something to raise, and the faculty staff who receive their complaints.
- **Primary action:** Submit a complaint. The action appears in the hero, in the navigation, and at the end of the Profile, Structure, and Documentation pages.
- **Shape:** Marquee Hero (draw `4c3f14`): the statement owns the first screen; everything below it is the record.
- **Navigation:** A floating notice tab with a pill shape and 1px border, sticky at 16px. **Footer:** Index columns.
- **Signature:** The archive plate below the fold on the Home and Structure pages, and the Aspirations Card on the Complaints page, which fills as the visitor types and stamps “SENT.”

## System

- **Typography:** Epilogue 400 / 600 / 700 only. Hero `clamp(3.1rem, 8.2vw, 8.25rem)`; section heading 56px; item title 26px; lead 22px; body 16px at 1.55; label 14px, sentence case, untracked, never monospace.
- **Colour:** `--color-paper` is near-white; `--color-paper-2/3` are used for wells and bands; `--color-ink` and `--color-ink-2` are neutral (zero chroma, waived rule 22); `--color-rule` is used for hairlines. The sole teal accent is `--color-accent: oklch(50% 0.095 188)`, with a soft pair for states. Teal indicates a state, never a field or running text.
- **Surfaces:** Flat paper. Lists and tables begin with a 2px ink rule and continue with hairlines. Wells (the Aspirations Card and archive plates) use a 12px radius and 1px border; controls use a 10px radius. No resting shadow, gradient, or texture.
- **Layout:** One 1440px-max container, 64px gutter, 32px column gap, and a 12-column grid. Headings, body text, and tables start at the container's left edge. A section label sits right-aligned in columns 10–12 on the heading row; on mobile it moves below the heading. Sections have 120px spacing; bands use a 120px gap and a change of paper tone.
- **Photography:** Four archival Bogor images, muted (`saturate .5 contrast 1.04`), in 12px-radius plates with a hairline border. Credits appear in each caption and in the footer.
- **Motion:** State changes only. No reveal effects, marquee, or scroll choreography. `prefers-reduced-motion` reduces the four transitions used for hover, focus, and the stamp.

## Pages

- **Home** — Corridor hero (statement, one sentence, one action); archive plate; about statement, facts, and six principles; three functions as rows with plates; a ruled table of the three commissions; FAQ in two ruled columns; dark contact band; footer.
- **Profile** — Banner heading; history and archive plate; vision statement beside the mission register; numbered list of duties; dark call to action.
- **Structure** — Banner heading; full-width archive plate; leadership register (roles left, names right); three commission rows with anchors; dark call to action.
- **Complaints** — Banner heading; form (6 columns) beside the sticky Aspirations Card (5 columns); complaint process as numbered steps; Google Form note.
- **Documentation** — Ruled table of four document types with “pending” status; action row; call-to-action band.

## Checks

- Sweep: `node <skill-dir>/scripts/sloplint.mjs src --genre editorial --render --url <route> … --kept`.
  Last recorded run: **0 FAIL · 0 REFLEX · 2 WARN (rule 77, the two three-section utility pages) · 8 NOTE (rule 58)**; retained 17/17 links, 4/4 fields, 24/27 headings (3 in the record), and 1/1 figures.
- `npm run build` is the release check.
- The Complaints form composes a WhatsApp message and stores no data; its handlers, IDs, and WhatsApp handoff remain unchanged from the previous build.

## Before launch

- Replace `site.waNumber`, `site.gformUrl`, Instagram/email details, all names, `[Year]`, and `[Member Name]` in `src/data/site.js`. Do not change the layouts.
- The `[Year]` fact and placeholder names are visible on the Home and Structure pages; they are owner-provided content retained as found.
- Copy changes in this redesign were shortened from existing page content: the hero supporting line is now more concise; the deck instruction and commission-count sticker were removed (the count remains in the About section); Instagram and email details now appear in a dedicated footer column instead of a single joined line.
