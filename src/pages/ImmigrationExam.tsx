import doctor from "@/assets/doctor.webp";
import { Phone, MapPin, Star, Check, FileText, ClipboardList, Stethoscope, FileCheck2, CalendarClock, CalendarPlus } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { insurers } from "@/lib/nav";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { useRouteContact } from "@/hooks/use-route-contact";
import { AddressLink } from "@/components/AddressLink";
import { ExploreServices } from "@/components/ExploreServices";

const schedulingCallouts = [
  {
    icon: CalendarClock,
    title: "Same Day Appointments Available",
    text: "Call us to check availability for today.",
    note: "*Depends on time and availability.",
  },
  {
    icon: CalendarPlus,
    title: "Weekend Slots Available on request",
    text: "+$50 weekend convenience fee — call us to check.",
    note: undefined,
  },
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

const whatToBring = [
  "All vaccination records you currently have",
  "A valid photo ID or passport",
];

const steps = [
  {
    icon: Stethoscope,
    title: "Initial exam",
    text: "Your Civil Surgeon reviews your health and immigration paperwork and identifies whether any additional testing is required.",
  },
  {
    icon: ClipboardList,
    title: "Additional testing, if needed",
    text: "Any required tests are insurance-covered and completed at a facility of your choice — we provide referrals.",
  },
  {
    icon: FileText,
    title: "Second visit",
    text: "You return so your Civil Surgeon can complete and seal Form I-693.",
  },
  {
    icon: FileCheck2,
    title: "Ready for USCIS",
    text: "You receive your sealed documents to submit with your immigration application.",
  },
];

function ImmigrationExam() {
  useDocumentMeta(
    "Immigration Medical Exam (Form I-693) | Incredible Heart, Saint Louis, MO",
    "USCIS-designated Civil Surgeon offering immigration medical examinations (Form I-693) in Saint Louis, MO. Two office visits. Call (314) 557-2620.",
  );
  const { phone } = useRouteContact();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-base font-bold tracking-widest text-[var(--brand-pink)] uppercase">
              USCIS Civil Surgeon
            </span>
            <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Immigration Exam
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              Our clinic offers Immigration Medical Examinations (Form I-693) with a USCIS-designated Civil Surgeon.
              Our Civil Surgeon, himself an immigrant, will guide you through every step of the process.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Immigration Exam — Fully Covered by HSA/FSA*",
                "Vaccines — $0*",
                "Labs — $0*",
              ].map((c) => (
                <li key={c} className="flex gap-3 text-lg font-semibold text-foreground">
                  <Check className="w-5 h-5 text-[var(--brand-blue)] mt-1 shrink-0" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-foreground/60">
              *We accept HSA/FSA cards. We don't bill insurance directly, but some patients have succeeded in getting
              reimbursed by submitting directly to their insurance themselves — this depends on your individual plan,
              copay, and deductible.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/incredibleheartit/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--brand-pink)] text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
              >
                Book an Appointment
              </a>
              <a href={phone.href} className="inline-flex items-center gap-2 text-foreground font-semibold underline underline-offset-4 decoration-2 decoration-[var(--brand-blue)]">
                <Phone className="w-4 h-4" /> Call us: {phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling callouts */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 gap-6">
          {schedulingCallouts.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-[var(--brand-cream)] p-6">
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-blue)] text-white flex items-center justify-center">
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-foreground/80">
                {c.text}{" "}
                <a href={phone.href} className="font-semibold text-[var(--brand-blue)] hover:underline">
                  {phone.display}
                </a>
              </p>
              {c.note && <p className="mt-3 text-xs text-foreground/60">{c.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* What to bring */}
      <section className="bg-white border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">What to bring</h2>
            <ul className="mt-8 space-y-3 text-foreground/80">
              {whatToBring.map((c) => (
                <li key={c} className="flex gap-3">
                  <Check className="w-5 h-5 text-[var(--brand-blue)] mt-1 shrink-0" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              We will complete the Form I-693 during your first appointment. It should only take 2–3 minutes to complete.
            </p>
            <p className="mt-4 rounded-2xl border border-[var(--brand-pink)]/40 bg-[var(--brand-cream)] p-4 text-foreground/80 leading-relaxed">
              <span className="font-bold text-[var(--brand-pink)]">Important:</span> Please DO NOT bring a printed copy
              of the Form I-693. We will provide the required form at the clinic.
            </p>
            <p className="mt-6 text-sm text-foreground/60">Language translation is available during your visit.</p>
          </div>
          <div className="rounded-3xl bg-[var(--brand-cream)] p-8 lg:p-10">
            <h3 className="text-2xl font-bold">Fee &amp; scheduling</h3>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Includes two office visits. Payment is due at the first visit.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Call for group bookings or expedited appointments, or request an appointment online below.
            </p>
            <a
              href="https://calendly.com/incredibleheartit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">How the exam works</h2>
            <p className="mt-5 text-lg text-foreground/70">
              A straightforward, two-visit process from your first exam to a sealed Form I-693.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-3xl bg-white border border-border p-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </div>
                  <s.icon className="w-6 h-6 text-[var(--brand-pink)]" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor section */}
      <section className="bg-white border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-base font-bold tracking-widest text-[var(--brand-pink)] uppercase">
              USCIS-Designated Civil Surgeon
            </span>
            <h2 className="mt-4 text-5xl font-extrabold tracking-tight">Meet Dr. Kunal Gurav</h2>
            <h3 className="mt-3 text-xl text-[var(--brand-blue)] font-semibold">Credentials | MD, FACC, MBA</h3>
            <ul className="mt-8 space-y-3 text-foreground/80">
              {[
                "Board-Certified in Cardiology & Internal Medicine",
                "National Board of Echocardiography Certified",
                "Certified in Nuclear Cardiology",
                "MBA – Emory Goizueta Business School",
                "Author & Editor for the American College of Cardiology",
                "Licensed in 20 States",
              ].map((c) => (
                <li key={c} className="flex gap-3">
                  <Check className="w-5 h-5 text-[var(--brand-blue)] mt-1 shrink-0" /> {c}
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/incredibleheartit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Book an Appointment
            </a>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-6 bg-[var(--brand-blue)] rounded-[3rem]" />
            <img src={doctor} alt="Dr. Kunal Gurav" loading="lazy" width={900} height={1100} className="relative rounded-[2rem] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">What Our Patients Say</h2>
            <p className="mt-4 text-lg text-foreground/70">
              270+ patients say <span className="text-[var(--brand-yellow)]">★★★★★</span> — discover exceptional care.
            </p>
          </div>
          <div className="mt-12 group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex gap-6 w-max animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...reviews, ...reviews].map((r, idx) => (
                <div key={`${r.name}-${idx}`} className="w-[360px] shrink-0 rounded-2xl bg-white border border-border p-6 shadow-sm">
                  <div className="flex text-[var(--brand-yellow)]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-foreground/80 leading-relaxed">{r.text}</p>
                  <div className="mt-5 font-semibold">{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurers */}
      <section className="bg-white border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">Covered by 100+ health plans, including:</h2>
          <div className="mt-10 group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-6 w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...insurers, ...insurers, ...insurers].map((ins, idx) => (
                <div
                  key={`${ins.name}-${idx}`}
                  className={`h-16 w-40 shrink-0 flex items-center justify-center rounded-xl px-4 ${ins.darkTile ? "bg-[var(--brand-blue)]" : "bg-secondary"}`}
                >
                  <img src={ins.logo} alt={ins.name} className="max-h-9 max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-center">Immigration exam, answered</h2>
          <div className="mt-10 space-y-4">
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="font-semibold text-lg">How many visits does the exam take?</div>
              <p className="mt-3 text-foreground/75">
                Two. The first visit is the initial exam and identifies any additional testing you need. The second
                visit is to complete and seal Form I-693 once results are back.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="font-semibold text-lg">Is additional testing covered by insurance?</div>
              <p className="mt-3 text-foreground/75">
                Yes — any additional testing your Civil Surgeon orders is insurance-covered and can be completed at a
                facility of your choice. We provide referrals.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="font-semibold text-lg">When is payment due?</div>
              <p className="mt-3 text-foreground/75">
                The fee covers both office visits and is due at your first visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-[var(--brand-blue)] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Take the first step toward your immigration exam.</h2>
            <p className="mt-5 text-white/85 text-lg">Call us and our team will be happy to help.</p>
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
