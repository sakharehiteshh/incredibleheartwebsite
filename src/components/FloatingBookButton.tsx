import { useState } from "react";
import { X, CalendarCheck } from "lucide-react";
import { useRouteContact } from "@/hooks/use-route-contact";

export function FloatingBookButton() {
  const { bookingUrl } = useRouteContact();
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <button
        type="button"
        onClick={() => setVisible(true)}
        aria-label="Reopen Book Online button"
        className="w-12 h-12 rounded-full bg-[var(--brand-pink)] text-white flex items-center justify-center shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 animate-in fade-in duration-200"
      >
        <CalendarCheck className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-300">
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[var(--brand-pink)] text-white font-semibold px-4 py-3 sm:px-6 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
      >
        <CalendarCheck className="w-4 h-4 sm:hidden" />
        <span className="hidden sm:inline">Book Online</span>
        <span className="sm:hidden text-sm">Book</span>
      </a>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Close Book Online button"
        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-foreground text-white flex items-center justify-center shadow cursor-pointer"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}
