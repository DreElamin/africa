import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const pdfPath = path.resolve('./AT4D-Momentous.pdf');
const dir = './temporary screenshots';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 900, height: 1200 });

// Try each page via #page= hash or just navigate through thumbnails
for (let p = 2; p <= 4; p++) {
  await page.goto(`file:///${pdfPath}#page=${p}`, { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: `${dir}/pdf-p${p}.png` });
}

await browser.close();
console.log('Done');
