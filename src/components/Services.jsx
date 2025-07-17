import React from 'react';
import './Services.css';

const servicesData = [
  {
    icon: '🎬',
    title: 'Marketing Wideo',
    description: 'Produkujemy kinowej jakości filmy promocyjne, które angażują widzów i przekształcają ich w klientów. Od rolek na social media po spoty wizerunkowe.'
  },
  {
    icon: '💻',
    title: 'Design UX/UI',
    description: 'Nowoczesne, responsywne strony internetowe, które nie tylko wyglądają świetnie, ale również generują sprzedaż. UX/UI na najwyższym poziomie.'
  },
  {
    icon: '🎨',
    title: 'Identyfikacja Wizualna',
    description: 'Budujemy kompleksowy i spójny wizerunek marki. Projektujemy logo, księgi znaku i materiały, które wyróżnią Cię na tle konkurencji.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      {/* ZMIANA: Unikalny kontener na cząsteczki dla tej sekcji */}
      <div className="services-particle-container">
        <div className="services-particle"></div>
        <div className="services-particle"></div>
        <div className="services-particle"></div>
        <div className="services-particle"></div>
        <div className="services-particle"></div>
        <div className="services-particle"></div>
        <div className="services-particle"></div>
        <div className="services-particle"></div>
        <div className="services-particle"></div>
        <div className="services-particle"></div>
        <div className="services-particle"></div>
      </div>

      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">
            Jak możemy Ci <span className="highlight">pomóc?</span>
          </h2>
          <p className="section-subtitle">
            Specjalizujemy się w trzech kluczowych obszarach, które razem tworzą potężną machinę marketingową dla Twojej firmy.
          </p>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card fade-in" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;