# Sous Le Parasol — Design System

> *Remember the light.*

**Sous Le Parasol** is a niche luxury perfume house framed as "Paris · 1936" — a maison that treats **summer as a cultural ritual, not a season.** It does not describe summer; it constructs the conditions in which summer is felt. The brand operates through **material, light, shade, and restraint** — "the art of disappearing." What is withheld matters as much as what is shown.

The house is **pre-launch**. Its world is built around five **Experiential Summers** ("Summer States"), each a fragrance, a place, and a three-word code:

| Fragrance | Code | Attributes | Place | Spine |
|---|---|---|---|---|
| **Vert Cru** | Le Vert Volcanique | Force · Mineral · Growth | Pantelleria | `--vert` |
| **Bleu Nu** | Le Bleu Sacré | Silence · Horizon · Breath | Patmos | `--bleu` |
| **Blanc Froissé** | Le Blanc Froissé | Skin · Fabric · Intimacy | Comporta | `--blanc` |
| **Rouge Glacé** | Le Rouge Enneigé | Radiance · Tension · Suspension | Saint-Moritz | `--rouge` |
| **L'Or Graphique** | L'Or Graphique | Geometry · Rhythm · Control | Paris | `--or` |

The packaging system is drawn from the parasol itself — **paper (hero), cotton/canvas (the carry), metal (the signature edition), sand (the register)** — and the central gesture: *carry, open, plant, secure.*

## Sources
Derived from four brand presentations (in `uploads/`, by **Charlienumberfive.co** and **andersonbunidesign.com**):
- `Rodri Sous Le Parasol - Packaging 1.pdf` — packaging strategy (paper / metal / cotton / sand system).
- `SLP_Fragrance_Round3.pdf` — fragrance label & foil/emboss spec.
- `Sous Le Parasol 5.0.pdf` — typefaces (Ergon, Roma), Art-Deco seal & monogram, bottle design, "The Light Axis" manifesto.
- `Sous Le Parasol 6.0.pdf` — pre-launch creative strategy, 1930s creative authority, content pillars.

Key visual assets were extracted from these PDFs into `assets/` (bottle renders, packaging, canvas/sand textures, the parasol seal). No external repo or Figma was supplied.

---

## CONTENT FUNDAMENTALS — how the brand writes

The voice is **declarative, withholding, and unhurried.** It observes rather than explains; it trusts the reader's intelligence.

- **Tone:** quiet authority. Cultured, sensorial, a little literary. Never salesy, never excited.
- **Form:** short declarative **fragments**, often without verbs. Silence and white space are valid content. *"Carry, open, plant, secure." · "Light reveals. Shadow protects." · "Remember the light." · "The sun smells green."*
- **Person:** mostly **impersonal / imperative**. Rarely "you," never "I." The brand speaks as a maison, not a salesperson. The customer is addressed obliquely ("an invitation to approach slowly").
- **Casing:** **French sentence case** in prose; **engraved CAPS** with wide tracking for the wordmark, fragrance names, section labels, and CTAs. Em-dashes and the middle dot (·) are used as quiet separators ("Paris · 1936", "Force · Mineral · Growth").
- **Language:** French names and product terms (*Eau de Parfum, flacon, étui, le, la*), English body. Place-names carry weight (Pantelleria, Patmos).
- **No-go's:** no exclamation, no urgency, **no calls to action that beg** ("Buy now!", "Don't miss out"), no questions to the reader, no hype adjectives, no emoji. Engagement is never "hooked."
- **CTAs** are confident and plain: *Discover · Discover the five · Join the waitlist · Add to bag · Enter early.*

Examples of on-brand copy: *"An invitation to approach slowly, to enter early, to learn how to look." · "The object opens only when the light is right." · "Shade became an act of sophistication."*

---

## VISUAL FOUNDATIONS

**Overall:** quiet luxury, Art-Deco–influenced, minimal and elegant. Warm, sun-bleached, tactile. Everything feels like late-afternoon Mediterranean light on natural materials.

- **Colour:** a warm-neutral spine — **sand / pressed-paper / matte warm-white** grounds, **umber / espresso / wood** for ink and depth, **amber glass · champagne · gold-foil** for the product and golden hour. Per-fragrance **colour spines** are muted (volcanic green, sacred blue, fabric white, snow-red, graphic gold) — *never neon*. See `tokens/colors.css`.
- **Type:** display is **Ergon** (Art-Deco engraved serif → substituted with **Marcellus**), almost always CAPS with `0.06em` tracking, used for the wordmark, fragrance names, and titles. A geometric 1920s sans (**Josefin Sans**) carries ruled lockups, eyebrows, and labels at wide tracking (`0.22–0.34em`). Body & UI are **Helvetica** (brand-spec). The logo lifts a small "LE" between the two words. See `tokens/typography.css`.
- **Backgrounds:** warm sand fields and **full-bleed photography**, not gradients. Imagery is the hero. A subtle procedural **sand-paper texture** (`.slp-paper`) may wash paper surfaces. No decorative gradient backgrounds; the only gradients used are **image-protection scrims** (warm dark, low-opacity, directional) over photos for text legibility.
- **Imagery vibe:** **warm** (golden hour), high natural contrast, **deep directional shadows**, partial/cropped framing, amber and cream. Materials shown under raking light. **No faces** — presence is implied through skin, salt, fabric, shadow, silhouette ("Presence without identity"). Product appears in fragments, never frontal catalog reveals.
- **Light & shadow ("The Light Axis"):** the structural axis of the brand. Light reveals, shadow protects. Shadows in UI are therefore **warm-tinted** (umber, not grey), soft, and **long/directional** (`--shadow-cast`) — golden-hour casts, never harsh drop shadows.
- **Animation:** slow and deliberate — the art of disappearing. Fades and gentle **emerge** (translateY up a few px) on the `--ease-emerge` curve; settles with `--ease-quiet`. **No bounce, no spring, no looping decoration.** Durations 160–800ms.
- **Hover:** quiet. Cards **lift** (−3 to −4px) into deeper warm shadow; primary buttons **darken** to umber; links shift from muted to ink. Underlines slide in on `--ease-emerge`.
- **Press / active:** colour deepen (no aggressive shrink). Size selectors fill `--sand-200` with an ink border.
- **Borders:** **hairline engraved rules** (`--border-hairline`, `--border-strong`) — the packaging device of text framed by two fine rules (see `Rule`). Used far more than boxes.
- **Corner radii:** **tight** — the brand is rectilinear/Art-Deco. 2–8px (`--radius-xs … --radius-lg`); pills reserved for toggles and soft tags.
- **Cards:** warm-paper surface, 1px soft border, small radius, soft warm shadow; optional `cast` for a long golden-hour shadow; optional paper texture. They lift, never glow.
- **Transparency & blur:** sparing. The sticky header uses a translucent sand wash + `backdrop-filter: blur` so content passes beneath like light through canvas. Otherwise surfaces are opaque.
- **Layout:** generous margins, centered editorial measure, lots of negative space ("silence as content"). Wordmark centered in the header. 4px spacing grid; `--container` ≈ 1120px.

---

## ICONOGRAPHY

The brand is **near-iconless by design** — restraint is the aesthetic, and silence/negative space do the work that icons do elsewhere. Where marks appear:

- **The parasol seal** (`assets/brand/seal.png`) — an Art-Deco oval monogram (a ringed parasol with rib-rules and opposed triangles), stamped in brown foil on canvas. This is the primary brand mark / emblem. Use it sparingly as a stamp, never as a busy logo.
- **The engraved rule** is the brand's most-used "device": fine hairlines framing tracked deco text (the `Rule` component, the "Paris · 1936" lockup).
- **The colour spine** — a short coloured bar — functions as the per-fragrance identifier across packaging and UI (`Tag spine=…`, `FragranceSpine`).
- **No icon font, no emoji, no unicode dingbats.** The middle dot (·) and em-dash are the only recurring typographic "marks."
- If a UI genuinely needs functional glyphs (cart, search, account in a fuller storefront), use a **thin, single-weight line set** — **Lucide** or **Phosphor (Thin/Light)** at ~1.25px stroke is the closest match to the brand's hairline sensibility. *(Substitution — none was supplied; flag if used.)* In this kit, nav items are set as **tracked deco text** rather than icons, which is the more on-brand default.

---

## Index / Manifest

**Root**
- `styles.css` — the single entry point consumers link (all `@import`s).
- `base.css` — light resets + brand utilities (`.slp-eyebrow`, `.slp-deco`, `.slp-wordmark`, `.slp-rule`, `.slp-paper`).
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill manifest.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`.

**`components/`** (mount via `window.SousLeParasolDesignSystem_f5c8cc`)
- `core/` — **Button, Tag, Card, Rule**
- `forms/` — **Field, Checkbox, Switch**
- `navigation/` — **Tabs**
- `brand/` — **Wordmark, FragranceSpine**

**`ui_kits/maison/`** — editorial storefront (Home · The Five · Fragrance detail · Waitlist). See its `README.md`.

**`guidelines/foundations/`** — specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**`assets/`** — `brand/` (seal, ruled wordmark) and `imagery/` (bottle renders, packaging, textures).

**`templates/`** — starting decks/layouts for consuming projects (`editorial-deck/`).

### Font substitutions (flagged)
The original faces were **not** supplied. Marcellus stands in for **Ergon**, Josefin Sans for the deco geometric sans, and **Helvetica** is referenced as a system face. Replace in `tokens/fonts.css` + `typography.css` when licensed files arrive.
