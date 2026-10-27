import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-[80vh] flex items-center justify-center bg-background px-6 py-24 overflow-hidden">
      
      {/* 
        Subtle Background Glow 
        Uses the primary theme color to tie the page to the brand
      */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--color-primary)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
        
        {/* =====================================================
            THE PENGUIN SVG
            Animated with CSS classes (defined in the style block below)
        ===================================================== */}
        <div className="w-48 h-48 mb-8 animate-float">
          <svg 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-xl"
          >
            {/* Snow/ground shadow */}
            <ellipse cx="100" cy="180" rx="40" ry="8" fill="currentColor" className="text-black/10 dark:text-white/10" />

            {/* Body */}
            <path d="M100 40C65 40 40 70 40 120C40 160 60 180 100 180C140 180 160 160 160 120C160 70 135 40 100 40Z" fill="#2563eb" />
            
            {/* Belly */}
            <path d="M100 60C75 60 55 85 55 125C55 155 70 170 100 170C130 170 145 155 145 125C145 85 125 60 100 60Z" fill="#f8fafc" />
            
            {/* Left Wing (flapping) */}
            <path d="M45 100C30 110 25 135 35 150C40 145 50 130 50 115Z" fill="#1d4ed8" className="origin-top-right animate-flap-left" />
            
            {/* Right Wing (flapping) */}
            <path d="M155 100C170 110 175 135 165 150C160 145 150 130 150 115Z" fill="#1d4ed8" className="origin-top-left animate-flap-right" />

            {/* Eyes */}
            <circle cx="85" cy="95" r="5" fill="#0f172a" />
            <circle cx="115" cy="95" r="5" fill="#0f172a" />
            <circle cx="86" cy="93" r="2" fill="white" />
            <circle cx="116" cy="93" r="2" fill="white" />

            {/* Beak */}
            <path d="M95 110L100 120L105 110Z" fill="#f59e0b" />

            {/* Little feet */}
            <path d="M75 180L85 180L85 185L70 185Z" fill="#f59e0b" />
            <path d="M125 180L115 180L115 185L130 185Z" fill="#f59e0b" />

            {/* Scarf (Themed using currentColor) */}
            <path d="M60 115C80 130 120 130 140 115L140 125C120 140 80 140 60 125Z" className="text-primary" fill="currentColor" />
            <path d="M130 120C140 135 145 150 140 165L130 160C135 145 130 130 120 125Z" className="text-primary" fill="currentColor" />

            {/* Holding a tiny "?" sign */}
            <rect x="70" y="140" width="20" height="25" rx="2" fill="#ffffff" className="stroke-gray-300" strokeWidth="1" />
            <text x="80" y="158" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#0f172a">?</text>
            
            {/* Right flipper holding the sign */}
            <path d="M65 135C60 135 60 140 65 145L75 145C75 140 72 135 65 135Z" fill="#1d4ed8" />
          </svg>
        </div>

        {/* =====================================================
            TEXT CONTENT
        ===================================================== */}
        <div className="animate-fade-up" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            Error 404
          </p>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-text mb-6">
            Lost in the snow.
          </h1>

          <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />

          <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-md mx-auto">
            Our little penguin waddled off the path and couldn't find this page. It might have melted away, or the link is just broken.
          </p>
        </div>

        {/* =====================================================
            ACTION BUTTONS
        ===================================================== */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" 
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-text-inverse rounded-lg hover:bg-primary-hover transition font-medium shadow-sm hover:shadow-md"
          >
            Get back to safety
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3 border border-border text-text rounded-lg hover:bg-surface transition font-medium"
          >
            Contact Support
          </Link>
        </div>

      </div>

      {/* 
        We inject the keyframes directly here so you don't need to edit globals.css 
        for this single page to work.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes flapLeft {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-15deg); }
        }
        @keyframes flapRight {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-flap-left {
          animation: flapLeft 2s ease-in-out infinite;
        }
        .animate-flap-right {
          animation: flapRight 2s ease-in-out infinite;
        }
      `}} />
    </main>
  );
}