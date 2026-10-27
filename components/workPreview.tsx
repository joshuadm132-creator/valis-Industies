"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

/* ============================================================
   Data
   ============================================================ */

type WorkItem = {
  id: string;
  title: string;
  category: string;
  href: string;
  displayUrl?: string;
  image: string;
  result?: string;
  layout?: "large" | "small" | "medium";
  offset?: boolean;
};

const WORK_ITEMS: WorkItem[] = [
  {
    id: "heritage-touch",
    title: "Heritage Touch",
    category: "Hospitality · Listings",
    href: "https://heritagetouch.org/",
    displayUrl: "heritagetouch.org",
    image:
      "preview_Sites/Screenshot 2026-09-30 at 22-28-49 Residential Senior Care Home in Frisco TX Heritage Touch Senior Care.png",
    result: "Direct enquiries tripled in 6 weeks",
    layout: "medium",  
  },
  {
    id: "Cinama_H",
    title: "Cinema House Temp",
    category: "entertainment · Listings",
    href: "coming soon",
    displayUrl: "heritagetouch.org",
    image: "preview_Sites/cinama.png",
    result: "improved viewer experience",
    offset: true,
    layout:"small",
  },
  {
    id: "Single_page",
    title: "Lorna Moffat personal website",
    category: "Portfolio · Resume",
    href: "https://single-page-template-three.vercel.app/",
    displayUrl: "L Moffat PMP",
    image: "preview_Sites/PMP Project Management Consultant.png",
    result: "Increased online presence",
    layout: "large",
  },
  {
    id: "catalog",
    title: "Business Catalog",
    category: "Sales · Listing · Products",
    href: "https://catalog-template-gs-agency-two.vercel.app/products",
    displayUrl: "catalog-template-gs-agency-two.vercel.app",
    image: "preview_Sites/catalog.png",
    result: "Business sales catalogue",
    layout: "small",
    offset:true, 

  },
  
  
  {
    id: "portfolio",
    title: "Personal Portfolio",
    category: "Corporate · SEO",
    href: "https://joshuadm132-creator.github.io/Potfolio.github.io/",
    displayUrl: "joshuadm132-creator.github.io",
    image: "preview_Sites/image.png",
    result: "Private portfolio",
    layout: "small",
    offset: true,
  },
];

/* ============================================================
   Section
   ============================================================ */

type OurWorkProps = {
  title?: string;
  subtitle?: string;
  background?: "white" | "gray" | "dark";
};

export default function OurWork({
  title = "See Our Work",
  subtitle = "A few of the sites we've designed, built, and launched for businesses like yours.",
  background = "gray",
}: OurWorkProps) {
  const bgClass =
    background === "gray"
      ? "bg-surface"
      : background === "dark"
        ? "bg-hero-bg text-hero-text"
        : "bg-background";

  const headingClass =
    background === "dark" ? "text-hero-text" : "text-text";

  const mutedClass =
    background === "dark"
      ? "text-hero-text/70"
      : "text-text-muted";

  return (
    <section className={`px-6 py-24 ${bgClass}`}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2
            className={`font-heading text-3xl font-bold md:text-5xl ${headingClass}`}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={`mt-6 text-lg leading-relaxed ${mutedClass}`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
          {WORK_ITEMS.map((item, index) => {
            const layoutClass = {
              large: "md:col-span-8 md:row-span-2",
              small: "md:col-span-4",
              medium: "md:col-span-6",
            }[item.layout ?? "small"];

            return (
              <Reveal
                key={item.id}
                delay={index * 100}
                className={`
                  ${layoutClass}
                  ${item.offset ? "md:mt-12" : ""}
                `}
              >
                <WorkCard item={item} />
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={WORK_ITEMS.length * 100 + 100}>
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-8 py-4 font-medium text-text-inverse transition hover:bg-primary-hover"
            >
              Start Your Project
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   Individual Work Card
   ============================================================ */

function WorkCard({ item }: { item: WorkItem }) {
  const imageRatio =
    item.layout === "large"
      ? "aspect-[5/4] md:aspect-[4/3]"
      : item.layout === "small"
        ? "aspect-[5/3] md:aspect-[4/3]"
        : "aspect-[16/9]";

  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`Visit ${item.title} (opens in new tab)`}
    >
      {/* Project Image */}
      <div
        className={`
          relative
          w-full
          ${imageRatio}
          overflow-hidden
          rounded-md
          bg-surface
          shadow-lg
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:shadow-xl
        `}
      >
        <Image
          src={item.image}
          alt={`${item.title} — ${item.category}`}
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="
            object-cover
            object-top
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        {/* Hover Overlay */}
        <div
          className="
            absolute
            inset-0
            flex
            items-end
            justify-between
            bg-gradient-to-t
            from-black/60
            via-black/10
            to-transparent
            p-5
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        >
          <span className="text-sm font-medium text-white">
            View Project
          </span>

          <span
            aria-hidden="true"
            className="text-xl text-white"
          >
            ↗
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="mt-4">
        <h3
          className="
            font-heading
            text-lg
            font-semibold
            text-text
            transition-colors
            group-hover:text-primary
          "
        >
          {item.title}
        </h3>

        <p className="mt-1 text-sm text-text-muted">
          {item.category}
        </p>
      </div>
    </Link>
  );
}
