# Legacy to Modern Mapping Matrix

| Legacy template / route intent | Modern route | New components | Removed dependencies | Preserved intent |
| --- | --- | --- | --- | --- |
| `hometamplate.php` / `/home` | `/` | `Hero`, `BusinessGrid`, `FeaturedProjects`, `StatsBand`, `TrustBand`, `LeadershipPreview`, `TestimonialsSection`, `FinalCTA` | jQuery sliders, duplicate header/footer includes | Home value proposition, trust stats, testimonial proof, CTA |
| `introductiontamplate.php` | `/about` | `RouteHero`, about narrative sections, `FAQAccordion`, `ContextualCTA` | Duplicated template shell | Mission, vision, values, CSR |
| `Teamtamplate.php` + `message-form-chairmantamplate.php` + `Mdintriviewstamplate.php` | `/leadership` | `RouteHero`, chairman panel, MD video panel, `TeamGrid`, timeline cards | Separate trust templates and duplicate wrappers | Leadership visibility and trust transfer |
| `projectamaratamplate.php` | `/projects/victoryone-amara` | Shared project detail route | Slider/plugin stack | Brochure, price list, gallery, enquiry |
| `project-centraltamplate.php` | `/projects/victoryone-central` | Shared project detail route | Slider/plugin stack | Brochure, price list, gallery, enquiry |
| `central-commercialtamplate.php` | `/projects/victoryone-central-commercial` | Shared project detail route | Static gallery markup | Commercial floor plans and price list |
| `amara-comercialtamplate.php` | `/projects/victoryone-amara-commercial` | Shared project detail route | Static gallery markup | Commercial gallery and brochure |
| `Past-project-tamplate.php` | `/projects?status=completed` conceptual mapping | `ProjectExplorer` | Hardcoded HTML project list | Delivered portfolio visibility |
| `awardtamplate.php` | `/awards` | `AwardsGrid`, `ContextualCTA` | Category-grid plugin markup | Recognition archive |
| `Newspapapertamplate.php` | `/media` | `MediaGrid`, `ContextualCTA` | Category-grid plugin markup | Newspaper and press proof |
| `Eventtamplate.php` | `/events` | `EventTimeline`, `ContextualCTA` | Event gallery plugin markup | Event archive and trust story |
| `career.php` | `/careers` | job cards, `CareerForm` | Plugin-generated mail flow | Openings, requirements, application path |
| `faqtamplate.php` | `/faq` | `FAQAccordion` | Inline accordion JS | Objection handling near conversion |
| `Contacttamplate.php` | `/contact` | `EnquiryForm`, `CallbackForm`, office map cards | Raw PHP mail handler | Contact channels, office maps, enquiry |
| Legacy legal/footer fragments | `/privacy-policy`, `/terms` | Placeholder-first legal pages | Scattered footer-only legal references | Legal route readiness without invented copy |

## Legacy redirects implemented in `next.config.ts`

- `/home` -> `/`
- `/award` -> `/awards`
- `/newspaper` -> `/media`
- `/event-2` -> `/events`
- `/contact-us` -> `/contact`
- `/career` -> `/careers`
- `/project-amara` -> `/projects/victoryone-amara`
- `/project-central` -> `/projects/victoryone-central`
- `/central-comercial` -> `/projects/victoryone-central-commercial`
- `/amara-commercial` -> `/projects/victoryone-amara-commercial`
- `/past-project` -> `/projects?collection=past`
