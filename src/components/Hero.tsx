import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      {/* Banner image strip */}
      <div className="hero-banner">
        <img
          src="/images/company-banner.jpg"
          alt="BovvCompany banner"
          className="hero-banner-img"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="hero-banner-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-logo-wrap">
          <img
            src="/images/company-logo.png"
            alt="BovvCompany logo"
            className="hero-logo"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        <div className="hero-text">
          <span className="hero-eyebrow">Indie Game Studio</span>
          <h1 className="hero-title">
            Bovv<span className="hero-title-accent">Company</span>
          </h1>
          <p className="hero-tagline">
            Everything you can imagine can be turned into a game. The only limits are your skills and time.<br />
            Ми робимо ігри, які затягують.
          </p>
          <div className="hero-cta-row">
            <a href="#projects" className="btn btn-primary">
              Наші проєкти
            </a>
            <a href="#links" className="btn btn-ghost">
              Слідкувати
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>
  );
};

export default Hero;
