import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useDocumentMeta } from "@/hooks/use-document-meta";

function NotFound() {
  useDocumentMeta("Page not found | Incredible Heart", "The page you're looking for doesn't exist.");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />
      <section className="bg-[var(--brand-cream)]">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">Page not found</h1>
          <p className="mt-6 text-lg text-foreground/75">
            Sorry, we couldn't find that page. Try one of these instead:
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="inline-flex bg-[var(--brand-pink)] text-white font-semibold px-6 py-3 rounded-full hover:brightness-110 transition">Home</Link>
            <Link to="/immigrationexam" className="inline-flex bg-[var(--brand-blue)] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">Immigration Exam</Link>
            <Link to="/weight-management" className="inline-flex bg-[var(--brand-blue)] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">Weight Management</Link>
            <Link to="/about-us" className="inline-flex bg-[var(--brand-blue)] text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">About Us</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

export default NotFound;
