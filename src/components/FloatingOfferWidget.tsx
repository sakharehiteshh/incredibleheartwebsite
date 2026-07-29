import { Gift } from "lucide-react";
import { FloatingWidgetShell } from "@/components/FloatingWidgetShell";
import { LimitedTimeOffer } from "@/components/LimitedTimeOffer";
import { CARDIAC_SCREENING_OFFER, CARDIAC_SCREENING_BOOKING_URL } from "@/lib/promos";

export function FloatingOfferWidget() {
  return (
    <FloatingWidgetShell
      label="Special Offer"
      icon={Gift}
      mobileContent={
        <div className="mt-2">
          <LimitedTimeOffer variant="floating" offer={CARDIAC_SCREENING_OFFER} ctaHref={CARDIAC_SCREENING_BOOKING_URL} bare />
        </div>
      }
    >
      <LimitedTimeOffer variant="floating" offer={CARDIAC_SCREENING_OFFER} ctaHref={CARDIAC_SCREENING_BOOKING_URL} />
    </FloatingWidgetShell>
  );
}
