import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const pdfPath = path.resolve('./AT4D-Momentous.pdf');
const dir = './temporary screenshots';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 900 });
await page.goto(`file:///${pdfPath}`, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 2000));

// Click page 2 thumbnail
const thumbs = await page.$$('.thumbnail');
if (thumbs[1]) {
  await thumbs[1].click();
  await new Promise(r => setTimeout(r, 1500));
}
await page.screenshot({ path: `${dir}/pdf-page2.png` });

if (thumbs[2]) {
  await thumbs[2].click();
  await new Promise(r => setTimeout(r, 1500));
}
await page.screenshot({ path: `${dir}/pdf-page3.png` });

await browser.close();
console.log('Done');
