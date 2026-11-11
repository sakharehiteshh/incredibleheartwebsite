import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import doctor from "@/assets/doctor.webp";
import {
  Phone, MapPin, MessageSquare, Star, Check, CalendarClock, CalendarPlus, Timer, TestTube, ChevronDown, ArrowRight,
} from "lucide-react";
import { ReviewsBadge } from "@/components/ReviewsBadge";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { useRouteContact } from "@/hooks/use-route-contact";
import { AddressLink, useMapsUrl } from "@/components/AddressLink";
import { ExploreServices } from "@/components/ExploreServices";

const BOOKING_URL = "https://calendly.com/incredibleheartit/30min";
const SMS_HREF = "sms:+13145572620";
const CHECKLIST_KEY = "ih_i693_preparation_v2";

const conveniences = [
  { icon: CalendarClock, title: "Same-day visits", text: "Need an appointment soon? Call to ask about available same-day openings." },
  { icon: CalendarPlus, title: "Weekend options", text: "Weekend slots may be available by request, with a $50 weekend convenience fee." },
  { icon: Timer, title: "Deadline help", text: "Have an RFE or interview date? Tell our staff your timeline so they can review available options." },
  { icon: TestTube, title: "On-site collection", text: "Sample collection at the clinic for applicable required tests, where available." },
];

const route = [
  "Park in the building lot.",
  "Take the accessibility ramp up to the glass entrance.",
  "Look for the door with the Incredible Heart sign.",
  "Check in at the front desk. If your application is time-sensitive, ask about Fast Track.",
];

const checkIn = [
  { title: "New patient", text: "First immigration medical exam here? Our staff helps you get checked in and ready." },
  { title: "Fast Track", text: "On an RFE or interview deadline? Ask whether a priority appointment is available.", note: "Priority scheduling is not a guarantee of faster lab processing or USCIS outcomes." },
  { title: "Standard check-in", text: "Already scheduled and prepared? Follow the normal check-in process when you arrive." },
];

const steps = [
  { title: "Book and prepare", text: "Select an appointment or contact our team. Bring identification and vaccination records." },
  { title: "Meet the Civil Surgeon", text: "Dr. Gurav reviews your medical history, records and applicable USCIS requirements." },
  { title: "Testing and review", text: "Required samples can be collected on site where applicable; additional services depend on your needs." },
  { title: "Complete your I-693", text: "After required results and information are available, your form is completed and sealed for USCIS." },
];

const pricing = ["Immigration Exam — Fully Covered by HSA/FSA*", "Vaccines — $0*", "Labs — $0*"];

const checklist = [
  "Government-issued photo ID or passport",
  "Available vaccination / immunization records",
  "Payment method and any questions for the clinic",
];

const reviews = [
  { name: "Satheesh Kumar", text: "I recently completed my immigration medical exam here and had a very positive experience. The clinic was clean, organized, and welcoming. Dr. Kunal and the staff made the entire process easy from start to finish. What stood out most was Dr. Kunal's availability over the weekend by phone, which helped simplify the process and allowed me to complete everything without needing an extra trip, which was incredibly convenient. The team was efficient, professional, and genuinely helpful throughout. I highly recommend this clinic to anyone needing an immigration medical exam." },
  { name: "Happy", text: "Had a great experience completing our immigration medical exams with Dr. Gurav and the team. They were professional, polite, and very efficient throughout the entire process. We received our sealed medical records within a week, which was impressively quick. The doctor also carefully reviewed my vaccination history, explained which vaccines I was missing, and guided me on the next steps to complete them. They made sure all requirements were fully met for the medical exam." },
  { name: "Artem A", text: "Went here for my immigration physical exam, everyone was very helpful, saw me in a timely manner, made sure all the docs were in order. Recommend if you're looking for a civil surgeon!" },
  { name: "Nguyên Lê", text: "I had my Form I-693 medical exam done at Incredible Heart. The process was quick and smooth, and the staff were very helpful. They made sure all my paperwork was completed correctly. Highly recommend!" },
  { name: "Yalcin Arslan", text: "Incredible Heart with incredible service. From the moment we entered they were kind, polite, and helpful. I really appreciate all of their help, and especially Nikki for her help and guiding us through every step. This is the place to go if you ever need a medical examination report. Thanks to all the office ladies and gentlemen in this area." },
  { name: "Abhishek", text: "I had a great experience here for my USCIS medical exam. The staff was friendly, professional, and the process was quick and smooth." },
  { name: "Guo David", text: "Dr. Gurav is really patient and friendly. He helped me a lot with the paperwork for my immigration medical exam. Everything went smoothly!" },
];

const faqs = [
  { q: "Can I request a same-day appointment?", a: "Yes. Call (314) 557-2620, extension 7, to ask about same-day availability. Openings are not guaranteed." },
  { q: "Do you offer weekend appointments?", a: "Weekend appointment slots are available by request, with a $50 weekend convenience fee. Call us to check availability." },
  { q: "What if I have an RFE or interview deadline?", a: "Contact the scheduling team with the date and ask whether expedited appointment options are available. The clinic cannot guarantee laboratory turnaround times or USCIS processing outcomes." },
  { q: "Are blood or other samples collected on site?", a: "Yes, for applicable required tests, samples are collected at our on-site draw station. Some follow-up testing, vaccinations or specialist services may still require an outside facility." },
  { q: "How many visits will I need?", a: "The process includes two office visits. The exact timing and any additional steps depend on your records and test results." },
  { q: "What should I bring?", a: "Bring your photo ID and any vaccination records. We provide Form I-693 at the clinic, so please do not bring a printed copy." },
  { q: "How much does the exam cost?", a: "We accept HSA/FSA cards. We don't bill insurance directly, but some patients have been reimbursed by submitting to their insurance themselves; it depends on your individual plan, copay, and deductible. Call us for the current fee and what it includes." },
  { q: "Can I text instead of calling?", a: "Yes, you can call or text (314) 557-2620. Please don't send passports, medical records or immigration notices by ordinary text." },
];

const pinkCta =
  "inline-flex items-center justify-center gap-2 bg-[var(--brand-pink)] text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200";
const outlineCta =
  "inline-flex items-center justify-center gap-2 border border-[var(--brand-blue)] text-[var(--brand-blue)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--brand-blue)] hover:text-white transition-colors duration-200";

function ImmigrationExam() {
  useDocumentMeta(
    "USCIS Immigration Medical Exam in St. Louis | Incredible Heart",
    "USCIS Form I-693 immigration medical exam in St. Louis. Ask about same-day visits, weekend appointments, and on-site sample collection.",
  );
  const { phone } = useRouteContact();
  const mapsUrl = useMapsUrl();

  const [ready, setReady] = useState<boolean[]>(() => checklist.map(() => false));
  useEffect(() => {
    try {
      const prior = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || "[]");
      if (Array.isArray(prior)) setReady(checklist.map((_, i) => !!prior[i]));
    } catch {
      // saved state is optional
    }
  }, []);
  const saveReady = (next: boolean[]) => {
    setReady(next);
    try {
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(next));
    } catch {
      // saved state is optional
    }
  };
  const readyCount = ready.filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-[1.25fr_1fr] gap-x-14 gap-y-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Your <span className="text-[var(--brand-blue)]">Immigration Medical Exam</span>, made easier.
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-[62ch]">
              Get help with your USCIS Form I-693 from Dr. Kunal Gurav, a USCIS-designated Civil Surgeon and the
              Incredible Heart team in St. Louis.
            </p>
            <span className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-[62ch]">
              Ask about same-day visits, weekend appointments, and on-site sample collection.
            </span>
            

            <ReviewsBadge className="mt-6" />
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={pinkCta}>
                Book Your I-693 Exam
              </a>
              <a href={phone.href} className={outlineCta}>
                <Phone className="w-4 h-4" /> Call for Same-Day Visits
              </a>
            </div>
            <p className="mt-5 text-sm text-foreground/65">
              Call {phone.display} ·{" "}
              <a href={SMS_HREF} className="font-semibold text-[var(--brand-blue)] hover:underline">Text our team</a>{" "}
              · Appointments subject to availability
            </p>
          </div>
          <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:justify-self-end py-6">
            <div className="absolute inset-y-0 left-10 right-0 bg-[var(--brand-blue)] rounded-[2.5rem]" aria-hidden="true" />
            <svg
              viewBox="0 0 300 400"
              role="img"
              aria-label="Sealed Form I-693 envelope"
              className="relative w-[78%] -rotate-3 drop-shadow-[0_22px_28px_rgba(20,30,90,0.3)]"
            >
              <rect x="3" y="3" width="294" height="394" rx="18" fill="white" stroke="oklch(0.9 0.015 80)" strokeWidth="2" />
              <path d="M3 22 L150 168 L297 22" fill="oklch(0.985 0.012 90)" stroke="oklch(0.82 0.03 265)" strokeWidth="3" strokeLinejoin="round" />
              <circle cx="150" cy="168" r="34" fill="var(--brand-pink)" />
              <path d="M134 168 l11 11 l22 -24" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <text x="150" y="268" textAnchor="middle" fontSize="34" fontWeight="800" fill="oklch(0.16 0.02 260)">Form I-693</text>
              <text x="150" y="300" textAnchor="middle" fontSize="18" fontWeight="600" fill="oklch(0.45 0.02 260)">Sealed for USCIS</text>
              <line x1="90" y1="330" x2="210" y2="330" stroke="oklch(0.9 0.015 80)" strokeWidth="2" />
              <text x="150" y="360" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--brand-blue)">Incredible Heart · Civil Surgeon</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Pricing + what to bring */}
      <section className="bg-white border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-x-16 gap-y-14">
          <div id="pricing" className="scroll-mt-24">
            <h2 className="text-4xl font-extrabold tracking-tight">Exam pricing</h2>
            <ul className="mt-8 space-y-3">
              {pricing.map((c) => (
                <li key={c} className="flex gap-3 text-lg font-semibold">
                  <Check className="w-5 h-5 text-[var(--brand-blue)] mt-1 shrink-0" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Includes two office visits. Payment is due at the first visit. Weekend appointments carry a $50
              convenience fee.
            </p>
            <p className="mt-4 text-sm text-foreground/65 leading-relaxed">
              *We accept HSA/FSA cards. We don't bill insurance directly, but some patients have succeeded in getting
              reimbursed by submitting directly to their insurance themselves; this depends on your individual plan,
              copay, and deductible.
            </p>
            <a href={phone.href} className={`${outlineCta} mt-8`}>
              <Phone className="w-4 h-4" /> Ask About Current Fees
            </a>
          </div>

          <div id="prepare" className="scroll-mt-24">
            <h2 className="text-4xl font-extrabold tracking-tight">What should I bring?</h2>
            <p className="mt-5 text-foreground/75">Check off what you have ready.</p>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {checklist.map((item, i) => (
                <li key={item}>
                  <label className="flex items-start gap-3 py-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={ready[i]}
                      onChange={(e) => saveReady(ready.map((v, j) => (j === i ? e.target.checked : v)))}
                      className="mt-1 w-5 h-5 accent-[var(--brand-blue)]"
                    />
                    <span className={ready[i] ? "text-foreground/55 line-through" : ""}>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="font-semibold tabular-nums" aria-live="polite">{readyCount} of {checklist.length} ready</span>
              <button type="button" onClick={() => saveReady(checklist.map(() => false))} className="font-semibold text-[var(--brand-blue)] hover:underline cursor-pointer">
                Reset
              </button>
            </div>
            <p className="mt-6 rounded-2xl border border-[var(--brand-pink)]/40 bg-[var(--brand-cream)] p-4 text-foreground/80 leading-relaxed">
              <span className="font-bold text-[var(--brand-pink)]">Important:</span> Please DO NOT bring a printed copy
              of the Form I-693. We will provide the required form at the clinic and complete it during your first
              appointment.
            </p>
            <p className="mt-4 text-sm text-foreground/60">
              Your checklist is saved only in this browser. Language translation is available during your visit.
            </p>
          </div>
        </div>
      </section>

      {/* Conveniences */}
      <section id="why" className="scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1fr_1.4fr] gap-x-16 gap-y-10">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">Built around your immigration timeline</h2>
            <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
              Getting your medical exam should feel straightforward. Here's how our team helps you prepare, arrive,
              and get your paperwork moving.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={pinkCta}>Schedule My Exam</a>
              <a href={SMS_HREF} className={outlineCta}>
                <MessageSquare className="w-4 h-4" /> Text About Availability
              </a>
            </div>
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {conveniences.map((c) => (
              <div key={c.title} className="flex gap-5 py-6">
                <c.icon className="w-6 h-6 text-[var(--brand-blue)] mt-1 shrink-0" />
                <div>
                  <dt className="text-xl font-bold">{c.title}</dt>
                  <dd className="mt-1 text-foreground/75 leading-relaxed">{c.text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Arrival + check-in */}
      <section id="arrival" className="bg-[var(--brand-cream)] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-x-16 gap-y-14">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">Where to park and how to find us</h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              Never visited before? Here is the route from the parking lot to our front desk at{" "}
              <AddressLink className="font-semibold underline underline-offset-4">1034 S Brentwood Blvd, Suite 694</AddressLink>.
            </p>
            <ol className="mt-6 space-y-4">
              {route.map((r, i) => (
                <li key={r} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[var(--brand-blue)] text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="pt-1 text-foreground/85">{r}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={pinkCta}>
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
              <a href={phone.href} className={outlineCta}>Call for Arrival Help</a>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">Simple check-in, clear next steps</h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              Our waiting area is clean, comfortable, and organized. Tell the front desk which of these fits you.
            </p>
            <dl className="mt-6 divide-y divide-foreground/15 border-y border-foreground/15">
              {checkIn.map((c) => (
                <div key={c.title} className="py-5">
                  <dt className="text-lg font-bold">{c.title}</dt>
                  <dd className="mt-1 text-foreground/75">{c.text}</dd>
                  {c.note && <dd className="mt-2 text-sm text-foreground/60">{c.note}</dd>}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Deadline */}
      <section id="deadline" className="bg-[var(--brand-blue)] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">Have an RFE or immigration interview coming up?</h2>
            <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-[60ch]">
              If you have a Request for Evidence (RFE) or a scheduled interview, contact us and tell us your deadline.
              Our team can review appointment availability and help explain the medical-exam process.
            </p>
            <p className="mt-4 text-sm text-white/70 max-w-[65ch]">
              Please don't send passports, medical records, immigration notices or other sensitive documents by
              ordinary text. Expedited appointments and turnaround times are subject to confirmation.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-col gap-4 lg:items-stretch">
            <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-blue)] font-semibold px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
              <MessageSquare className="w-4 h-4" /> Text Our Scheduling Team
            </a>
            <a href={phone.href} className="inline-flex items-center justify-center gap-2 border border-white/70 text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[var(--brand-blue)] transition-colors duration-200">
              <Phone className="w-4 h-4" /> Call {phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">How the immigration medical exam works</h2>
            <p className="mt-5 text-lg text-foreground/70">
              Required tests and the final form timeline depend on your records, examination and results.
            </p>
          </div>
          <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-[var(--brand-blue)] pt-5">
                <div className="text-sm font-bold text-[var(--brand-blue)]">Step {i + 1}</div>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 rounded-3xl bg-[var(--brand-cream)] p-8 lg:p-10 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Required samples collected at our clinic</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                For applicable immigration medical exam testing, samples are collected during your visit at our
                on-site draw station, helping reduce the need for a separate trip to a laboratory.
              </p>
              <p className="mt-3 text-sm text-foreground/65">
                Some follow-up testing, vaccinations or specialist services may still require an outside facility.
              </p>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${pinkCta} lg:justify-self-end`}>
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Civil Surgeon */}
      <section className="bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Meet your USCIS Civil Surgeon</h2>
            <h3 className="mt-4 text-xl text-[var(--brand-blue)] font-semibold">Dr. Kunal Gurav, MD, FACC, MBA</h3>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-[60ch]">
              Incredible Heart's USCIS-designated Civil Surgeon helps patients navigate the immigration medical
              examination process with clear explanations and personalized support. As an immigrant himself,
              Dr. Gurav understands how important preparation and deadlines can be.
            </p>
            <Link to="/about-us" className={`${outlineCta} mt-8`}>
              Meet Dr. Gurav <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <img src={doctor} alt="Dr. Kunal Gurav" loading="lazy" width={900} height={1100} className="rounded-[2rem] w-full max-w-md object-cover lg:justify-self-end" />
        </div>
      </section>

      {/* Reviews */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl">What immigration exam patients say</h2>
          <div className="mt-12 group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex gap-6 w-max animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...reviews, ...reviews].map((r, idx) => (
                <figure key={`${r.name}-${idx}`} className="w-[360px] shrink-0 rounded-2xl bg-white border border-border p-6">
                  <div className="flex text-[var(--brand-yellow)]" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <blockquote className="mt-4 text-foreground/80 leading-relaxed">{r.text}</blockquote>
                  <figcaption className="mt-5 font-semibold">{r.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-y border-border/60 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold tracking-tight">Immigration medical exam FAQs</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group/faq py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-lg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="w-5 h-5 text-[var(--brand-blue)] shrink-0 transition-transform group-open/faq:rotate-180" />
                </summary>
                <p className="mt-3 text-foreground/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-[var(--brand-blue)] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Book your immigration medical exam in St. Louis</h2>
            <p className="mt-5 text-white/85 text-lg">
              Questions about same-day visits, weekend options, or an approaching deadline? Our team can help you
              understand your scheduling options.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={pinkCta}>Book Immigration Exam</a>
              <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 border border-white/70 text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[var(--brand-blue)] transition-colors duration-200">
                <MessageSquare className="w-4 h-4" /> Text Our Team
              </a>
            </div>
            <address className="mt-8 space-y-4 text-white/90 not-italic">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" /> <a href={phone.href} className="hover:underline">{phone.display}</a>
              </div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /> <AddressLink className="hover:underline">1034 S Brentwood Blvd Ste 694, Saint Louis, MO 63117</AddressLink></div>
            </address>
          </div>
          <ExploreServices exclude="immigration" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default ImmigrationExam;
