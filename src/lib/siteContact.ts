export const IMMIGRATION_PATH = "/immigrationexam";
export const EXPRESS_PATH = "/express-heart-care";

const EXPRESS_PHONE_DISPLAY = "(314) 248-4076";
const EXPRESS_PHONE_HREF = "tel:+13142484076";
export const EXPRESS_EMAIL = "expressheartcare@gmail.com";
export const EXPRESS_SITE_URL = "https://www.expressheartcare.com";
const EXPRESS_BOOKING_URL = "https://calendly.com/expressheartcare/";

export const ADDRESS = "1034 S Brentwood Blvd Ste 694, St. Louis, MO 63117";
export const EMAIL = "incredibleheartit@gmail.com";
export const FAX = "(833) 973-4441";

const BASE_PHONE_DISPLAY = "(314) 557-2620";
const BASE_PHONE_HREF = "tel:+13145572620";
const IMMIGRATION_EXT = "7";

export function getPhone(pathname: string) {
  if (pathname.startsWith(EXPRESS_PATH)) return { display: EXPRESS_PHONE_DISPLAY, href: EXPRESS_PHONE_HREF };
  const isImmigration = pathname.startsWith(IMMIGRATION_PATH);
  return {
    display: isImmigration ? `${BASE_PHONE_DISPLAY} ext ${IMMIGRATION_EXT}` : BASE_PHONE_DISPLAY,
    // trailing commas insert a dial pause before the extension digits (iOS/Android)
    href: isImmigration ? `${BASE_PHONE_HREF},,${IMMIGRATION_EXT}` : BASE_PHONE_HREF,
  };
}

const DEFAULT_BOOKING_URL =
  "https://www.zocdoc.com/booking-link/doctor/kunal-gurav-md-396698";
const IMMIGRATION_BOOKING_URL = "https://calendly.com/incredibleheartit/30min";

export function getBookingUrl(pathname: string) {
  if (pathname.startsWith(EXPRESS_PATH)) return EXPRESS_BOOKING_URL;
  return pathname.startsWith(IMMIGRATION_PATH) ? IMMIGRATION_BOOKING_URL : DEFAULT_BOOKING_URL;
}
