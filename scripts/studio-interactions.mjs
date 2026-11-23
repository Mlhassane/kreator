import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3100";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars"],
});

const results = [];
const check = (name, ok, detail = "") => {
  results.push({ name, ok, detail });
  console.log(`${ok ? "PASS" : "FAIL"} :: ${name}${detail ? ` — ${detail}` : ""}`);
};

async function newPage(route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
  return page;
}

const clickByText = (page, selector, text) =>
  page.evaluate(
    (sel, txt) => {
      const el = [...document.querySelectorAll(sel)].find((node) =>
        (node.textContent || "").trim().includes(txt),
      );
      if (!el) return false;
      el.click();
      return true;
    },
    selector,
    text,
  );

const textExists = (page, text) =>
  page.evaluate(
    (txt) => (document.body.innerText || "").includes(txt),
    text,
  );

// ── Discover ─────────────────────────────────────────────
{
  const page = await newPage("/studio/discover");
  const total = await page.$$eval("article", (els) => els.length);
  check("Discover — 9 campagnes affichées", total === 9, `${total} cartes`);

  await clickByText(page, "button", "UGC");
  await new Promise((r) => setTimeout(r, 250));
  const ugc = await page.$$eval("article", (els) => els.length);
  check("Discover — filtre UGC", ugc === 6, `${ugc} cartes UGC`);

  await clickByText(page, "button", "Tout");
  await new Promise((r) => setTimeout(r, 250));

  const applied = await clickByText(page, "button", "Postuler");
  await new Promise((r) => setTimeout(r, 300));
  check("Discover — candidature", applied && (await textExists(page, "Candidature envoyée")));

  await clickByText(page, "button", "Voir la campagne");
  await new Promise((r) => setTimeout(r, 300));
  check(
    "Discover — modale détail",
    (await textExists(page, "créateurs ont déjà postulé")) ||
      (await textExists(page, "Postuler maintenant")),
  );
  await page.close();
}

// ── Campagnes ────────────────────────────────────────────
{
  const page = await newPage("/studio/campaigns");
  const countCards = () =>
    page.$$eval("a[href^='/studio/campaigns/']", (els) => els.length);

  await clickByText(page, "button", "Terminées");
  await new Promise((r) => setTimeout(r, 250));
  const done = await countCards();
  check("Campaigns — onglet Terminées", done === 1, `${done} carte`);
  check("Campaigns — statut payé", await textExists(page, "Paiement effectué"));

  await clickByText(page, "button", "En attente");
  await new Promise((r) => setTimeout(r, 250));
  const pending = await countCards();
  check("Campaigns — onglet En attente", pending === 1, `${pending} carte`);
  await page.close();
}

// ── Messages ─────────────────────────────────────────────
{
  const page = await newPage("/studio/messages");
  const input = await page.$("input[placeholder^='Écrire à']");
  check("Messages — champ de saisie", Boolean(input));
  if (input) {
    await input.type("Test automatique de message");
    await input.press("Enter");
    await new Promise((r) => setTimeout(r, 300));
    check("Messages — envoi", await textExists(page, "Test automatique de message"));
  }
  await page.close();
}

// ── Earnings ─────────────────────────────────────────────
{
  const page = await newPage("/studio/earnings");
  await clickByText(page, "button", "Demander un retrait");
  await new Promise((r) => setTimeout(r, 300));
  check("Earnings — modale retrait", await textExists(page, "Moyen de retrait"));
  await clickByText(page, "button", "Confirmer");
  await new Promise((r) => setTimeout(r, 300));
  check("Earnings — confirmation", await textExists(page, "Demande de retrait envoyée"));
  await page.close();
}

// ── Profile ──────────────────────────────────────────────
{
  const page = await newPage("/studio/profile");
  await clickByText(page, "button", "Enregistrer");
  await new Promise((r) => setTimeout(r, 300));
  check("Profile — sauvegarde", await textExists(page, "Profil enregistré"));
  await page.close();
}

// ── Portfolio ────────────────────────────────────────────
{
  const page = await newPage("/studio/portfolio");
  check("Portfolio — lien public", await textExists(page, "kreator.africa/p/aicha-sani"));
  await page.close();
}

await browser.close();
const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} tests passés`);
if (failed.length) process.exitCode = 1;
