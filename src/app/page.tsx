import { Container } from "~/components/Container";
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
      <OpeningBannerSection />
      <Container>
        <AboutSection />
        <DestinationsSection />
        <FootagesSection />
        <ArticlesSection />
      </Container>
      <Footer />
    </main>
  );
}
