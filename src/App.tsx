import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen scroll-smooth overflow-y-visible">
      <Navbar />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
