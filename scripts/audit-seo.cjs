const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const buildDir = path.resolve(process.argv[2] || process.env.NEXT_BUILD_DIR || ".next");
const root = path.join(buildDir, "server", "app");
if (!fs.existsSync(path.join(root, "sitemap.xml.body"))) {
  console.error("Build the website first, then run npm run audit:seo -- <build-directory>.");
  process.exit(1);
}
const xml = new JSDOM(fs.readFileSync(path.join(root, "sitemap.xml.body"), "utf8"), { contentType: "text/xml" });
const urls = [...xml.window.document.querySelectorAll("loc")].map(node => node.textContent);
xml.window.close();
const redirects = JSON.parse(fs.readFileSync(path.join(buildDir, "routes-manifest.json"), "utf8")).redirects || [];
const errors = [];
const warnings = [];
const htmlPath = pathname => path.join(root, (pathname === "/" ? "index" : pathname.slice(1)) + ".html");
const documents = new Map();
function documentFor(pathname) {
  if (documents.has(pathname)) return documents.get(pathname);
  const file = htmlPath(pathname);
  if (!fs.existsSync(file)) return undefined;
  const dom = new JSDOM(fs.readFileSync(file, "utf8"), { url: new URL(pathname, urls[0]).href });
  documents.set(pathname, dom);
  return dom;
}
function redirectTarget(pathname) {
  for (const rule of redirects) {
    const match = new RegExp(rule.regex).exec(pathname);
    if (!match) continue;
    const names = [...rule.source.matchAll(/:([a-zA-Z][a-zA-Z0-9_]*)(?:[*+?])?/g)].map(m => m[1]);
    return rule.destination.replace(/:([a-zA-Z][a-zA-Z0-9_]*)(?:[*+?])?/g, (_, name) => match[names.indexOf(name) + 1] || "");
  }
}
function resolveRoute(pathname, seen = new Set()) {
  if (seen.has(pathname)) return undefined;
  seen.add(pathname);
  const target = redirectTarget(pathname);
  if (target && target.startsWith("/")) return resolveRoute(new URL(target, urls[0]).pathname, seen);
  return fs.existsSync(htmlPath(pathname)) ? pathname : undefined;
}
if (!urls.length || new Set(urls).size !== urls.length) errors.push("Sitemap is empty or contains duplicate URLs.");
const origin = new URL(urls[0]).origin;
let linkCount = 0;
for (const url of urls) {
  const parsed = new URL(url);
  const pathname = parsed.pathname;
  if (parsed.origin !== origin || parsed.search || parsed.hash) errors.push(url + ": inconsistent sitemap origin/query.");
  if (/^\/admin(?:\/|$)|^\/thank-you$|^\/all-pages$/.test(pathname)) errors.push(url + ": non-indexable route in sitemap.");
  const dom = documentFor(pathname);
  if (!dom) { errors.push(pathname + ": missing generated page."); continue; }
  const doc = dom.window.document;
  if (redirectTarget(pathname)) errors.push(pathname + ": sitemap URL redirects.");
  if (doc.querySelector('link[rel="canonical"]')?.href !== url) errors.push(pathname + ": canonical differs from sitemap URL.");
  if (/noindex/i.test(doc.querySelector('meta[name="robots"]')?.content || "")) errors.push(pathname + ": canonical sitemap page is noindex.");
  const title = doc.querySelector("title")?.textContent || "";
  if (!title || (title.match(/Zikhra/gi) || []).length !== 1) errors.push(pathname + ": missing/duplicated title brand.");
  const description = doc.querySelector('meta[name="description"]')?.content;
  if (!description) errors.push(pathname + ": missing description.");
  if (title.length > 95) warnings.push(pathname + ": long title (" + title.length + " characters).");
  if (description?.length > 200) warnings.push(pathname + ": long description (" + description.length + " characters).");
  if (doc.querySelectorAll("h1").length !== 1) errors.push(pathname + ": expected one H1.");
  for (const selector of ['meta[property="og:title"]', 'meta[property="og:description"]', 'meta[property="og:image"]', 'meta[name="twitter:card"]']) {
    if (!doc.querySelector(selector)?.content) errors.push(pathname + ": missing " + selector);
  }
  for (const node of doc.querySelectorAll('script[type="application/ld+json"]')) {
    try { JSON.parse(node.textContent); } catch { errors.push(pathname + ": invalid JSON-LD."); }
  }
  for (const image of doc.querySelectorAll("img")) {
    if (!image.hasAttribute("alt")) errors.push(pathname + ": image lacks alt attribute.");
    const source = image.getAttribute("src");
    if (source?.startsWith("/") && !source.startsWith("/_next/") && !fs.existsSync(path.join("public", new URL(source, origin).pathname.slice(1)))) errors.push(pathname + ": missing image " + source);
  }
  for (const link of doc.querySelectorAll("a[href]")) {
    const target = new URL(link.href, url);
    if (target.origin !== origin) continue;
    linkCount++;
    const resolved = resolveRoute(target.pathname);
    if (!resolved) { errors.push(pathname + ": broken internal link " + target.pathname); continue; }
    if (target.hash && !documentFor(resolved)?.window.document.getElementById(decodeURIComponent(target.hash.slice(1)))) errors.push(pathname + ": missing anchor " + target.href);
  }
}
for (const route of ["/admin/login", "/admin/dashboard", "/thank-you", "/all-pages"]) {
  if (!/noindex/i.test(documentFor(route)?.window.document.querySelector('meta[name="robots"]')?.content || "")) errors.push(route + ": missing noindex.");
}
const robots = fs.readFileSync(path.join(root, "robots.txt.body"), "utf8");
if (!robots.includes("Sitemap: " + origin + "/sitemap.xml")) errors.push("robots.txt does not point to the canonical sitemap.");
if (/Disallow:\s*\/$/m.test(robots)) errors.push("robots.txt blocks the entire website.");
const uniqueErrors = [...new Set(errors)];
const report = { canonicalPages: urls.length, internalLinksChecked: linkCount, errors: uniqueErrors, warnings };
fs.writeFileSync(path.join(buildDir, "seo-audit.json"), JSON.stringify(report, null, 2));
for (const dom of documents.values()) dom.window.close();
if (uniqueErrors.length) { console.error(uniqueErrors.join("\n")); process.exitCode = 1; }
else console.log("SEO audit passed: " + urls.length + " canonical pages, " + linkCount + " internal links, metadata, indexing rules, assets and JSON-LD.");
if (warnings.length) console.log(warnings.join("\n"));
