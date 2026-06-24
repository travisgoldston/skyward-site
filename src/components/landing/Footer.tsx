import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dusk-gray">
              Based in Melissa, Texas. Digital infrastructure for local service
              businesses across North Texas.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-dusk-gray-light">
                Navigate
              </p>
              <nav className="flex flex-col gap-2" aria-label="Footer">
                {[
                  { href: "#services", label: "Services" },
                  { href: "#pricing", label: "Pricing" },
                  { href: "#contact", label: "Contact" },
                  { href: "#faq", label: "FAQ" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-dusk-gray transition-colors hover:text-skyward-blue"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-dusk-gray-light">
                Contact
              </p>
              <a
                href="mailto:hello@skyward.agency"
                className="text-sm text-dusk-gray transition-colors hover:text-skyward-blue"
              >
                hello@skyward.agency
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-dusk-gray-light">
            © {new Date().getFullYear()} Skyward Works. All rights reserved.
          </p>
          <p className="text-xs text-dusk-gray-light">
            Clear systems. Real results. No fluff.
          </p>
        </div>
      </div>
    </footer>
  );
}
