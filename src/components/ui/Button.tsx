import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "hero";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-skyward-blue text-white hover:bg-skyward-blue-hover hover:shadow-lg hover:shadow-skyward-blue/30 active:scale-[0.98]",
    secondary:
      "border border-dusk-gray-light/40 bg-white text-deep-horizon hover:border-skyward-blue/40 hover:text-skyward-blue active:scale-[0.98]",
    hero:
      "bg-cloud-cyan text-deep-horizon font-bold hover:bg-white hover:shadow-lg hover:shadow-black/10 active:scale-[0.98]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
