import React from 'react';
import './LogoTicker.css';

// Importy logo
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
  // Duplikujemy listę DWA razy - to klucz do nieskończonej pętli
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="ticker-section">
      <div className="ticker-wrap">
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