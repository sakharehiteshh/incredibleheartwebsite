import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={logoIcon} alt="" width={40} height={40} className="w-10 h-10 shrink-0" />
      <div className="leading-tight">
        <div className="font-extrabold text-[var(--brand-blue)] text-lg">Incredible Heart</div>
        <div className="text-[10px] text-muted-foreground tracking-wide">Powered by nuvoair medical</div>
      </div>
    </Link>
  );
}
