import puppeteer from "puppeteer-core";
import fs from "node:fs/promises";

const BASE = "http://localhost:3100";
const OUT = "/private/var/folders/n6/nptb7pgx22j0v0s71gdfs7_00000gn/T/opencode/kreator-shots";

const pages = process.argv.slice(2);
const targets = pages.length
  ? pages
  : ["/", "/marques", "/createurs", "/tarifs", "/connexion", "/inscription", "/dashboard"];

await fs.mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars", "--font-render-hinting=none"],
});

const errors = [];

for (const route of targets) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`${route} :: ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`${route} :: ${err.message}`));
  await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
    window.scrollTo(0, document.body.scrollHeight);
  });
  await new Promise((r) => setTimeout(r, 900));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));
  const name = route === "/" ? "home" : route.replace(/\//g, "-").replace(/^-/, "");
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  console.log(`shot ${name}`);
  await page.close();
}

await browser.close();
console.log("errors:", JSON.stringify(errors, null, 2));
console.log("out:", OUT);
