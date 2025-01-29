import { Route, Routes, useLocation } from "react-router"; // Use BrowserRouter
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { AnimatePresence, motion } from "framer-motion";
import Education from "./components/Education";
import { useEffect, useState } from "react";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const handleCursor = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };
    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);
  return (
    <div className="md:flex md:justify-start md:items-start md:gap-4 md:relative md:overflow-hidden">
      <Header />
      <motion.div
        className="max-md:hidden absolute top-0 left-0 w-[40px] h-[40px] z-50 rounded-full border-2 border-white"
        transition={{ duration: 0.01 }}
        animate={{ x: x, y: y }}
      ></motion.div>
      <div className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <Routes location={useLocation()} key={useLocation().pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  key="/" // Ensure the component is treated as a unique key on each route change
                  initial={{ x: "100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  key="/about"
                  initial={{ x: "100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/skills"
              element={
                <motion.div
                  key="/skills"
                  initial={{ x: "100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Skills />
                </motion.div>
              }
            />
            <Route
              path="/education"
              element={
                <motion.div
                  key="/trophy"
                  initial={{ x: "100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Education />
                </motion.div>
              }
            />
            <Route
              path="/Portfolio"
              element={
                <motion.div
                  key="/Portfolio"
                  initial={{ x: "100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/contact-me"
              element={
                <motion.div
                  key="/contact-me"
                  initial={{ x: "100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
