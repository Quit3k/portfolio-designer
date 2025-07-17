import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                {/* ZMIANA: Lewe logo jest teraz linkiem na górę strony */}
                <a href="#home" className="footer-logo">HORIZON</a>

                <div className="footer-copyright">
                    &copy; {currentYear} HORIZON. Wszelkie prawa zastrzeżone.
                </div>

                {/* ZMIANA: Zamiast social mediów, wstawiamy drugi link-logo */}
                <div className="footer-links-right">
                    <a href="#home" className="footer-logo highlight">HORIZON</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;