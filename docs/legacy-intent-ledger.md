# Legacy Intent Ledger

Generated rebuild target: `src/app` routes and typed `src/content` modules.  
Supporting exact marker extraction: run `npm run legacy:extract` to refresh [`docs/legacy-extract.json`](./legacy-extract.json).

| Legacy file | Legacy intent | Data source | Technical debt observed | Modern replacement |
| --- | --- | --- | --- | --- |
| `functions.php` | Theme setup, menus, thumbnail support, enqueued assets | WordPress theme bootstrap | Mixed asset responsibilities and legacy enqueue sprawl | Centralized Next app shell, route metadata, typed content, CSS variables |
| `header.php` | Base shell plus theme include handoff | Hardcoded theme include | Header shell delegated into duplicate include chain | Single [`src/app/layout.tsx`](../src/app/layout.tsx) |
| `footer.php` | Footer shell and script handoff | Hardcoded theme include | Footer/script duplication through include stack | Shared [`SiteFooter`](../src/components/layout/SiteFooter.tsx) and app layout |
| `assets/include/header.php` | Hardcoded nav, office data, social links | Inline strings | Navigation and contact data duplicated outside WP admin | Typed `globalSettings` and shared [`SiteHeader`](../src/components/layout/SiteHeader.tsx) |
| `assets/include/style.php` | Theme CSS bundle injection | Local CSS files | Duplicate asset trees and plugin-era CSS loading | Tailwind 4 + CSS token layer |
| `assets/include/script.php` | Theme JS bundle injection and AJAX form hook | Local JS files + `/process.php` | Duplicate plugins, direct DOM scripting, legacy AJAX | Typed React components and API routes |
| `hometamplate.php` | Home hero, projects, stats, testimonials, CTA | Pages, categories, ACF, hardcoded copy | Duplicate document shell, category coupling, slider/plugin bloat | [`src/app/page.tsx`](../src/app/page.tsx) and home section components |
| `projectamaratamplate.php` | Amara residential detail, downloads, gallery, updates | ACF fields, uploads, static links | Large monolith template, inline asset assumptions | [`src/app/projects/[slug]/page.tsx`](../src/app/projects/[slug]/page.tsx) using `projects.ts` |
| `project-centraltamplate.php` | Central residential detail | ACF fields, uploads, static links | Same structural duplication as Amara | Shared project detail route with typed record |
| `Past-project-tamplate.php` | Delivered archive of historical work | Hardcoded project cards/images | Content trapped in template HTML | Past-project dataset inside [`projects.ts`](../src/content/projects.ts) |
| `awardtamplate.php` | Award listing | Category `2` posts/media | Category ID coupling and slider/grid plugin dependency | [`/awards`](../src/app/awards/page.tsx) + [`AwardsGrid`](../src/components/sections/shared/AwardsGrid.tsx) |
| `Eventtamplate.php` | Event gallery | Category `5` posts/media | Gallery-only dead end and plugin dependency | [`/events`](../src/app/events/page.tsx) + timeline cards |
| `Contacttamplate.php` | Contact details, office maps, enquiry form | Hardcoded office strings + `/process.php` | Weak validation and insecure mail handler pattern | [`/contact`](../src/app/contact/page.tsx) + typed API endpoints |
| `career.php` | Job board rendering | Legacy job plugin / inline role data | Unstructured job content and mail dependency | [`/careers`](../src/app/careers/page.tsx) + [`jobs.ts`](../src/content/jobs.ts) |
| `faqtamplate.php` | FAQ accordions | Inline FAQ content | Content trapped in template markup | [`/faq`](../src/app/faq/page.tsx) + [`faqs.ts`](../src/content/faqs.ts) |
| `Teamtamplate.php` | Team and expert group view | Static content | No reusable card model | [`/leadership`](../src/app/leadership/page.tsx) + [`TeamGrid`](../src/components/sections/shared/TeamGrid.tsx) |
| `message-form-chairmantamplate.php` | Chairman profile/message | Static text + image | Isolated template and duplicated shell | Leadership route chairman section |
| `Mdintriviewstamplate.php` | MD interview/video | YouTube embed + static copy | Separate template for related trust content | Leadership route MD perspective section |
| `Newspapapertamplate.php` | Newspaper/media archive | Category `4` posts/media | Dead-end media gallery | [`/media`](../src/app/media/page.tsx) + [`MediaGrid`](../src/components/sections/shared/MediaGrid.tsx) |
| `single.php` | Generic post rendering | Post content | Legacy theme single-post fallback with minimal structure | Structured detail routes; no untyped generic post route at launch |
| `central-commercialtamplate.php` | Central commercial detail | Category `7`, static images, price list | Static gallery and page-specific layout debt | Shared project detail route for `victoryone-central-commercial` |
| `amara-comercialtamplate.php` | Amara commercial detail | Category `6`, static images, brochure | Same monolithic layout debt | Shared project detail route for `victoryone-amara-commercial` |
| `process.php` (root) | Mail submission endpoint | Raw `$_POST` payloads | Limited validation, no rate limiting, no structured response | `/api/contact`, `/api/callback`, `/api/careers` |
| `process.php` (theme copy) | Dead copy of mail handler | N/A | Starts with early `die;`, effectively broken | Removed from runtime path in the rebuild |

## Debt Summary

- Duplicate HTML wrappers existed across several templates after `get_header()`, which created invalid nested shells.
- Navigation, office contact data, and social links were hardcoded in include files rather than centralized.
- Awards, media, events, and commercial sections were coupled to numeric category IDs.
- The mail flow used raw PHP endpoints with limited abuse protection and no consistent error schema.
- CSS and JS loading relied on duplicated asset trees and a large plugin-era dependency stack.
