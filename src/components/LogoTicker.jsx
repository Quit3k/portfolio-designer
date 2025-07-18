import React, { useState, useRef, useEffect } from 'react';
import './LogoTicker.css';

// Importy logo - upewnij się, że masz te pliki
import premiereProLogo from '../assets/logos/premiere-pro.svg';
import figmaLogo from '../assets/logos/figma.svg';
import capcutLogo from '../assets/logos/capcut2.svg';
import midjourneyLogo from '../assets/logos/midjourney2.svg';
import canvaLogo from '../assets/logos/canva.svg';
import elevenlabsLogo from '../assets/logos/ElevenLabs_Logo_0.svg';
import davinciLogo from '../assets/logos/davinci.svg';
import dalleLogo from '../assets/logos/dall-e2.svg';

const logos = [
  { name: 'Adobe Premiere Pro', path: premiereProLogo },
  { name: 'Figma', path: figmaLogo },
  { name: 'CapCut', path: capcutLogo },
  { name: 'Midjourney', path: midjourneyLogo },
  { name: '', path: canvaLogo },
  { name: '', path: elevenlabsLogo },
  { name: 'DaVinci Resolve', path: davinciLogo },
  { name: 'DALL-E', path: dalleLogo },
];

const LogoTicker = () => {
  const extendedLogos = [...logos, ...logos]; // Duplikujemy dla płynnej pętli
  
  // === NOWA LOGIKA DLA PRZECIĄGANIA MYSZKĄ ===
  const trackRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    trackRef.current.classList.add('grabbing');
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    trackRef.current.classList.remove('grabbing');
  };

  const handleMouseUp = () => {
    setIsDown(false);
    trackRef.current.classList.remove('grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Mnożnik dla szybszego przewijania
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="ticker-section">
      <div 
        className="ticker-wrap"
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="ticker-track">
          {extendedLogos.map((logo, index) => (
            <div className="ticker-item" key={index}>
              <img src={logo.path} alt={logo.name} />
              <span className="ticker-item-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;