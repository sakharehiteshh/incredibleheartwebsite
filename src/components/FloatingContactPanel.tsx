import { Phone, MapPin, Mail, Printer } from "lucide-react";
import { AddressLink } from "@/components/AddressLink";
import { FloatingWidgetShell } from "@/components/FloatingWidgetShell";
import { useRouteContact } from "@/hooks/use-route-contact";

function ContactBody({ compact }: { compact?: boolean }) {
  const { phone, address, email, fax, bookingUrl } = useRouteContact();

  return (
    <div className={compact ? "w-[280px] max-w-[85vw] rounded-2xl bg-white border border-border shadow-xl p-5" : ""}>
      <span className="inline-block text-[11px] font-bold tracking-widest text-[var(--brand-blue)] uppercase">
        Contact Us
      </span>
      <div className="mt-3 space-y-3 text-sm">
        <a href={phone.href} className="flex items-start gap-2.5 text-foreground hover:underline">
          <Phone className="w-4 h-4 text-[var(--brand-blue)] mt-0.5 shrink-0" />
          {phone.display}
        </a>
        <AddressLink className="flex items-start gap-2.5 text-foreground hover:underline">
          <MapPin className="w-4 h-4 text-[var(--brand-blue)] mt-0.5 shrink-0" />
          {address}
        </AddressLink>
        <a href={`mailto:${email}`} className="flex items-start gap-2.5 text-foreground hover:underline break-all">
          <Mail className="w-4 h-4 text-[var(--brand-blue)] mt-0.5 shrink-0" />
          {email}
        </a>
        <div className="flex items-start gap-2.5 text-foreground/80">
          <Printer className="w-4 h-4 text-[var(--brand-blue)] mt-0.5 shrink-0" />
          Fax: {fax}
        </div>
      </div>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-[var(--brand-pink)] text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
      >
        Book Online
      </a>
    </div>
  );
}

export function FloatingContactPanel() {
  return (
    <FloatingWidgetShell
      label="Contact"
      icon={Phone}
      mobileContent={
        <div className="mt-2">
          <ContactBody />
        </div>
      }
    >
      <ContactBody compact />
    </FloatingWidgetShell>
  );
}
