import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { games } from '../data/games';
import { useLocale } from '../i18n/LocaleContext';
import './Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLocale();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo-text">
            BOVV<span>Company</span>
          </span>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer-nav">
          <p className="footer-nav-title">{t.footer.games}</p>
          {games.map((g) => (
            <a key={g.id} className="footer-nav-link"
              // href={`#projects`}
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 80);
              }}>
              {g.title}
            </a>
          ))}
        </div>

        <div className="footer-nav">
          <p className="footer-nav-title">{t.footer.policy}</p>
          {games.map((g) => (
            <Link key={g.id} to={`/privacy/${g.id}`} className="footer-nav-link">
              {g.title}
            </Link>
          ))}
        </div>

        <div className="footer-nav">
          <p className="footer-nav-title">{t.footer.contact}</p>
          <a href="mailto:bovv.company@gmail.com" className="footer-nav-link">
            bovv.company@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} BOVVCompany. {t.footer.rights}.</p>
      </div>
    </footer >
  );
};

export default Footer;
