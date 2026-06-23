import GsapWrapper from "./GsapWrapper";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";
import ImageTrail from "./components/ImageTrail";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <GsapWrapper>
      <div data-taxi="" className="page_wrap">
        <Navbar />
        <main data-taxi-view="" className="main u-theme-light">
          <Hero />
          <Intro />
          <Services />
          <FeaturedProjects />
          <ImageTrail />
          <Footer />
        </main>
      </div>
    </GsapWrapper>
  );
}
