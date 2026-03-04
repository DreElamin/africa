import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const sectionId = process.argv[3] || '';
const label = process.argv[4] || 'section';

const dir = './temporary screenshots';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const existing = fs.readdirSync(dir).map(f => {
  const m = f.match(/^screenshot-(\d+)/);
  return m ? parseInt(m[1]) : 0;
});
const n = existing.length ? Math.max(...existing) + 1 : 1;
const outPath = path.join(dir, `screenshot-${n}-${label}.png`);

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Scroll through to trigger all observers
const pageHeight = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < pageHeight; y += 400) {
  await page.evaluate(s => window.scrollTo(0, s), y);
  await new Promise(r => setTimeout(r, 150));
}
await new Promise(r => setTimeout(r, 400));

if (sectionId) {
  await page.evaluate(id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'instant' });
  }, sectionId);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: outPath });
} else {
  await page.evaluate(() => window.scrollTo(0,0));
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: outPath });
}

await browser.close();
console.log(`Screenshot saved: ${outPath}`);
