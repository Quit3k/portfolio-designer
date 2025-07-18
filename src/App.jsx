import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import LogoTicker from './components/LogoTicker';
import Portfolio from './components/Portfolio';
import StatsBanner from './components/StatsBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Prosty hook do obsługi animacji na scroll
// W profesjonalnym projekcie użylibyśmy biblioteki jak 'react-intersection-observer'
const useScrollAnimation = () => {
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);
};


function App() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <StatsBanner />
        <Process />
        <LogoTicker />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;