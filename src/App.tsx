import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Projects } from "./components/projects";
import {Footer} from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen scroll-smooth">
      <Navbar />
      <About
        heading="Samprad's Portfolio"
        description="Hey There! I'm Samprad (or Sam if you know me well enough) I am an 18 year old from India with an knack for tech, design and basically anything that makes the digital world tick. I started this portfolio in my 2nd semester to document my journey in Web Development and explore how creativity and code collide. When I'm not breaking my code (and making my keyboard go through hell), I'm probably dragging myself through college life, or collaborating with ACK, or crafting side projects that nobody asked for-but hey, they're cool!"
        image={{ src: "https://res.cloudinary.com/dsplnfii2/image/upload/v1757223337/me_irt7s9.png", alt: "me" }}
      />
      <Contact />
      <Projects
        tagline="Featured Projects"
        heading="Projects"
        description="Some of my favourite projects"
      />
      <Footer />
    </div>
  );
}

export default App;
