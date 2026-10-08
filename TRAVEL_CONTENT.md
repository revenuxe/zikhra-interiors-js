# Travel content conversion

The site now uses **Zikhra Tours & Travels**, with Umrah, family and group Umrah, private itineraries, Ramadan enquiries, Hajj enquiries, visa assistance, transfers, ziyarat, and Muslim-friendly holidays.

The existing CSS, responsive layouts, section order, navigation structure, and enquiry submission flow are retained. The existing Zikhra wordmark has a travel descriptor. Interior photography is replaced with locally stored destination photographs; sources are recorded in [image credits](public/travel/credits.md).

Public route names now use `journeys`, `destinations`, `packages`, and `travel-package-guide`. Old interior service and gallery URLs redirect to their travel equivalents. Sitemaps, canonical links, social previews, and structured data use the travel content. The business schema is `TravelAgency`.

Services are shared between the index, detail pages, and homepage cards. Enquiries retain the database field `project_type` for compatibility; its form label now asks for the journey type. No database migration is needed.

Package prices are requested by quotation. Itineraries are illustrative, and Hajj content is enquiry-based, subject to official availability and authorised arrangements. The old reviews, awards, warranty claims, and supplier affiliations are replaced with travel information.

The original telephone, email, locality, and opening hours are retained. Confirm these business details and supply verified travel social profiles, actual departure dates, prices, and provider arrangements before publishing. Social icon positions currently lead to the contact page.

Validation uses TypeScript, a production build, rendered-page and link checks, desktop/mobile checks, and intercepted form submissions. Simulated form tests do not send leads to the live database.

The rendered-site check passed for 67 public pages, 65 internal links, nine image assets, six representative legacy redirects, and three simulated enquiry submissions. Representative pages were checked at desktop and mobile widths with no horizontal overflow.

The existing `npm test` runner cannot start because its configured `@vitejs/plugin-react-swc` package is absent. No changes to the existing unit-test setup were needed for this content conversion.

## Package browser

`/bangalore/packages` has a compact hero, horizontally scrolling journey cards, and icon-triggered filter and traveller sheets. One November 2026 Umrah package replaces the sample catalogue. Air India Express costs ₹99,999 per adult (2, 8, 15, 22, 29 November); Saudia costs ₹1,10,000 (14, 22 November). These rates and dates come from the user-supplied November brochure, with quad/quint sharing. The other brochure's different Saudia promotion and 14-day duration are not mixed into this offer.

Brochure inclusions and hotel distances are expandable. Hotel names, duration, flight routing, inventory, exclusions and final terms require confirmation. Competitor branding and contacts are not used. Child/infant fares are separate; subtotal covers adults only. Family/group links show the same available package; other journeys offer enquiries without invented inventory.

Airline, date, sharing, city and traveller selections carry into WhatsApp and the existing contact form. Filters support airline and exact departure with clear/reset and an empty state.

## Supabase travel leads

The CLI workspace is linked to `plfpezgkkrmwknaqffux` (zikhra tours). Migration `20261008100000_setup_travel_leads.sql` was applied and recorded remotely. The older March/April migrations belong to the interiors project and remain unapplied here; do not blindly push that historical chain, which contains unrelated auth/blog changes and broader authenticated-user policies.

Homepage, contact and popup forms share `TravelLeadFields`: name, phone, departure city, journey/package, optional departure date, traveller count and requirements. The existing `area` and `project_type` columns store departure city and journey/package; date/count/preferences are recorded in `message` to preserve database compatibility. Package enquiry prefill is retained. The dashboard uses travel labels.

Anonymous visitors can insert enquiries, but cannot read them. Reading/deleting requires a signed-in user with server-managed `app_metadata.role = admin`. No such admin existed at verification time. Assign this role only to the intended staff account through trusted Supabase administration, then sign in again to refresh its claims. Do not use editable user metadata for this role.

Verified public API connectivity, RLS policies, and an anonymous insert in a rolled-back transaction (no test row persisted). Browser form submissions are intercepted rather than sent to the live database.

## Listings CMS

Admin navigation now opens Listings inside the dashboard, with Packages and Categories subtabs. Categories support name, slug, description, cover upload, alt text, display order and publication. Packages support category, name/slug, description, cover upload/alt, route, departure city, optional duration, sharing basis, hotel details, inclusions/exclusions, itinerary, terms, multiple airlines with per-adult INR rates and batch dates, feature flag, order and publication. Search, editing, confirmed deletion, validation and request-error feedback are included. Category deletion is blocked while packages reference it.

Migrations `20261008120000_travel_cms.sql` and `20261008121000_cms_validation.sql` were applied and recorded on zikhra tours. The existing November Umrah package is seeded. Generated Supabase types match the live schema. Public category cards, package browser and Featured section read published CMS content; no static package fallback resurrects unpublished listings. Featured links retain category and package selection; enquiry date/count prefill remains intact. Multiple packages in a category use a compact package selector.

`travel-images` is a public image bucket capped at 5 MB per JPG, PNG or WebP; only app admins can upload/update/delete. Database RLS restricts CMS writes to server-managed `app_metadata.role = admin`. Anonymous readers see only published categories and packages under published categories. Image alt text, valid prices/batch dates and required publish content are validated. The admin interface checks its role before displaying management content.

Browser checks covered category upload/publish, package draft create/edit/delete, 320/390/1440px editor layouts, public catalogue, featured/category cards, package switching/deep links, and selected-date enquiries. Browser writes were mocked. Real database checks exercised admin CRUD, anonymous and nonadmin restrictions, draft visibility, malformed/duplicate dates, missing prices and storage permissions in rolled-back transactions. Public API returned five categories and the single seeded package.

The `admin@zikhra.com` account has since been assigned `app_metadata.role = admin`; it can manage CMS listings and travel leads. Sign in again if an older session lacks refreshed role claims. The admin login rejects nonadmin accounts. Uploaded files use unique names; replacing a listing image does not delete previous files automatically, since other listings may still reference them.

## Admin workspace recovery

Admin sections use the `view` URL parameter and Listings subtabs use `listing`, with native browser Back/Forward handling and per-admin active-view storage. Listings remains mounted when moving to another admin section. Its recently loaded data stays in memory, with a five-minute per-user session cache for reloads; live refresh does not overwrite editor fields.

Unsaved category/package editors (including airline prices, batch dates and completed image URLs) are stored locally per admin, separately for each listing or new-listing draft. They restore after refresh and appear under Continue unsaved edits after closing. Keep draft & close retains changes; Discard removes local changes; a successful database save or deletion clears that listing's local draft. These local drafts do not publish content or save it to Supabase. Storage failures show a warning instead of falsely claiming persistence. Lead/customer data is not added to this cache. File selections whose upload has not completed cannot be recovered by browser storage.

Browser tests passed for cached section switching, text/date draft restoration, separate drafts, subtab reload, clearing on save/discard, browser Back/Forward and existing CMS flows. The recovery layer requires no database migration.

## Structured enquiries, office details and SEO (8 October 2026)

Migration `20261008200000_structured_travel_enquiries.sql` is applied and recorded in the linked zikhra tours database. Leads now have package ID/name snapshots, flight option/airline, room sharing, indicative per-adult price, preferred departure and traveller count. Existing structured date/count messages were backfilled; matching CMS package/airline names were resolved without changing the original message. Anonymous insert remains available, while reads/updates/deletes remain limited to authenticated admins. Transaction tests verified the new constraints and access policies and rolled back all synthetic records.

Package enquiry URLs pass explicit package and flight identifiers. The contact form also resolves older `package=Package name · Airline` links after loading the published catalogue, preserving their date and traveller count. CMS values reconcile package/airline/rate/sharing snapshots. All three enquiry forms save the structured fields through `insertLead`; the dashboard displays these fields and falls back to older message details when needed. Its refresh button reloads enquiries without resetting the selected admin tab.

`src/lib/company.ts` owns the supplied RT Nagar office address. Contact details, map directions, footer, legal pages and TravelAgency structured data share it. `/bangalore/rt-nagar` is a dedicated local page. Other area pages describe areas served, not additional offices.

The legal pages now cover package pricing and sharing, booking confirmation, payment instructions, provider terms, visas/Hajj, cancellations, traveller requirements, privacy requests and dispute contacts. No fixed refund schedule, company registration number, unverified accreditation, named grievance officer or absolute security promise is invented. Booking-specific supplier and cancellation terms must still be supplied before payment. The privacy notice describes the implemented forms, Supabase storage, admin access and browser storage. Forms link to both policies and explain that an enquiry is not a booking.

The public catalogue is rendered on the server with anonymous RLS reads and a 60-second fetch/revalidation period; the client refreshes it. Each published CMS package has a canonical `/bangalore/packages/<slug>` page, linked by featured cards and included in the sitemap with its CMS update timestamp. Duplicate homepage and equivalent package/service views point to the chosen canonical page. The sitemap excludes those duplicates and uses a real content revision date for static pages. Page titles avoid repeated brand suffixes; metadata, social images and business identity are consistent. JSON-LD escapes `<` for safe embedding. An unsupported search action and hidden homepage/package FAQ markup were removed. Admin and thank-you pages remain excluded from indexing.

Validation includes current and legacy package links, flight/date/count prefills, structured insert payloads, manual/custom departures, mobile admin details, legal page navigation, generated canonical-page metadata/JSON-LD, public package server rendering and a production build. Browser submission tests intercepted requests; they did not create customer leads.

SEO implementation references: [Google LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business), [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). Privacy framework reference: [MeitY DPDP Rules and enforcement materials](https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa). Technical changes do not imply Google indexing, rich-result eligibility or ranking guarantees. Deployment and Search Console submission have not been performed in this task.

Catalogue outage recovery: server fetches retain the most recent successful public catalogue for up to five minutes when requests fail. Without a recent snapshot, pages pass control to the browser catalogue loader instead of throwing. Individual CMS package URLs resolve the requested slug after browser loading; missing packages show an unavailable state rather than another package. Server-side 404 decisions are made only after a successful catalogue response. The sitemap can still render static routes without server catalogue access. Runtime recovery tests passed for the listing, category, CMS package and package-backed service routes, unknown packages, browser failure/retry, and the package-to-contact flow at 320/390/1440px.

SEO audit completion: see SEO_AUDIT.md. The reusable npm run audit:seo command checks built canonical pages, metadata, indexing rules, links, image assets and JSON-LD. robots.txt now permits noindex directives to be read, while admin/thank-you/page-directory HTTP responses also set X-Robots-Tag. Root app files are explicitly type checked and production builds no longer ignore type errors. Optional Search Console HTML verification is supported through NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION. The live travel deployment and authenticated Search Console state remain unverified.
