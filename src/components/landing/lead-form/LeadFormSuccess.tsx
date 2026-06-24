"use client";

export function LeadFormSuccess() {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cloud-cyan-muted text-skyward-blue">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h3 className="font-display text-xl font-bold text-deep-horizon">
        You&apos;re on the list.
      </h3>
      <p className="mt-2 text-sm text-dusk-gray">
        We&apos;ll review your info and reach out within one business day.
      </p>
    </div>
  );
}
