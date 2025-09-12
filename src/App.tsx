import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import GetStarted from "./pages/GetStarted";
import TailoredProject from "./pages/TailoredProject"; // ✅ actual form component
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

function AppContent({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* NEW ROUTES */}
        <Route
          path="/get-started"
          element={<GetStarted darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route path="/projects" element={<Projects />} />

        {/* ✅ Tailored Project now shows the actual form */}
        <Route path="/tailored-project" element={<TailoredProject />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen font-inter bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <ScrollToTop />
        <main className="pt-6">
          <AppContent darkMode={darkMode} setDarkMode={setDarkMode} />
        </main>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </Router>
  );
}

export default App;
