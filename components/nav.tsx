"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/config/business";
import Image from "next/image";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background">
      <div className="md:max-w-7xl mx-auto px-4 ">

        <div className="py-2 flex items-center justify-between">

         <Link href="/" className="flex items-center gap-3">
            <Image
              src={business.logoImage}
              alt={`${business.name} Logo`}
              width={10}
              height={10}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex gap-6">
            {business.navigation.map((item) => (
              <Link
                key={item?.href}
                href={item?.href ?? "#"}
                className="text-text-muted hover:text-text transition text-sm"
              >
                {item?.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="md:hidden text-2xl p-2 text-text"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-5">
            {business.navigation.map((item) => (
              <Link
                key={item?.href}
                href={item?.href ?? "#"}
                onClick={() => setMenuOpen(false)}
                className="text-text-muted hover:text-text transition"
              >
                {item?.label}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}