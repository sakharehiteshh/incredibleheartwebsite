import type { ComponentPropsWithoutRef } from "react";
import { ADDRESS } from "@/lib/siteContact";

/** Google Maps link for the clinic address. */
export function useMapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
}

/** Wraps its children (the address text) in a link that opens the clinic in Google Maps. */
export function AddressLink({ children, ...rest }: Omit<ComponentPropsWithoutRef<"a">, "href">) {
  const href = useMapsUrl();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
