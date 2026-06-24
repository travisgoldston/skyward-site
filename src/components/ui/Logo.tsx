import Link from "next/link";
import { BrandMark } from "./BrandMark";

interface LogoProps {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
}

export function Logo({
  variant = "dark",
  showWordmark = true,
  className = "",
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Skyward Works home"
    >
      <BrandMark size={40} className="shrink-0" />
      {showWordmark && (
        <span
          className={`font-display text-[15px] font-bold tracking-tight md:text-base ${
            isLight ? "text-white" : "text-deep-horizon"
          }`}
        >
          Skyward Works
        </span>
      )}
    </Link>
  );
}
