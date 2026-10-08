import { FloatingContactPanel } from "@/components/FloatingContactPanel";
import { FloatingBookButton } from "@/components/FloatingBookButton";
// Limited-time offer widget is paused. To re-enable (or reuse with a new offer), import
// FloatingOfferWidget from "@/components/FloatingOfferWidget" and render it first in the dock;
// update the offer copy/link in "@/lib/promos".

export function FloatingDock() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 pointer-events-none [&>*]:pointer-events-auto">
      <FloatingContactPanel />
      <FloatingBookButton />
    </div>
  );
}
