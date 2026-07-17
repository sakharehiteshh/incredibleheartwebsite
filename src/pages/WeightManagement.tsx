import weightMan from "@/assets/weight-man.png";
import doctor from "@/assets/doctor.jpg";
import { Phone, MapPin, Star, Check, Scale, Pill, Users, HeartPulse } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { insurers } from "@/lib/nav";
import { useDocumentMeta } from "@/hooks/use-document-meta";

const testimonials = [
  { name: "Renee Ashford", text: "The weight management program paired with my cardiac care meant one doctor understood the whole picture. The home scale kept me accountable between visits." },
  { name: "Marcus Ibeh", text: "I was skeptical about a physician-supervised program, but Dr. Gurav explained everything and adjusted my plan as my numbers improved. Real, measurable progress." },
  { name: "Sandra Whitfield", text: "Insurance actually covered the medication, and the check-ins never felt rushed. It's the first program that treated my heart health and weight together." },
];

const weightProgram = [
  "Personalized diet and lifestyle guidance",
  "Supervised by a board-certified cardiologist",
  "Insurance-approved weight management medications",
  "Coordinated management of related conditions",
  "Home-delivered smart scale for ongoing tracking",
];

const heartProgram = [
  "Personalized treatment plans",
  "Supervised by a board-certified cardiologist",
  "Evidence-based therapies",
  "Team-based, coordinated care",
  "Focus on minimizing unnecessary medication",
  "Home cardiac monitoring devices",
];

function WeightManagement() {
  useDocumentMeta(
    "Heart Disease & Weight Management Program | Incredible Heart, Saint Louis, MO",
    "Physician-supervised weight management from a board-certified cardiologist — insurance-approved medication, home smart scales, and coordinated heart-disease care in Saint Louis, MO.",
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest text-[var(--brand-pink)] uppercase">
              Incredible Membership
            </span>
            <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Personalized Heart Disease<br />&amp; Weight Management
            </h1>
            <p className="mt-8 text-lg text-foreground/75 max-w-lg leading-relaxed">
              A comprehensive, insurance-approved program from a board-certified cardiologist — because weight and
              heart health are treated together, not separately.
            </p>
            <blockquote className="mt-6 border-l-4 border-[var(--brand-blue)] pl-4 italic text-foreground/70">
              "The best doctor gives the least medicines."
            </blockquote>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.zocdoc.com/booking-link/practice/incredible-heart-82296"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--brand-yellow)] text-foreground font-semibold px-6 py-3 rounded-full shadow-sm hover:brightness-95 transition"
              >
                Book an Appointment
              </a>
              <a href="tel:+13145572620" className="inline-flex items-center gap-2 text-foreground font-semibold underline underline-offset-4 decoration-2 decoration-[var(--brand-blue)]">
                <Phone className="w-4 h-4" /> Call us: +1 314-557-2620
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={weightMan}
              alt="Man tracking his progress on a home smart scale as part of a physician-supervised weight management program"
              width={1200}
              height={917}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Doctor section */}
      <section className="bg-white border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-xs font-bold tracking-widest text-[var(--brand-pink)] uppercase">
              Expert in Cardiology &amp; Weight Management
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
              Schedule a heart health consultation
            </a>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-6 bg-[var(--brand-blue)] rounded-[3rem]" />
            <img src={doctor} alt="Dr. Kunal Gurav" loading="lazy" width={900} height={1100} className="relative rounded-[2rem] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why weight & heart care together */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Weight is a heart-health issue</h2>
            <p className="mt-5 text-lg text-foreground/70">
              Excess weight is closely linked to high blood pressure, high cholesterol, and atrial fibrillation. Our
              physician-supervised program treats the underlying cardiac risk alongside the weight itself, instead of
              managing them in separate offices.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              { icon: Scale, title: "Track what matters", items: ["Home-delivered smart scale", "Continuous progress tracking", "Adjustments based on real data"] },
              { icon: Pill, title: "Insurance-approved medication", items: ["Reviewed and prescribed by a cardiologist", "Coordinated with your existing prescriptions", "No unnecessary polypharmacy"] },
              { icon: Users, title: "One coordinated team", items: ["Same physician for heart and weight care", "Shared records, no repeated history", "Ongoing check-ins, not one-off visits"] },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl bg-white border border-border p-8">
                <div className="w-12 h-12 rounded-2xl bg-[var(--brand-blue)] text-white flex items-center justify-center">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-foreground/75">
                  {c.items.map((i) => (
                    <li key={i} className="flex gap-2"><Check className="w-5 h-5 text-[var(--brand-pink)] shrink-0 mt-0.5" /> {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two program columns */}
      <section className="bg-white border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Two programs, one care team</h2>
            <p className="mt-5 text-lg text-foreground/70">
              Enroll in either program on its own, or combine both for coordinated cardiac and weight management care.
            </p>
          </div>
          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-border p-8 lg:p-10">
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-pink)] text-white flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Weight Management Program</h3>
              <ul className="mt-5 space-y-3 text-foreground/80">
                {weightProgram.map((i) => (
                  <li key={i} className="flex gap-3"><Check className="w-5 h-5 text-[var(--brand-blue)] mt-1 shrink-0" /> {i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border p-8 lg:p-10">
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-blue)] text-white flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Heart Disease Management Program</h3>
              <ul className="mt-5 space-y-3 text-foreground/80">
                {heartProgram.map((i) => (
                  <li key={i} className="flex gap-3"><Check className="w-5 h-5 text-[var(--brand-blue)] mt-1 shrink-0" /> {i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">270+ Patients Say</h2>
            <p className="mt-4 text-lg text-foreground/70">
              <span className="text-[var(--brand-yellow)]">★★★★★</span> — real results from a coordinated care team.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white border border-border p-6 shadow-sm">
                <div className="flex text-[var(--brand-yellow)]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="mt-4 text-foreground/80 leading-relaxed">{r.text}</p>
                <div className="mt-5 font-semibold">{r.name}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.zocdoc.com/booking-link/practice/incredible-heart-82296"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--brand-yellow)] text-foreground font-semibold px-6 py-3 rounded-full shadow-sm hover:brightness-95 transition"
            >
              Book an Appointment
            </a>
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
          <h2 className="text-4xl font-extrabold tracking-tight text-center">Weight management, answered</h2>
          <div className="mt-10 space-y-4">
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="font-semibold text-lg">Is the weight management program covered by insurance?</div>
              <p className="mt-3 text-foreground/75">
                Most patients pay only their normal insurance copay. Coverage for specific medications varies by plan,
                so we verify your benefits before starting treatment.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6">
              <div className="font-semibold text-lg">Do I need a separate cardiologist and weight-loss provider?</div>
              <p className="mt-3 text-foreground/75">
                No — Dr. Gurav manages both under one program, so your cardiac risk factors and weight goals are
                treated as part of the same plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-[var(--brand-blue)] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Start your weight &amp; heart health program today.</h2>
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

export default WeightManagement;
