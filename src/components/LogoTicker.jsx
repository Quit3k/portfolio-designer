import React from 'react';
import './LogoTicker.css';

// === Wszystkie loga są teraz zaimportowane ===
import premiereProLogo from '../assets/logos/premiere-pro.svg';
// import afterEffectsLogo from '../assets/logos/after-effects.svg';
import figmaLogo from '../assets/logos/figma.svg';
import capcutLogo from '../assets/logos/capcut.svg';
import midjourneyLogo from '../assets/logos/midjourney.svg';
import canvaLogo from '../assets/logos/canva.svg';
import elevenlabsLogo from '../assets/logos/elevenlabs.svg';
import davinciLogo from '../assets/logos/davinci.svg';
import dalleLogo from '../assets/logos/dall-e.svg';
// import veoLogo from '../assets/logos/google-veo.svg';


// === Wszystkie loga są teraz aktywne na liście ===
const logos = [
  { name: 'Adobe Premiere Pro', path: premiereProLogo },
//   { name: 'Adobe After Effects', path: afterEffectsLogo },
  { name: 'Figma', path: figmaLogo },
  { name: 'CapCut', path: capcutLogo },
  { name: 'Midjourney', path: midjourneyLogo },
  { name: 'Canva Pro', path: canvaLogo },
  { name: 'ElevenLabs', path: elevenlabsLogo },
  { name: 'DaVinci Resolve', path: davinciLogo },
  { name: 'DALL-E', path: dalleLogo },
//   { name: 'Google Veo', path: veoLogo },
];

const LogoTicker = () => {
  // Logika komponentu pozostaje bez zmian, automatycznie dostosuje się do pełnej listy
  const activeLogos = logos.filter(logo => logo.path);
  const logosToDisplay = activeLogos.length < 7 
    ? [...activeLogos, ...activeLogos, ...activeLogos, ...activeLogos] 
    : [...activeLogos, ...activeLogos];

  return (
    <div className="ticker-section">
      <div className="ticker-wrap">
        <div className="ticker-track" style={{'--logo-count': activeLogos.length < 7 ? activeLogos.length * 2 : activeLogos.length }}>
          {logosToDisplay.map((logo, index) => (
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