# Offshot public site

The published files are committed under `screenshot-cleaner/` and are served by
GitHub Pages from `main`. Keep unrelated publisher files, particularly
`app-ads.txt`, intact.

Build and validate using Node.js (no packages required):

```sh
node scripts/build-offshot.mjs
node scripts/test-offshot.mjs --require-icon
git diff --check
```

Edit page text and matching structured data in `scripts/build-offshot.mjs`, then
regenerate. Edit shared styling in `screenshot-cleaner/styles.css`. `icon.png` is
the approved white app icon copied from the released app asset, not a new design.
The old external `work/build_release_pages.py` is not this site's build source;
running it again would overwrite the current launch information and metadata.

`source/privacy-original.html` preserves the pre-existing privacy wording and
effective date. The builder changes its wrapper/navigation/metadata only. Privacy
statements must continue to match the app; do not silently change this policy as
part of marketing edits.

The sitemap contains only canonical Offshot URLs. There are no fabricated reviews
or ratings, analytics scripts, or hidden Q&A. FAQ markup repeats the visible answers;
it does not guarantee Google FAQ rich results or AI citations. Search Console
submission and actual indexing are separate from publishing these files.

The home page includes the Google verification meta tag issued for
`https://mikey92.github.io/screenshot-cleaner/`. Preserve it after verification;
it is a public ownership proof, not a login credential. The development-only
`scripts/preview-layout.html` previews 390px and 768px layouts and is marked noindex.
