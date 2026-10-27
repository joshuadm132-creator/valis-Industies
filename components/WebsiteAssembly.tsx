type WireframePanelProps = {
  className: string;
  label: string;
};

function WireframePanel({
  className,
  label,
}: WireframePanelProps) {
  return (
    <div
      className={`website-panel absolute border border-blue-300/50 bg-white shadow-xl ${className}`}
    >
      {/* Lightweight browser header */}
      <div className="flex h-7 items-center gap-1.5 border-b border-slate-200 px-2">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
        <span className="ml-auto text-[7px] tracking-wide text-slate-400">
          {label}
        </span>
      </div>

      {/* Website wireframe */}
      <div className="space-y-3 p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div className="h-2 w-1/4 bg-blue-200" />
          <div className="h-1.5 w-1/3 bg-slate-200" />
        </div>

        <div className="border border-blue-100 bg-blue-50/70 p-3">
          <div className="h-2 w-4/5 bg-blue-200" />
          <div className="mt-2 h-1.5 w-full bg-slate-200" />
          <div className="mt-1.5 h-1.5 w-3/5 bg-slate-200" />
          <div className="mt-3 h-5 w-1/3 bg-blue-500/80" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="space-y-1.5 border border-slate-200 p-1.5"
            >
              <div className="aspect-[4/3] bg-slate-100">
                <div className="h-full w-1/3 bg-blue-100" />
              </div>
              <div className="h-1 w-full bg-slate-200" />
              <div className="h-1 w-2/3 bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WebsiteAssembly() {
  return (
    <div
      className="website-assembly relative mx-auto w-full max-w-xl"
      role="img"
      aria-label="Three website wireframes assembling into a digital experience"
    >
      {/* Decorative background geometry */}
      <div
        aria-hidden="true"
        className="absolute inset-[10%] border border-blue-200/50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[20%] border border-dashed border-blue-200/60"
      />

      {/* Rear panel */}
      <WireframePanel
        label="SERVICES"
        className="website-panel-left"
      />

      {/* Front panel */}
      <WireframePanel
        label="BUSINESS WEBSITE"
        className="website-panel-main"
      />

      {/* Right panel */}
      <WireframePanel
        label="DIGITAL SOLUTIONS"
        className="website-panel-right"
      />

      {/* Small assembly indicator */}
      <div
        aria-hidden="true"
        className="website-assembly-indicator absolute bottom-[3%] left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap border border-blue-200 bg-white/90 px-3 py-2 shadow-sm"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        <span className="text-[10px] font-medium tracking-[0.16em] text-slate-500">
          IDEAS INTO DIGITAL EXPERIENCES
        </span>
      </div>
    </div>
  );
}