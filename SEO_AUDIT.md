# Zikhra SEO audit — 8 October 2026

The local travel website has its technical SEO foundation configured and tested. This report does not imply that the travel version has been deployed, submitted to Google, or indexed.

## Verified locally

| Area | Result |
| --- | --- |
| Production routes | 107 generated pages, including legacy aliases |
| Canonical sitemap | 62 unique indexable URLs on https://www.zikhra.com |
| Internal links | 3,204 checked links; no broken route, redirect or anchor targets in canonical pages |
| Page metadata | Titles, descriptions, one H1, canonical URL, Open Graph and Twitter metadata checked |
| Structured data | JSON-LD syntax checked; travel agency uses the supplied RT Nagar address |
| CMS packages | Published packages rendered on the server, have individual URLs, and enter the sitemap using their actual CMS modification date |
| Indexing exclusions | Admin, thank-you and page directory have noindex metadata; HTTP X-Robots-Tag headers verified |
| Crawler access | robots.txt identifies the canonical sitemap and lets crawlers read noindex directives |
| Redirects | Four missing destination-index targets corrected; permanent legacy redirects retained |
| Images | Alt attributes and local files checked; incorrect social-image dimensions removed, hero loading prioritised, and logo dimensions reserved |
| Catalogue recovery | Browser fallback and short server snapshot recovery retained; temporary network failures do not cause the previous runtime crash |
| Type validation | Actual root app files included in TypeScript checks; production builds no longer bypass type errors |

The automated audit checks structural correctness, not ranking, rich-result approval or field Core Web Vitals. No reviews, rating markup, accreditation or extra office locations are fabricated.

## Repeat the audit

Build first, then run:

    npm run check
    npm run build
    npm run audit:seo

For an isolated build:

    npm run audit:seo -- .next-seo-audit-build

The command is implemented in scripts/audit-seo.cjs and writes seo-audit.json inside the chosen build directory. It returns a failing exit code for blocking errors.

Public routes are deliberately excluded from the sitemap when their canonical version is elsewhere. The root homepage is canonical for /bangalore; equivalent package/service and group/family views use their chosen package canonical.

## Live status and remaining external work

The live-domain check returned the previous interiors website, rather than the local Tours & Travels version. The XML sitemap could not be inspected through the browsing tool; that does not establish that the live sitemap is missing.

1. Deploy this travel version to the intended production host.
2. Verify the deployed homepage, /robots.txt and /sitemap.xml return the travel version, correct canonicals, and successful responses.
3. Confirm the domain property in Google Search Console and submit https://www.zikhra.com/sitemap.xml. Search Console account access and current submission/indexing status were not available in this session.
4. Inspect representative homepage, RT Nagar and package URLs in Search Console after deployment. Google determines crawl and indexing timing.
5. Confirm the Google Business Profile uses the same name, address and phone number. Profile ownership/status was not verified in this session.
6. Measure real-user Core Web Vitals and improve original travel content over time. Local technical checks are not field performance measurements.

If verification uses an HTML token, NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION is supported by the root metadata. Supply the real token from the property owner; no verification token is invented. Existing DNS verification can be used instead.

## Sources

- Live website check: https://www.zikhra.com/
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google robots/noindex guidance: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google local business guidance: https://developers.google.com/search/docs/appearance/structured-data/local-business
