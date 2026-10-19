import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const ssrEntry = path.resolve(root, "dist-ssr/entry-server.js");
const distDir = path.resolve(root, "dist");
const baseIndexPath = path.resolve(distDir, "index.html");

const SITE_URL = "https://incredibleheart.care";


const breadcrumb = (name, pathName) => `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${SITE_URL}/" },
          { "@type": "ListItem", "position": 2, "name": "${name}", "item": "${SITE_URL}${pathName}" }
        ]
      }
    </script>`;

const immigrationFaq = `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How many visits does the exam take?", "acceptedAnswer": { "@type": "Answer", "text": "Two. The first visit is the initial exam and identifies any additional testing you need. The second visit is to complete and seal Form I-693 once results are back." } },
          { "@type": "Question", "name": "Is additional testing covered by insurance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — any additional testing your Civil Surgeon orders is insurance-covered and can be completed at a facility of your choice. We provide referrals." } },
          { "@type": "Question", "name": "When is payment due?", "acceptedAnswer": { "@type": "Answer", "text": "The fee covers both office visits and is due at your first visit." } }
        ]
      }
    </script>`;

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
        "@id": "${SITE_URL}/weight-management/#webpage",
        "name": "Heart Disease & Weight Management Program",
        "url": "${SITE_URL}/weight-management/",
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
    </script>${breadcrumb("Weight Management", "/weight-management/")}`,
  },
  {
    path: "/immigrationexam",
    outFile: "immigrationexam/index.html",
    title: "Immigration Medical Exam (Form I-693) | Incredible Heart, Saint Louis, MO",
    description:
      "USCIS-designated Civil Surgeon offering immigration medical examinations (Form I-693) in Saint Louis, MO. Two office visits. Call (314) 557-2620.",
    extraHead: `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "@id": "${SITE_URL}/immigrationexam/#webpage",
        "name": "Immigration Medical Exam (Form I-693)",
        "url": "${SITE_URL}/immigrationexam/",
        "about": {
          "@type": "MedicalProcedure",
          "name": "Immigration Medical Examination (Form I-693)",
          "provider": { "@id": "${SITE_URL}/#clinic" },
          "recognizingAuthority": {
            "@type": "GovernmentOrganization",
            "name": "U.S. Citizenship and Immigration Services",
            "alternateName": "USCIS"
          }
        },
        "isPartOf": { "@id": "${SITE_URL}/#clinic" }
      }
    </script>${breadcrumb("Immigration Exam", "/immigrationexam/")}${immigrationFaq}`,
  },
  {
    path: "/about-us",
    outFile: "about-us/index.html",
    title: "About Us | Incredible Heart, Saint Louis, MO",
    description:
      "Meet Dr. Kunal Gurav and learn why Incredible Heart was built as an independent, preventive cardiology practice focused on personalized, technology-enabled heart care in Saint Louis, MO.",
    extraHead: `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "${SITE_URL}/about-us/#webpage",
        "name": "About Incredible Heart",
        "url": "${SITE_URL}/about-us/",
        "mainEntity": { "@id": "${SITE_URL}/#dr-gurav" },
        "isPartOf": { "@id": "${SITE_URL}/#clinic" }
      }
    </script>${breadcrumb("About Us", "/about-us/")}`,
  },
  {
    path: "/express-heart-care",
    outFile: "express-heart-care/index.html",
    title: "Express Heart Care | Heart Screening in Minutes, Saint Louis, MO",
    description:
      "Express Heart Care offers fast in-clinic heart screening in Saint Louis, MO — EKG, cholesterol, heart attack risk score and more, reviewed by a board-certified cardiologist. From $55. Call (314) 248-4076.",
    extraHead: `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "@id": "${SITE_URL}/express-heart-care/#webpage",
        "name": "Express Heart Care",
        "url": "${SITE_URL}/express-heart-care/",
        "isPartOf": { "@id": "${SITE_URL}/#clinic" }
      }
    </script>${breadcrumb("Express Heart Care", "/express-heart-care/")}
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "Who should get tested?", "acceptedAnswer": {"@type": "Answer", "text": "Anyone above 20 years of age should get these tests as recommended by CDC (Centers for Disease Control and Prevention) and AHA (American Heart Association). Early detection is key to preventing heart disease, even if you feel healthy."}},
          {"@type": "Question", "name": "How quickly do I get results?", "acceptedAnswer": {"@type": "Answer", "text": "Most results are available within 30 minutes. Our cardiologist reviews your tests and provides a comprehensive report with clear next steps within 24-48 hours."}},
          {"@type": "Question", "name": "Can I use insurance?", "acceptedAnswer": {"@type": "Answer", "text": "Our services are self-pay for transparency and speed. We're HSA/FSA friendly, and we'll help you understand your options."}},
          {"@type": "Question", "name": "What should I bring?", "acceptedAnswer": {"@type": "Answer", "text": "Bring a valid ID. Wear comfortable clothing that allows easy access to your chest for the EKG and Heart Sound Exam."}},
          {"@type": "Question", "name": "Do I need a referral?", "acceptedAnswer": {"@type": "Answer", "text": "No referral needed! You can schedule directly with us. We're here to make heart tests accessible and convenient for everyone."}},
          {"@type": "Question", "name": "Is it HIPAA compliant?", "acceptedAnswer": {"@type": "Answer", "text": "Absolutely. We're fully HIPAA-compliant with encrypted data storage. Your privacy and security are our top priorities."}}
        ]
      }
    </script>`,
  },
  {
    path: "/__404",
    outFile: "404.html",
    notFound: true,
    title: "Page not found | Incredible Heart",
    description: "The page you're looking for doesn't exist.",
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
  const url = `${SITE_URL}${route.path === "/" || route.notFound ? "/" : route.path + "/"}`;

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
  if (route.notFound) {
    html = html.replace(/<meta name="robots" content="[^"]*"/, '<meta name="robots" content="noindex, follow"');
    html = html.replace(/<link rel="canonical"[^>]*>\s*/, "");
  }

  if (route.extraHead) {
    html = html.replace("</head>", `${route.extraHead}\n  </head>`);
  }

  const outPath = path.resolve(distDir, route.outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`Prerendered ${route.path} -> dist/${route.outFile}`);
}

fs.rmSync(path.resolve(root, "dist-ssr"), { recursive: true, force: true });
