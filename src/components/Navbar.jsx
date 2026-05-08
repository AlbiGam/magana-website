import { useEffect, useState } from 'react';
import './Navbar.css';
import { assetUrl } from '../utils/assets';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="logo-icon">
            <img src={assetUrl('LOGO.png')} alt="Magana Luusa logo" className="logo-image" />
          </div>
          <span className="logo-text">MAGANA LUUSA</span>
        </div>

        <div className="navbar-desktop">
          <div className="navbar-socials">
            <a href="https://www.instagram.com/maganaluusa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="social-link" target="_blank" rel="noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>

          <ul className="navbar-links">
            <li><a href="#about" className="nav-link active">ABOUT</a></li>
            <li><a href="#partners" className="nav-link">PARTNERS</a></li>
            <li><a href="#calendar" className="nav-link">CALENDAR</a></li>
            <li><a href="#contact" className="nav-link">CONTACT</a></li>
          </ul>
        </div>

        <button
          type="button"
          className="navbar-menu-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar-overlay ${isMenuOpen ? 'is-open' : ''}`} onClick={closeMenu} />

      <aside id="mobile-navigation" className={`navbar-sidebar ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="navbar-sidebar-header">
          <span className="navbar-sidebar-title">Menu</span>
          <button type="button" className="navbar-sidebar-close" aria-label="Close navigation menu" onClick={closeMenu}>
            <span />
            <span />
          </button>
        </div>

        <ul className="navbar-sidebar-links">
          <li><a href="#about" className="nav-link active" onClick={closeMenu}>ABOUT</a></li>
          <li><a href="#partners" className="nav-link" onClick={closeMenu}>PARTNERS</a></li>
          <li><a href="#calendar" className="nav-link" onClick={closeMenu}>CALENDAR</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>CONTACT</a></li>
        </ul>

        <div className="navbar-sidebar-footer">
          <div className="navbar-socials navbar-sidebar-socials">
            <a href="https://www.instagram.com/maganaluusa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="social-link" target="_blank" rel="noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
