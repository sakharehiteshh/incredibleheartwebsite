import { Phone, Mail, Printer, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useRouteContact } from "@/hooks/use-route-contact";

interface ContactInfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactInfoModal({ open, onOpenChange }: ContactInfoModalProps) {
  const { phone, address, email } = useRouteContact();

  const contactDetails = [
    { icon: MapPin, label: "Address", value: address, href: undefined },
    { icon: Phone, label: "Phone", value: phone.display, href: phone.href },
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    { icon: Printer, label: "Fax", value: "(833) 973-4441", href: undefined },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Incredible Heart</DialogTitle>
          <DialogDescription>Reach us any of the ways below.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {contactDetails.map((c) => (
            <div key={c.label} className="flex items-start gap-3">
              <c.icon className="w-5 h-5 text-[var(--brand-blue)] mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</div>
                {c.href ? (
                  <a href={c.href} className="text-foreground hover:underline break-words">
                    {c.value}
                  </a>
                ) : (
                  <div className="text-foreground">{c.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
