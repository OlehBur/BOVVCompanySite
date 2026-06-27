import React from 'react';
import { games } from '../data/games';
import GameCard from './GameCard';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Що ми робимо</span>
          <h2 className="section-title">Наші проєкти</h2>
          <p className="section-subtitle">
            Ігри, які ми з любов'ю розробляємо — від концепції до релізу.
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
