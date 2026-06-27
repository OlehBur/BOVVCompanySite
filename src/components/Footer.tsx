import React from 'react';
import { Link } from 'react-router-dom';
import { games } from '../data/games';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo-text">
            BOVV<span>Company</span>
          </span>
          <p className="footer-tagline">Everything you can imagine can be turned into a game. The only limits are your skills and time.</p>
        </div>

        <div className="footer-nav">
          <p className="footer-nav-title">Ігри</p>
          {games.map((g) => (
            <a key={g.id} href={`#projects`} className="footer-nav-link">
              {g.title}
            </a>
          ))}
        </div>

        <div className="footer-nav">
          <p className="footer-nav-title">Privacy Policy</p>
          {games.map((g) => (
            <Link key={g.id} to={`/privacy/${g.id}`} className="footer-nav-link">
              {g.title}
            </Link>
          ))}
        </div>

        <div className="footer-nav">
          <p className="footer-nav-title">Контакт</p>
          <a href="mailto:bovv.company@gmail.com" className="footer-nav-link">
            bovv.company@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} BOVVCompany. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
