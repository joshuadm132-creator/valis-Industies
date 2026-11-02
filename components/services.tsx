
// components/services.tsx
"use client";


import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServiceIllustration from "@/components/serviceIllustration";
/* ============================================================
   Types
   ============================================================ */

export type ServiceContent = {
  id: string;
  subtitle?: string;
  paragraphs?: string[];
  features?: string[];
  image?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  tag?: string;
  content?: ServiceContent[];
  button?: { text: string; href: string };
};

type ServicesProps = {
  headline: string;
  subheadline?: string;
  services: Service[];
  variant?: "preview" | "full";
};

/* ============================================================
   Section wrapper
   ============================================================ */

export default function Services({
  headline,
  subheadline,
  services,
  variant = "preview",
}: ServicesProps) {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Centered section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-base font-semibold tracking-[0.16em] text-primary">
            WHAT WE DO IN FULL
          </p>
           <p className="mb-4 text-sm font-semibold tracking-[0.16em] text-accent">
            just click
          </p>
          

          <h2 className="font-heading text-3xl font-bold uppercase text-text md:text-4xl">
            {headline}
          </h2>

          {subheadline && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
              {subheadline}
            </p>
          )}
        </div>

        {variant === "preview" && (
          <PreviewGrid services={services} />
        )}

        {variant === "full" && (
          <FullAccordion services={services} />
        )}
      </div>
    </section>
  );
}

/* ============================================================
   Service card
   ============================================================ */

type ServiceCardProps = {
  service: Service;
  index: number;
  active?: boolean;
  href?: string;
  onClick?: () => void;
};

/**
 * Shared card used by both the homepage preview
 * and the full services page.
 *
 * Shape:
 * - Very rounded top-left
 * - Rounded top-right
 * - Rounded bottom-left
 * - Square bottom-right
 */
function ServiceCard({
  service,
  index,
  active = false,
  href,
  onClick,
}: ServiceCardProps) {
  const cardClassName = `
    group relative flex h-full min-h-[245px] flex-col
    overflow-hidden border border-border bg-surface
    rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-none
    p-6 md:p-7
    text-left
    transition-all duration-300 ease-out
    hover:border-primary/50
    hover:-translate-y-1
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary
    focus-visible:ring-offset-4
    ${active ? "border-primary bg-primary/5" : ""}
  `;

  const cardContent = (
    <>
      {/* Top row */}
      <div className="flex items-center justify-between gap-4">
        {/* Category tag */}
        {service.tag ? (
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium tracking-wide text-primary">
            {service.tag}
          </span>
        ) : (
          <span />
        )}

        {/* Service number */}
        <span className="font-heading text-sm tabular-nums text-text-muted/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Text content */}
      <div className="mt-7 flex-1">
        <h3 className="font-heading text-xl font-semibold leading-snug text-text md:text-2xl">
          {service.title}
        </h3>

        <p className="mt-3 text-base leading-relaxed text-text-muted">
          {service.description}
        </p>
      </div>

      {/* Bottom row */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          {onClick ? (active ? "Close details" : "Explore service") : "Explore service"}
        </span>

        {/* Small decorative arrow */}
        <span
          aria-hidden="true"
          className={`
            flex h-9 w-9 items-center justify-center
            rounded-full border border-border
            text-primary
            transition-all duration-300
            group-hover:border-primary
            group-hover:bg-primary
            group-hover:text-text-inverse
            ${active ? "rotate-45 border-primary bg-primary text-text-inverse" : ""}
          `}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </div>

      {/* Minimal decorative accent in the top corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-1 w-0 bg-primary/70 transition-all duration-300 group-hover:w-100"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {cardContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={active}
      className={cardClassName}
    >
      {cardContent}
    </button>
  );
}

/* ============================================================
   HOME / PREVIEW
   ============================================================ */

function PreviewGrid({ services }: { services: Service[] }) {
  return (
    <>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={i * 80}>
            <ServiceCard
              service={service}
              index={i}
              href={`/services/#${service.id}`}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={services.length * 80 + 100}>
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="
              inline-flex items-center gap-3
              bg-primary px-6 py-3
              font-medium text-text-inverse
              rounded-tl-sm rounded-tr-xl
              rounded-bl-xl rounded-br-none
              transition-colors
              hover:bg-primary-hover
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-4
            "
          >
            Explore All Services

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </>
  );
}

/* ============================================================
   SERVICES PAGE / FULL
   ============================================================ */

function FullAccordion({ services }: { services: Service[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const openService = services.find((s) => s.id === openId) ?? null;

  const detailRef = useRef<HTMLDivElement | null>(null);

  // Skip scrolling on initial render.
  const hasInteracted = useRef(false);

  /* ------------------------------------------------------------
     Deep-link support
     ------------------------------------------------------------ */

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const match = services.find(
      (s) =>
        s.id === hash ||
        s.content?.some((c) => c.id === hash)
    );

    if (match) {
      setOpenId(match.id);
      hasInteracted.current = true;
    }
  }, [services]);

  /* ------------------------------------------------------------
     Scroll to detail panel when a card opens
     ------------------------------------------------------------ */

  useEffect(() => {
    if (!hasInteracted.current) return;
    if (!openId) return;

    const raf = requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [openId]);

  /* ------------------------------------------------------------
     Toggle
     ------------------------------------------------------------ */

  const toggle = (id: string) => {
    hasInteracted.current = true;
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={service.id}
            id={service.id}
            className="h-full scroll-mt-24"
          >
            <ServiceCard
              service={service}
              index={i}
              active={openId === service.id}
              onClick={() => toggle(service.id)}
            />
          </div>
        ))}
      </div>

      {openService && (
        <div
          ref={detailRef}
          id="service-detail"
          className="mt-6 scroll-mt-24"
        >
          <ServiceDetail service={openService} />
        </div>
      )}
    </>
  );
}

/* ============================================================
   Expanded detail panel
   ============================================================ */

function ServiceDetail({ service }: { service: Service }) {
  return (
    <div className="border border-border bg-surface p-6 md:p-10">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        {/* Text column */}
        <div>
          {service.content?.map((block) => (
            <div
              key={block.id}
              id={block.id}
              className="scroll-mt-24"
            >
              {block.subtitle && (
                <h4 className="font-heading text-xl font-semibold text-text md:text-2xl">
                  {block.subtitle}
                </h4>
              )}

              <div className="mt-4 space-y-4">
                {block.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-text-muted"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {block.features && (
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {block.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text"
                    >
                      <span className="shrink-0 font-bold text-accent">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {service.button && (
            <Link
              href={service.button.href}
              className="
                mt-8 inline-flex items-center gap-3
                bg-primary px-6 py-3
                font-medium text-text-inverse
                rounded-tl-sm rounded-tr-xl
                rounded-bl-xl rounded-br-none
                transition-colors
                hover:bg-primary-hover
              "
            >
              {service.button.text}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
          )}
        </div>

        {/* Visual column */}
        
{/* SVG Illustration column */}
<div className="order-first md:order-last flex items-center justify-center">
  <div className="w-full overflow-hidden rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-none bg-background p-4 md:p-6">
    <ServiceIllustration
      serviceId={service.id}
      className="h-auto w-full"
    />
  </div>
</div>

      </div>
    </div>
  );
}
