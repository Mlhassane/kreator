import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3100";
const routes = [
  "/studio",
  "/studio/discover",
  "/studio/campaigns",
  "/studio/campaigns/beaute-naturelle",
  "/studio/portfolio",
  "/studio/analytics",
  "/studio/earnings",
  "/studio/messages",
  "/studio/profile",
  "/p/aicha-sani",
];

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars", "--font-render-hinting=none"],
});

const errors = [];

for (const width of [390, 1440]) {
  for (const route of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 844, deviceScaleFactor: 1 });
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" },
    ]);
    const pageErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") pageErrors.push(msg.text());
    });
    page.on("pageerror", (err) => pageErrors.push(err.message));

    let status = 0;
    try {
      const res = await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
      status = res?.status() ?? 0;
    } catch (e) {
      pageErrors.push(String(e));
    }

    await page.evaluate(async () => {
      await document.fonts.ready;
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise((r) => setTimeout(r, 500));
    await page.evaluate(() => window.scrollTo(0, 0));

    const report = await page.evaluate(() => {
      const doc = document.documentElement;
      const overflow = [];
      for (const el of document.querySelectorAll("*")) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > doc.clientWidth + 1 || r.left < -1)) {
          overflow.push({
            tag: el.tagName,
            cls: (el.getAttribute("class") || "").slice(0, 80),
            left: Math.round(r.left),
            right: Math.round(r.right),
          });
        }
      }
      const bottomNav = [...document.querySelectorAll("nav")].find((n) =>
        (n.getAttribute("class") || "").includes("fixed"),
      );
      const aside = document.querySelector("aside");
      return {
        scrollW: doc.scrollWidth,
        clientW: doc.clientWidth,
        overflow: overflow.slice(0, 8),
        hasAside: Boolean(aside),
        asideVisible: aside ? getComputedStyle(aside).display !== "none" : false,
        bottomNavVisible: bottomNav
          ? getComputedStyle(bottomNav).display !== "none"
          : false,
      };
    });

    const ok = status === 200 && report.scrollW <= report.clientW + 1 && pageErrors.length === 0;
    console.log(
      `${ok ? "ok  " : "FAIL"} :: ${route} @ ${width}px  status=${status} scrollW=${report.scrollW}/${report.clientW} aside=${report.asideVisible} bottomNav=${report.bottomNavVisible}`,
    );
    if (report.overflow.length) {
      console.log("   overflow:", JSON.stringify(report.overflow));
    }
    if (pageErrors.length) {
      console.log("   errors:", pageErrors.join(" | ").slice(0, 300));
      errors.push(`${route}@${width}: ${pageErrors.join(" | ")}`);
    }
    await page.close();
  }
}

await browser.close();
console.log("\nTOTAL ERRORS:", errors.length);
