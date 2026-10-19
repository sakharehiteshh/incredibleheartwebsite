import { useLocation } from "react-router-dom";
import { ADDRESS, EMAIL, EXPRESS_EMAIL, EXPRESS_PATH, FAX, IMMIGRATION_PATH, getBookingUrl, getPhone } from "@/lib/siteContact";

export function useRouteContact() {
  const { pathname } = useLocation();
  return {
    phone: getPhone(pathname),
    bookingUrl: getBookingUrl(pathname),
    address: ADDRESS,
    email: pathname.startsWith(EXPRESS_PATH) ? EXPRESS_EMAIL : EMAIL,
    fax: FAX,
    isImmigrationPage: pathname.startsWith(IMMIGRATION_PATH),
  };
}
