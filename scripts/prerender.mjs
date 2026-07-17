import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const ssrEntry = path.resolve(root, "dist-ssr/entry-server.js");
const distDir = path.resolve(root, "dist");
const baseIndexPath = path.resolve(distDir, "index.html");

const SITE_URL = "https://incredibleheart.care";

const routes = [
  {
    path: "/",
    outFile: "index.html",
    title: "Incredible Heart — Cardiologist in Saint Louis, MO | Cardiac Care, Everywhere",
    description:
      "Board-certified cardiologist Dr. Kunal Gurav, MD, FACC offers same-day in-person and virtual cardiac care in Saint Louis, MO — arrhythmia, heart failure, EKG, echocardiogram and more. Call (314) 557-2620.",
  },
  {
    path: "/weight-management",
    outFile: "weight-management/index.html",
    title: "Heart Disease & Weight Management Program | Incredible Heart, Saint Louis, MO",
    description:
      "Physician-supervised weight management from a board-certified cardiologist — insurance-approved medication, home smart scales, and coordinated heart-disease care in Saint Louis, MO.",
    extraHead: `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "@id": "${SITE_URL}/weight-management#webpage",
        "name": "Heart Disease & Weight Management Program",
        "url": "${SITE_URL}/weight-management",
        "about": {
          "@type": "MedicalTherapy",
          "name": "Physician-Supervised Weight Management",
          "provider": { "@id": "${SITE_URL}/#clinic" },
          "recognizingAuthority": { "@id": "${SITE_URL}/#clinic" }
        },
        "mainContentOfPage": {
          "@type": "WebPageElement",
          "about": "Coordinated cardiac and weight management care"
        },
        "isPartOf": { "@id": "${SITE_URL}/#clinic" }
      }
    </script>`,
  },
  {
    path: "/immigration-exam",
    outFile: "immigration-exam/index.html",
    title: "Immigration Medical Exam (Form I-693) | Incredible Heart, Saint Louis, MO",
    description:
      "USCIS-designated Civil Surgeon offering immigration medical examinations (Form I-693) in Saint Louis, MO. Two office visits, $439. Call (314) 557-2620.",
    extraHead: `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "@id": "${SITE_URL}/immigration-exam#webpage",
        "name": "Immigration Medical Exam (Form I-693)",
        "url": "${SITE_URL}/immigration-exam",
        "about": {
          "@type": "MedicalProcedure",
          "name": "Immigration Medical Examination (Form I-693)",
          "provider": { "@id": "${SITE_URL}/#clinic" },
          "recognizingAuthority": {
            "@type": "GovernmentOrganization",
            "name": "U.S. Citizenship and Immigration Services",
            "alternateName": "USCIS"
          },
          "offers": {
            "@type": "Offer",
            "price": "439",
            "priceCurrency": "USD"
          }
        },
        "isPartOf": { "@id": "${SITE_URL}/#clinic" }
      }
    </script>`,
  },
];

function replaceMetaContent(html, selectorAttr, selectorValue, newContent) {
  const re = new RegExp(`(<meta[^>]*${selectorAttr}=["']${selectorValue}["'][^>]*content=["'])[^"']*(["'][^>]*>)`);
  return html.replace(re, `$1${newContent}$2`);
}

const { render } = await import(pathToFileURL(ssrEntry).href);
const baseHtml = fs.readFileSync(baseIndexPath, "utf-8");

for (const route of routes) {
  const appHtml = render(route.path);
  const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;

  let html = baseHtml;
  if (!html.includes('<div id="root"></div>')) {
    throw new Error('Could not find <div id="root"></div> in dist/index.html to inject prerendered markup into.');
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
  html = replaceMetaContent(html, "name", "description", route.description);
  html = replaceMetaContent(html, "property", "og:title", route.title);
  html = replaceMetaContent(html, "property", "og:description", route.description);
  html = replaceMetaContent(html, "property", "og:url", url);
  html = replaceMetaContent(html, "name", "twitter:title", route.title);
  html = replaceMetaContent(html, "name", "twitter:description", route.description);
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);

  if (route.extraHead) {
    html = html.replace("</head>", `${route.extraHead}\n  </head>`);
  }

  const outPath = path.resolve(distDir, route.outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`Prerendered ${route.path} -> dist/${route.outFile}`);
}

fs.rmSync(path.resolve(root, "dist-ssr"), { recursive: true, force: true });
