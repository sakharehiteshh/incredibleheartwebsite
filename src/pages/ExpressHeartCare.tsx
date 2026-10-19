import {
  Phone, MapPin, Mail, Check, Activity, HeartPulse, Droplet, Stethoscope, Gauge, ClipboardCheck,
  ShieldCheck, Clock, UserCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { useRouteContact } from "@/hooks/use-route-contact";
import { EXPRESS_SITE_URL } from "@/lib/siteContact";

const included = [
  { icon: Activity, title: "EKG/ECG (Electrocardiogram)", text: "Measures electrical activity of your heart", points: ["Checks rhythm", "Spots early warning patterns", "Shows strain on the heart"] },
  { icon: HeartPulse, title: "Heart Attack Risk Score", text: "Estimates your 10-year heart attack risk", points: ["Understands long-term risk", "Combines multiple factors", "Helps guide prevention early"] },
  { icon: Droplet, title: "Finger Stick Cholesterol Test", text: "Measures total cholesterol, LDL, HDL, triglycerides", points: ["Shows cholesterol levels", "Detects hidden risk", "Recommended from age 20 onwards"] },
  { icon: Stethoscope, title: "Heart Sounds Exam", text: "Focused cardiovascular physical exam", points: ["Detects subtle changes", "Catches murmurs/valve issues", "Adds deeper heart insight"] },
  { icon: Gauge, title: "Quick Fitness Test", text: "Brief functional assessment", points: ["Shows response to activity", "Tracks actual progress", "Measures everyday heart stress"] },
  { icon: ClipboardCheck, title: "Vital Signs Checkup", text: "Fast baseline check of BP, pulse & oxygen", points: ["Snapshot of current status", "BP is a silent major risk", "Helps catch early warning signs"] },
];

const steps = [
  { title: "Express Heart Tests", text: "Your in-clinic visit takes minutes. Most visits are completed in under 15 minutes." },
  { title: "Cardiologist Analysis", text: "A board-certified cardiologist interprets your results with expert precision." },
  { title: "Expert Opinion", text: "Receive a secure summary and next steps. Follow-up options are available if needed." },
];

const stats = [
  { big: "Every 40 seconds", text: "someone in the U.S. has a heart attack.", source: "American Heart Association" },
  { big: "80%", text: "of heart disease is preventable with early detection and lifestyle changes.", source: "World Health Organization" },
  { big: "Nearly 45%", text: "of heart attacks are “silent” — occurring without obvious symptoms but causing permanent heart damage.", source: "American Heart Association" },
  { big: "Age 20+", text: "The American Heart Association recommends that all adults 20 or older have their cholesterol tested.", source: "American Heart Association" },
];

const base = ["EKG/ECG (Electrocardiogram)", "Vital Sign Check", "Finger Stick Cholesterol Test", "Heart Attack Risk Score", "Heart Sounds Exam", "Quick Fitness Test", "Board-Certified Cardiologist Review"];
const plans = [
  { name: "Express Heart Tests", price: "$55", blurb: "One comprehensive visit", features: base, featured: false },
  {
    name: "Express Heart Tests Premium", price: "$195", blurb: "One comprehensive visit with advanced testing",
    features: ["Everything in Express Heart Tests", "48-Hour Continuous Heart Monitor (Holter)", "Heart Rate Variability & Biological Age Report", "Board-Certified Cardiologist Review"],
    featured: true,
  },
];

const faqs = [
  { q: "Who should get tested?", a: "Anyone above 20 years of age should get these tests as recommended by CDC (Centers for Disease Control and Prevention) and AHA (American Heart Association). Early detection is key to preventing heart disease, even if you feel healthy." },
  { q: "How quickly do I get results?", a: "Most results are available within 30 minutes. Our cardiologist reviews your tests and provides a comprehensive report with clear next steps within 24-48 hours." },
  { q: "Can I use insurance?", a: "Our services are self-pay for transparency and speed. We're HSA/FSA friendly, and we'll help you understand your options." },
  { q: "What should I bring?", a: "Bring a valid ID. Wear comfortable clothing that allows easy access to your chest for the EKG and Heart Sound Exam." },
  { q: "Do I need a referral?", a: "No referral needed! You can schedule directly with us. We're here to make heart tests accessible and convenient for everyone." },
  { q: "Is it HIPAA compliant?", a: "Absolutely. We're fully HIPAA-compliant with encrypted data storage. Your privacy and security are our top priorities." },
];

function ExpressHeartCare() {
  useDocumentMeta(
    "Express Heart Care | Heart Screening in Minutes, Saint Louis, MO",
    "Express Heart Care offers fast in-clinic heart screening in Saint Louis, MO — EKG, cholesterol, heart attack risk score and more, reviewed by a board-certified cardiologist. From $55. Call (314) 248-4076.",
  );
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
              Heart tests in minutes, reviewed by a cardiologist
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              A comprehensive heart screening with essential tests — all reviewed by a board-certified cardiologist.
              Skip the wait and get tested today.
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
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">What's included</h2>
            <p className="mt-5 text-lg text-foreground/70">Comprehensive heart screening with essential tests, all reviewed by a board-certified cardiologist.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {included.map((c) => (
              <div key={c.title} className="rounded-3xl border border-border bg-white p-8">
                <div className="w-12 h-12 rounded-2xl bg-[var(--brand-blue)] text-white flex items-center justify-center">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-foreground/75">{c.text}</p>
                <ul className="mt-4 space-y-2 text-foreground/80">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <Check className="w-5 h-5 text-[var(--brand-blue)] mt-0.5 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                <div className="text-3xl font-extrabold text-[var(--brand-blue)]">{s.big}</div>
                <p className="mt-3 text-foreground/80 leading-relaxed">{s.text}</p>
                <p className="mt-3 text-xs text-foreground/60">Source: {s.source}</p>
              </div>
            ))}
          </div>
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
                <div className="mt-4 text-5xl font-extrabold tracking-tight">{p.price}</div>
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
          </div>
          <address className="space-y-4 text-white/90 not-italic text-lg">
            <div className="flex items-center gap-3"><Phone className="w-5 h-5" /> <a href={phone.href} className="hover:underline">{phone.display}</a></div>
            <div className="flex items-center gap-3"><Mail className="w-5 h-5" /> <a href={`mailto:${email}`} className="hover:underline break-all">{email}</a></div>
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5 shrink-0" /> {address}</div>
          </address>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default ExpressHeartCare;
