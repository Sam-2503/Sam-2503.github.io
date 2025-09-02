import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Projects } from "./components/projects";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <About
        heading="Samprad's Portfolio"

        description="Hey There! I'm Samprad (or Sam if we're already pals) I am an 18 year old from India with an insatiable curiosity for tech, design and basically anything that makes the digital world tick. I started this portfolio in my 2nd semester to document my journey in Web Development and explore how creativity and code collide. When I'm not breaking my code (and occasionally fixing it), I'm probably dragging myself through college life, or collaborating with ACK, or crafting side projects that nobody asked for-but hey, they're cool!"

        image={{ src: "https://sam25.is-a.dev/me.png", alt: "me" }}
      />
      <Contact />
      <Projects />
    </>
  );
}

export default App;
