import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { games } from '../data/games';
import './Footer.css';

const Footer: React.FC = () => {
 const navigate = useNavigate();

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
          <p className="footer-nav-title">Games</p>
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
          <p className="footer-nav-title">Privacy Policy</p>
          {games.map((g) => (
            <Link key={g.id} to={`/privacy/${g.id}`} className="footer-nav-link">
              {g.title}
            </Link>
          ))}
        </div>

        <div className="footer-nav">
          <p className="footer-nav-title">Contact</p>
          <a href="mailto:bovv.company@gmail.com" className="footer-nav-link">
            bovv.company@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} BOVVCompany. All rights reserved.</p>
      </div>
    </footer >
  );
};

export default Footer;
