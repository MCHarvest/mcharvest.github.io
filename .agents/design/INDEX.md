# Design System: Silver Glass

A universal, dependency-free design system for static documentation sites.
It is project-agnostic: drop it (and the CSS/JS it describes) into any
repository to get a consistent, modern look. These files are the source of
truth for the visual language; individual sites add only their own content and
per-section styles.

**Aesthetic:** white, silver and transparent. A light glassmorphism surface
treatment with translucent panels, hairline borders, soft shadows and a subtle
silver gradient backdrop. Calm, airy and neutral so it fits any brand.

In this repository the site lives in `docs/` (served by GitHub Pages from the
`/docs` folder). Paths in these files are relative to `docs/`.

## Files

| Scope | File |
|---|---|
| Principles | [principles.md](principles.md) |
| Design tokens | [tokens.md](tokens.md) |
| Page backdrop | [backdrop.md](backdrop.md) |
| Glass surfaces and overlays | [glass.md](glass.md) |
| Typography, eyebrow, lead | [typography.md](typography.md) |
| Container, page, section stylesheets | [layout.md](layout.md) |
| Header and navigation | [nav.md](nav.md) |
| Footer | [footer.md](footer.md) |
| Scrolling | [scroll.md](scroll.md) |
| Runtime header/footer include | [includes.md](includes.md) |
| File organization | [files.md](files.md) |
| Hero banner | [hero.md](hero.md) |
| Panel and section | [panel.md](panel.md) |
| Card grid | [cards.md](cards.md) |
| Feature list | [feature-list.md](feature-list.md) |
| Accordion | [accordion.md](accordion.md) |
| Code | [code.md](code.md) |
| Table | [table.md](table.md) |
| Badge and chip | [badge.md](badge.md) |
| Button | [button.md](button.md) |
| Callout | [callout.md](callout.md) |
| Definition list | [deflist.md](deflist.md) |
| Breadcrumbs | [breadcrumbs.md](breadcrumbs.md) |
| Accessibility checklist | [accessibility.md](accessibility.md) |
| Reusing in another repository | [reuse.md](reuse.md) |

Prefer composing the shared components over new CSS. Add a per-section
stylesheet only for genuinely page-specific layouts.
