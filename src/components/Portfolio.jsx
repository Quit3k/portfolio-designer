import React, { useState } from 'react';
import './Portfolio.css';
import Modal from './Modal';
// ZMIANA: Importujemy lokalne zdjęcie, aby React mógł go użyć
import dolinaPoster from '../assets/dolina.png';

const caseStudiesData = [
  {
    title: "Kampania Wideo dla 'Słodka Dolina'",
    category: 'Marketing Wideo',
    mediaType: 'video',
    // ZMIANA: Używamy zaimportowanego zdjęcia jako postera
    posterUrl: dolinaPoster,
    mediaUrl: 'https://player.vimeo.com/video/22439234?h=5aca5d7be9&autoplay=1&loop=1&title=0&byline=0&portrait=0',
    problem: 'Klient "Słodka Dolina", producent luksusowych bakalii, borykał się z niską rozpoznawalnością nowej linii produktów w okresie przedświątecznym.',
    solution: [
      'Stworzyliśmy serię dynamicznych, 15-sekundowych spotów wideo zoptymalizowanych pod kątem platform social media (Instagram Reels, TikTok).',
      'Kampania skupiła się na apetycznych ujęciach "food porn" i szybkim montażu, aby przykuć uwagę w pierwszych sekundach.',
      'Wdrożyliśmy precyzyjnie targetowane reklamy, które dotarły do ponad miliona potencjalnych klientów, generując 300% wzrostu sprzedaży online w grudniu.'
    ]
  },
  {
    title: "Strona Korporacyjna dla 'Architekton'",
    category: 'Design UX/UI',
    mediaType: 'image',
    posterUrl: null,
    mediaUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop',
    problem: 'Nowoczesna pracownia architektoniczna potrzebowała strony, która byłaby nie tylko wizytówką, ale i efektywnym narzędziem do pozyskiwania leadów od klientów premium.',
    solution: [
      'Zaprojektowaliśmy minimalistyczny interfejs z naciskiem na duże, wysokiej jakości zdjęcia realizacji i intuicyjną nawigację.',
      'Stworzyliśmy interaktywny formularz kontaktowy, który skracał proces zapytania o ofertę z kilku minut do 30 sekund.',
      'Strona została zoptymalizowana pod kątem SEO, co w ciągu 6 miesięcy przyniosło wzrost organicznego ruchu o 450%.'
    ]
  },
  {
    title: "Rebranding dla 'Czarna Kawa'",
    category: 'Branding',
    mediaType: 'image',
    posterUrl: null,
    // ZMIANA: Podmieniamy link na nowy, działający
    mediaUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1974&auto=format&fit=crop',
    problem: 'Lokalna palarnia kawy "Czarna Kawa" chciała odświeżyć swój wizerunek, aby lepiej trafiać do młodszej grupy docelowej i wyróżnić się na tle sieciówek.',
    solution: [
      'Zaprojektowaliśmy nowe, odważne logo i kompletny system identyfikacji wizualnej, od opakowań po wystrój lokalu.',
      'Stworzyliśmy serię szablonów do social media, które ujednoliciły komunikację i zwiększyły zaangażowanie o 80%.',
      'Nowy branding przyczynił się do wzrostu liczby klientów o 40% i otworzył drogę do współpracy z lokalnymi kawiarniami.'
    ]
  }
];

const Portfolio = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  return (
    <>
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-particle-container">
          {[...Array(15)].map((_, i) => <div className="portfolio-particle" key={i}></div>)}
        </div>
        <div className="container">
          <div className="section-header fade-in">
            <h2 className="section-title">Nasze przykładowe <span className="highlight">realizacje</span></h2>
            <p className="section-subtitle-dark">Jesteśmy dumni z projektów, które zrealizowaliśmy. Oto kilka z nich, które pokazują siłę naszej kreatywności.</p>
          </div>
          <div className="case-studies-container">
            {caseStudiesData.map((study, index) => (
              <div className="case-study-card fade-in" key={index}>
                <div className="case-study-media" style={{backgroundImage: `url(${study.posterUrl || study.mediaUrl})`}}>
                  <div className="media-overlay">
                    <button className="view-button" onClick={() => openModal({ type: study.mediaType, url: study.mediaUrl })}>
                      Zobacz
                    </button>
                  </div>
                </div>
                <div className="case-study-description">
                  <span className="case-study-category">{study.category}</span>
                  <h3>{study.title}</h3>
                  <h4>Problem:</h4>
                  <p>{study.problem}</p>
                  <h4>Rozwiązanie:</h4>
                  <ul>
                    {study.solution.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {modalContent && <Modal content={modalContent} onClose={() => setModalContent(null)} />}
    </>
  );
};

export default Portfolio;