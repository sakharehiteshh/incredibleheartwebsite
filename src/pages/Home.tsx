import heroCouple from "@/assets/hero-couple.jpg";
import doctor from "@/assets/doctor.jpg";
import manKid from "@/assets/man-kid.jpg";
import kenyaTripPoster from "@/assets/kenya-trip-poster.jpg";
import tvSegmentPoster from "@/assets/tv-segment-poster.jpg";
import { Activity, Stethoscope, Home as HomeIcon, Phone, MapPin, Star, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { insurers } from "@/lib/nav";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { useRouteContact } from "@/hooks/use-route-contact";
import { LimitedTimeOffer } from "@/components/LimitedTimeOffer";
import { CARDIAC_SCREENING_OFFER, CARDIAC_SCREENING_BOOKING_URL } from "@/lib/promos";

const reviews = [
  { name: "Patrice Hopes", text: "I thoroughly enjoyed my first visit. Dr. Gurav made me feel right at home and shows real concern for my overall health. The office assistant was so pleasant. You don't always get this type of help — you sometimes feel like a number, but not here." },
  { name: "Mili Kuo", text: "I had an excellent experience with Dr. Gurav for my family. From the welcoming assistant to the thorough examination, everything was top-notch. He listened attentively and provided a clear plan." },
  { name: "Doris Pittman", text: "I've been very pleased with Dr. Gurav for a few years. He's very compassionate and thorough when he explains your heart. I've referred him to many people." },
  { name: "Kimberly Leflore", text: "Dr. Gurav was great. He has a system of getting the readings of my BP and O2 sats from home. He was very pleasant and easy to talk with." },
  { name: "Dorothy Hunter", text: "I'm glad to be here, I'm so thankful. He is a great doctor — patient, concerned, caring, and listens to what you have to say. Truly cares about your health." },
  { name: "Jason Hill", text: "Got taken care of fast and professionally. The office has high-tech equipment, everything's clean and efficient. The doctor was thorough and asked the right questions." },
];

const videos = [
  {
    youtubeId: "Y8qnxj5VaRU",
    poster: kenyaTripPoster,
    title: "Incredible Heart: Making a Difference in Kenya",
    description: "A look at Incredible Heart's community health outreach in Kenya.",
  },
  {
    youtubeId: "U8BVVAxb9Pw",
    poster: tvSegmentPoster,
    title: "Dr. Gurav Featured on Fox2 News — Ask the Expert",
    description: "Dr. Gurav joins Fox2 News to talk cardiac health and answer viewer questions.",
  },
];

function Home() {
  useDocumentMeta(
    "Incredible Heart — Cardiologist in Saint Louis, MO | Cardiac Care, Everywhere",
    "Board-certified cardiologist Dr. Kunal Gurav, MD, FACC offers same-day in-person and virtual cardiac care in Saint Louis, MO — arrhythmia, heart failure, EKG, echocardiogram and more. Call (314) 557-2620.",
  );
  const { phone } = useRouteContact();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={heroCouple}
              alt="Happy elderly couple embracing"
              width={1280}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Cardiac Care<br />
              <span className="text-[var(--brand-pink)]">Everywhere</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/75 max-w-lg leading-relaxed">
              Your dedicated cardiologists at Incredible Heart prioritize personalized care, whether in-person or from home. With services ranging from same-day appointments for immediate attention to ongoing support, we're committed to your cardiac health.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.zocdoc.com/booking-link/practice/incredible-heart-82296"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--brand-pink)] text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
              >
                Book Online
              </a>
              <a href={phone.href} className="inline-flex items-center gap-2 text-foreground font-semibold underline underline-offset-4 decoration-2 decoration-[var(--brand-blue)]">
                <Phone className="w-4 h-4" /> Call us: {phone.display}
              </a>
            </div>
          </div>
          
        </div>
      </section>

      <LimitedTimeOffer variant="banner" offer={CARDIAC_SCREENING_OFFER} ctaHref={CARDIAC_SCREENING_BOOKING_URL} />

      {/* Doctor section */}
      <section className="bg-white border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-extrabold tracking-tight">Meet Dr. Kunal Gurav</h2>
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
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-6 bg-[var(--brand-blue)] rounded-[3rem]" />
            <img src={doctor} alt="Dr. Kunal Gurav" loading="lazy" width={900} height={1100} className="relative rounded-[2rem] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Incredible Membership */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={manKid} alt="Grandfather and granddaughter" loading="lazy" width={1100} height={1100} className="w-full h-auto" />
          </div>
          <div>
            <span className="inline-block text-xs font-bold tracking-widest text-[var(--brand-pink)] uppercase">Incredible Membership</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight">Proactive care for an Incredible Heart.</h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Incredible Membership integrates user-friendly monitoring devices, empowering you to proactively manage your cardiac health. And when you need in-person attention, our physical location is here for you.
            </p>
            <a href="#" className="mt-8 inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
              Learn more
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

      {/* Videos */}
      <section className="bg-white border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">See Incredible Heart in Action</h2>
            <p className="mt-5 text-lg text-foreground/70">
              From community outreach to local media, here's more on our mission and our team.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {videos.map((v) => (
              <div key={v.title} className="rounded-3xl bg-secondary/40 border border-border overflow-hidden">
                <YouTubeEmbed videoId={v.youtubeId} title={v.title} poster={v.poster} />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-foreground/75">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Cardiac Rehab */}
      <section className="bg-[var(--brand-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Virtual Cardiac Rehab</h2>
            <p className="mt-5 text-lg text-foreground/70">
              Schedule virtual or in-person consultations with your cardiologists and access our full care team. Whether it's a flare-up, check-up, or ongoing support, we're here for you.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "At-home monitoring", items: ["Real-time heart-health updates", "See treatment progress", "Keep loved ones informed", "Stay ahead of exacerbations"] },
              { icon: Stethoscope, title: "Cardiac Care, Everywhere", items: ["Personalized plans that fit your lifestyle", "Cardiac rehab for better activity", "Medication review to avoid polypharmacy"] },
              { icon: HomeIcon, title: "Ongoing Care", items: ["Continuous support whenever needed", "Responsive on an ongoing basis", "Reliable help and guidance"] },
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

      {/* FAQ */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-center">We're here to answer your questions</h2>
          <div className="mt-10 rounded-2xl border border-border bg-white p-6">
            <div className="font-semibold text-lg">Is there a fee for my Incredible Membership?</div>
            <p className="mt-3 text-foreground/75">
              No — we offer Incredible cardiology services at no extra cost other than your insurance copay, which is determined by your insurance. Now, isn't that incredible!
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[var(--brand-blue)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Take the first step toward a healthier life.</h2>
            <p className="mt-5 text-white/85 text-lg">Request more information and our team will be in touch.</p>
            <address className="mt-8 space-y-4 text-white/90 not-italic">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" /> <a href={phone.href} className="hover:underline">{phone.display}</a>
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

export default Home;
