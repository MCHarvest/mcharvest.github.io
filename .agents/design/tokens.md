# Design tokens

Declared once on `:root` in `css/shared/main.css`. Reuse these names verbatim.

## Palette: white and silver

| Token | Value | Use |
|---|---|---|
| `--white` | `#ffffff` | Pure surfaces, button text on accent. |
| `--silver-050` | `#f6f8fb` | Lightest tint, table headers. |
| `--silver-100` | `#eef1f6` | Background top. |
| `--silver-200` | `#e2e7ee` | Background mid, neutral badge. |
| `--silver-300` | `#d2d9e3` | Backdrop blobs. |
| `--silver-400` | `#b9c2d0` | Muted fills. |
| `--silver-500` | `#9aa6b8` | Bar starts, dividers, separators. |
| `--silver-600` | `#78859a` | Strong silver. |

## Ink: text

| Token | Value | Use |
|---|---|---|
| `--ink-900` | `#1b2430` | Headings, strong text. |
| `--ink-700` | `#333f4f` | Body text. |
| `--ink-500` | `#5a6676` | Secondary and lead text. |
| `--ink-400` | `#78859a` | Muted captions, eyebrows. |

## Accent and intent

| Token | Value | Use |
|---|---|---|
| `--accent` | `#5b7189` | Cool steel accent. |
| `--accent-strong` | `#3f5872` | Links, emphasis. |
| `--accent-soft` | `rgba(91,113,137,.12)` | Accent chip and active backgrounds. |
| `--sponsor` | `#d6336c` | Donation / call-to-heart accent. |
| `--sponsor-soft` | `rgba(214,51,108,.10)` | Sponsor backgrounds. |
| `--ok` / `--ok-soft` | `#1f7a54` / `rgba(31,122,84,.10)` | Success badges. |
| `--warn` / `--warn-soft` | `#9a6b16` / `rgba(154,107,22,.10)` | Warning badges and callouts. |
| `--danger` / `--danger-soft` | reuse `--sponsor` / `--sponsor-soft` | Danger callouts. |

## Transparent glass surfaces

| Token | Value | Use |
|---|---|---|
| `--glass` | `rgba(255,255,255,.62)` | Default panel and card fill. |
| `--glass-strong` | `rgba(255,255,255,.90)` | Header, buttons, rows inside panels; readable even without blur. |
| `--glass-faint` | `rgba(255,255,255,.40)` | Subtle inset blocks. |
| `--glass-border` | `rgba(255,255,255,.75)` | Highlight border. |
| `--hairline` | `rgba(120,133,154,.28)` | Divider and low-contrast border. |
| `--surface-solid` | `rgba(255,255,255,.98)` | Near-opaque fallback for content-covering overlays. |
| `--blur` | `saturate(160%) blur(14px)` | `backdrop-filter` for glass. |

## Shadows, geometry, type

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(27,36,48,.06), 0 2px 8px rgba(27,36,48,.05)` |
| `--shadow-md` | `0 6px 22px rgba(27,36,48,.10)` |
| `--shadow-lg` | `0 18px 48px rgba(27,36,48,.16)` |
| `--radius-sm` / `--radius` / `--radius-lg` | `10px` / `16px` / `22px` |
| `--maxw` | `1120px` (content max width) |
| `--maxw-narrow` | `880px` (reading pages) |
| `--header-h` | `64px` |
| `--gutter` | `20px`, `16px` below 600px |
| `--ease` | `.18s ease` (all transitions) |
| `--font` | system UI stack (`-apple-system, "Segoe UI", Roboto, ...`) |
| `--mono` | system mono stack (`ui-monospace, "JetBrains Mono", Consolas, ...`) |
