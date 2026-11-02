
// components/serviceIllustration.tsx

type ServiceIllustrationProps = {
  serviceId: string;
  className?: string;
};

export default function ServiceIllustration({
  serviceId,
  className = "",
}: ServiceIllustrationProps) {
  const common = {
    viewBox: "0 0 240 130",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true as const,
  };

  switch (serviceId) {
    /* =========================================================
       WEB DEVELOPMENT
       Browser window with a website being assembled
       ========================================================= */
    case "web-development":
      return (
        <svg {...common}>
          <rect x="16" y="12" width="208" height="106" rx="12" fill="#EAF2FF" />

          {/* Browser */}
          <rect x="43" y="28" width="154" height="80" rx="7" fill="white" stroke="#A8C5F5" />

          {/* Browser header */}
          <path d="M43 35a7 7 0 0 1 7-7h140a7 7 0 0 1 7 7v12H43V35Z" fill="#D3E3FF" />

          <circle cx="55" cy="38" r="2.5" fill="#6B9DE8" />
          <circle cx="64" cy="38" r="2.5" fill="#6B9DE8" />
          <circle cx="73" cy="38" r="2.5" fill="#6B9DE8" />

          {/* Website layout */}
          <rect x="54" y="56" width="57" height="8" rx="2" fill="#2563EB" />
          <rect x="54" y="69" width="46" height="4" rx="2" fill="#A8BFE4" />
          <rect x="54" y="77" width="36" height="4" rx="2" fill="#A8BFE4" />

          {/* Image placeholder */}
          <rect x="123" y="56" width="63" height="36" rx="4" fill="#DCEBFF" />
          <path d="M123 84 140 68l13 12 10-8 13 12" fill="#76A9F7" />

          {/* Floating design element */}
          <rect x="28" y="83" width="32" height="27" rx="6" fill="#10B981" />
          <path d="m37 96 5 5 9-11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    /* =========================================================
       PROPERTY & LISTINGS
       Property listing with image, details and location pin
       ========================================================= */
    case "listings-booking":
      return (
        <svg {...common}>
          <rect x="16" y="12" width="208" height="106" rx="12" fill="#E5F5EF" />

          {/* Listing card */}
          <rect x="43" y="25" width="154" height="82" rx="8" fill="white" stroke="#A6DCC8" />

          {/* Property image */}
          <rect x="51" y="33" width="138" height="43" rx="5" fill="#B8E5D3" />

          {/* House */}
          <path d="M94 52 120 34l26 18v23H94V52Z" fill="#10B981" />
          <path d="M87 52 120 29l33 23" stroke="#087F5B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="113" y="59" width="14" height="16" rx="2" fill="#E5F5EF" />
          <rect x="99" y="54" width="9" height="9" rx="1" fill="#E5F5EF" />
          <rect x="132" y="54" width="9" height="9" rx="1" fill="#E5F5EF" />

          {/* Listing information */}
          <rect x="52" y="84" width="57" height="5" rx="2.5" fill="#087F5B" />
          <rect x="52" y="94" width="38" height="4" rx="2" fill="#B3CFC4" />

          {/* Location marker */}
          <path d="M174 83c0-8 6-14 14-14s14 6 14 14c0 11-14 23-14 23s-14-12-14-23Z" fill="#2563EB" />
          <circle cx="188" cy="83" r="5" fill="white" />
        </svg>
      );

    /* =========================================================
       PAYMENT GATEWAY
       Website connected to a secure payment terminal
       ========================================================= */
    case "payment-integration":
      return (
        <svg {...common}>
          <rect x="16" y="12" width="208" height="106" rx="12" fill="#E8F4FF" />

          {/* Website */}
          <rect x="35" y="29" width="91" height="72" rx="7" fill="white" stroke="#A8C5F5" />
          <rect x="35" y="29" width="91" height="15" rx="7" fill="#D3E3FF" />
          <path d="M35 37h91" stroke="#D3E3FF" strokeWidth="8" />
          <circle cx="45" cy="36" r="2" fill="#6B9DE8" />
          <circle cx="52" cy="36" r="2" fill="#6B9DE8" />

          {/* Shopping basket */}
          <path d="M55 58h48l-6 20H61l-6-20Z" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
          <path d="m63 58 7-12m24 12-7-12" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
          <rect x="64" y="84" width="30" height="4" rx="2" fill="#A8C5F5" />

          {/* Connection */}
          <path d="M128 63h22" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
          <circle cx="139" cy="63" r="4" fill="#2563EB" />

          {/* Payment terminal */}
          <rect x="153" y="28" width="48" height="77" rx="9" fill="#1E40AF" />
          <rect x="159" y="35" width="36" height="25" rx="4" fill="#BFDBFE" />
          <rect x="165" y="42" width="24" height="4" rx="2" fill="#2563EB" />
          <rect x="165" y="49" width="17" height="3" rx="1.5" fill="#60A5FA" />

          {/* Terminal buttons */}
          <circle cx="165" cy="69" r="3" fill="#93C5FD" />
          <circle cx="177" cy="69" r="3" fill="#93C5FD" />
          <circle cx="189" cy="69" r="3" fill="#93C5FD" />
          <circle cx="165" cy="81" r="3" fill="#93C5FD" />
          <circle cx="177" cy="81" r="3" fill="#93C5FD" />
          <circle cx="189" cy="81" r="3" fill="#10B981" />
          <rect x="163" y="91" width="28" height="5" rx="2.5" fill="#60A5FA" />
        </svg>
      );

    /* =========================================================
       ANSWER ENGINE OPTIMISATION
       Question, structured answer and AI sparkle
       ========================================================= */
    case "aeo":
      return (
        <svg {...common}>
          <rect x="16" y="12" width="208" height="106" rx="12" fill="#F0EAFE" />

          {/* Search / answer panel */}
          <rect x="35" y="25" width="170" height="80" rx="9" fill="white" stroke="#D5C5F8" />

          {/* Question */}
          <circle cx="52" cy="42" r="7" fill="#8B5CF6" />
          <path d="M49 42h6m-3-3v6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

          <rect x="65" y="38" width="110" height="6" rx="3" fill="#C4B5FD" />
          <rect x="65" y="48" width="82" height="4" rx="2" fill="#DDD6FE" />

          {/* Answer */}
          <rect x="47" y="62" width="146" height="32" rx="6" fill="#F5F3FF" />
          <rect x="55" y="69" width="76" height="5" rx="2.5" fill="#7C3AED" />
          <rect x="55" y="78" width="124" height="4" rx="2" fill="#C4B5FD" />
          <rect x="55" y="85" width="90" height="4" rx="2" fill="#DDD6FE" />

          {/* AI sparkle */}
          <path d="M188 17 192 27l10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" fill="#8B5CF6" />
          <circle cx="32" cy="95" r="5" fill="#A78BFA" />
          <circle cx="211" cy="82" r="4" fill="#8B5CF6" />
        </svg>
      );

    /* =========================================================
       SEARCH ENGINE OPTIMISATION
       Search results with a highlighted business result
       ========================================================= */
    case "seo":
      return (
        <svg {...common}>
          <rect x="16" y="12" width="208" height="106" rx="12" fill="#FFF2DD" />

          {/* Search bar */}
          <rect x="38" y="25" width="164" height="22" rx="11" fill="white" stroke="#F3D3A1" />
          <circle cx="51" cy="36" r="5" stroke="#F59E0B" strokeWidth="2" />
          <path d="m55 40 4 4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <rect x="66" y="33" width="73" height="5" rx="2.5" fill="#FDE3B6" />

          {/* Search result 1 */}
          <rect x="38" y="54" width="164" height="27" rx="5" fill="white" />
          <circle cx="49" cy="63" r="4" fill="#F59E0B" />
          <rect x="58" y="60" width="82" height="5" rx="2.5" fill="#D97706" />
          <rect x="58" y="69" width="131" height="4" rx="2" fill="#F3D3A1" />

          {/* Search result 2 */}
          <rect x="38" y="85" width="164" height="22" rx="5" fill="#FDE8C7" />
          <circle cx="49" cy="95" r="4" fill="#F59E0B" />
          <rect x="58" y="92" width="65" height="5" rx="2.5" fill="#D97706" />
          <rect x="58" y="100" width="109" height="3" rx="1.5" fill="#F3D3A1" />

          {/* Ranking arrow */}
          <path d="M185 91V81m0 0-5 5m5-5 5 5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    /* =========================================================
       ACCESSIBILITY
       Accessible webpage with contrast and keyboard support
       ========================================================= */
    case "accessibility":
      return (
        <svg {...common}>
          <rect x="16" y="12" width="208" height="106" rx="12" fill="#E5F5EF" />

          {/* Website panel */}
          <rect x="35" y="25" width="119" height="80" rx="7" fill="white" stroke="#A6DCC8" />

          {/* Page header */}
          <rect x="44" y="34" width="101" height="12" rx="3" fill="#D1FAE5" />
          <rect x="50" y="38" width="46" height="4" rx="2" fill="#047857" />

          {/* Page content */}
          <rect x="45" y="53" width="50" height="5" rx="2.5" fill="#047857" />
          <rect x="45" y="62" width="90" height="4" rx="2" fill="#A7D8C4" />
          <rect x="45" y="70" width="78" height="4" rx="2" fill="#A7D8C4" />

          {/* High contrast button */}
          <rect x="45" y="81" width="48" height="15" rx="4" fill="#047857" />
          <rect x="54" y="86" width="30" height="4" rx="2" fill="white" />

          {/* Accessibility symbol */}
          <circle cx="183" cy="48" r="23" fill="#10B981" />
          <circle cx="183" cy="35" r="4" fill="white" />
          <path d="M172 42h22m-11 0v13m0 0-9 12m9-12 9 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {/* Keyboard */}
          <rect x="161" y="82" width="43" height="20" rx="4" fill="#A7D8C4" />
          <rect x="166" y="86" width="5" height="4" rx="1" fill="#047857" />
          <rect x="174" y="86" width="5" height="4" rx="1" fill="#047857" />
          <rect x="182" y="86" width="5" height="4" rx="1" fill="#047857" />
          <rect x="190" y="86" width="8" height="4" rx="1" fill="#047857" />
          <rect x="169" y="93" width="26" height="4" rx="1" fill="#047857" />
        </svg>
      );

    /* =========================================================
       WEBSITE MAINTENANCE
       Website with a refresh / care symbol
       ========================================================= */
    case "maintenance":
      return (
        <svg {...common}>
          <rect x="16" y="12" width="208" height="106" rx="12" fill="#E8F4FF" />

          {/* Browser */}
          <rect x="37" y="26" width="126" height="80" rx="8" fill="white" stroke="#A8C5F5" />
          <path d="M37 34a8 8 0 0 1 8-8h110a8 8 0 0 1 8 8v12H37V34Z" fill="#D3E3FF" />

          <circle cx="49" cy="34" r="2.5" fill="#6B9DE8" />
          <circle cx="58" cy="34" r="2.5" fill="#6B9DE8" />
          <circle cx="67" cy="34" r="2.5" fill="#6B9DE8" />

          {/* Content */}
          <rect x="48" y="56" width="53" height="6" rx="3" fill="#2563EB" />
          <rect x="48" y="67" width="78" height="4" rx="2" fill="#B4CBEA" />
          <rect x="48" y="75" width="67" height="4" rx="2" fill="#B4CBEA" />

          {/* Refresh / care */}
          <circle cx="172" cy="78" r="30" fill="#BFDBFE" />
          <path d="M183 66a16 16 0 0 0-27 9" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
          <path d="m156 69 1 8 8-1" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M160 89a16 16 0 0 0 27-9" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
          <path d="m187 86-1-8-8 1" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Small heart / care */}
          <path d="M172 75c-5-5-12 2 0 12 12-10 5-17 0-12Z" fill="#10B981" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <rect x="16" y="12" width="208" height="106" rx="12" fill="#EAF2FF" />
          <rect x="75" y="37" width="90" height="56" rx="8" fill="white" stroke="#A8C5F5" />
          <rect x="87" y="49" width="66" height="6" rx="3" fill="#2563EB" />
          <rect x="87" y="61" width="45" height="4" rx="2" fill="#A8C5F5" />
          <rect x="87" y="69" width="56" height="4" rx="2" fill="#A8C5F5" />
          <rect x="87" y="79" width="30" height="6" rx="3" fill="#10B981" />
        </svg>
      );
  }
}
