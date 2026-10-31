
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

export type FeatureSection = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant: "cards" | "list" | "reasons";
  columns?: 2 | 3 | 4;
  background?: "white" | "gray" | "dark" | "warm";
  accent?: "primary" | "warm";
  cta?: { text: string; href: string };
  items: FeatureItem[];
};

type TabId =
  | "what-we-do"
  | "why-website"
  | "what-we-dont";

type InteractiveFeatureTabsProps = {
  whatWeDo: FeatureSection;
  whyYouNeedWebsite: FeatureSection;
  whatWeDontDo: FeatureSection;
  defaultTab?: TabId;
};

export default function InteractiveFeatureTabs({
  whatWeDo,
  whyYouNeedWebsite,
  whatWeDontDo,
  defaultTab = "what-we-do",
}: InteractiveFeatureTabsProps) {
  const [activeTab, setActiveTab] =
    useState<TabId>(defaultTab);

  const [expandedItem, setExpandedItem] =
    useState<string | null>(null);

  const currentSection =
    activeTab === "what-we-do"
      ? whatWeDo
      : activeTab === "why-website"
      ? whyYouNeedWebsite
      : whatWeDontDo;

  const tabs = [
    {
      id: "what-we-do" as const,
      label: whatWeDo.title,
      mobileLabel: "Services",
    },
    {
      id: "why-website" as const,
      label: whyYouNeedWebsite.title,
      mobileLabel: "Why a website?",
    },
    {
      id: "what-we-dont" as const,
      label: whatWeDontDo.title,
      mobileLabel: "Our boundaries",
    },
  ];

  const isDark = currentSection.background === "dark";
  const isWarm = currentSection.background === "warm";

  const bgClass =
    currentSection.background === "gray"
      ? "bg-surface"
      : isDark
      ? "bg-hero-bg text-hero-text"
      : isWarm
      ? "bg-[#FFF4EB]"
      : "bg-background";

  const headingClass = isDark
    ? "text-[#10B981]"
    : "text-text";

  const mutedClass = isDark
    ? "text-[#E5E7EB]"
    : isWarm
    ? "text-[#44403C]"
    : "text-[#374151]";

  const accentClass = isDark
    ? "text-[#10B981]"
    : currentSection.accent === "warm"
    ? "text-[#E85D3F]"
    : "text-primary";

  const activeTabClass = isDark
    ? "text-[#047857]"
    : currentSection.accent === "warm"
    ? "text-[#C9482D]"
    : "text-primary";

  const focusRingClass = isDark
    ? "focus-visible:ring-[#10B981]"
    : currentSection.accent === "warm"
    ? "focus-visible:ring-[#E85D3F]"
    : "focus-visible:ring-primary";

  const ctaClass =
    currentSection.accent === "warm"
      ? "bg-[#E85D3F] hover:bg-[#C9482D]"
      : "bg-primary hover:bg-primary-hover";

  function changeTab(tabId: TabId) {
    setActiveTab(tabId);
    setExpandedItem(null);
  }

  return (
    <section
      className={`px-4 sm:px-6 py-16 md:py-24 transition-colors duration-500 ${bgClass}`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section selector */}
        <div className="mb-10 md:mb-14">
          <div
            role="group"
            aria-label="Choose a section"
            className="
              grid grid-cols-3 gap-1
              w-full p-1
              rounded-lg border border-border
              bg-surface
              md:flex md:justify-center md:w-fit md:mx-auto
            "
          >
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => changeTab(tab.id)}
                  aria-pressed={isActive}
                  aria-label={tab.label}
                  className={`
                    relative min-w-0
                    px-2 py-3 md:px-5 md:py-2.5
                    rounded-md
                    text-[11px] leading-tight
                    sm:text-xs md:text-sm
                    font-semibold
                    whitespace-normal md:whitespace-nowrap
                    transition-colors
                    focus-visible:outline-none
                    focus-visible:ring-2
                    ${focusRingClass}
                    ${
                      isActive
                        ? activeTabClass
                        : isDark
                        ? "text-[#CBD5E1] hover:text-white"
                        : "text-text-muted hover:text-text"
                    }
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className={`absolute inset-0 rounded-md shadow-sm ${
                        isDark ? "bg-[#E5E7EB]" : "bg-background"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    <span className="md:hidden">
                      {tab.mobileLabel}
                    </span>
                    <span className="hidden md:inline">
                      {tab.label}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated section content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
          >

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
              {currentSection.eyebrow && (
                <p className={`text-xs md:text-sm font-semibold uppercase tracking-wider ${accentClass}`}>
                  {currentSection.eyebrow}
                </p>
              )}

              <h2 className={`mt-2 text-2xl md:text-4xl font-heading font-bold uppercase tracking-tight ${headingClass}`}>
                {currentSection.title}
              </h2>

              {currentSection.subtitle && (
                <p className={`mt-3 text-base md:text-lg leading-relaxed ${mutedClass}`}>
                  {currentSection.subtitle}
                </p>
              )}
            </div>

            {/* Mobile: Vertical accordion */}
            <div className="mt-10 md:hidden">
              {currentSection.items.map((item, index) => (
                <MobileAccordionItem
                  key={item.id}
                  item={item}
                  index={index}
                  isExpanded={expandedItem === item.id}
                  onToggle={() =>
                    setExpandedItem(
                      expandedItem === item.id
                        ? null
                        : item.id
                    )
                  }
                  background={currentSection.background}
                  accent={currentSection.accent}
                />
              ))}
            </div>

            {/* Desktop: Aligned two-column grid */}
            <div className="
              hidden md:grid
              mt-14
              grid-cols-2
              gap-x-10
              gap-y-10
            ">
              {currentSection.items.map((item, index) => (
                <DesktopGridItem
                  key={item.id}
                  item={item}
                  index={index}
                  background={currentSection.background}
                  accent={currentSection.accent}
                />
              ))}
            </div>

            {/* CTA */}
            {currentSection.cta && (
              <div className="mt-10 md:mt-12 text-center">
                <Link
                  href={currentSection.cta.href}
                  className={`
                    inline-block px-7 py-3
                    ${ctaClass}
                    text-white rounded-lg
                    transition-colors
                    font-medium shadow-sm
                    hover:shadow
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-offset-2
                  `}
                >
                  {currentSection.cta.text}
                </Link>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------------------------------
   Shared Decorative Squares
--------------------------------------- */

function DecorativeSquares({
  accent,
  dark,
  mobile = false,
}: {
  accent?: "primary" | "warm";
  dark: boolean;
  mobile?: boolean;
}) {
  // Solid colour blocks give the typography a stronger visual anchor.
  const first = dark
    ? "bg-[#10B981]"
    : accent === "warm"
    ? "bg-[#E85D3F]"
    : "bg-[#3B82F6]";

  const second = dark
    ? "bg-[#047857]"
    : accent === "warm"
    ? "bg-[#F59E0B]"
    : "bg-[#10B981]";

  return (
    <>
      <div
        aria-hidden="true"
        className={`
          absolute
          ${mobile ? "top-5 left-4 w-16 h-16" : "top-8 left-5 w-24 h-24"}
          ${first}
        `}
      />
      <div
        aria-hidden="true"
        className={`
          absolute
          ${mobile ? "top-3 left-6 w-16 h-16" : "top-5 left-8 w-24 h-24"}
          ${second}
        `}
      />
    </>
  );
}

/* ---------------------------------------
   Desktop Grid Item
--------------------------------------- */

function DesktopGridItem({
  item,
  index,
  background,
  accent,
}: {
  item: FeatureItem;
  index: number;
  background?: "white" | "gray" | "dark" | "warm";
  accent?: "primary" | "warm";
}) {
  const dark = background === "dark";

  const accentTextClass = dark
    ? "text-[#FFFFFF]"
    : accent === "warm"
    ? "text-[#E85D3F]"
    : "text-primary";

  return (
    <article className={`relative min-w-0 border-t pt-6 pb-8 ${
      dark ? "border-white/20" : "border-border"
    }`}>

      <DecorativeSquares
        accent={accent}
        dark={dark}
      />

      <div className="relative z-10">
        <span className={`
          text-sm font-semibold
          ${accentTextClass}
        `}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className={`
          mt-5
          font-heading font-semibold
          text-2xl lg:text-3xl
          leading-tight tracking-tight
          ${dark ? "text-[#79FF63]" : "text-text"}
        `}>
          {item.title}
        </h3>

        <p className={`
          mt-3 max-w-xl
          text-sm lg:text-base
          leading-relaxed
          ${dark ? "text-[#E5E7EB]" : background === "warm" ? "text-[#44403C]" : "text-[#374151]"}
        `}>
          {item.description}
        </p>
      </div>
    </article>
  );
}

/* ---------------------------------------
   Mobile Accordion Item
--------------------------------------- */

function MobileAccordionItem({
  item,
  index,
  isExpanded,
  onToggle,
  background,
  accent,
}: {
  item: FeatureItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  background?: "white" | "gray" | "dark" | "warm";
  accent?: "primary" | "warm";
}) {
  const dark = background === "dark";

  const textClass = dark
    ? "text-[#10B981]"
    : "text-text";

  const mutedClass = dark
    ? "text-[#E5E7EB]"
    : background === "warm"
    ? "text-[#44403C]"
    : "text-[#374151]";

  const accentTextClass = dark
    ? "text-[#10B981]"
    : accent === "warm"
    ? "text-[#E85D3F]"
    : "text-primary";

  const focusRingClass = dark
    ? "focus-visible:ring-[#10B981]"
    : accent === "warm"
    ? "focus-visible:ring-[#E85D3F]"
    : "focus-visible:ring-primary";

  return (
    <article className={`relative border-t ${
      dark ? "border-white/20" : "border-border"
    }`}>

      <DecorativeSquares
        accent={accent}
        dark={dark}
        mobile
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`feature-panel-${item.id}`}
        className={`
          relative z-10
          flex w-full items-center
          gap-4 py-6
          text-left
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-inset
          ${focusRingClass}
        `}
      >
        <span className={`
          text-sm font-semibold
          ${accentTextClass}
        `}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className={`
          flex-1 min-w-0
          font-heading font-semibold
          text-lg sm:text-xl
          leading-tight
          ${textClass}
        `}>
          {item.title}
        </span>

        <motion.span
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`
            relative shrink-0 text-xl
            ${accentTextClass}
          `}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`feature-panel-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.25,
                ease: "easeInOut",
              },
              opacity: { duration: 0.2 },
            }}
            className="relative z-10 overflow-hidden"
          >
            <p className={`
              pb-6 pl-8 pr-4
              text-sm sm:text-base
              leading-relaxed
              ${mutedClass}
            `}>
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
