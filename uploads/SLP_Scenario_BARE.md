# SOUS LE PARASOL — Canvas Build Prompt
## Summer 01 — BARE

> ## ⚠️ READ FIRST — THIS IS A BRIEF, NOT PAGE COPY
>
> **Nothing in this document should be printed on the page unless it is inside a
> `COPY:` block.** Everything else is instruction — describing what to build, what it
> should feel like, and why.
>
> **The page is almost wordless.** The canvas carries no labels, no titles, no captions,
> no play buttons, no section headings. A visitor should be able to spend a minute here
> without being told what any of it is. Every word that survives onto the page has to
> earn its place.
>
> **The explanations belong in the client layer.** The rationale in this document — the
> *why this artwork, why this behaviour* — must not appear on the canvas. Build it as a
> separate, toggleable layer of **numbered technical notes**: small circled numbers `①②③`
> beside each element, hidden by default, opened by a discreet toggle in the corner
> (`notes` / `notes off`). Clicking a number opens a small pop-up with that explanation.
> This is how the client reads the thinking. The public never sees it.

---

## The five summers

Each has a **French word** — taken straight from the packaging lexicon (FROISSÉ · BLANC ·
CRU · VERT · OR · GRAPHIQUE · BLEU · NU · ROUGE · GLACÉ). Three of the summer names are
already in it. This is the spine of the whole design: **the site and the object speak the
same language, and nothing is explained.**

| Keyword | French | The summer it holds |
|---|---|---|
| **bare** | **NU** | Nothing between you and the light. Skin, salt, dried linen. |
| **close** | **FROISSÉ** | The summer indoors. Breath, heat held in a room. |
| **raw** | **CRU** | Volcanic. Black sand, mineral heat, stone that hurts to walk on. |
| **iced** | **GLACÉ** | The shock of cold water. Glass, shade, the held breath under. |
| **shadow** | **OMBRE** | The long end of the day. The parasol, the empty seat. |

---

## The three layers of the canvas

Order is fixed. Everything follows from this.

| Layer | Content | Motion |
|---|---|---|
| **Back** | Roma words, **debossed** into the paper | Almost still — a few px per minute |
| **Middle** | The threads linking each summer's tiles | Fixed. Only opacity changes. |
| **Front** | The tiles | Float, gather, recede |

**The debossed layer — build this first, it sets everything else.** Enormous Roma words,
one per summer, **cropped hard by the edges of the canvas** exactly as the packaging type
is cropped by the curve of the tube. Not printed on the paper — *pressed into it.* Same
tone as the background, readable only as a soft shadow on one edge and a highlight on the
other. Tone on tone. You notice them a second after everything else.

- A single word may be 300–600px tall. Words run off the edge; that is correct.
- They drift far slower than the tiles — an order of magnitude slower.
- **They never sit on top.** Always the bottom layer.
- When a summer is chosen, its word deepens a fraction. As if the paper flexed. Nothing more.

*Technically: type in the background colour with one light and one dark shadow offset a
couple of pixels each way. The packaging trick, done in CSS. Cheap, and it will be the
thing people remember.*

---

## The seven blocks

Every summer is told through the same seven elements, scattered and mixed with the other
summers, joined only by a faint thread. **No fixed order.** They are found, not presented.

| # | Block | What it is |
|---|---|---|
| 1 | **Film** | Moving image. One per summer. Supplied by client. |
| 2 | **Artwork** | A work from the Visual Canon. Public domain. |
| 3 | **Sound** | A blob you press. It plays. Nothing explains it. |
| 4 | **Typography** | A line in Roma, alone on the page. |
| 5 | **Craft** | One object. Images supplied by client. |
| 6 | **Texture** | An interactive surface. Not a photo. |
| 7 | **Invitation** | Leave an email. Nothing else. |

---

# BARE — the seven blocks

---

### 01 — FILM

Supplied by the client. Do not invent content.

| | |
|---|---|
| Loop | 8–15s, seamless |
| Sound | Muted by default |
| **Poster frame** | **Required — one still per film.** The frame the tile holds at rest. |
| Format | MP4 (H.264) + WebM, `playsinline`, on a video CDN |
| Crop | Safe centre — the tile crops to portrait on mobile |

**Behaviour.** Plays **only** while its summer is chosen. All other films hold their poster
frame, frozen.

> **NOTE ① (client pop-up):** Only one film ever plays at a time. This keeps the site fast
> on a phone — and it means the summers you aren't looking at are literally still. The
> constraint and the brand idea point the same way.

---

### 02 — ARTWORK

**Kazimir Malevich — white-on-white.** A pale square on a pale ground, tilted slightly,
visible only because the two whites are not quite the same white. Public domain.

Untitled on the canvas. The credit appears only when the tile is opened.

*Alternate if a photograph is preferred: Karl Blossfeldt — a single stem, structure and
nothing else.*

> **NOTE ② (client pop-up):** The most bare image ever made. Nothing is depicted — what you
> see is the edge between two nearly identical tones. It works exactly the way the debossed
> type on the packaging works: you have to look to find the form at all. It is the artwork
> and the argument.

---

### 03 — SOUND

French, spoken low and close. Two people mid-conversation, New Wave register: overlapping,
unhurried, faintly amused. Not a scene — a fragment with no beginning. Room tone, a fan, a
car outside. It ends without resolving. 10–20s.

**On canvas:** a small soft blob. **No label. No play icon. No waveform.** It swells
slightly as it plays, settles when it stops. Someone has to wonder what it is and press it
to find out. Nothing tells them.

> **NOTE ③ (client pop-up):** Lifting dialogue from an actual New Wave film means clearing
> it with the rights holder — slow, and usually expensive. Recording it gets the same
> texture: two French speakers, one microphone, a hard-surfaced room, no script. Give them
> a situation and let them talk over each other. It's yours outright, and cheaper than the
> clearance letter. Recommended.

---

### 04 — TYPOGRAPHY

One line, set large in **Roma**, alone, no image near it. Ink on paper this time — not
embossed — so it reads as the one thing on the canvas with a voice.

```
COPY:
Nothing between the sun and me.
Not even a name.
```

*Alternates to choose from:*

```
COPY (alt):
The heat had already taken everything I brought.
```
```
COPY (alt):
I left my shape on the sheet and went down to the water.
```

> **NOTE ④ (client pop-up):** Written for the house rather than quoted. Most 20th-century
> verse is still in copyright and would need permission. If a real quotation is wanted, a
> public-domain Sappho fragment — a line broken off mid-thought, missing its ending — is
> more on-brand than any whole poem.

---

### 05 — CRAFT

**Images supplied by the client.** One object, photographed as an object — not on a body,
not on white.

Caption when opened: what it is, who made it. One line. Nothing else.

---

### 06 — TEXTURE — *interactive, not a photograph*

**This block is not an image. It is a surface the visitor can disturb.**

The tile shows a bare, slowly-breathing surface — the weave of sun-dried linen, or a salt
crust, or bleached plaster. It is alive before anyone touches it: a very slow drift, the
kind of movement you only catch if you stare.

**On hover / touch, the surface responds under the cursor.** The visitor is running a hand
across it. Choose one — whichever is most beautiful to build:

- **Grain that parts.** The weave loosens under the cursor and knits back together behind it.
- **Heat.** The surface warms where touched — a slow bloom of light that fades over 2–3 seconds, leaving a trace that lingers after the cursor has gone.
- **Salt.** A fine crust that cracks under the cursor and slowly re-forms.

**Build notes.** Canvas or WebGL, or a CSS displacement — whatever is cheapest that still
feels *material*. It must feel like touching a surface, never like operating a widget.
No instruction, no cursor change, no "try me." The visitor finds it by accident.

**Reduced motion:** falls back to a still surface. No animation, no interaction.

> **NOTE ⑤ (client pop-up):** This is the block that carries the smell. It refuses to
> explain itself and gives the eye somewhere to rest. Making it respond to touch is the one
> place the site lets someone *feel* a material instead of looking at a picture of one —
> and the trace that lingers after the cursor leaves is the brand's whole thesis in
> miniature: what remains after someone has gone.

---

### 07 — INVITATION

**The visitor does not upload anything.** They leave an email. That is all.

A quiet tile — no border, no button styling, just a line and a field on the paper.

```
COPY:
Make the summer last.
```
```
COPY (field placeholder):
your email
```
```
COPY (after submitting):
Sent. Look for it when the light changes.
```

**Behaviour.** One field. No name, no checkbox, no privacy paragraph, no "Subscribe!"
button — pressing return is enough. On success the field itself becomes the confirmation
line; nothing pops up, nothing congratulates anyone.

**Backend.** Posts to a CRM the client can later connect to Shopify.

> **NOTE ⑥ (client pop-up):** The promise is inspiration for a longer summer — images,
> films, fragments in the language of the house. Not a newsletter, not a discount code.
> The form is deliberately barer than any e-commerce signup: one field, no persuasion. A
> brand built on restraint cannot ask twice.

---

## What must NOT appear on the page

- Section headings, block names, or the word "collection"
- Play buttons, waveforms, progress bars, upload icons
- Captions or artist credits at rest — **only on open**
- Any instruction telling someone what to do or how to feel
- Hover tooltips saying "click to play" or similar
- The brand name as a graphic element. It is found within the scene, never placed on it.
