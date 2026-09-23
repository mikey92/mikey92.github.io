import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = resolve(ROOT, 'screenshot-cleaner');
const BASE = 'https://mikey92.github.io/screenshot-cleaner/';
const STORE = 'https://apps.apple.com/us/app/offshot-screenshot-cleaner/id6812286993';
const read = path => readFileSync(resolve(ROOT, path), 'utf8');
const decode = s => s.replace(/&(amp|lt|gt|quot|#39);/g, (_, x) => ({ amp:'&', lt:'<', gt:'>', quot:'"', '#39':"'" })[x]);
const files = readdirSync(DIR).filter(f => f.endsWith('.html'));
assert.equal(files.length, 6);
const titles = new Set(), descriptions = new Set(), urls = new Set();
let checkedLinks = 0;
for (const f of files) {
  const html = read('screenshot-cleaner/' + f);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${f}: one H1`);
  assert.equal((html.match(/<main(?:\s|>)/g) || []).length, 1, `${f}: one main`);
  assert.match(html, /<html lang="en-US">/);
  assert.match(html, /name="viewport"/);
  assert.doesNotMatch(html, /Not yet released|coming soon|6811431621|\bnoindex\b/i);
  const title = decode(html.match(/<title>([^<]+)<\/title>/)[1]);
  const description = decode(html.match(/name="description" content="([^"]+)"/)[1]);
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)[1];
  assert.equal(canonical, BASE + (f === 'index.html' ? '' : f));
  assert.ok(title.length <= 65, `${f}: concise title (${title.length})`);
  assert.ok(description.length <= 170, `${f}: concise description (${description.length})`);
  titles.add(title); descriptions.add(description); urls.add(canonical);
  assert.ok(html.includes(`property="og:url" content="${canonical}"`));
  assert.ok(html.includes(`href="${STORE}"`));
  const scripts = [...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1, `${f}: no runtime/tracking scripts`);
  assert.equal(scripts[0][1].trim(), 'type="application/ld+json"');
  const json = JSON.parse(scripts[0][2]);
  assert.equal(json['@context'], 'https://schema.org');
  assert.ok(json['@graph'].some(x => x['@type'] === 'WebPage' && x.url === canonical));
  assert.doesNotMatch(JSON.stringify(json), /aggregateRating|ratingValue|reviewCount/);
  const app = json['@graph'].find(x => x['@type'] === 'SoftwareApplication');
  if (f === 'index.html') {
    assert.ok(app);
    assert.match(html, /name="google-site-verification" content="_6Eghz8g6QdLdFuqAr3pnvpvAC4uWZ2wjczGvd5_r-g"/);
    assert.equal(app.downloadUrl, STORE);
    assert.equal(app.offers.price, '0');
    assert.equal(app.offers.priceCurrency, 'USD');
  }
  const faq = json['@graph'].find(x => x['@type'] === 'FAQPage');
  if (f === 'faq.html') {
    assert.equal(faq.mainEntity.length, 11);
    const visible = decode(html.replace(/<script[\s\S]*?<\/script>/g, ''));
    for (const q of faq.mainEntity) {
      assert.ok(visible.includes(q.name), `FAQ question visible: ${q.name}`);
      assert.ok(visible.includes(q.acceptedAnswer.text), `FAQ answer visible: ${q.name}`);
    }
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, `${f}: unique IDs`);
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = new URL(decode(m[1]), canonical);
    if (target.origin !== new URL(BASE).origin) continue;
    assert.ok(target.pathname.startsWith('/screenshot-cleaner/'), `${f}: links stay in app scope`);
    let name = target.pathname.slice('/screenshot-cleaner/'.length) || 'index.html';
    if (name === 'icon.png' && !process.argv.includes('--require-icon')) continue;
    assert.ok(existsSync(resolve(DIR, name)), `${f}: missing ${name}`);
    if (target.hash) {
      const destination = read('screenshot-cleaner/' + name);
      assert.ok(destination.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${f}: broken anchor ${m[1]}`);
    }
    checkedLinks++;
  }
  console.log(`${f}: title ${title.length}, description ${description.length}; metadata/schema/links OK`);
}
assert.equal(titles.size, files.length);
assert.equal(descriptions.size, files.length);
assert.equal(urls.size, files.length);
for (const f of files) {
  const graph = JSON.parse(read('screenshot-cleaner/' + f).match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const crumb = graph.find(x => x['@type'] === 'BreadcrumbList');
  if (crumb) assert.doesNotMatch(crumb.itemListElement[1].name, /[—|]/, `${f}: short breadcrumb name`);
}
const llms = read('screenshot-cleaner/llms.txt');
assert.match(llms, /^# Offshot - Screenshot Cleaner\n/);
for (const u of urls) assert.ok(llms.includes(`(${u})`), `llms.txt lists ${u}`);
assert.ok(llms.includes(STORE));
const sitemap = read('screenshot-cleaner/sitemap.xml');
const mapped = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
assert.deepEqual([...urls].sort(), mapped.sort());
assert.ok(read('robots.txt').includes(`Sitemap: ${BASE}sitemap.xml`));
assert.doesNotMatch(read('robots.txt'), /Disallow:\s*\/(?:\s*$|screenshot-cleaner)/m);
const original = read('source/privacy-original.html').split('</nav>')[1].split('<footer')[0];
assert.ok(read('screenshot-cleaner/privacy.html').includes(original), 'Original policy text must remain unchanged');
const aso = read('docs/offshot-aso-next-version.md');
const name = aso.match(/Name \(keep current\): `([^`]+)`/)[1];
const subtitle = aso.match(/Subtitle: `([^`]+)`/)[1];
const keywords = aso.match(/Keywords: `([^`]+)`/)[1];
assert.ok(name.length <= 30 && subtitle.length <= 30 && keywords.length <= 100);
assert.equal(keywords.split(',').length, new Set(keywords.split(',')).size);
for (const word of keywords.split(',')) assert.ok(!`${name} ${subtitle}`.toLowerCase().split(/[^a-z]+/).includes(word), `ASO duplicated word: ${word}`);
console.log(`PASS: 6 pages, ${checkedLinks} local links, 11 matching FAQs, unique metadata, canonical sitemap, unchanged privacy policy.`);
console.log(`ASO candidate limits: name ${name.length}/30; subtitle ${subtitle.length}/30; keywords ${keywords.length}/100.`);
