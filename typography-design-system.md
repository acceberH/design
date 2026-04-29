# Typography Design System

> Portfolio case study — type tokens only. Last updated April 2026.

---

## Type Scale

7 sizes. Do not add new sizes — if something doesn't fit, use the closest existing token and adjust weight or color instead.

| Token | Size | Weight | Line Height | Tracking | Tailwind |
|---|---|---|---|---|---|
| `hero` | 48px | 500 | 1 | -0.02em | `text-[48px] font-medium tracking-tight` |
| `display` | 42px | 500 | 1 | -0.02em | `text-[42px] font-medium tracking-tight` |
| `heading-1` | 28px | 500 | 1.2 | -0.01em | `text-[28px] font-medium` |
| `heading-2` | 20px | 500 | 1.3 | 0 | `text-[20px] font-medium` |
| `body` | 16px | 400 | 1.7 | 0 | `text-base font-normal leading-relaxed` |
| `meta` | 13px | 400 | 1.5 | 0 | `text-[13px] font-normal` |
| `caption` | 11px | 400–500 | 1.4 | 0 | `text-[11px]` |

### What got merged

- `32px` callout + `28px` H2 → both use `heading-1` (28px), distinguish with color if needed
- `14px` tags + `13px` annotations + `12px` version labels → all use `meta` (13px)
- `11px` eyebrow + `10px` version arrows → all use `caption` (11px)

---

## Eyebrow

One style only. Never use H3 or different colors for section labels.

```
font-size: 11px
font-weight: 500
letter-spacing: 0.1em
text-transform: uppercase
color: #2D7D7D
```

**Tailwind:** `text-[11px] font-medium tracking-widest uppercase text-[#2D7D7D]`

Used for: `USER RESEARCH`, `DESIGN PROCESS`, `FINAL DESIGN`, `CONTEXT`, `REFLECTION`

---

## Weights

Two weights only.

| Weight | Usage |
|---|---|
| 400 regular | Body, meta, caption |
| 500 medium | All headings, eyebrow, display stats |

Do not use 600 (semibold) or 700 (bold) anywhere.

---

## Impact Numbers

Two types. Never swap their colors.

### Large stats (TL;DR, hero metrics)
Standalone numbers that summarize outcomes. Always color-neutral.

```
token: display (42px / 500)
color: text-gray-900
```

**Tailwind:** `text-[42px] font-medium text-gray-900`

Examples: `0→1`, `3×`, `70%`

### Delta indicators (inline feature impact)
Numbers with ↑↓ arrows inside body content. Use semantic green to signal improvement.

```
token: meta (13px / 500)
color: rgb(22, 163, 74)  /* green-600 */
```

**Tailwind:** `text-[13px] font-medium text-green-600`

Examples: `↓ 40%`, `↑ 25%`

---

## Semantic Colors

### Green (positive / improvement)

One shade only across the entire page.

```
green-600: rgb(22, 163, 74)
```

Used for: delta indicators, pro/con checkmarks, key insight highlights

Retire: `emerald-300` (#6EE7B7), `emerald-500` (#10B981) — do not use these.

### Red (problem / friction)

```
red-500: rgb(239, 68, 68)
```

Used for: pro/con cross marks, error states

---

## Heading Hierarchy

```
eyebrow       11px / teal        ← "DESIGN PROCESS"
heading-1     28px / gray-900    ← "From brief to live ad in 5 minutes"
heading-2     20px / gray-900    ← "Instant Ad feature"
body          16px / gray-700    ← paragraph text
meta          13px / gray-500    ← "12 interviews · Sep 2024"
caption       11px / gray-400    ← "Version 2 of 3"
```

H2 and H3 tags in HTML should map to `heading-1` and `heading-2` respectively. Never use H3 for eyebrow labels — use a `<p>` with the eyebrow class.

---

## What Not To Do

- No 3 different eyebrow styles in the same page
- No `32px` one-off size for callouts — use `heading-1` (28px)
- No green-600 for large hero stats — those stay gray-900
- No emerald-300 highlights — use green-600 consistently
- No font-weight 600 or 700 anywhere
