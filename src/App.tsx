import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/sections/Loader';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Achievements from './components/sections/Achievements';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Testimonials from './components/sections/Testimonials';
import GitHubSection from './components/sections/GitHubSection';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-void" style={{ overflowX: 'clip' }}>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      <div className="noise-overlay" />

      <main>
        <Hero />
        <About />
        <Achievements />
        <TechStack />
        <Projects />
        <Journey />
        <Testimonials />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
