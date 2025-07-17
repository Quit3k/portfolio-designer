import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <a href="#hero" className="logo">HORIZON</a>
        <ul className="nav-links">
          <li><a href="#process">Proces</a></li>
          <li><a href="#services">Usługi</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact" className="nav-cta">Zacznijmy projekt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;