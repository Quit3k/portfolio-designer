import React from 'react';
import './Hero.css';
import heroCircleImage from '../assets/Wisza3.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div 
            className="hero-mobile-image" 
            style={{ backgroundImage: `url(${heroCircleImage})` }}
          ></div>

          <h1 className="hero-headline">
            Tworzymy wizualne historie, <br /> które <span className="highlight">napędzają Twój biznes.</span>
          </h1>
          <p className="hero-subheadline">
            Od filmów promocyjnych, przez design UX/UI, po spójny wizerunek marki. <br />Zamieniamy pomysły w realne wyniki.
          </p>
          <a href="#contact" className="hero-cta">Odkryj możliwości</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;