import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Build only the Offshot public pages. No app-ads.txt, pricing, or app changes.
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://mikey92.github.io/screenshot-cleaner/';
const STORE = 'https://apps.apple.com/us/app/offshot-screenshot-cleaner/id6812286993';
const UPDATED = '2026-09-23';
// Current public App Store version; keep in sync after each approved release.
const VERSION = '1.1.1';
// Public ownership token issued for this exact URL-prefix property in Search Console.
const GOOGLE_VERIFICATION = '_6Eghz8g6QdLdFuqAr3pnvpvAC4uWZ2wjczGvd5_r-g';
const out = resolve(ROOT, 'screenshot-cleaner');
mkdirSync(out, { recursive: true });
const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const url = file => BASE + (file === 'index.html' ? '' : file);
const nav = `<nav aria-label="Main navigation"><a class="brand" href="./"><img src="icon.png" width="36" height="36" alt="">Offshot</a><div class="nav-links"><a href="delete-screenshots-iphone.html">Cleanup guide</a><a href="search-screenshots-iphone.html">Find screenshots</a><a href="faq.html">FAQ</a><a href="support.html">Support</a></div></nav>`;
const cta = `<a class="button" href="${STORE}">Download on the App Store<span class="sr-only"> — Offshot for iPhone, United States</span></a>`;
const footer = `<footer><p><strong>Offshot</strong> · Screenshot cleaner and organizer for iPhone</p><div class="footer-links"><a href="./">Home</a><a href="faq.html">FAQ</a><a href="support.html">Support</a><a href="privacy.html">Privacy policy</a><a href="sitemap.xml">Sitemap</a><a href="${STORE}">App Store</a></div><p class="small">By Heeseong Kim · Updated <time datetime="${UPDATED}">September 23, 2026</time></p></footer>`;
const app = {
  '@type':'SoftwareApplication','@id':BASE+'#app',name:'Offshot - Screenshot Cleaner',
  url:BASE,description:'An iPhone screenshot cleaner and organizer with folders, tags, notes, on-device text search, and deletion review.',
  applicationCategory:'UtilitiesApplication',operatingSystem:'iOS 17.0 or later',softwareVersion:VERSION,
  image:BASE+'icon.png',downloadUrl:STORE,installUrl:STORE,sameAs:[STORE],
  author:{'@type':'Person',name:'Heeseong Kim'},publisher:{'@type':'Person',name:'Heeseong Kim'},inLanguage:'en-US',
  offers:{'@type':'Offer',price:'0',priceCurrency:'USD',url:STORE,description:'Free download. Optional one-time Lifetime Ad Removal purchase; see the App Store for the current price.',eligibleRegion:{'@type':'Country',name:'United States'}},
  featureList:['Review and delete selected screenshots','Folders, tags and notes','On-device recognized-text search','Share images into Offshot','Export and restore organization metadata']
};
const questions = [
  ['What is Offshot?', 'Offshot is a screenshot cleaner and organizer for iPhone. It helps you keep useful screenshots in folders, add tags and notes, find recognized text, and review selected screenshots before deleting them from Photos.'],
  ['Is Offshot free, or does it require a subscription?', 'Offshot is free to download. Cleanup and organization do not require a purchase. The free app may show an ad after a successful deletion. Lifetime Ad Removal is an optional one-time purchase, not a subscription. The App Store shows the current price.'],
  ['Which devices and countries are supported?', 'Offshot is available on the United States App Store for iPhone with iOS 17.0 or later. The app interface is in English. Check the App Store listing for current compatibility and availability.'],
  ['Can I delete multiple screenshots at once?', 'Yes. Select the screenshots you want to remove, review the selection, and confirm the Photos deletion request. Offshot does not automatically choose which screenshots to delete.'],
  ['Can I search the text inside a screenshot?', 'Yes. Offshot can search recognized text on your device. Text recognition can miss small, blurred, stylized or otherwise unreadable text. A matching word must be recognized before it can appear in text-search results.'],
  ['Are my screenshots uploaded to an AI service?', 'Offshot does not send screenshot images, recognized text or search content to its analytics service or advertising providers. Recognized-text search runs on device. Ads, purchases and optional usage reporting use network services; Offshot is not a completely offline app. Apple Photos and iCloud follow your Apple settings.'],
  ['Does deleting a screenshot also remove it from iCloud Photos?', 'Deleting through Offshot changes your Photos library. With iCloud Photos enabled, deletion may sync to other devices using that library. Review your selection before confirming. Removing an item from Offshot is not a separate way to keep a copy in Photos.'],
  ['Can I recover a deleted screenshot?', 'Check Recently Deleted in Apple Photos. Deleted items can usually be recovered for 30 days, with exceptions. Offshot does not provide a separate undo and does not permanently empty Recently Deleted.'],
  ['Do I need to create an account?', 'No Offshot account is required. Apple may ask you to authenticate your Apple Account for a purchase. The public GitHub support tracker uses its own account system.'],
  ['Does an organization backup include my screenshots?', 'No. Export and restore through Files cover organization metadata such as folders, tags and notes. Original images and recognized-text indexes are not included. Keep a separate backup of the original photos using your preferred photo-backup method.'],
  ['How do I restore Lifetime Ad Removal?', 'Open Offshot Settings and choose Restore Purchases while using the Apple Account that made the purchase. If the App Store is temporarily unavailable, try again later. Restoring ad removal does not change the separate usage-sharing setting.']
];
const pages = [
  {
    file:'index.html',title:'Offshot — iPhone Screenshot Cleaner & Organizer',
    description:'Clean up iPhone screenshots with Offshot. Organize with folders, tags and notes, search text on device, and review screenshots before deleting. Free download.',
    schema:[app],
    body:`<section class="hero"><div><p class="eyebrow">Offshot for iPhone</p><h1>Keep the screenshot.<br>Lose the clutter.</h1><p class="lead">Offshot is an iPhone screenshot cleaner and organizer. Find the screenshots you saved, keep the useful ones in folders, and review the rest before deleting.</p><div class="actions">${cta}<a href="delete-screenshots-iphone.html">See how cleanup works</a></div><p class="small">Free download · iOS 17.0+ · U.S. App Store<br>Optional one-time ad removal. No Offshot account required.</p></div><div class="hero-mark"><img src="icon.png" width="220" height="220" alt="Offshot’s white icon with two smiling screenshot cards"><p>Saved for a reason.<br>Easy to find again.</p></div></section>
    <section aria-labelledby="features"><p class="eyebrow">Less scrolling. More finding.</p><h2 id="features">A place for screenshots you want to keep</h2><div class="grid"><article class="card"><span class="number">01</span><h3>Organize</h3><p>Put useful screenshots in folders, add tags and notes, and mark things to review later.</p></article><article class="card"><span class="number">02</span><h3>Find</h3><p>Search recognized text on your device. Look for a word you remember from a screenshot instead of scrolling through every image.</p><a href="search-screenshots-iphone.html">How screenshot search works</a></article><article class="card"><span class="number">03</span><h3>Clean up</h3><p>Select one screenshot or a batch. Review your selection, then confirm deletion through Photos. The choice stays with you.</p><a href="delete-screenshots-iphone.html">Read the cleanup guide</a></article></div></section>
    <section class="split"><div><h2>Bring saved images together</h2><p>Share images into Offshot with the iOS share sheet. Use folders for projects and tags for details that connect images across folders.</p><p>Export organization metadata through Files when you need a copy. This includes organization data, not the original images or recognized-text indexes.</p></div><div class="card"><h2>Screenshot search runs on device</h2><p>Offshot does not send screenshots or recognized text to analytics or advertising providers. Ads, purchases and optional usage reporting use the internet. Apple Photos and iCloud follow your Apple settings.</p><a href="privacy.html">Read the full privacy policy</a></div></section>
    <section><h2>Free to start. No cleanup subscription.</h2><p>Cleanup and organization remain available without a purchase. The free app may show an ad after a successful deletion. Lifetime Ad Removal is a one-time in-app purchase; check the App Store for the current price. Restore Purchases is available in Settings.</p></section>
    <aside class="notice"><h2>Before you delete</h2><p>Offshot deletes from your Photos library. With iCloud Photos, deletions may sync to your other devices. You can usually recover items in Photos → Recently Deleted for 30 days. <a href="delete-screenshots-iphone.html#recovery">Read about deletion and recovery</a>.</p></aside>
    <section><h2>A few things worth knowing</h2><dl><dt>Can I search words inside screenshots?</dt><dd>Yes. Offshot searches text recognized on device. Recognition is not perfect and may miss unreadable text.</dd><dt>Will it delete screenshots automatically?</dt><dd>No. You select the screenshots and confirm deletion through Photos.</dd><dt>Do I need another account?</dt><dd>No Offshot account is required.</dd></dl><p><a href="faq.html">Read all frequently asked questions</a></p></section><section class="closing"><h2>Find what you saved.</h2>${cta}</section>`
  },
  {
    file:'delete-screenshots-iphone.html',title:'How to Delete Screenshots on iPhone | Offshot',
    description:'A step-by-step guide to reviewing and deleting iPhone screenshots with Offshot, including limited Photos access, iCloud sync, and Recently Deleted recovery.',
    body:`<article class="reading"><p class="eyebrow">Offshot cleanup guide</p><h1>How to delete screenshots on iPhone</h1><p class="answer">In Offshot, allow access to the screenshots you want to review, select the ones you no longer need, check your selection, and confirm deletion through Photos. You can select one screenshot or a batch.</p><nav class="toc" aria-label="On this page"><a href="#steps">Cleanup steps</a><a href="#access">Missing screenshots</a><a href="#recovery">iCloud & recovery</a></nav>
    <h2 id="steps">Review first, then delete</h2><ol class="steps"><li><strong>Open Offshot and allow Photos access.</strong> Limited access is supported. Only images the app can access can be reviewed.</li><li><strong>Choose screenshots you no longer need.</strong> Start with a small group if you are unsure. Keep items you still need in your review workflow.</li><li><strong>Check the selection.</strong> Look for receipts, addresses, tickets or other details you may still need. Offshot does not decide for you whether an image is disposable.</li><li><strong>Confirm the Photos deletion request.</strong> This changes the Photos library, not just a separate list inside Offshot. If you are unsure, cancel before confirming.</li></ol>
    <h2>Keep useful screenshots organized</h2><p>Deletion is only one part of cleanup. Keep screenshots you want to refer to in folders, add a tag for the topic, and use a short note for context. Mark items to review later when you do not want to decide immediately.</p><p>For example, a folder can group a trip’s booking information while a tag helps you find receipts. <a href="search-screenshots-iphone.html">Read how to organize and search screenshots</a>.</p>
    <h2 id="access">Why are some screenshots missing?</h2><p>Check Photos access in iOS Settings. If you chose limited access, Offshot can only work with the images you allowed. Adjust the selection or permission if the screenshot you need is outside that set. Text-search results also depend on what text the app can recognize.</p>
    <h2 id="recovery">What happens to iCloud copies and deleted images?</h2><p>With iCloud Photos, deletion may sync to other devices using the same library. Do not use deletion as a way to hide a screenshot only from Offshot while keeping it elsewhere in that library.</p><p>Apple Photos usually keeps deleted items in Recently Deleted for 30 days, with exceptions. Offshot has no separate undo and does not permanently clear that album. Check that an item can be recovered before relying on recovery. <a href="https://support.apple.com/en-us/104967">Apple’s deletion and recovery instructions</a> explain the Photos behavior.</p>
    <h2>Will deleting screenshots free storage immediately?</h2><p>Removing screenshots reduces what is in your main library, but Offshot does not promise a fixed amount of reclaimed space or immediate storage changes. Photos may retain deleted items in Recently Deleted, and device storage reports can take time to update.</p>
    <h2>Does cleanup require a purchase?</h2><p>No. The free app supports cleanup and organization. An ad may appear after a successful deletion; if an ad is unavailable, deletion still completes. Lifetime Ad Removal is optional and is paid once, not monthly.</p><p>${cta}</p><p class="small">For Offshot ${VERSION} on iPhone. <a href="support.html">Get support</a> · <a href="faq.html">More questions</a></p></article>`
  },
  {
    file:'search-screenshots-iphone.html',title:'Organize & Search Screenshot Text on iPhone | Offshot',
    description:'Find saved screenshots with Offshot’s on-device text search. Organize iPhone screenshots in folders with tags and notes, and learn what recognition can miss.',
    body:`<article class="reading"><p class="eyebrow">Offshot search guide</p><h1>Find the screenshot you saved</h1><p class="answer">Offshot helps you find iPhone screenshots by searching text recognized on your device. Folders, tags and notes add context so useful screenshots do not disappear into an unorganized camera roll.</p>
    <h2>Search a word you remember</h2><ol class="steps"><li><strong>Make the image available to Offshot.</strong> Grant Photos access to the relevant screenshot or share an image through the iOS share sheet.</li><li><strong>Use text search.</strong> Try a distinctive word visible in the screenshot, such as part of a place name or a product name.</li><li><strong>Open and check the result.</strong> Search helps you locate an image; the original screenshot remains the source to verify its details.</li></ol>
    <h2>What is on-device text recognition?</h2><p>Text recognition, also called OCR, converts readable text in an image into searchable text. Offshot performs this work on your device. Screenshot images and recognized text are not sent to its analytics service or advertising providers.</p><p>This is text search, not a promise that every image can be understood or found. Ads, purchases and optional usage reporting use internet services separately. <a href="privacy.html">See the privacy details</a>.</p>
    <h2>Why does a search miss my screenshot?</h2><p>A word must be recognized before a text search can find it. Small type, blurry images, stylized lettering and hard-to-read layouts can cause missing or incorrect text. Try a different distinctive word and check whether Offshot has access to the image. Limited Photos access can keep an image outside the app’s available set.</p>
    <h2>Use folders for projects and tags for topics</h2><p>A simple system is easier to keep using than dozens of folders. You might use a folder for a current trip or purchase, then add a tag such as “receipt” or “idea” when it helps. A note can capture why you saved something or what you want to do next.</p><p>These are examples of using Offshot’s organization features, not automatic classifications. Mark items to review later when you do not want to make a decision right away.</p>
    <h2>Know what an organization backup includes</h2><p>Export and restore through Files cover organization metadata, including folders, tags and notes. They do not include original screenshot images or recognized-text indexes. Keep a separate photo backup if you need to preserve the actual images.</p>
    <h2>Found what you no longer need?</h2><p><a href="delete-screenshots-iphone.html">Review the cleanup guide</a> before deleting. A confirmed deletion changes your Photos library and may sync through iCloud Photos.</p><p>${cta}</p><p class="small">For Offshot ${VERSION} on iPhone. <a href="faq.html">Read the FAQ</a> · <a href="support.html">Get help</a></p></article>`
  },
  {
    file:'faq.html',title:'Offshot FAQ — Screenshot Cleanup, Search & Privacy',
    description:'Answers about Offshot for iPhone: free cleanup, one-time ad removal, screenshot text search, Photos permissions, iCloud deletion, recovery and privacy.',
    schema:[{'@type':'FAQPage','@id':BASE+'faq.html#faq',mainEntity:questions.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}],
    body:`<article class="reading"><p class="eyebrow">Straight answers</p><h1>Offshot FAQ</h1><p class="lead">Screenshot cleanup, search, purchases and privacy—what Offshot does, and what it does not do.</p>${questions.map(([q,a],i)=>`<section id="question-${i+1}" class="faq"><h2>${esc(q)}</h2><p>${esc(a)}</p></section>`).join('\n')}<h2>More help</h2><ul><li><a href="delete-screenshots-iphone.html">Step-by-step screenshot cleanup guide</a></li><li><a href="search-screenshots-iphone.html">Organizing screenshots and searching text</a></li><li><a href="https://support.apple.com/en-us/104967">Apple’s Photos deletion and recovery instructions</a></li><li><a href="privacy.html">Offshot privacy policy</a></li><li><a href="support.html">Contact support</a></li></ul>${cta}</article>`
  },
  {
    file:'support.html',title:'Offshot Support — Photos Access, Purchases & Help',
    description:'Get help with Offshot: missing screenshots, Photos permissions, text search, deleting and recovering images, restoring ad removal, and reporting a problem.',
    body:`<article class="reading"><p class="eyebrow">Help with Offshot</p><h1>Offshot support</h1><p class="lead">Start with the topic below, or send a report if something is not working.</p><h2>Missing screenshots or search results</h2><p>Check Offshot’s Photos permission in iOS Settings. Limited access only exposes the images you allowed. Text search depends on recognized text and can miss unreadable words. <a href="search-screenshots-iphone.html">Read the search guide</a>.</p><h2>Deleting and recovering screenshots</h2><p>Select the screenshots you want to remove, review them, and confirm the Photos request. Deletion may sync with iCloud Photos. Check Recently Deleted in Photos for recovery; Offshot does not have a separate undo. <a href="delete-screenshots-iphone.html">Read the cleanup and recovery guide</a>.</p><h2>Restore Lifetime Ad Removal</h2><p>Open Settings in Offshot and choose Restore Purchases. Use the Apple Account that made the purchase. If the product or App Store is temporarily unavailable, close the purchase screen and try again later. You do not need to buy it again.</p><h2>Ads and privacy choices</h2><p>An ad may appear after a completed deletion. If an ad is unavailable, fails to load or cannot connect, deletion still completes. Use an ad’s AdChoices or information control to report it to Google; you do not need to click the ad content. Advertising Privacy Choices appears in Settings when required by Google.</p><p>Ad removal and Share Anonymous Usage are separate controls. <a href="privacy.html">Read the full privacy policy</a>.</p><h2>Report a problem</h2><p><a class="button secondary" href="https://github.com/mikey92/mikey92.github.io/issues/new?title=Offshot%20support">Open a support request</a></p><p>Include your Offshot version, iOS version, what you expected, and the steps that led to the issue.</p><aside class="notice"><p><strong>The GitHub support tracker is public.</strong> Do not post private screenshots, personal information, installation identifiers, receipts, payment details or Apple credentials. GitHub may require its own account; Offshot itself does not.</p></aside><p><a href="faq.html">Browse the frequently asked questions</a></p></article>`
  }
];

// Preserve the existing privacy policy's substantive wording and effective date.
const originalPrivacy = readFileSync(resolve(ROOT,'source/privacy-original.html'),'utf8');
const privacyBody = originalPrivacy.split('</nav>')[1]?.split('<footer')[0];
if (!privacyBody?.includes('Effective September 12, 2026')) throw new Error('Privacy source did not match the preserved policy');
pages.push({file:'privacy.html',title:'Offshot Privacy Policy — Screenshots, Ads & Usage Data',description:'How Offshot handles screenshot content, on-device search, optional usage reporting, Google ads, Apple purchases and privacy controls.',body:`<article class="reading policy">${privacyBody}</article>`});

for (const p of pages) {
  const graph = [{'@type':'WebPage','@id':url(p.file)+'#page',url:url(p.file),name:p.title,description:p.description,inLanguage:'en-US',dateModified:UPDATED,about:{'@id':BASE+'#app'},isPartOf:{'@id':BASE+'#website'}},...(p.schema||[])];
  if (p.file === 'index.html') graph.push({'@type':'WebSite','@id':BASE+'#website',name:'Offshot',url:BASE,inLanguage:'en-US'});
  if (p.file !== 'index.html') graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Offshot',item:BASE},{'@type':'ListItem',position:2,name:p.title.split(/ [—|] /)[0],item:url(p.file)}]});
  const html = `<!doctype html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(p.title)}</title>
  <meta name="description" content="${esc(p.description)}">
  <link rel="canonical" href="${url(p.file)}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta name="theme-color" content="#ffffff">
  <meta name="apple-itunes-app" content="app-id=6812286993">
${p.file === 'index.html' ? `  <meta name="google-site-verification" content="${GOOGLE_VERIFICATION}">` : ''}
  <link rel="icon" href="icon.png" type="image/png">
  <link rel="apple-touch-icon" href="icon.png">
  <link rel="stylesheet" href="styles.css">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Offshot">
  <meta property="og:locale" content="en_US">
  <meta property="og:title" content="${esc(p.title)}">
  <meta property="og:description" content="${esc(p.description)}">
  <meta property="og:url" content="${url(p.file)}">
  <meta property="og:image" content="${BASE}icon.png">
  <meta property="og:image:alt" content="Offshot’s white icon with smiling screenshot cards">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${esc(p.title)}">
  <meta name="twitter:description" content="${esc(p.description)}">
  <meta name="twitter:image" content="${BASE}icon.png">
  <script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}</script>
</head>
<body><a class="skip-link" href="#main">Skip to content</a><div class="shell">${nav}<main id="main">${p.body}</main>${footer}</div></body>
</html>
`;
  writeFileSync(resolve(out,p.file),html);
}
writeFileSync(resolve(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p=>`  <url><loc>${url(p.file)}</loc><lastmod>${UPDATED}</lastmod></url>`).join('\n')}\n</urlset>\n`);
// Plain-text summary for answer engines and LLM crawlers; mirrors visible page content only.
writeFileSync(resolve(out,'llms.txt'),`# Offshot - Screenshot Cleaner

> Offshot is an iPhone screenshot cleaner and organizer (iOS 17.0 or later, U.S. App Store, English). It organizes screenshots with folders, tags and notes, searches text recognized on device, and deletes only screenshots the user selects and confirms through Photos. Free download; optional one-time Lifetime Ad Removal purchase, not a subscription. No Offshot account is required. Current version: ${VERSION}.

## Pages

${pages.map(p=>`- [${p.title}](${url(p.file)}): ${p.description}`).join('\n')}

## App Store

- [Offshot on the App Store](${STORE})

## Key facts

${questions.map(([q,a])=>`- ${q} ${a}`).join('\n')}
`);
console.log(`Built ${pages.length} static, script-independent Offshot pages and sitemap.`);
