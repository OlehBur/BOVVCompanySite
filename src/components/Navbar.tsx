import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext';
import './Navbar.css';

// Smooth-scroll to sect by id
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

interface NavItem {
  label: string;
  sectionId: string | null; // null = up
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', sectionId: null },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Activity', sectionId: 'activity' },
  { label: 'Privacy Policy', sectionId: 'privacy' },
  { label: 'Contacts', sectionId: 'links' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { locale, setLocale, } = useLocale();
  const isHome = location.pathname === '/';


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    setMenuOpen(false);

    if (isHome) {
      //if on main pg - jst scroll
      if (item.sectionId === null) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        scrollToSection(item.sectionId);
      }
    } else {
      // otherwise goto main page & then scroll
      if (item.sectionId === null) {
        navigate('/');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80);
      } else {
        // pass target thr sessionStorage so that  HomePage picks rendering
        sessionStorage.setItem('scrollTo', item.sectionId);
        navigate('/');
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => {
          if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <img
            src="my-dev-site.src/assets/logo.png"
            alt="logo"
            className="navbar-logo"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <span className="navbar-brand-name">BOVV<span>Company</span></span>
        </Link>

        <ul className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                className="navbar-link"
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="navbar-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
        <div className="locale-switcher">
          <button
            className={locale === 'uk' ? 'active' : ''}
            onClick={() => setLocale('uk')}
          >UK</button>
          <span>/</span>
          <button
            className={locale === 'en' ? 'active' : ''}
            onClick={() => setLocale('en')}
          >EN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
