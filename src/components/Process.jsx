import React from 'react';
import './Process.css';
import promoVideo from '../assets/promo-video.mp4';

const processSteps = [
  {
    id: '01',
    title: 'Odkrycie i Strategia',
    description: 'Zaczynamy od głębokiego zrozumienia Twojej marki, celów i odbiorców. Definiujemy kluczowe wskaźniki sukcesu i tworzymy spersonalizowaną strategię działania.',
  },
  {
    id: '02',
    title: 'Kreacja i Design',
    description: 'To etap, gdzie strategia nabiera kształtów. Projektujemy angażujące koncepty wizualne, od storyboardów filmowych po interaktywne makiety UX/UI.',
  },
  {
    id: '03',
    title: 'Produkcja i Realizacja',
    description: 'Wprowadzamy design w życie. Nagrywamy materiał filmowy, kodujemy interfejsy i finalizujemy projekty graficzne z dbałością o każdy detal.',
  },
  {
    id: '04',
    title: 'Wdrożenie i Rozwój',
    description: 'Finalny produkt to dopiero początek. Pomagamy we wdrożeniu, analizujemy wyniki i optymalizujemy działania, aby zapewnić maksymalny zwrot z inwestycji.',
  },
];

const Process = () => {
  return (
    <section id="process" className="process-section">
      <div className="particle-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        {/* DODATKOWE CZĄSTECZKI */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Jak zamieniamy wizję w <span className="highlight">sukces?</span></h2>
          <p className="section-subtitle">
            Nasz sprawdzony proces w 4 krokach gwarantuje przejrzystość, efektywność i rezultaty, które przekraczają oczekiwania.
          </p>
        </div>

        <div className="process-layout">
          <div className="process-timeline">
            {processSteps.map((step) => (
              <div className="process-step fade-in" key={step.id}>
                <div className="step-number">{step.id}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="phone-mockup-wrapper fade-in">
            <div className="phone-mockup">
              <div className="phone-mockup__notch"></div>
              <div className="phone-mockup__screen">
                <video
                  src={promoVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;