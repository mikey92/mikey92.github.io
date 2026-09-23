# Offshot SEO/AEO rollout — 2026-09-23

## Published

Site: https://mikey92.github.io/screenshot-cleaner/

Content deployment commit: `03600a3dd68bc9965eb5bc112e41b92bf506201c`.
GitHub Pages reported `built` with no build error at 04:50:29 UTC.

- Replaced pre-launch copy with the released app's availability and a direct link
  to the US App Store listing, app ID `6812286993`.
- Replaced the website's old teal icon with the approved white 1024px app asset.
  This is a website change, not a claim about App Store Connect header-icon caching.
- Published six static pages: home, screenshot cleanup guide, screenshot text-search
  guide, an 11-question FAQ, support, and the existing privacy policy.
- Added unique page titles/descriptions, canonical URLs, Open Graph/Twitter metadata,
  app smart banner, internal links, SoftwareApplication/WebPage/Breadcrumb data,
  visible-answer-matching FAQ data, sitemap.xml, and a root robots.txt declaration.
- Preserved the privacy policy body and `app-ads.txt` exactly against the pre-change
  Git commit `805e3f571c274c754a74275fb907fbd8c52cafab`.
- Added no runtime analytics, tracking cookies, reviews, ratings, paid tools, new
  app pricing, or new distribution countries.

## Validation

- Dependency-free build and automated tests passed: six unique titles/descriptions,
  one H1/main per page, 122 valid local link/asset references, matching canonical
  sitemap URLs, parseable JSON-LD, and 11 matching visible/structured FAQ answers.
- `xmllint --noout screenshot-cleaner/sitemap.xml` passed.
- All six public HTML pages, CSS, icon, sitemap, robots.txt and app-ads.txt returned
  HTTP 200 and matched the committed bytes by SHA-256 (11 resources).
- Browser checks passed on the desktop page and 390px/768px iframe viewports.
  Home showed no horizontal overflow or broken images at either narrow width;
  FAQ and support layouts were also inspected visually.
- `git diff --check` passed. Only app-site content and its build/test/docs were
  committed. The dedicated local preview server was stopped after verification.

## App Store Connect

The promotional text in `offshot-aso-next-version.md` was saved and confirmed after
reopening the released 1.1 (build 9) page. It remains Ready for Distribution.

Name/subtitle/keywords/description changes are proposals for the next permitted
version workflow, not live changes. The current released metadata fields were
disabled. No new app version or review submission was created for this SEO task.
Promotional text is conversion copy, not an App Store search-ranking factor.

## Google Search Console

Property: `https://mikey92.github.io/screenshot-cleaner/` (URL prefix only).

- Ownership verified successfully using the HTML meta tag issued for this property.
  Keep this public tag in the home page head.
- `sitemap.xml` submission succeeded. The submission was repeated once after the
  successful live access test below, not continuously retried.
- Homepage indexing was requested successfully; Google confirmed that the URL was
  added to a priority crawl queue. This is not confirmation of actual indexing.
- The sitemap report still displayed **Couldn't fetch**, type **Unknown**, with
  zero discovered pages at the final check. Sitemap processing is not complete.
- Google's live sitemap inspection at Sep 22, 2026, 9:56:43 PM PDT reported:
  **URL is available to Google**, **Crawl allowed: Yes**, **Page fetch: Successful**,
  **Indexing allowed: Yes**, using Google Inspection Tool smartphone.
- The manual-actions report showed **No issues detected**.

The site is reachable and the live test succeeded, but that does not prove why the
separate sitemap report still shows a fetch warning. Do not claim that the report
is fixed, that all pages are indexed, or that rankings/AI citations increased.
Recheck the sitemap report and indexed pages after Google's processing interval.
Do not request indexing of the XML sitemap itself or repeatedly submit the same URL.

## References

- https://developers.google.com/search/docs/appearance/ai-features
- https://support.google.com/webmasters/answer/7451001?hl=en
- https://developer.apple.com/app-store/search/


## Follow-through: 2026-09-23 05:32 UTC

The earlier pending-ASO hold is superseded by the user's request to implement all
improvements. Version 1.1.1 (build 10) now contains the saved subtitle, keywords,
description and promotional text and has been submitted to Apple. UI and API both
confirm WAITING_FOR_REVIEW with AFTER_APPROVAL automatic release. Submission ID:
`bdd43ea9-9b69-4ffe-aa54-b2b3f9df5442`. See `offshot-aso-next-version.md` for exact
metadata and verification evidence. Tests: 56 passing; approved source: 113 files
unchanged. No app behavior, price, region, purchase or tracking changes.

Google additionally accepted individual indexing requests for FAQ and both cleanup
and text-search guides. Together with the previously accepted homepage request,
four priority pages are now in the crawl queue. Sitemap status remains Couldn't
fetch; the actual registered sitemap URL is correct. Public indexing and rankings
remain unverified; no Google-side completion is claimed.
