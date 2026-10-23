import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, Leaf, ClipboardCheck, type LucideIcon } from "lucide-react";

export type ServiceKey = "heart" | "weight" | "immigration";

const services: Record<ServiceKey, { icon: LucideIcon; title: string; text: string; cta: string; to: string }> = {
  heart: {
    icon: HeartPulse,
    title: "Heart & Cardiology Care",
    text: "Explore heart consultations, diagnostic testing, and ongoing cardiac care.",
    cta: "Explore Heart Care",
    to: "/",
  },
  weight: {
    icon: Leaf,
    title: "Weight Management",
    text: "Learn about medical support for your weight management goals.",
    cta: "Explore Weight Care",
    to: "/weight-management",
  },
  immigration: {
    icon: ClipboardCheck,
    title: "Immigration Medical Exams",
    text: "Find information to help you prepare for your immigration medical exam.",
    cta: "View Exam Details",
    to: "/immigrationexam",
  },
};

interface ExploreServicesProps {
  /** The service that matches the current page; it is left out of the list. */
  exclude: ServiceKey;
}

export function ExploreServices({ exclude }: ExploreServicesProps) {
  const items = (Object.keys(services) as ServiceKey[]).filter((k) => k !== exclude);

  return (
    <div>
      <h3 className="text-2xl font-extrabold tracking-tight">Explore our services</h3>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
        {items.map((key) => {
          const s = services[key];
          return (
            <div key={key} className="rounded-3xl bg-white text-foreground border border-border p-6 shadow-xl flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-blue)] text-white flex items-center justify-center">
                <s.icon className="w-6 h-6" />
              </div>
              <h4 className="mt-4 text-xl font-bold">{s.title}</h4>
              <p className="mt-2 text-foreground/75 leading-relaxed flex-1">{s.text}</p>
              <Link
                to={s.to}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--brand-blue)] hover:gap-3 transition-all"
              >
                {s.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
