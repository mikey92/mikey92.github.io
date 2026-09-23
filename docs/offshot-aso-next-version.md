# Offshot ASO: version 1.1.1 (build 10)

Updated 2026-09-23 for the US English listing after the user explicitly requested
full implementation. Subtitle, keywords, description and promotional text are now
saved in App Store Connect for version 1.1.1. This supersedes the earlier hold on
creating a version. Keyword selection is relevance-based, not measured search-volume
evidence. Prices, regions and app behavior are unchanged.

## Submission verified

- App Store state at 2026-09-23 05:32 UTC: `WAITING_FOR_REVIEW`.
- Version/build: `1.1.1 (10)`; release policy: `AFTER_APPROVAL`.
- Submission: `bdd43ea9-9b69-4ffe-aa54-b2b3f9df5442`.
- Build: `d2721467-853e-4dbd-8f09-bc52658709f0`; Apple processing: `VALID`.
- Approved source manifest: 113 files unchanged; regression tests: 56 passed.
- Signing, provisioning, runtime settings, privacy manifests and approved white
  icon were verified. Only version/build overrides changed the binary release.
- IPA SHA-256: `34e1d95718b6ee679f68d17c5d722830420a64de8a9a02f62e3e4b25c7c46eb3`.
- Existing public version 1.1 remains available. Do not advertise 1.1.1 as live until
  Apple approves/releases it. Project defaults still contain build 9; future uploads
  must use a new build number above 10, not reuse a consumed build number.

## Saved metadata

- Name (keep current): `Offshot - Screenshot Cleaner`
- Subtitle: `Organize & search saved shots`
- Keywords: `delete,folders,tags,notes,ocr,text,declutter,cleanup,sort,library,storage,batch,review`

No competitor brands, invented feature claims, repetitive title words, or fabricated
reviews. The current title carries the main "screenshot cleaner" intent; the subtitle
adds organization/search. Keywords add other supported workflows without duplicating
those fields. Reassess using actual App Store acquisition data after launch.

## Saved description

Find the screenshot you saved. Offshot helps you organize iPhone screenshots, search
the text inside them, and review what to keep before you delete.

KEEP USEFUL SCREENSHOTS
Organize with folders, tags and notes. Mark screenshots to review later and share
images into Offshot from the iOS share sheet.

SEARCH TEXT ON YOUR DEVICE
Look for a word you remember from a screenshot. Text recognition happens on your
device; unreadable or unrecognized text may not appear in search results.

CLEAN UP ON YOUR TERMS
Select one screenshot or a batch, review your selection, then confirm deletion
through Photos. Offshot does not automatically decide what to delete.

NO EXTRA ACCOUNT
No Offshot account is required. Screenshot images and recognized text are not sent
to analytics or advertising providers. Ads, purchases and optional usage reporting
use internet services. Privacy controls are available in Settings.

FREE CLEANUP. OPTIONAL ONE-TIME AD REMOVAL.
Cleanup and organization remain available without a purchase. The free app may show
an ad after a successful deletion. Lifetime Ad Removal is a one-time purchase, not
a subscription. Check the App Store for the current price. Restore Purchases is
available in Settings.

IMPORTANT DETAILS
Deleting screenshots changes your Photos library and may sync through iCloud Photos.
Deleted items can usually be recovered in Photos > Recently Deleted for 30 days.
Organization metadata can be exported or restored through Files; backups do not
include original images or recognized-text indexes.

## Applied to released 1.1

Promotional text (saved through App Store Connect on 2026-09-23):

> Find the screenshot you saved. Organize with folders, tags and notes, search text on device, and delete only what you choose. No app account required.

This is conversion-focused copy. Apple explicitly states that promotional text does
not affect App Store search ranking. The title is unchanged; new subtitle, keywords
and description are saved for 1.1.1 and require Apple review before public release.

## Measurement and indexing

Search Console ownership is verified. Home, FAQ, deletion guide and text-search
guide indexing requests were accepted into Google's priority crawl queue. The
sitemap report still says `Couldn't fetch` with zero discovered pages even though
the registered URL is correct, HTTP/XML checks pass and Google's live sitemap test
reported a successful fetch. This discrepancy is unresolved; accepted requests are
not evidence of indexing or guaranteed ranking. Do not repeatedly resubmit the same
URLs. No sitemap read/indexing success is claimed.

- Confirm all public page URLs and sitemap return HTTP 200 after Pages deployment.
- Verify `https://mikey92.github.io/screenshot-cleaner/` as a URL-prefix property in
  Search Console, then submit `sitemap.xml`; never reuse another site's verification.
- If Google verification is unavailable, keep the sitemap discoverable in robots.txt
  and do not report indexing as complete.
- Record Search Console impressions, clicks, queries and indexed pages after enough
  data accumulates. Compare 28-day windows; a brand-new app has no useful baseline yet.
- Track App Store impressions, product-page views and downloads by source. Do not
  promise rankings, downloads, AI citations or rich results from markup alone.
- No new analytics scripts, tracking cookies, paid tools or advertising campaigns were
  added by this change.

References: https://developer.apple.com/app-store/search/
https://developers.google.com/search/docs/appearance/ai-features
https://developers.google.com/search/docs/appearance/structured-data/sd-policies
https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information/
