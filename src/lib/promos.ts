export interface OfferItem {
  label: string;
  detail: string;
}

export interface Offer {
  eyebrow: string;
  title: string;
  offers: OfferItem[];
}

export const CARDIAC_SCREENING_OFFER: Offer = {
  eyebrow: "Limited-Time Offer",
  title: "Free Cardiac Screening",
  offers: [
    { label: "Free Cardiac Screening", detail: "Includes Lipoprotein(a) and cholesterol testing." },
    { label: "$45 Blood Draw", detail: "For participating in research." },
  ],
};

export const CARDIAC_SCREENING_BOOKING_URL = "https://calendly.com/expressheartcare/cardiac-screening";
