import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 900, deviceScaleFactor: 1 });
await page.goto("about:blank");
const html = `<html><body style="margin:0;background:#111;display:grid;grid-template-columns:repeat(10,1fr);gap:2px;font:12px sans-serif">
${Array.from({ length: 70 }, (_, i) => `<div style="position:relative"><img src="http://localhost:3199/${i + 1}.jpg" style="width:100%;aspect-ratio:1;object-fit:cover;display:block"><span style="position:absolute;top:2px;left:2px;background:#000;color:#fff;padding:1px 4px">${i + 1}</span></div>`).join("")}
</body></html>`;
await page.setContent(html, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: "/private/var/folders/n6/nptb7pgx22j0v0s71gdfs7_00000gn/T/opencode/kreator-shots/avatars.png", fullPage: true });
await browser.close();
console.log("ok");
