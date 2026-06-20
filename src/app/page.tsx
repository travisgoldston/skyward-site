import { ArrowRight, MapPinned, Zap } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-content px-6 py-24 lg:px-8 lg:py-32">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Skyward Works
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Stop losing leads to missed calls and broken websites.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              I build the digital infrastructure and AI systems that capture your
              local market and close the leads you&apos;re currently bleeding.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Fix My Systems
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/30 hover:bg-stone"
              >
                Get a Free Systems Audit
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder / Why Me */}
      <section id="my-story" className="bg-stone">
        <div className="mx-auto max-w-content px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                From the phones to VP in 8 years.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                I didn&apos;t learn business in a classroom. I learned it by fixing
                broken systems on the front lines. Most marketing agencies sell you
                clicks. I sell you operational infrastructure. I know how to fix your
                sales and marketing because I&apos;ve actually done it.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services / Offers */}
      <section id="the-system" className="bg-white">
        <div className="mx-auto max-w-content px-6 py-24 lg:px-8 lg:py-28">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wider text-accent">
                What I Build
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Two systems. One goal: stop the leak.
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                Start with immediate ROI. Then build the infrastructure that keeps
                you dominant in your market.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ServiceCard
              subtitle="The Instant ROI"
              title="AI Speed-to-Lead"
              description="78% of customers buy from the first business that responds. When you're on a job and miss a call, that lead goes to your competitor. I install an AI system that instantly texts back missed calls — so you capture the lead before anyone else even picks up the phone."
              icon={Zap}
              delay={0.1}
            />
            <ServiceCard
              subtitle="The Core Infrastructure"
              title="Local Dominance Systems"
              description="Generic monthly SEO doesn't cut it anymore. I deploy programmatic SEO, local visibility, and automated review capture — a full system built to own your market, not just rank for a handful of keywords."
              icon={MapPinned}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-stone-dark bg-stone-light">
        <div className="mx-auto max-w-content px-6 py-20 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Your leads are leaving. Let&apos;s fix that.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
              Book a free systems audit. I&apos;ll show you exactly where you&apos;re
              losing revenue — and what it takes to stop it.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Get a Free Systems Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
