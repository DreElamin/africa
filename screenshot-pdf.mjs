import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const pdfPath = path.resolve('./AT4D-Momentous.pdf');
const dir = './temporary screenshots';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 900 });
await page.goto(`file:///${pdfPath}`, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: `${dir}/pdf-page1.png` });
await browser.close();
console.log('Done');
