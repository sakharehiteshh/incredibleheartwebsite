import doctor from "@/assets/doctor.jpg";
import { Phone, MapPin, Star, Check, FileText, ClipboardList, Stethoscope, FileCheck2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { insurers } from "@/lib/nav";
import { useDocumentMeta } from "@/hooks/use-document-meta";

const reviews = [
  { name: "Patrice Hopes", text: "I thoroughly enjoyed my first visit. Dr. Gurav made me feel right at home and shows real concern for my overall health. The office assistant was so pleasant. You don't always get this type of help — you sometimes feel like a number, but not here." },
  { name: "Mili Kuo", text: "I had an excellent experience with Dr. Gurav for my family. From the welcoming assistant to the thorough examination, everything was top-notch. He listened attentively and provided a clear plan." },
  { name: "Doris Pittman", text: "I've been very pleased with Dr. Gurav for a few years. He's very compassionate and thorough when he explains your heart. I've referred him to many people." },
  { name: "Kimberly Leflore", text: "Dr. Gurav was great. He has a system of getting the readings of my BP and O2 sats from home. He was very pleasant and easy to talk with." },
  { name: "Dorothy Hunter", text: "I'm glad to be here, I'm so thankful. He is a great doctor — patient, concerned, caring, and listens to what you have to say. Truly cares about your health." },
  { name: "Jason Hill", text: "Got taken care of fast and professionally. The office has high-tech equipment, everything's clean and efficient. The doctor was thorough and asked the right questions." },
];

const whatToBring = [
  "Form I-693 (most recent edition), unsigned",
  "Part 1 completed, but not signed",
  "Your medical records, including vaccination history",
  "A photo ID",
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
    "USCIS-designated Civil Surgeon offering immigration medical examinations (Form I-693) in Saint Louis, MO. Two office visits, $439. Call (314) 557-2620.",
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-widest text-[var(--brand-pink)] uppercase">
              Immigration Medical Exam
            </span>
            <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Immigration Exam — $439
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              Our clinic offers Immigration Medical Examinations (Form I-693) with a USCIS-designated Civil Surgeon.
              Our Civil Surgeon, himself an immigrant, will guide you through every step of the process.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[var(--brand-yellow)] text-foreground font-semibold px-6 py-3 rounded-full shadow-sm hover:brightness-95 transition">
                Schedule Your Appointment
              </a>
              <a href="tel:+13145572620" className="inline-flex items-center gap-2 text-foreground font-semibold underline underline-offset-4 decoration-2 decoration-[var(--brand-blue)]">
                <Phone className="w-4 h-4" /> Call us: +1 314-557-2620
              </a>
            </div>
          </div>
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
            <p className="mt-6 text-sm text-foreground/60">Language translation is available during your visit.</p>
          </div>
          <div className="rounded-3xl bg-[var(--brand-cream)] p-8 lg:p-10">
            <h3 className="text-2xl font-bold">Fee &amp; scheduling</h3>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              $439 — includes two office visits. Payment is due at the first visit.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Call for group bookings or expedited appointments, or request an appointment online below.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Schedule Your Appointment
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
            <span className="inline-block text-xs font-bold tracking-widest text-[var(--brand-pink)] uppercase">
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
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Schedule Your Appointment
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
              {[...insurers, ...insurers, ...insurers].map((i, idx) => (
                <div key={`${i}-${idx}`} className="h-16 w-40 shrink-0 flex items-center justify-center rounded-xl bg-secondary text-sm font-semibold text-muted-foreground text-center px-2">
                  {i}
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
                The $439 fee covers both office visits and is due at your first visit.
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
            <p className="mt-5 text-white/85 text-lg">Request more information and our team will be in touch.</p>
            <address className="mt-8 space-y-4 text-white/90 not-italic">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" /> <a href="tel:+13145572620" className="hover:underline">(314) 557-2620</a>
              </div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /> 1034 S Brentwood Blvd Ste 694, Saint Louis, MO 63117</div>
            </address>
          </div>
          <form className="rounded-3xl bg-white text-foreground p-8 space-y-4 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              <input className="rounded-lg border border-border px-4 py-3" placeholder="First Name" />
              <input className="rounded-lg border border-border px-4 py-3" placeholder="Last Name" />
            </div>
            <input className="w-full rounded-lg border border-border px-4 py-3" placeholder="Date of birth" />
            <input className="w-full rounded-lg border border-border px-4 py-3" placeholder="Email" />
            <input className="w-full rounded-lg border border-border px-4 py-3" placeholder="Phone number*" />
            <button type="button" className="w-full bg-[var(--brand-pink)] text-white font-semibold py-3 rounded-full hover:opacity-90 transition">Request Information</button>
            <p className="text-xs text-muted-foreground text-center">*Insurance coverage may vary.</p>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default ImmigrationExam;
