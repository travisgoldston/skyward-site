import Link from "next/link";
import { ChevronIcon } from "./ChevronIcon";

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
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Skyward Works home"
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-sm ${
          isLight ? "bg-white/15 text-white" : "bg-skyward-blue text-white"
        }`}
      >
        <ChevronIcon size={18} />
      </span>
      {showWordmark && (
        <span
          className={`font-display text-sm font-bold tracking-tight md:text-base ${
            isLight ? "text-white" : "text-deep-horizon"
          }`}
        >
          Skyward Works
        </span>
      )}
    </Link>
  );
}
