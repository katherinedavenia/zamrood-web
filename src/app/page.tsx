import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import { AboutSection } from "~/containers/AboutSection";
import { ArticlesSection } from "~/containers/ArticlesSection";
import { DestinationsSection } from "~/containers/DestinationsSection";
import { FootagesSection } from "~/containers/FootagesSection";
import { OpeningBannerSection } from "~/containers/OpeningBannerSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen max-w-screen overflow-hidden">
        <section id="home">
          <OpeningBannerSection />
        </section>
        <section id="customize-your-trip">
          <AboutSection />
        </section>
        <section id="destinations">
          <DestinationsSection />
        </section>
        <section id="footages">
          <FootagesSection />
        </section>
        <section id="articles">
          <ArticlesSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}
