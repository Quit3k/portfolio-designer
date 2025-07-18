import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // ZMIANA: Dodajemy stan do zarządzania menu mobilnym
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ZMIANA: Funkcja, która zamyka menu po kliknięciu w link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>HORIZON</a>
        
        {/* ZMIANA: Dodajemy klasę 'active' gdy menu jest otwarte */}
        <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
          <li><a href="#process" onClick={closeMenu}>Proces</a></li>
          <li><a href="#services" onClick={closeMenu}>Usługi</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Zacznijmy projekt</a></li>
        </ul>

        {/* ZMIANA: Przycisk "hamburgera", widoczny tylko na mobile */}
        <button className={isOpen ? 'hamburger active' : 'hamburger'} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;