import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { AddressLink } from "@/components/AddressLink";
import { ContactInfoModal } from "@/components/ContactInfoModal";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { nav } from "@/lib/nav";

const CONTACT_MODAL_SESSION_KEY = "incredible-heart:contact-modal-shown";
let hasAutoOpenedThisSession = false;

function NavAnchor({
  href,
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"a"> & { href: string }) {
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
      </a>
    );
  }
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}

export function SiteHeader() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (hasAutoOpenedThisSession) return;
    if (sessionStorage.getItem(CONTACT_MODAL_SESSION_KEY)) return;
    hasAutoOpenedThisSession = true;
    sessionStorage.setItem(CONTACT_MODAL_SESSION_KEY, "1");
    setContactOpen(true);
  }, []);

  return (
    <>
      {/* Top banner */}
      <div className="bg-[var(--brand-blue)] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center">
          <span className="font-semibold">Open Now For Virtual Consultations</span>
          <span className="opacity-90">In Person — <AddressLink className="hover:underline">1034 S Brentwood Blvd Ste 694, Saint Louis, MO 63117</AddressLink></span>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="underline underline-offset-4 cursor-pointer"
          >
            Learn more
          </button>
        </div>
      </div>

      {/* Nav */}
      <header className="border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-foreground/80">
            {nav.map((n) => (
              <div key={n.label} className="relative group">
                <NavAnchor
                  href={n.href ?? "#"}
                  className="inline-flex items-center gap-1 py-6 hover:text-[var(--brand-blue)] transition-colors"
                >
                  {n.label}
                  {n.children && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                </NavAnchor>
                {n.children && (
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div className="min-w-[240px] max-h-[70vh] overflow-y-auto rounded-xl border border-border bg-white shadow-xl py-2">
                      {n.children.map((c) => (
                        <NavAnchor
                          key={c.label}
                          href={c.href}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-[var(--brand-blue)]"
                        >
                          {c.label}
                        </NavAnchor>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setMobileNavOpen(true)}
            className="lg:hidden p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="right" className="w-[85vw] sm:max-w-sm overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-6 flex flex-col gap-1 text-foreground/80">
            {nav.map((n) =>
              n.children ? (
                <details key={n.label} className="group/details border-b border-border/60 py-2">
                  <summary className="flex items-center justify-between py-2 font-medium cursor-pointer list-none">
                    {n.label}
                    <ChevronDown className="w-4 h-4 opacity-70 transition-transform group-open/details:rotate-180" />
                  </summary>
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {n.children.map((c) => (
                      <NavAnchor
                        key={c.label}
                        href={c.href}
                        onClick={() => setMobileNavOpen(false)}
                        className="py-2 text-sm text-foreground/70 hover:text-[var(--brand-blue)]"
                      >
                        {c.label}
                      </NavAnchor>
                    ))}
                  </div>
                </details>
              ) : (
                <SheetClose asChild key={n.label}>
                  <NavAnchor
                    href={n.href ?? "#"}
                    className="py-3 font-medium border-b border-border/60 hover:text-[var(--brand-blue)]"
                  >
                    {n.label}
                  </NavAnchor>
                </SheetClose>
              ),
            )}
          </nav>
        </SheetContent>
      </Sheet>

      <ContactInfoModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}
