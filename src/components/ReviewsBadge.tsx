import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export const REVIEW_COUNT = "450+";

/** "450+ 5-star reviews" line with five stars, shown near the top of each clinic page. */
export function ReviewsBadge({ className }: { className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold", className)}>
      <span className="flex text-[var(--brand-yellow)]" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current stroke-[oklch(0.6_0.15_85)]" />
        ))}
      </span>
      {REVIEW_COUNT} 5-star reviews
    </p>
  );
}
