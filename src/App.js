import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Gallery from "./pages/Gallery";
import Interviews from "./pages/Interviews";
import Media from "./pages/Media";
import Contacts from "./pages/Contacts";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}


function PageFade({ children }) {
  const { pathname } = useLocation();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(false);
    const t = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <PageFade>
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </PageFade>

      <Footer />
    </Router>
  );
}
