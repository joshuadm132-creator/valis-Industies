// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/hero";
import { business } from "@/config/business";
import { site } from "@/config/businesses/site";
import Process from "@/components/workProcess";
import OurWork from "@/components/workPreview";
import InteractiveFeatureTabs from "@/components/InteractiveFeatureTabs";

export const metadata: Metadata = {
  title: "Custom Web Design in Harare, Zimbabwe",
  description:
    "Valis CyberNet builds custom websites for Zimbabwe businesses. Fast, responsive, SEO-ready. Starter sites from $250 with monthly care plans from $15.",
  alternates: { canonical: "/" },
  openGraph: {
    url: site.url,
    title: "Custom Web Design in Harare, Zimbabwe",
    description:
      "Fast, responsive, SEO-ready websites for Zimbabwe businesses.",
  },
};

export default function Home() {
  return (
   <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      <Hero
        variant="home"
        title="Building the digital infrastructure for growing businesses."
        description="..."
      />

      {/* Consolidated Interactive Tabs replacing the 3 stacked FeatureGrids */}
      <InteractiveFeatureTabs
        whatWeDo={business.whatWeDo}
        whyYouNeedWebsite={business.whyYouNeedWebsite}
        whatWeDontDo={business.whatWeDontDo}
      />
      <OurWork />
      
      <Process
        title={business.process.title}
        subtitle={business.process.subtitle}
        steps={business.process.steps}
        variant="flow"
      />
    </main>
  );
}