# DESIGN.md - Situs Profil DPM FILKOM UNIDA

## Arah
- Direction: **The printed annual** (`editorial-report`), seed `830292312`.
- Idea: a student council’s annual report, printed in Bogor. The page argues that representation is archival work: it records, reads, and carries forward what students say.
- Audience: FILKOM UNIDA students, and the faculty staff who receive their complaints.
- Mood: official and direct, warm rather than stiff. The archive does the warmth; the type and rules do the authority.
- Nearest competitor test: the Bogor archive, the annual masthead, and the Kartu Aspirasi would not transfer to a generic campus site.
- Live thing: the **Kartu Aspirasi** on `/aduan/`. It updates name, NIM, category, message, and date as the visitor types, then stamps `TERKIRIM`.
- Signature move: the pinned commission deck on the home page. Spines become a live card, then give way to the next. It is a card index, not a carousel.

## Sistem
- Type: **Young Serif** for display, **Source Serif 4** for text. Seven rendered sizes: 13 / 16 / 21 / 28 / 60 / 135 / 141px at 1440. Body 21/1.55, lead 28, display 141. No uppercase labels, monospace labels, or numbered indices.
- Axis: `1fr 2fr` (about 34/66), outer margin `clamp(20px, 2.4vw, 32px)`. The same two or three left edges repeat across pages. On mobile the axis stacks, but the reading order and line breaks are composed separately.
- Colour: teal field `#16526b` and paper `#f7f8f9` carry the surface; ink `#0c1d22` and muted `#55676d` carry text; logo orange `#f09a4b` is the only accent. One accent on the action, one full orange field on the Dokumentasi archive. The `palette-terracotta` allowance is the logo orange, not a second accent.
- Surfaces: flat paper and teal fields; no resting shadow, no gradient, no pill. Radius 0. Hairlines are structural rules, not decoration.
- Images: four real Bogor archive photographs, used as historical ground, not stock. Ratios vary by role (2.4/1 bands, 4/5 feature, 3/2, 1/1), but each crop is chosen for its object. The archive is credited in every caption and in the footer.
- Motion: masked hero title, `[data-reveal]` on entry, 18s hero photograph drift, and the pinned commission deck. The deck is CSS/JS, not a dealt scene; `scenes.mjs` was not used. With `prefers-reduced-motion`, the deck unpins into three side-by-side cards, reveals are visible, and the hero stops. Without JS, all three cards and reveals are visible.
- No footage exists in the material. The archive is stills only; a stock clip would misrepresent DPM’s work.

## Halaman
- **Beranda**: split masthead `Suara Mahasiswa`; about facts; three role rows; three-photo feature field; pinned commission deck; contact; FAQ; full-width footer wordmark.
- **Profil**: history statement, full-width archive band, visi/misi, role list, CTA to Aduan.
- **Struktur**: full-width archive band, leadership register, three commission rows, teal CTA. The register uses role left, name right, with a shared baseline.
- **Aduan**: form plus live Kartu Aspirasi, WhatsApp primary, Google Form fallback, no submission storage.
- **Dokumentasi**: archive ledger of categories and status, full-width rows, action row to Aduan. No invented documents.

## Pemeriksaan
Run from `dist/` with a relative target and an absolute `--out`. Allowances are comma-separated.

| Page | Desktop / tablet / mobile screens | FAIL | WARN |
|---|---|---|---|
| `/` | 9 / 9 / 10 | 0 | `no-footage` |
| `/profil/` | 6 / 4 / 5 | 0 | `no-footage`, `still-page` |
| `/struktur/` | 6 / 4 / 5 | 0 | `no-footage`, `still-page` |
| `/aduan/` | 4 / 3 / 4 | 0 | `no-footage`, `still-page` |
| `/dokumentasi/` | 4 / 3 / 3 | 0 | `no-footage`, `still-page` |

- Home: `--allow palette-terracotta`.
- Subpages: `--allow palette-terracotta,few-pictures`.
- The gate reports and screenshots are in `.taste-skill/after-*`.
- The Aduan fold at 1440 shows the form title at y=787, the name label at y=842, and the name input at y=858-900. At 390 the label starts at y=676 and the input follows.
- Reduced motion tested at 1440 and 390: three cards visible, no clipped card content, no hidden reveals, no horizontal overflow.
- Unused campus photo and its `assets/credits.json` entry were removed. The four used pictures are:
  - *Grote vijver achter het paleis*, Woodbury & Page, CC BY 4.0, via Wikimedia Commons.
  - *Gezicht op Tjileboet*, Rijksmuseum, CC0, via Wikimedia Commons.
  - *Buitenzorg Chinese Quarter*, Ned-Ind. Publiciteitsbureau N.V., CC BY 4.0, via Wikimedia Commons.
  - *Uitzicht achter Hotel Bellevue*, Woodbury & Page, CC BY 4.0, via Wikimedia Commons.

## Kritik
ROUND 3
Seen in one second: a student council’s printed annual, `Suara Mahasiswa` beside an old Bogor photograph.
Idea (one sentence): representation is archival work, so the site reads the present against the Bogor archive and gives the visitor a card to send.
Live thing: the Kartu Aspirasi preview and the `wa.me` handoff on `/aduan/`.
Layout words by section: hero=split masthead / about=split facts / features=colour field with picture rows / deck=card index / contact=split / FAQ=columns / footer=full-width wordmark.
Scores: design 8.0 · usability 8.5 · creativity 7.5 · content 5.0 → overall 7.8.
Subpages: design 6.5 (cap) · usability 8.0 · creativity 7.5 · content 5.0 → overall 7.0.
Caps applied: content ≤5 on every page (bracket names, `[Tahun]`, dummy WA, empty GForm/Instagram/email); subpage design ≤6.5 (fewer than four real pictures); subpage design also ≤7 (`still-page`). Home has six image elements (four distinct archive photographs plus repeats and the logo) and motion 16, so no design cap there.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. `[Nama Ketua]`, `[Nama Anggota]`, and `[Tahun]` are visible placeholders in `after-struktur/desktop-page-01.jpg` and `after-home/desktop-page-01.jpg`. Fix: the owner supplies the real names, founding year, WhatsApp number, and Google Form URL. Until then the content score stays at 5.
2. The subpages have one or two archive pictures, and Dokumentasi has none: `after-profil/desktop-page-01.jpg`, `after-dokumentasi/desktop-page-01.jpg`. Fix: add two or three real DPM photographs (meeting, work session, archive wall) with honest credits; do not add stock. Until then the design cap is 6.5.
3. There is no footage anywhere: `after-home/desktop-page-02.jpg` shows the deck and contact, not a moving record. Fix: one honest 6-10 second clip of an actual DPM session when it exists. No stock clip. This remains a defended `no-footage` WARN.
- Prior round fixed: the Struktur leadership register was lopsided (role left, name floating right); it now shares one baseline in `after-struktur/desktop-page-01.jpg`. The Aduan form title and first input were below the fold; `page-head-tight` brings them in at 1440 and 390. The Dokumentasi body-size sample was dominated by 13px footer and note text; both are 1rem now.
- What still falls short: the subpage image floor and the placeholder content are material constraints, not composition fixes. The deck’s centre is deliberately airy because it is a physical card; the home hero’s left rest is deliberate. The mobile nav’s final Aduan item wraps to a second row at 390; accepted as a visible, reachable action.

## Sebelum terbit
- Replace `site.waNumber`, `site.gformUrl`, Instagram/email if available, all names, `[Tahun]`, and `[Nama Anggota]` in `src/data/site.js`. Do not edit page layouts.
- Verify the real committee structure, founding year, archive captions, and the licence/credit lines against the source records.
- The site stores no complaint data. The Aduan form only composes a WhatsApp message; the Google Form remains the fallback.
- `npm run build` is the release check. The final gate was run from `dist/`; the redesign is uncommitted until the owner asks for a commit.
