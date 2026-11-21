import puppeteer from "puppeteer-core";
import fs from "node:fs/promises";

const [route = "/", y = "0", height = "900", width = "1440", name = "clip"] =
  process.argv.slice(2);
const OUT = "/private/var/folders/n6/nptb7pgx22j0v0s71gdfs7_00000gn/T/opencode/kreator-shots";
await fs.mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars", "--font-render-hinting=none"],
});

const page = await browser.newPage();
await page.setViewport({ width: Number(width), height: 900, deviceScaleFactor: 1 });
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "reduce" },
]);
await page.goto("http://localhost:3100" + route, { waitUntil: "networkidle0", timeout: 60000 });
await page.evaluate(async () => {
  await document.fonts.ready;
  const step = window.innerHeight;
  for (let i = 0; i < document.body.scrollHeight; i += step) {
    window.scrollTo(0, i);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 600));

await page.screenshot({
  path: `${OUT}/${name}.png`,
  clip: { x: 0, y: Number(y), width: Number(width), height: Number(height) },
  captureBeyondViewport: true,
});
console.log(`${OUT}/${name}.png`);
await browser.close();
