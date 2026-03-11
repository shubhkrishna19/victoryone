# Query and Data Ledger

## Legacy category usage

| Category ID | Legacy label | Modern target |
| --- | --- | --- |
| `2` | Award | [`src/content/awards.ts`](../src/content/awards.ts) |
| `3` | Testmonial | [`src/content/testimonials.ts`](../src/content/testimonials.ts) |
| `4` | newspaper-cate | [`src/content/media.ts`](../src/content/media.ts) |
| `5` | Event | [`src/content/events.ts`](../src/content/events.ts) |
| `6` | Amara Commercial | `victoryone-amara-commercial` record in [`projects.ts`](../src/content/projects.ts) |
| `7` | central-commercial | `victoryone-central-commercial` record in [`projects.ts`](../src/content/projects.ts) |

## Verified legacy content sources mapped into typed models

| Content area | Legacy source | Modern file |
| --- | --- | --- |
| Group overview / about narrative | Introduction template + home copy | [`site.ts`](../src/content/site.ts) |
| Business entity | VictoryOne group audited content | [`businesses.ts`](../src/content/businesses.ts) |
| Current residential and commercial projects | Amara, Central, Central Commercial, Amara Commercial templates | [`projects.ts`](../src/content/projects.ts) |
| Delivered archive | `Past-project-tamplate.php` | [`projects.ts`](../src/content/projects.ts) |
| Leadership | Chairman message, MD interview, team templates | [`leadership.ts`](../src/content/leadership.ts) |
| Awards | Category `2` archive | [`awards.ts`](../src/content/awards.ts) |
| Media | Category `4` archive + cover story references | [`media.ts`](../src/content/media.ts) |
| Events | Category `5` archive | [`events.ts`](../src/content/events.ts) |
| Testimonials | Category `3` archive | [`testimonials.ts`](../src/content/testimonials.ts) |
| FAQs | FAQ template | [`faqs.ts`](../src/content/faqs.ts) |
| Careers | Legacy job board content | [`jobs.ts`](../src/content/jobs.ts) |
| Office/contact/legal shell | Contact template + audited office strings | [`settings.ts`](../src/content/settings.ts) |

## Forms and endpoints

| Legacy behavior | Modern replacement |
| --- | --- |
| Front-end JS posted raw form data to `/process.php` | `fetch()` posts typed payloads to `/api/contact`, `/api/callback`, `/api/careers` |
| No consistent response shape | Shared `ApiSuccess` / `ApiFailure` contract in [`forms.ts`](../src/types/forms.ts) |
| Limited validation | Mirrored Zod validation on client and server |
| No rate limiting or duplicate cooldown | In-memory IP/user-agent window + duplicate signature throttling in [`api.ts`](../src/lib/api.ts) |
| No honeypot/bot heuristics | Honeypot and basic message-link heuristics in [`api.ts`](../src/lib/api.ts) |

## Known unresolved placeholders

- `[CONTACT_RESPONSE_TIME_PROMISE]`
- `[PRIVACY_ONE_LINER]`
- All privacy-policy section tokens
- All terms section tokens
