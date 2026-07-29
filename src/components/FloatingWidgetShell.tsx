import { useState, type ReactNode } from "react";
import { X, type LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface FloatingWidgetShellProps {
  label: string;
  icon: LucideIcon;
  /** Expanded content shown as a desktop card. */
  children: ReactNode;
  /** Content shown inside the mobile bottom sheet when the compact pill is tapped. */
  mobileContent: ReactNode;
}

export function FloatingWidgetShell({ label, icon: Icon, children, mobileContent }: FloatingWidgetShellProps) {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);

  if (!visible) {
    return (
      <button
        type="button"
        onClick={() => setVisible(true)}
        aria-label={`Reopen ${label}`}
        className="w-12 h-12 rounded-full bg-white border border-border shadow-lg flex items-center justify-center text-[var(--brand-blue)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 animate-in fade-in duration-200"
      >
        <Icon className="w-5 h-5" />
      </button>
    );
  }

  if (isMobile) {
    return (
      <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-300">
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="flex items-center gap-2 rounded-full bg-white border border-border shadow-lg pl-4 pr-3 py-2.5 text-sm font-semibold text-foreground hover:shadow-xl transition-shadow cursor-pointer"
        >
          <Icon className="w-4 h-4 text-[var(--brand-blue)] shrink-0" />
          {label}
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setVisible(false);
          }}
          aria-label={`Close ${label}`}
          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-foreground text-white flex items-center justify-center shadow cursor-pointer"
        >
          <X className="w-3 h-3" />
        </button>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetContent side="bottom" className="rounded-t-2xl max-h-[80vh] overflow-y-auto">
            {mobileContent}
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label={`Close ${label}`}
        className="absolute right-3 top-3 z-10 rounded-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </button>
      {children}
    </div>
  );
}
