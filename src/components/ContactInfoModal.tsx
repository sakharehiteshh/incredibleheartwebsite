import { Phone, Mail, Printer, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const contactDetails = [
  { icon: MapPin, label: "Address", value: "1034 S Brentwood Blvd Ste 694, Saint Louis, MO 63117", href: undefined },
  { icon: Phone, label: "Phone", value: "(314) 557-2620", href: "tel:+13145572620" },
  { icon: Mail, label: "Email", value: "incredibleheartit@gmail.com", href: "mailto:incredibleheartit@gmail.com" },
  { icon: Printer, label: "Fax", value: "(833) 973-4441", href: undefined },
];

interface ContactInfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactInfoModal({ open, onOpenChange }: ContactInfoModalProps) {
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
