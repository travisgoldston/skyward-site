import Link from "next/link";
import { ChevronIcon } from "./ChevronIcon";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Skyward Works home"
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          isLight ? "bg-white/15 text-white" : "bg-skyward-blue text-white"
        }`}
      >
        <ChevronIcon size={16} />
      </span>
      <span
        className={`font-display text-sm font-bold tracking-tight md:text-base ${
          isLight ? "text-white" : "text-deep-horizon"
        }`}
      >
        Skyward Works
      </span>
    </Link>
  );
}
