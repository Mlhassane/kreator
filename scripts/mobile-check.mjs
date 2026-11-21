import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3100";
const routes = ["/", "/marques", "/createurs", "/tarifs", "/connexion", "/inscription", "/dashboard"];

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars", "--font-render-hinting=none"],
});

const errors = [];

for (const width of [390, 768, 1440]) {
  for (const route of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 844, deviceScaleFactor: width === 390 ? 2 : 1 });
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" },
    ]);
    const pageErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") pageErrors.push(msg.text());
    });
    page.on("pageerror", (err) => pageErrors.push(err.message));
    await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
    await page.evaluate(async () => {
      await document.fonts.ready;
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise((r) => setTimeout(r, 800));
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 300));
    const report = await page.evaluate(() => {
      const doc = document.documentElement;
      const overflowing = [];
      const els = document.querySelectorAll("*");
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > doc.clientWidth + 1 || r.left < -1)) {
          overflowing.push({
            tag: el.tagName,
            cls: (el.getAttribute("class") || "").slice(0, 90),
            left: Math.round(r.left),
            right: Math.round(r.right),
            w: Math.round(r.width),
          });
        }
      }
      return {
        scrollW: doc.scrollWidth,
        clientW: doc.clientWidth,
        innerW: window.innerWidth,
        overflowing: overflowing.slice(0, 12),
      };
    });
    const status = report.scrollW > report.clientW + 1 ? "H-OVERFLOW" : "ok";
    console.log(`${status} :: ${route} @ ${width}px (scrollW=${report.scrollW} clientW=${report.clientW})`);
    if (report.overflowing.length) {
      console.log("   overflow els:", JSON.stringify(report.overflowing, null, 1));
    }
    if (pageErrors.length) errors.push(`${route} @ ${width} :: ${pageErrors.join(" | ")}`);
    await page.close();
  }
}

await browser.close();
console.log("CONSOLE/PAGE ERRORS:", JSON.stringify(errors, null, 2));
