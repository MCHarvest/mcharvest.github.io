# Reusing in another repository

1. Copy `css/shared/`, `css/partial/`, `scripts/partial/` and `partial/` into
   the new repository's site root.
2. Rebrand by editing **tokens only** in `css/shared/main.css` (palette,
   accent, radius, fonts); components inherit automatically. To move off
   silver, adjust the `--silver-*` and `--accent*` tokens and the body
   background gradient; leave the `--glass-*`, shadow and geometry tokens for
   a consistent feel.
3. Edit `partial/header.html` and `partial/footer.html` for the new site's
   navigation and branding (keep the `{{ROOT}}` tokens and `data-section`
   attributes), and the favicon SVG in `scripts/partial/include.js`.
4. Author pages against the shared components; add `css/<section>/<section>.css`
   only when a page needs bespoke layout.
5. Keep it self-contained and accessible ([principles.md](principles.md),
   [accessibility.md](accessibility.md)).
