import React from 'react';
import './Testimonials.css';

// Przykładowe dane opinii - możesz je łatwo podmienić
const testimonialsData = [
  {
    name: 'Anna Kowalska',
    title: 'CEO, Słodka Dolina',
    quote: 'Ich podejście do marketingu wideo przerosło nasze najśmielsze oczekiwania. Kampania nie tylko wyglądała pięknie, ale przede wszystkim przyniosła realne zyski.',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/100?u=anna' // Przykładowe awatary
  },
  {
    name: 'Jan Nowak',
    title: 'Właściciel, Architekton',
    quote: 'Stworzyli dla nas stronę, która jest dziełem sztuki. Proces projektowy był transparentny, a komunikacja na najwyższym poziomie. Polecam!',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/100?u=jan'
  },
  {
    name: 'Ewa Wiśniewska',
    title: 'Manager, Czarna Kawa',
    quote: 'Nowy branding całkowicie odmienił naszą markę. Zrozumieli naszą wizję w 100% i przełożyli ją na design, który kochają nasi klienci.',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/100?u=ewa'
  },
  {
    name: 'Piotr Zieliński',
    title: 'Założyciel, NovaTech',
    quote: 'Niesamowita kreatywność i profesjonalizm. Krótkie formy wideo, które dla nas stworzyli, stały się viralem i znacząco zwiększyły ruch na naszej stronie.',
    rating: 5,
    avatarUrl: 'https://i.pravatar.cc/100?u=piotr'
  },
];

// Mały komponent do renderowania gwiazdek
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

const Testimonials = () => {
  const extendedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className="testimonials-section">
      {/* <div className="container section-header">
        <h2 className="section-title">Co mówią nasi <span className="highlight">klienci?</span></h2>
      </div> */}
      <div className="ticker-wrap">
        <div className="testimonials-track">
          {extendedTestimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="card-header">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="avatar" />
                <div className="user-info">
                  <span className="user-name">{testimonial.name}</span>
                  <span className="user-title">{testimonial.title}</span>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="quote">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;    