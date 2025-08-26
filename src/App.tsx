import React from "react";
import { Navbar } from "./components/navbar";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Projects } from "./components/projects";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Contact />
      <Projects />
    </>
  );
}

export default App;
