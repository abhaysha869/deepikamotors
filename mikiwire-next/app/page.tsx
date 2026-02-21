import Hero3D from "@/components/Hero3D";
import Legacy from "@/components/Legacy";
import ManufacturingScroll from "@/components/ManufacturingScroll";
import PrecisionAccordion from "@/components/PrecisionAccordion";
import FutureGlobe from "@/components/FutureGlobe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-void text-clean relative w-full overflow-hidden block">

      {/* 1. HERO SECTION (The 3D Cinematic Hook) */}
      <Hero3D />

      {/* 2. THE LEGACY & LEADERSHIP (The Human Element) */}
      <Legacy />

      {/* 3. MANUFACTURING FOOTPRINT (GSAP Scroll Sequence) */}
      <ManufacturingScroll />

      {/* 4. PRECISION ENGINEERED STEEL (The Blueprint) */}
      <PrecisionAccordion />

      {/* 5. FUTURE-READY MANUFACTURING (Global & Green) */}
      <FutureGlobe />

      {/* 6. FOOTER */}
      <Footer />

    </main>
  );
}
