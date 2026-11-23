import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const routes = ["/studio", "/studio/discover", "/studio/earnings", "/studio/analytics", "/studio/portfolio", "/studio/profile", "/p/aicha-sani"];
const oldPalette = ["115, 87, 255", "90, 63, 240", "238, 235, 255", "197, 243, 107", "250, 250, 248", "244, 244, 241", "238, 238, 238", "119, 119, 119"];
let found = 0;

for (const route of routes) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:3100" + route, { waitUntil: "networkidle0", timeout: 60000 });
  const out = await page.evaluate((old) => {
    const hits = new Set();
    const colors = new Set();
    for (const el of document.querySelectorAll("*")) {
      const cs = getComputedStyle(el);
      for (const prop of ["color", "backgroundColor", "borderTopColor", "borderBottomColor", "outlineColor"]) {
        const v = cs[prop];
        if (!v || v === "rgba(0, 0, 0, 0)") continue;
        colors.add(v);
        for (const o of old) if (v.includes(o)) hits.add(`${prop}: ${v} <${el.tagName}>`);
      }
      const bg = cs.backgroundImage;
      for (const o of old) if (bg.includes(o)) hits.add(`backgroundImage <${el.tagName}>`);
    }
    return { hits: [...hits], palette: [...colors] };
  }, oldPalette);
  console.log(`\n=== ${route} — old colors: ${out.hits.length}`);
  out.hits.slice(0, 6).forEach((h) => console.log("   ", h));
  if (route === "/studio") {
    const sorted = out.palette.sort((a, b) => a.localeCompare(b));
    console.log("   palette:", sorted.join(" | "));
  }
  found += out.hits.length;
  await page.close();
}
await browser.close();
console.log("\nTOTAL OLD-COLOR HITS:", found);
