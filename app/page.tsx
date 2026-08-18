import Hero from "./components/Hero";
import TableOfContents from "./components/TableOfContents";
import AboutMe from "./components/AboutMe";
import Institution from "./components/Institution";
import JobPosition from "./components/JobPosition";
import TechnicalSkills from "./components/TechnicalSkills";
import Portfolio from "./components/Portfolio";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <TableOfContents />
      <AboutMe />
      <JobPosition />
      <Institution />
      <TechnicalSkills />
      <Portfolio />
      <ContactFooter />
    </main>
  );
}