import { useLocation } from "react-router-dom";
import { ADDRESS, EMAIL, FAX, IMMIGRATION_PATH, getBookingUrl, getPhone } from "@/lib/siteContact";

export function useRouteContact() {
  const { pathname } = useLocation();
  return {
    phone: getPhone(pathname),
    bookingUrl: getBookingUrl(pathname),
    address: ADDRESS,
    email: EMAIL,
    fax: FAX,
    isImmigrationPage: pathname.startsWith(IMMIGRATION_PATH),
  };
}
