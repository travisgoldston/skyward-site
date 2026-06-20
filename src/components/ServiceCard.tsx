import { type LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";

type ServiceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
};

export default function ServiceCard({
  title,
  subtitle,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="flex h-full flex-col rounded-sm border border-stone-dark bg-white p-8 lg:p-10">
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-sm bg-accent-light">
          <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
        </div>

        <p className="text-xs font-medium uppercase tracking-wider text-accent">
          {subtitle}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      </article>
    </FadeIn>
  );
}
