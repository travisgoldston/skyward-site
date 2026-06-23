import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "green";
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
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-blue-brand text-white hover:bg-blue-brand-hover hover:shadow-lg hover:shadow-blue-brand/25 active:scale-[0.98]",
    secondary:
      "border border-slate-200 bg-white text-slate-700 hover:border-blue-brand/40 hover:text-blue-brand hover:bg-blue-brand-muted active:scale-[0.98]",
    green:
      "bg-green-brand text-white hover:bg-green-brand-hover hover:shadow-lg hover:shadow-green-brand/25 active:scale-[0.98]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
