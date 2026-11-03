import { useState } from "react";
import { Phone, MapPin, Mail, Check, Activity, Droplet, ShieldCheck, Clock, UserCheck, ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { useRouteContact } from "@/hooks/use-route-contact";
import { AddressLink } from "@/components/AddressLink";
import { EXPRESS_SITE_URL } from "@/lib/siteContact";

const bloodPanel = [
  "Checks cholesterol and other blood fats",
  "Measures your total cholesterol",
  "Checks LDL, linked to artery buildup",
  "Checks HDL, which helps remove cholesterol",
  "Measures triglycerides, linked to heart disease risk",
];

const ekgPoints = [
  "Checks how fast your heart beats",
  "Looks for an uneven heart rhythm",
  "Checks your heart's electrical signals",
  "May reveal signs of past heart damage",
  "Gives 12 electrical views, versus a smartwatch's single view",
];

const cholesterolTypes = {
  LDL: "LDL carries cholesterol to your arteries. High levels can build up as plaque, narrowing arteries and raising your risk of heart attack or stroke.",
  HDL: "HDL helps carry cholesterol back to your liver, where your body can remove it. Higher HDL levels are linked to lower heart disease risk.",
  Triglycerides: "Triglycerides are fats in your blood from calories your body doesn't use right away. High levels combined with high LDL or low HDL raise heart disease risk.",
} as const;

const steps = [
  { title: "Express Heart Tests", text: "Your in-clinic visit takes minutes. Most visits are completed in under 15 minutes." },
  { title: "Cardiologist Analysis", text: "A board-certified cardiologist interprets your results with expert precision." },
  { title: "Expert Opinion", text: "Our care team will call you with the findings and next steps. Follow-up options are available if needed." },
];

const stats = [
  { big: "Every 40 seconds", title: "Heart attacks happen often", text: "someone in the U.S. has a heart attack.", source: "American Heart Association" },
  { big: "80%", title: "Heart disease is preventable", text: "of heart disease is preventable with early detection and lifestyle changes.", source: "World Health Organization" },
  { big: "Nearly 45%", title: "Silent heart attacks", text: "of heart attacks are “silent” — occurring without obvious symptoms but causing permanent heart damage.", source: "American Heart Association" },
  { big: "Age 20+", title: "Routine cholesterol checks", text: "The American Heart Association recommends that all adults 20 or older have their cholesterol tested.", source: "American Heart Association" },
];

const references = [
  { org: "American Heart Association", text: "“Heart Disease and Stroke Statistics—2024 Update.” Circulation. 2024;149:e347-e913.", href: "https://www.heart.org/en/about-us/heart-and-stroke-association-statistics" },
  { org: "World Health Organization", text: "“Cardiovascular diseases (CVDs).” WHO Fact Sheet. Updated June 2021.", href: "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)" },
  { org: "American Heart Association", text: "“About half of all heart attacks are mistaken for less serious problems and can increase your risk of dying from coronary artery disease.”", href: "https://www.heart.org/en/health-topics/heart-attack/about-heart-attacks/silent-heart-attack" },
  { org: "American College of Cardiology", text: "“Cardiovascular Screening and Risk Assessment.” ACC Clinical Guidelines. Early detection through comprehensive screening can identify disease years before clinical symptoms manifest.", href: "https://www.acc.org/guidelines" },
  { org: "American Heart Association", text: "“How to Get Your Cholesterol Tested.” AHA. Accessed March 2024.", href: "https://www.heart.org/en/health-topics/cholesterol/how-to-get-your-cholesterol-tested" },
];

const plans = [
  {
    name: "Electrocardiogram (ECG/EKG)", was: "$350", price: "$49", blurb: "One comprehensive visit",
    features: ["12-Lead EKG / ECG", "Board-Certified Cardiologist Review"], featured: true,
  },
  {
    name: "Blood Test", was: "$49", price: "$0", blurb: "* If EKG is done",
    features: ["Detailed Cholesterol Test", "Heart Risk Score", "Board-Certified Cardiologist Review"], featured: false,
  },
];

const faqs = [
  { q: "Who should get tested?", a: "Anyone above 20 years of age should get these tests as recommended by CDC (Centers for Disease Control and Prevention) and AHA (American Heart Association). Early detection is key to preventing heart disease, even if you feel healthy." },
  { q: "How quickly do I get results?", a: "Our cardiologist will review your EKG and lab results, and a member of our care team will call you with the findings within 1–2 business days." },
  { q: "Can I use insurance?", a: "Our services are self-pay for transparency and speed. We're HSA/FSA friendly, and we'll help you understand your options." },
  { q: "What should I bring?", a: "Bring a valid ID. Wear comfortable clothing that allows easy access to your chest for the EKG." },
  { q: "Do I need a referral?", a: "No referral needed! You can schedule directly with us. We're here to make heart tests accessible and convenient for everyone." },
  { q: "Is it HIPAA compliant?", a: "Absolutely. We're fully HIPAA-compliant with encrypted data storage. Your privacy and security are our top priorities." },
];

function ExpressHeartCare() {
  useDocumentMeta(
    "Express Heart Care | Same-Day Heart Tests in St. Louis, MO",
    "Get an EKG and cholesterol blood test in one visit — reviewed by a board-certified cardiologist. No referral needed. HSA/FSA accepted. Same-day appointments in St. Louis, MO.",
  );
  const [showWatch, setShowWatch] = useState(false);
  const [showChol, setShowChol] = useState(false);
  const [chol, setChol] = useState<keyof typeof cholesterolTypes>("HDL");
  const [showRefs, setShowRefs] = useState(false);
  const { phone, email, address, bookingUrl } = useRouteContact();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-base font-bold tracking-widest text-[var(--brand-pink)] uppercase">
              Express Heart Care
            </span>
            <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Heart Tests in Minutes Reviewed by a Board-Certified Cardiologist
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              An EKG and a cardiac blood panel in one visit. No referral needed. Skip the wait and get tested today.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              {[
                { icon: UserCheck, t: "Board-Certified Cardiologist" },
                { icon: ShieldCheck, t: "HIPAA-Compliant" },
                { icon: Clock, t: "Same-Day Appointments" },
              ].map((b) => (
                <li key={b.t} className="flex items-center gap-2">
                  <b.icon className="w-5 h-5 text-[var(--brand-blue)]" /> {b.t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--brand-pink)] text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
              >
                Schedule My Heart Tests
              </a>
              <a href="#tests" className="inline-flex items-center gap-2 text-foreground font-semibold underline underline-offset-4 decoration-2 decoration-[var(--brand-blue)]">
                See What's Included
              </a>
              <a href={phone.href} className="inline-flex items-center gap-2 text-foreground font-semibold underline underline-offset-4 decoration-2 decoration-[var(--brand-blue)]">
                <Phone className="w-4 h-4" /> Call us: {phone.display}
              </a>
            </div>
            <p className="mt-6 text-foreground/70">
              For more information, visit{" "}
              <a href={EXPRESS_SITE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--brand-blue)] underline underline-offset-4">
                www.expressheartcare.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="tests" className="bg-white border-y border-border/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Two tests. One visit.<br />A clearer picture of your heart.</h2>
            <p className="mt-5 text-lg text-foreground/70">No referral needed. Results in minutes. Every test reviewed by a board-certified cardiologist.</p>
          </div>
          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-border bg-white p-8">
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-blue)] text-white flex items-center justify-center"><Activity className="w-6 h-6" /></div>
              <h3 className="mt-5 text-2xl font-bold">12-Lead EKG / ECG</h3>
              <p className="mt-1 text-xs font-bold tracking-widest uppercase text-[var(--brand-pink)]">Your heart's electrical activity</p>
              <ul className="mt-4 space-y-2 text-foreground/80">
                {ekgPoints.map((p) => (
                  <li key={p} className="flex gap-3"><Check className="w-5 h-5 text-[var(--brand-blue)] mt-0.5 shrink-0" /> {p}</li>
                ))}
              </ul>
              <button type="button" onClick={() => setShowWatch((v) => !v)} aria-expanded={showWatch} className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--brand-blue)] cursor-pointer">
                Compare with my smartwatch <ChevronDown className={`w-4 h-4 transition-transform ${showWatch ? "rotate-180" : ""}`} />
              </button>
              {showWatch && (
                <div className="mt-4 rounded-2xl bg-[var(--brand-cream)] p-5">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div><div className="text-4xl font-extrabold text-[var(--brand-blue)]">1</div><div className="text-sm text-foreground/70">electrical view<br />Apple Watch ECG</div></div>
                    <div><div className="text-4xl font-extrabold text-[var(--brand-pink)]">12</div><div className="text-sm text-foreground/70">electrical views<br />Clinical 12-Lead EKG</div></div>
                  </div>
                  <p className="mt-4 text-sm text-foreground/75">More views give your doctor a more detailed picture of your heart's electrical activity. A normal EKG does not rule out every heart problem.</p>
                </div>
              )}
            </div>
            <div className="rounded-3xl border border-border bg-white p-8">
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-blue)] text-white flex items-center justify-center"><Droplet className="w-6 h-6" /></div>
              <h3 className="mt-5 text-2xl font-bold">Cardiac Blood Panel</h3>
              <p className="mt-1 text-xs font-bold tracking-widest uppercase text-[var(--brand-pink)]">Your cholesterol and blood fats</p>
              <ul className="mt-4 space-y-2 text-foreground/80">
                {bloodPanel.map((p) => (
                  <li key={p} className="flex gap-3"><Check className="w-5 h-5 text-[var(--brand-blue)] mt-0.5 shrink-0" /> {p}</li>
                ))}
              </ul>
              <button type="button" onClick={() => setShowChol((v) => !v)} aria-expanded={showChol} className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--brand-blue)] cursor-pointer">
                Explore cholesterol types <ChevronDown className={`w-4 h-4 transition-transform ${showChol ? "rotate-180" : ""}`} />
              </button>
              {showChol && (
                <div className="mt-4 rounded-2xl bg-[var(--brand-cream)] p-5">
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(cholesterolTypes) as (keyof typeof cholesterolTypes)[]).map((k) => (
                      <button
                        key={k}
                        type="button"
                        onClick={() => setChol(k)}
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition ${chol === k ? "bg-[var(--brand-blue)] text-white" : "bg-white border border-border text-foreground"}`}
                      >
                        {k}
                      </button>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-foreground/80">{cholesterolTypes[chol]}</p>
                  <p className="mt-3 text-xs text-foreground/60">Your doctor considers these results alongside your age, blood pressure, health history, and smoking habits. This test does not show whether an artery is blocked.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Prevention made easy</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-3xl bg-white border border-border p-8">
                <div className="w-10 h-10 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center font-bold">{i + 1}</div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why screen */}
      <section className="bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-base font-bold tracking-widest text-[var(--brand-pink)] uppercase">Why screen your heart?</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">Catch it early, treat it fast.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.big} className="rounded-3xl bg-white border border-border p-8">
                <div className="text-sm font-bold tracking-widest uppercase text-[var(--brand-pink)]">{s.title}</div>
                <div className="mt-2 text-3xl font-extrabold text-[var(--brand-blue)]">{s.big}</div>
                <p className="mt-3 text-foreground/80 leading-relaxed">{s.text}</p>
                <p className="mt-3 text-xs text-foreground/60">Source: {s.source}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button type="button" onClick={() => setShowRefs((v) => !v)} aria-expanded={showRefs} className="inline-flex items-center gap-2 font-semibold text-[var(--brand-blue)] cursor-pointer">
              Learn More &amp; View Full References <ChevronDown className={`w-4 h-4 transition-transform ${showRefs ? "rotate-180" : ""}`} />
            </button>
          </div>
          {showRefs && (
            <div className="mt-6 max-w-3xl mx-auto rounded-3xl bg-white border border-border p-8">
              <h3 className="text-xl font-bold">References &amp; Sources</h3>
              <ol className="mt-4 space-y-4 text-sm text-foreground/80">
                {references.map((r, i) => (
                  <li key={r.href} className="flex gap-3">
                    <span className="font-bold text-[var(--brand-blue)]">{i + 1}</span>
                    <div>
                      <div className="font-semibold">{r.org}</div>
                      <p>{r.text}</p>
                      <a href={r.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--brand-blue)] hover:underline">View Source →</a>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-xs text-foreground/60">Disclaimer: The information provided is for educational purposes only and should not be considered medical advice. Always consult with a qualified healthcare provider for personalized medical guidance.</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white border-y border-border/60 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-5 text-lg text-foreground/70">No hidden fees. HSA/FSA friendly.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-3xl p-8 lg:p-10 flex flex-col ${p.featured ? "bg-[var(--brand-blue)] text-white" : "bg-[var(--brand-cream)] border border-border"}`}
              >
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-3"><span className={`text-2xl line-through ${p.featured ? "text-white/60" : "text-foreground/50"}`}>{p.was}</span><span className="text-5xl font-extrabold tracking-tight">{p.price}</span></div>
                <p className={`mt-2 ${p.featured ? "text-white/85" : "text-foreground/70"}`}>{p.blurb}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check className={`w-5 h-5 mt-0.5 shrink-0 ${p.featured ? "text-white" : "text-[var(--brand-blue)]"}`} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${p.featured ? "bg-white text-[var(--brand-blue)]" : "bg-[var(--brand-pink)] text-white hover:brightness-110"}`}
                >
                  Schedule Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-center">Frequently asked questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-white p-6">
                <div className="font-semibold text-lg">{f.q}</div>
                <p className="mt-3 text-foreground/75">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-[var(--brand-blue)] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Ready for Express Heart Care?</h2>
            <p className="mt-5 text-white/85 text-lg">Skip the wait, get tested today.</p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-white text-[var(--brand-blue)] font-semibold px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Schedule My Heart Tests
            </a>
            <p className="mt-6 text-white/85">
              For more information, visit{" "}
              <a href={EXPRESS_SITE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
                www.expressheartcare.com
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-white/75">
              <a href={`${EXPRESS_SITE_URL}/privacy`} target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a>
              {" · "}
              <a href={`${EXPRESS_SITE_URL}/terms`} target="_blank" rel="noopener noreferrer" className="hover:underline">Terms of Service</a>
              {" · "}
              <a href={`${EXPRESS_SITE_URL}/hipaa`} target="_blank" rel="noopener noreferrer" className="hover:underline">HIPAA Notice</a>
            </p>
          </div>
          <address className="space-y-4 text-white/90 not-italic text-lg">
            <div className="flex items-center gap-3"><Phone className="w-5 h-5" /> <a href={phone.href} className="hover:underline">{phone.display}</a></div>
            <div className="flex items-center gap-3"><Mail className="w-5 h-5" /> <a href={`mailto:${email}`} className="hover:underline break-all">{email}</a></div>
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5 shrink-0" /> <AddressLink className="hover:underline">{address}</AddressLink></div>
          </address>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default ExpressHeartCare;
