import Link from "next/link";

const navLinks = [
  { href: "#the-system", label: "The System" },
  { href: "#my-story", label: "My Story" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-dark/60 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-ink"
        >
          Skyward Works
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Fix My Systems
        </Link>
      </nav>
    </header>
  );
}
