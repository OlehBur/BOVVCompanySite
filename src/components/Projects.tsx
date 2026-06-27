import React from 'react';
import { games } from '../data/games';
import GameCard from './GameCard';
import { useLocale } from '../i18n/LocaleContext';
import './Projects.css';

const Projects: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{t.projects.eyebrow}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="projects-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
