import React from 'react';
import './Contact.css';

const contactMethods = [
    { icon: '📧', text: 'horizon@gmail.com', href: 'mailto:horizon@gmail.com' },
    { icon: '📞', text: '+48 777 777 777', href: 'tel:+48777777777' },
    { icon: '📍', text: 'Jasło, Polska', href: '#' }
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-particle-container">
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
      </div>

      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">
            Porozmawiajmy o <span className="highlight">Twoim</span> projekcie
          </h2>
          <p className="section-subtitle">Wypełnij formularz lub skontaktuj się bezpośrednio. Jesteśmy gotowi, aby zamienić Twoją wizję w sukces.</p>
        </div>

        {/* ZMIANA UKŁADU: Formularz jest teraz pierwszy, a informacje kontaktowe drugie */}
        <div className="contact-layout">
          {/* Lewa strona z formularzem */}
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Imię i Nazwisko</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Numer telefonu</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adres E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Jak możemy pomóc?</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div className="form-group-checkbox">
                <input type="checkbox" id="privacy" name="privacy" required />
                <label htmlFor="privacy">Akceptuję politykę prywatności</label>
            </div>
            <button type="submit" className="submit-btn">Wyślij wiadomość</button>
          </form>

          {/* Prawa strona z kafelkami kontaktowymi i nowym obrazkiem */}
          <div className="contact-details-wrapper">
            {/* NOWY ELEMENT: Kontener na zdjęcie */}
            <div className="contact-image"></div>
            
            <div className="contact-info-cards">
              {contactMethods.map((method, index) => (
                <a href={method.href} className="contact-card" key={index}>
                  <span className="contact-card-icon">{method.icon}</span>
                  <span className="contact-card-text">{method.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;