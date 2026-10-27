
"use client";

import { useCallback, useEffect, useState } from "react";
import WebsiteAssembly from "@/components/WebsiteAssembly";
import WebsitePreview from "@/components/WebsitePreview";

const DISPLAY_DURATION_MS = 4500;
const TRANSITION_DURATION_MS = 650;
const MAX_CYCLES = 1;

type Visual = "assembly" | "preview";

export default function WebsiteAssemblyCycle() {
  const [activeVisual, setActiveVisual] =
    useState<Visual>("assembly");

  const [outgoingVisual, setOutgoingVisual] =
    useState<Visual | null>(null);

  const [completedCycles, setCompletedCycles] = useState(0);
  const [finished, setFinished] = useState(false);

  const switchVisual = useCallback((next: Visual) => {
    setActiveVisual((current) => {
      if (current === next) return current;

      setOutgoingVisual(current);
      return next;
    });
  }, []);

  // Remove the old visual after the crossfade completes.
  useEffect(() => {
    if (!outgoingVisual) return;

    const timer = window.setTimeout(() => {
      setOutgoingVisual(null);
    }, TRANSITION_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [outgoingVisual]);

  // Automatically alternate until three complete cycles finish.
  useEffect(() => {
    if (finished) return;

    const timer = window.setTimeout(() => {
      if (activeVisual === "assembly") {
        switchVisual("preview");
        return;
      }

      const nextCycle = completedCycles + 1;
      setCompletedCycles(nextCycle);

      if (nextCycle >= MAX_CYCLES) {
        setFinished(true);
      } else {
        switchVisual("assembly");
      }
    }, DISPLAY_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [
    activeVisual,
    completedCycles,
    finished,
    switchVisual,
  ]);

  const toggleVisual = () => {
    switchVisual(
      activeVisual === "assembly" ? "preview" : "assembly"
    );
  };

  
return (
  <div className="w-full min-w-0">
    <div
      className="assembly-cycle-stage"
      role="button"
      tabIndex={0}
      aria-label={`Website preview. Currently showing ${
        activeVisual === "assembly"
          ? "assembly animation"
          : "finished website preview"
      }. Activate to switch visual.`}
      onClick={toggleVisual}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleVisual();
        }
      }}
    >
      {/* This layer determines the stage height */}
      <div className="assembly-cycle-sizer" aria-hidden="true">
        {activeVisual === "assembly" ? (
          <WebsiteAssembly key="sizer-assembly" />
        ) : (
          <WebsitePreview key="sizer-preview" />
        )}
      </div>

      {/* Both animated layers overlap this same area */}
      {outgoingVisual && (
        <div className="assembly-cycle-layer is-outgoing">
          {outgoingVisual === "assembly" ? (
            <WebsiteAssembly key="old-assembly" />
          ) : (
            <WebsitePreview key="old-preview" />
          )}
        </div>
      )}

      <div className="assembly-cycle-layer is-active">
        {activeVisual === "assembly" ? (
          <WebsiteAssembly key="assembly" />
        ) : (
          <WebsitePreview key="preview" />
        )}
      </div>
    </div>

    <p className="mt-3 text-center text-xs text-yellow-300">
      Click to explore another view
    </p>
  </div>
);
}
