import React from 'react';
import { Link } from 'react-router-dom';
import { games } from '../data/games';
import './PrivacySection.css';

const PrivacySection: React.FC = () => {
  return (
    <section className="privacy-section section" id="privacy">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Transparency</span>
          <h2 className="section-title">Privacy Policy</h2>
          <p className="section-subtitle">
            We respect your privacy. See the policies for each of our products.
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
                <p>View the full Privacy Policy for {game.title}</p>
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
