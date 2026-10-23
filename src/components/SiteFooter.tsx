import { Link } from "react-router-dom";
import logoIconWhite from "@/assets/logo-icon-white.png";
import { AddressLink } from "@/components/AddressLink";
import { useRouteContact } from "@/hooks/use-route-contact";

export function SiteFooter() {
  const { phone, email } = useRouteContact();
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 text-white">
            <img src={logoIconWhite} alt="" width={32} height={32} className="w-8 h-8 shrink-0" />
            <span className="font-extrabold text-lg">Incredible Heart</span>
          </div>
          <p className="mt-4 text-sm">Cardiac care, everywhere you need it.</p>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about-us">About Us</Link></li>
            <li><a href="#">Terms of Service</a></li>
            <li><Link to="/weight-management">Weight Management</Link></li>
            <li><Link to="/immigrationexam">Immigration Exam</Link></li>
            <li><Link to="/express-heart-care">Express Heart Care</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Visit Us</div>
          <address className="not-italic text-sm space-y-1">
            <p><AddressLink>1034 S Brentwood Blvd Ste 694<br />Saint Louis, MO 63117</AddressLink></p>
            <p><a href={phone.href} className="hover:underline">{phone.display}</a></p>
            <p><a href={`mailto:${email}`} className="hover:underline break-words">{email}</a></p>
            <p>Fax: (833) 973-4441</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Incredible Heart. All rights reserved.
      </div>
    </footer>
  );
}
