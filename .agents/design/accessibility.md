# Accessibility checklist

* Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) and heading
  order (one `<h1>` per page).
* A skip link (`.skip-link`, first element in `<body>`) to `#main`.
* Visible `:focus-visible` outline (in `css/shared/main.css`).
* `aria-label` on nav and breadcrumb regions; decorative icons
  `aria-hidden="true"`.
* Contrast: body ink on glass over the silver field meets WCAG AA. Do not put
  body text directly on the `--glass-faint` tier without checking contrast.
* All interactive controls reachable and operable by keyboard: the accordion is
  native `<details>`, the dropdown opens on `focus-within`, the mobile menu is a
  real `<button>` with `aria-expanded`, and Escape closes open menus.
* Smooth scrolling respects `prefers-reduced-motion`.
