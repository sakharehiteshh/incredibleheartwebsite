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
          {"@type": "Question", "name": "Can I request a same-day appointment?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Call (314) 557-2620, extension 7, to ask about same-day availability. Openings are not guaranteed."}},
          {"@type": "Question", "name": "Do you offer weekend appointments?", "acceptedAnswer": {"@type": "Answer", "text": "Weekend appointment slots are available by request, with a $50 weekend convenience fee. Call us to check availability."}},
          {"@type": "Question", "name": "What if I have an RFE or interview deadline?", "acceptedAnswer": {"@type": "Answer", "text": "Contact the scheduling team with the date and ask whether expedited appointment options are available. The clinic cannot guarantee laboratory turnaround times or USCIS processing outcomes."}},
          {"@type": "Question", "name": "Are blood or other samples collected on site?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, for applicable required tests, samples are collected at our on-site draw station. Some follow-up testing, vaccinations or specialist services may still require an outside facility."}},
          {"@type": "Question", "name": "How many visits will I need?", "acceptedAnswer": {"@type": "Answer", "text": "The process includes two office visits. The exact timing and any additional steps depend on your records and test results."}},
          {"@type": "Question", "name": "What should I bring?", "acceptedAnswer": {"@type": "Answer", "text": "Bring your photo ID and any vaccination records. We provide Form I-693 at the clinic, so please do not bring a printed copy."}},
          {"@type": "Question", "name": "How much does the exam cost?", "acceptedAnswer": {"@type": "Answer", "text": "We accept HSA/FSA cards. We don't bill insurance directly, but some patients have been reimbursed by submitting to their insurance themselves; it depends on your individual plan, copay, and deductible. Call us for the current fee and what it includes."}},
          {"@type": "Question", "name": "Can I text instead of calling?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, you can call or text (314) 557-2620. Please don't send passports, medical records or immigration notices by ordinary text."}}
        ]
      }
    </script>`;

const homeFaq = `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "${SITE_URL}/#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Is there a fee for my Incredible Membership?", "acceptedAnswer": { "@type": "Answer", "text": "No — we offer Incredible cardiology services at no extra cost other than your insurance copay, which is determined by your insurance." } }
        ]
      }
    </script>`;

const routes = [
  {
    path: "/",
    outFile: "index.html",
    title: "Incredible Heart | Cardiologist in Saint Louis, MO",
    description:
      "Call (314) 557-2620. Board-certified cardiologist Dr. Kunal Gurav offers same-day in-person and virtual cardiac care in Saint Louis, MO.",
    extraHead: homeFaq,
  },
  {
    path: "/weight-management",
    outFile: "weight-management/index.html",
    title: "Weight Management Program in St. Louis | Incredible Heart",
    description:
      "Cardiologist-supervised weight management in Saint Louis, MO: insurance-approved medication, home smart scales, and coordinated heart care.",
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
    title: "USCIS Immigration Medical Exam in St. Louis | Incredible Heart",
    description:
      "USCIS Form I-693 immigration medical exam in St. Louis. Ask about same-day visits, weekend appointments, and on-site sample collection.",
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
      "Meet Dr. Kunal Gurav and learn why Incredible Heart is an independent, preventive cardiology practice in Saint Louis, MO.",
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
    title: "Express Heart Care | Same-Day Heart Tests in St. Louis, MO",
    description:
      "EKG and cholesterol blood test in one visit, reviewed by a board-certified cardiologist. No referral needed. Same-day appointments in St. Louis.",
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
          {"@type": "Question", "name": "How quickly do I get results?", "acceptedAnswer": {"@type": "Answer", "text": "Our cardiologist will review your EKG and lab results, and a member of our care team will call you with the findings within 1–2 business days."}},
          {"@type": "Question", "name": "Can I use insurance?", "acceptedAnswer": {"@type": "Answer", "text": "Our services are self-pay for transparency and speed. We're HSA/FSA friendly, and we'll help you understand your options."}},
          {"@type": "Question", "name": "What should I bring?", "acceptedAnswer": {"@type": "Answer", "text": "Bring a valid ID. Wear comfortable clothing that allows easy access to your chest for the EKG."}},
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
