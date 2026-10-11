# Principles

1. **Self-contained.** No external fonts, scripts, stylesheets, CDNs or runtime
   network calls. Everything ships in-repo; inline small assets (icons,
   favicon) as data URIs or inline SVG.
2. **Token-driven.** All color, spacing, radius and shadow decisions come from
   CSS custom properties ([tokens.md](tokens.md)). Never hard-code a hex value
   in a component.
3. **Layered CSS.** Root tokens, then shared layout, then partial chrome, then
   shared components, then per-section overrides. A page pulls in exactly those
   layers plus its own ([files.md](files.md)).
4. **Progressive and accessible.** Semantic HTML first, native elements where
   possible (`<details>` for accordions), visible focus states, sufficient
   contrast, responsive down to about 360px
   ([accessibility.md](accessibility.md)).
5. **Runtime-composed chrome.** Header and footer are shared partials injected
   client-side, so navigation lives in one file and every page stays in sync
   ([includes.md](includes.md)).
