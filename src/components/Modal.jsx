
import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ content, onClose }) => {
  // Efekt, który blokuje scrollowanie strony, gdy modal jest otwarty
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Funkcja, która zapobiega zamknięciu modala po kliknięciu na jego treść
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Tło modala, które zamyka okienko po kliknięciu
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        {/* Warunkowe renderowanie wideo lub obrazka */}
        {content.type === 'video' ? (
          <div className="modal-video-wrapper">
            <iframe
              src={content.url}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Project Video"
            ></iframe>
          </div>
        ) : (
          <img src={content.url} alt="Project Showcase" className="modal-image" />
        )}
      </div>
    </div>
  );
};

export default Modal;