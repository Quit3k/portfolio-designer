import React, { useState, useEffect, useRef } from 'react';
import './StatsBanner.css';

// Hook do animacji odliczania liczb (bez zmian)
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const endValue = parseInt(String(end).replace(/ /g, ''), 10);
          if (start === endValue) return;

          const startTime = Date.now();
          const frame = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const current = Math.floor(progress * endValue);
            setCount(current);
            if (progress < 1) {
              requestAnimationFrame(frame);
            }
          };
          requestAnimationFrame(frame);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, formattedCount: count.toLocaleString('pl-PL') };
};

const statsData = [
  { value: 8, label: 'Lat doświadczenia', suffix: '' },
  { value: 50, label: 'Zrealizowanych projektów', suffix: '+' },
  { value: 3000000, label: 'Odtworzeń w kampaniach', suffix: '+' }
];

// ZMIANA: Upraszczamy komponent Stat, aby cała liczba była jednym elementem
const Stat = ({ value, label, suffix }) => {
    const { ref, formattedCount } = useCountUp(value);

    return (
        <div className="stat-item" ref={ref}>
            <div className="stat-number">{formattedCount}{suffix}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

const StatsBanner = () => {
  return (
    <section className="stats-banner-section">
      <div className="container stats-container">
        {statsData.map((stat, index) => (
          <Stat key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;