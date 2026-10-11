# Typography

* Font: `--font` (system UI stack); code uses `--mono`. No web fonts.
* Body: 16px, line-height 1.65, color `--ink-700`.
* Headings: color `--ink-900`, line-height 1.25, slight negative tracking.
  * `h1`: `clamp(2rem, 1.4rem + 2.6vw, 3rem)`, weight 750. One per page.
  * `h2`: `clamp(1.45rem, 1.2rem + 1vw, 1.9rem)`, weight 700.
  * `h3`: `1.15rem`, weight 650.
* Links: `--accent-strong`, underline offset 3px, hover to `--ink-900`.
* `strong`: `--ink-900`, weight 650.

## Eyebrow and lead

| Class | Use |
|---|---|
| `.eyebrow` | Section kicker above a heading. Uppercase, `.78rem`, tracking `.12em`, `--ink-400`. |
| `.lead` | Intro paragraph. `1.12rem`, `--ink-500`, max 62ch. |

Defined in `css/shared/components.css`.
