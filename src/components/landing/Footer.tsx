import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold tracking-tight text-white">
              Skyward Works
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-500">
              Based in Melissa, Texas and serving North Texas. We build digital
              infrastructure for local businesses.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Navigate
              </p>
              <nav className="flex flex-col gap-2" aria-label="Footer">
                {[
                  { href: "#problem", label: "The Problem" },
                  { href: "#services", label: "Services" },
                  { href: "#pricing", label: "Pricing" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Contact
              </p>
              <a
                href="mailto:hello@skyward.agency"
                className="text-sm text-zinc-400 transition-colors hover:text-accent"
              >
                hello@skyward.agency
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-800/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Skyward Works. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Most agencies sell clicks. We build operational infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
}
