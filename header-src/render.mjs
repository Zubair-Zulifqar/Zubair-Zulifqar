// Renders header.html to .github/assets/header-{light,dark}.png at 2048x576.
// Usage: node header-src/render.mjs  (run from the profile repo root; needs the playwright package)
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, '..', '.github', 'assets');
fs.mkdirSync(out, { recursive: true });
const url = pathToFileURL(path.join(here, 'header.html')).href;

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 2048, height: 576 } });
for (const theme of ['light', 'dark']) {
  await page.goto(`${url}#${theme}`);
  await page.reload();
  await page.screenshot({ path: path.join(out, `header-${theme}.png`) });
}
await browser.close();
console.log('wrote', out);
