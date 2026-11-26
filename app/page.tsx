import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { AboutShort } from "@/components/sections/AboutShort";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { WhyAmLabsSection } from "@/components/sections/WhyAmLabsSection";
import { FinalCta } from "@/components/sections/FinalCta";

/**
 * Homepage composition.
 *
 * The order is tuned for rhythm, not just for content: light and white
 * surfaces alternate, the two dark blocks (FeaturedWork, WhyAmLabs) are
 * spaced apart rather than stacked, section heights vary from `md` to `xl`,
 * and only two sections use a grid layout so the scroll never repeats the
 * same shape twice in a row.
 */
export default function HomePage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <Hero />
        <Capabilities />
        <AboutShort />
        <ServicesTeaser />
        <FeaturedWork />
        <Process />
        <TechStack />
        <WhyAmLabsSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
