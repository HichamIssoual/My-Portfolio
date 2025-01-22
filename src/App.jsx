import { Route, Routes, useLocation } from 'react-router'; // Use BrowserRouter
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Achieve from './components/Achieve';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  return (
    <div className="overflow-x-hidden">
      
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={useLocation()} key={useLocation().pathname}>
          <Route
            path="/"
            element={
              <motion.div
                key="/" // Ensure the component is treated as a unique key on each route change
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ x: '100vw' }}
                transition={{ duration: 0.5 }}
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ x: '100vw' }}
                transition={{ duration: 0.5 }}
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ x: '100vw' }}
                transition={{ duration: 0.5 }}
              >
                <Skills />
              </motion.div>
            }
          />
          <Route
            path="/trophy"
            element={
              <motion.div
                key="/trophy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ x: '100vw' }}
                transition={{ duration: 0.5 }}
              >
                <Achieve />
              </motion.div>
            }
          />
          <Route
            path="/services"
            element={
              <motion.div
                key="/services"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ x: '100vw' }}
                transition={{ duration: 0.5 }}
              >
                <Services />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                key="/projects"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ x: '100vw' }}
                transition={{ duration: 0.5 }}
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ x: '100vw' }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
