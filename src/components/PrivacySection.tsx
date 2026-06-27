import React from 'react';
import { Link } from 'react-router-dom';
import { games } from '../data/games';
import { useLocale } from '../i18n/LocaleContext';
import './PrivacySection.css';

const PrivacySection: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="privacy-section section" id="privacy">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{t.privacy.transparency}</span>
          <h2 className="section-title">{t.privacy.privacy}</h2>
          <p className="section-subtitle">
           {t.privacy.respect}
          </p>
        </div>

        <div className="privacy-cards">
          {games.map((game) => (
            <Link
              key={game.id}
              to={`/privacy/${game.id}`}
              className="privacy-card"
            >
              <div className="privacy-card-icon">🔒</div>
              <div className="privacy-card-text">
                <h3>{game.title}</h3>
                <p>{t.privacy.view_full} {game.title}</p>
              </div>
              <span className="privacy-card-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
