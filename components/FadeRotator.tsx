
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeRotatorProps = {
  items: ReactNode[];
  interval?: number;
  fadeDuration?: number;
  minHeight?: number;
  onChange?: (index: number) => void;
};

export default function FadeRotator({
  items,
  interval = 3500,
  fadeDuration = 500,
  minHeight,
  onChange,
}: FadeRotatorProps) {
  const [index, setIndex] = useState(0);

  // Keep the current index available to the timer.
  const indexRef = useRef(0);

  // Always use the latest callback without restarting the timer.
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      const next = (indexRef.current + 1) % items.length;

      // Update the ref and React state separately.
      indexRef.current = next;
      setIndex(next);

      // Notify the parent outside the state updater.
      onChangeRef.current?.(next);
    }, interval);

    return () => window.clearInterval(timer);
  }, [items.length, interval]);

  // Keep the index valid if the number of items changes.
  useEffect(() => {
    if (items.length === 0) {
      indexRef.current = 0;
      return;
    }

    if (index >= items.length) {
      const next = 0;
      indexRef.current = next;
      setIndex(next);
    } else {
      indexRef.current = index;
    }
  }, [index, items.length]);

  if (items.length === 0) return null;

  return (
    <div
      className="relative"
      style={{
        minHeight: minHeight ? `${minHeight}px` : undefined,
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{ transitionDuration: `${fadeDuration}ms` }}
          className={`transition-opacity ease-in-out ${
            i === index
              ? "opacity-100 relative"
              : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
