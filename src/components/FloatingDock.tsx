import { FloatingOfferWidget } from "@/components/FloatingOfferWidget";
import { FloatingContactPanel } from "@/components/FloatingContactPanel";
import { FloatingBookButton } from "@/components/FloatingBookButton";

export function FloatingDock() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 pointer-events-none [&>*]:pointer-events-auto">
      <FloatingOfferWidget />
      <FloatingContactPanel />
      <FloatingBookButton />
    </div>
  );
}
