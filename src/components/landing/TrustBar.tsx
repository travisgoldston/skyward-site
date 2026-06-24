export function TrustBar() {
  const items = [
    { label: "Google", highlight: true },
    { label: "Local SEO" },
    { label: "GA4 Tracking" },
    { label: "North Texas" },
  ];

  return (
    <section
      aria-label="Capabilities"
      className="border-b border-slate-100 bg-white py-8"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5">
        {items.map((item) => (
          <span
            key={item.label}
            className={`text-sm font-semibold tracking-wide ${
              item.highlight
                ? "text-deep-horizon"
                : "text-dusk-gray-light"
            }`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
