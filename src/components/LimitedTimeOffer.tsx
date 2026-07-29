import { X, HeartPulse, Droplet } from "lucide-react";
import type { Offer } from "@/lib/promos";
import { cn } from "@/lib/utils";

const ICONS = [HeartPulse, Droplet];

interface LimitedTimeOfferProps {
  variant: "banner" | "floating";
  offer: Offer;
  ctaHref: string;
  onClose?: () => void;
  /** Omits the card chrome (border/shadow/rounded/close button) so the content can be embedded inside another container, e.g. a mobile Sheet. Floating variant only. */
  bare?: boolean;
  className?: string;
}

export function LimitedTimeOffer({ variant, offer, ctaHref, onClose, bare, className }: LimitedTimeOfferProps) {
  if (variant === "floating") {
    return (
      <div
        className={cn(
          bare
            ? "relative"
            : "relative w-[280px] max-w-[85vw] rounded-2xl bg-white border border-border shadow-xl p-5 animate-in fade-in slide-in-from-bottom-4 duration-300",
          className,
        )}
      >
        {onClose && !bare && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close limited-time offer"
            className="absolute right-3 top-3 rounded-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
        <span className="inline-block text-[11px] font-bold tracking-widest text-[var(--brand-pink)] uppercase">
          {offer.eyebrow}
        </span>
        <h3 className="mt-2 text-lg font-extrabold tracking-tight leading-snug">{offer.title}</h3>
        <ul className="mt-3 space-y-2">
          {offer.offers.map((item) => (
            <li key={item.label} className="text-sm text-foreground/75 leading-snug">
              <span className="font-semibold text-foreground">{item.label}</span> — {item.detail}
            </li>
          ))}
        </ul>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-[var(--brand-pink)] text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
        >
          Book Online
        </a>
      </div>
    );
  }

  return (
    <section className={cn("bg-[var(--brand-cream)]", className)}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-white border border-border p-8 lg:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold tracking-widest text-[var(--brand-pink)] uppercase">
                {offer.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight">{offer.title}</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                {offer.offers.map((item, i) => {
                  const Icon = ICONS[i % ICONS.length];
                  return (
                    <div key={item.label} className="flex gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[var(--brand-pink)] text-white flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{item.label}</div>
                        <p className="mt-1 text-sm text-foreground/70">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-[var(--brand-pink)] text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
