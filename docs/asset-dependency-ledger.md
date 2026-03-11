# Asset Dependency Ledger

| Legacy asset / dependency | Loaded from | Legacy purpose | Decision in rebuild |
| --- | --- | --- | --- |
| `bootstrap.css` / `bootstrap.js` | `assets/include/style.php`, `assets/include/script.php` | Layout grid, carousel scaffolding, utility styles | Removed. Replaced by Tailwind 4 utilities and typed components. |
| `slick` / `owl-carousel` | Legacy include stack | Hero/project/testimonial sliders | Removed. Replaced by static card layouts and motion primitives. |
| `jquery` | Legacy include stack | DOM manipulation and AJAX form submit | Removed. Native React state + fetch. |
| `fancybox` | Legacy include stack | Image modal/gallery behavior | Removed. Replaced by optimized image cards with progressive disclosure. |
| `wow.js` / animation plugins | Legacy include stack | Scroll reveal effects | Removed. Replaced by Framer Motion + lightweight reveal wrapper. |
| Fixed background pseudo-parallax | Template/background CSS | Simulated depth on hero and banners | Replaced by `useParallax` transform-only layers with reduced-motion support. |
| Theme images in `assets/images` | Templates and CSS | Brand, project, and environment imagery | Preserved under `public/legacy/theme-images` and consumed via `next/image`. |
| Uploads in `wp-content/uploads` | Template galleries and awards/media cards | Proof imagery and brochure PDFs | Preserved under `public/legacy/uploads/*` and mapped from typed content. |
| Root `/process.php` | Contact scripts | Mail submission target | Removed from active runtime. Replaced by typed Next API routes. |
| Theme `/process.php` dead copy | Theme root | Duplicate endpoint | Removed from active runtime; documented as dead path. |

## Modern Asset Rules

- All launch imagery referenced by the app is served from `public/legacy/**` or future `public/placeholders/**`.
- All new UI styling lives in [`src/app/globals.css`](../src/app/globals.css) and [`src/styles/tokens.css`](../src/styles/tokens.css).
- Interactive behavior is limited to React, Framer Motion, and small utility hooks. No jQuery/plugin layer remains.
