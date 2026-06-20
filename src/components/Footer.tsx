import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const serviceAreas = [
  "McKinney",
  "Frisco",
  "Allen",
  "Plano",
  "Prosper",
  "Celina",
  "Anna",
  "Melissa",
];

const footerLinks = [
  { href: "#the-system", label: "The System" },
  { href: "#my-story", label: "My Story" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-dark bg-ink text-white">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold">Skyward Works</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              Digital infrastructure and AI systems for established local service
              businesses across North DFW.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-white/50">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-white/50">
              Service Areas
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
              <span>North DFW — {serviceAreas.join(", ")}</span>
            </p>
            <a
              href="mailto:hello@skyward.agency"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-white/50" />
              hello@skyward.agency
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Skyward Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
