# VictoryOne Modern

Modern rebuild of the legacy `victoryone.in` WordPress site using Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, typed content modules, validated form APIs, and audit traceability docs.

## Purpose

- Preserve the legacy site’s information architecture and verified content intent.
- Remove duplicated PHP templates, include chains, and raw mail handlers.
- Ship a performant, accessible, conversion-oriented front end with subtle motion and structured data models.
- Keep the codebase ready for future multi-business expansion without inventing missing business facts.

## Stack

- Next.js `16.1.6`
- React `19.2.3`
- TypeScript `5`
- Tailwind CSS `4`
- Framer Motion `12`
- Zod `4`
- React Hook Form `7`
- Vitest `4`
- Playwright `1`

## Architecture Summary

- `src/app`: routes, metadata, sitemap, robots, and API handlers
- `src/components`: UI primitives, layout, motion, shared sections, analytics, and forms
- `src/content`: typed launch data extracted from the audited legacy source
- `src/lib`: validation, analytics, SEO helpers, API helpers, content assertions
- `src/hooks`: parallax, reduced motion, query context, scroll progress
- `docs`: legacy audit ledgers and mapping matrix
- `scripts`: one-shot extraction utility for legacy markers

## Setup

### Prerequisites

- Node.js `>= 20.11.0`
- npm `>= 10`

### Install

```bash
npm install
```

### Environment

Copy `.env.example` and fill what is relevant for your environment:

```bash
copy .env.example .env.local
```

Environment variables:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata and sitemap |
| `MAIL_MODE` | Set to `console` for local development without SMTP |
| `MAIL_FROM` | Outbound email sender |
| `MAIL_TO` | Lead destination inbox |
| `SMTP_HOST` | SMTP host for production delivery |
| `SMTP_PORT` | SMTP port |
| `SMTP_SECURE` | `true` for implicit TLS |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `FORM_RATE_LIMIT_WINDOW_MS` | Rate-limit window |
| `FORM_RATE_LIMIT_MAX` | Max submissions per client within the window |
| `FORM_DUPLICATE_COOLDOWN_MS` | Duplicate submission cooldown |

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
npm run legacy:extract
```

## Content Update Guide

- Update group/business content in [`src/content/businesses.ts`](./src/content/businesses.ts).
- Update project records in [`src/content/projects.ts`](./src/content/projects.ts).
- Update leadership, awards, media, events, testimonials, FAQs, and jobs inside the matching files under `src/content/`.
- Update contact channels, offices, and legal links in [`src/content/settings.ts`](./src/content/settings.ts).
- Do not hardcode business copy inside UI components. Components should stay presentational.

## Legacy Audit Outputs

- [`docs/legacy-intent-ledger.md`](./docs/legacy-intent-ledger.md)
- [`docs/asset-dependency-ledger.md`](./docs/asset-dependency-ledger.md)
- [`docs/query-data-ledger.md`](./docs/query-data-ledger.md)
- [`docs/legacy-mapping-matrix.md`](./docs/legacy-mapping-matrix.md)
- `npm run legacy:extract` generates `docs/legacy-extract.json`

## Forms

- `/api/contact`
- `/api/callback`
- `/api/careers`

All form endpoints:

- validate with Zod on the server
- mirror client-side validation rules
- enforce rate limiting and duplicate cooldown
- run honeypot and simple bot heuristics
- return typed `ApiSuccess` / `ApiFailure` payloads
- log normalized submissions in console mode or email them through SMTP

## Analytics

Analytics events are normalized in [`src/lib/analytics.ts`](./src/lib/analytics.ts).

Tracked events include:

- `page_view`
- `hero_cta_click`
- `business_card_click`
- `project_filter_used`
- `project_detail_view`
- `brochure_click`
- `quick_callback_open`
- `form_start`
- `form_submit_success`
- `form_submit_error`
- `scroll_depth_25`
- `scroll_depth_50`
- `scroll_depth_75`
- `scroll_depth_100`
- `cta_click_by_section`

The utility pushes into `window.dataLayer` when available and safely returns the normalized payload otherwise.

## Accessibility Notes

- Skip link included in the root layout
- Keyboard-safe mobile navigation
- Focus-trapped callback drawer with escape-to-close
- Visible focus states
- `prefers-reduced-motion` support in CSS and the parallax hook
- Form error messaging with live regions

## Performance Notes

- Static prerendering for all content routes and project/business detail routes
- `next/image` for legacy imagery
- Transform-only parallax with `requestAnimationFrame`
- No jQuery, carousel plugins, or duplicated asset bundles
- Route-level metadata, sitemap, robots, and JSON-LD helpers

Performance budget targets:

- Home LCP `<= 2.5s`
- CLS `<= 0.1`
- CSS under `120KB` gzip target
- Initial JS under `220KB` gzip target

## Testing

Unit coverage currently targets:

- validators
- analytics normalization/fallback
- content integrity assertions
- contact API response contract
- query-context parsing

E2E coverage currently targets:

- homepage smoke
- home to contact success
- home to project detail to enquiry
- business context prefill
- mobile sticky callback drawer
- invalid contact form state

## Deployment Notes

- Default local development runs with `MAIL_MODE=console` unless SMTP variables are set.
- Do not deploy without approved legal copy for `/privacy-policy` and `/terms`.
- Remaining launch placeholders are documented in [`docs/query-data-ledger.md`](./docs/query-data-ledger.md).
- Review security headers in [`next.config.ts`](./next.config.ts) before production launch.

## Future Work

- Replace remaining legal placeholders with approved copy.
- Add CRM/webhook connector behind the normalized form payload contract.
- Add localized content modules if multi-language launch is required.
- Expand from single-business launch data to the planned multi-business model when verified content is available.
