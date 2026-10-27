// components/service-card.tsx
import Link from "next/link";
import Reveal from "@/components/Reveal";

export type ServiceCardData = {
  id: string;
  title: string;
  description: string;
  /** Short one-word label like "Web", "SEO", "Payments" — shown as a pill */
  tag?: string;
  /** Optional number shown faintly in the corner, e.g. "01" */
  index?: string;
};

type ServiceCardProps = {
  service: ServiceCardData;
  href?: string;      // if provided, the card is a link
  onClick?: () => void; // if provided, the card is a button (accordion mode)
  active?: boolean;   // highlight if it's the currently-open accordion item
};

export default function ServiceCard({
  service,
  href,
  onClick,
  active = false,
}: ServiceCardProps) {
  const inner = (
    <>
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 ">
        <div className="flex items-center gap-3">
          {service.tag && (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary">
              {service.tag}
            </span>
          )}
        </div>
        {service.index && (
          <span
            className={`text-xs font-mono transition-colors ${
              active ? "text-primary" : "text-text-muted/50"
            }`}
          >
            {service.index}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={`mt-5 text-lg font-heading font-semibold transition-colors ${
          active ? "text-primary" : "text-text group-hover:text-primary"
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        {service.description}
      </p>

      {/* Tiny arrow — only on links */}
      {href && (
        <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 gap-1 transition-all">
          Learn more
          <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  const baseClasses = `
    group block h-full p-6 rounded-tl-xl rounded-tr-4xl rounded-bl-4xl rounded-br-none border transition-all duration-200
    ${
      active
        ? "border-primary bg-primary/5 shadow-sm"
        : "border-border bg-background hover:border-primary/40 hover:shadow-md"
    }
  `;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={active}
      className={`${baseClasses} text-left w-full cursor-pointer`}
    >
      {inner}
    </button>
  );
}

/* ---------- Reveal wrapper so grids stagger in ---------- */
export function ServiceCardReveal({
  service,
  delay,
  ...rest
}: ServiceCardProps & { delay: number }) {
  return (
    <Reveal delay={delay}>
      <ServiceCard service={service} {...rest} />
    </Reveal>
  );
}