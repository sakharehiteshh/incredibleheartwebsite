import doctor from "@/assets/doctor.webp";
import heroCouple from "@/assets/hero-couple.webp";
import { Phone, MapPin, Check, HeartHandshake, Building2, Sparkles, Activity } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { useRouteContact } from "@/hooks/use-route-contact";
import { AddressLink } from "@/components/AddressLink";

const values = [
  {
    icon: Building2,
    title: "Independent by design",
    text: "Incredible Heart isn't owned by a hospital system or a private equity group. That independence means every decision — how long a visit runs, which tests actually matter, how quickly you can get seen — is made around you, not a corporate quota.",
  },
  {
    icon: HeartHandshake,
    title: "A personalized experience",
    text: "You see the same cardiologist visit after visit, not whoever's available. Appointments are unhurried, questions get real answers, and your care plan is built around your life, not a template.",
  },
  {
    icon: Sparkles,
    title: "The clinic of the future",
    text: "Home monitoring devices, virtual visits, and same-day in-person care work together so your heart health is tracked continuously, not just checked once a year. Prevention happens between appointments, not only during them.",
  },
];

function AboutUs() {
  useDocumentMeta(
    "About Us | Incredible Heart, Saint Louis, MO",
    "Meet Dr. Kunal Gurav and learn why Incredible Heart was built as an independent, preventive cardiology practice focused on personalized, technology-enabled heart care in Saint Louis, MO.",
  );
  const { phone } = useRouteContact();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-widest text-[var(--brand-pink)] uppercase">
              About Us
            </span>
            <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              An independent practice, <span className="text-[var(--brand-pink)]">built around you</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              Incredible Heart is an independent preventive cardiology practice founded by Dr. Kunal Gurav — built on
              the belief that heart care should mean a real relationship with your doctor, not a rushed appointment
              inside a system built for volume.
            </p>
          </div>
        </div>
      </section>

      {/* Dr. Gurav's story */}
      <section className="bg-white border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-xs font-bold tracking-widest text-[var(--brand-pink)] uppercase">
              Dr. Kunal Gurav's Journey
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">Why an independent practice</h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Dr. Gurav trained and built his career treating heart disease inside large health systems — where
                even the best cardiologists are measured by how many patients they can move through a day. He saw
                firsthand how that model rewards reacting to a crisis, and gives little room for the slower work of
                actually preventing one.
              </p>
              <p>
                He founded Incredible Heart to practice medicine differently: as an independent physician, answerable
                to his patients rather than a hospital system's throughput targets. That independence — paired with
                an MBA from Emory's Goizueta Business School — lets him build a practice around long-term
                relationships and prevention, not just procedures.
              </p>
              <p>
                Dr. Gurav is also himself an immigrant, which is part of why Incredible Heart offers USCIS-designated
                Civil Surgeon services alongside cardiac care — he understands, personally, what it means to navigate
                a new system and wants his practice to make that easier for the patients going through it.
              </p>
            </div>
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
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-6 bg-[var(--brand-blue)] rounded-[3rem]" />
            <img src={doctor} alt="Dr. Kunal Gurav" loading="lazy" width={900} height={1100} className="relative rounded-[2rem] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">What makes Incredible Heart different</h2>
            <p className="mt-5 text-lg text-foreground/70">
              Preventive, personalized cardiac care — without the constraints of a corporate health system.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white border border-border p-8">
                <div className="w-12 h-12 rounded-2xl bg-[var(--brand-blue)] text-white flex items-center justify-center">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">{v.title}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention-first philosophy */}
      <section className="bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={heroCouple} alt="Happy elderly couple embracing" loading="lazy" width={1280} height={1280} className="w-full h-auto rounded-[2rem]" />
          </div>
          <div>
            <span className="inline-block text-xs font-bold tracking-widest text-[var(--brand-pink)] uppercase">
              Our Philosophy
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight">"The best doctor gives the least medicines."</h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Prevention is at the center of everything Dr. Gurav does. Instead of waiting for a heart attack or
              stroke to start a conversation, Incredible Heart focuses on catching risk factors early — high blood
              pressure, high cholesterol, arrhythmias — while they're still manageable with lifestyle changes and
              proactive monitoring, not just prescriptions.
            </p>
            <div className="mt-8 flex items-start gap-3">
              <Activity className="w-6 h-6 text-[var(--brand-blue)] shrink-0 mt-1" />
              <p className="text-foreground/80">
                Home monitoring devices keep your care team informed between visits, so small changes get caught
                early — before they become emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-[var(--brand-blue)] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Come meet the team behind Incredible Heart.</h2>
            <p className="mt-5 text-white/85 text-lg">Request more information and our team will be in touch.</p>
            <address className="mt-8 space-y-4 text-white/90 not-italic">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" /> <a href={phone.href} className="hover:underline">{phone.display}</a>
              </div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /> <AddressLink className="hover:underline">1034 S Brentwood Blvd Ste 694, Saint Louis, MO 63117</AddressLink></div>
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

export default AboutUs;
