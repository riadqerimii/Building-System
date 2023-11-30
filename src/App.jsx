import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Projects from "./components/Pages/Projects";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
