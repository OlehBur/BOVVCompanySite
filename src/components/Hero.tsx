import React from 'react';
import { useLocale } from '../i18n/LocaleContext';
import './Hero.css';
import banner_img from '../assets/dj_banner.jpg';
import logo_img from '../assets/logo.png';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const { t } = useLocale();

  return (
    <section className="hero" id="home">
      {/* Banner image strip */}
      <div className="hero-banner">
        <img
          src={banner_img}
          alt="BOVVCompany banner"
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
            src={logo_img}
            alt="BovvCompany logo"
            className="hero-logo"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        <div className="hero-text">
          <span className="hero-eyebrow">{t.hero.eyebrow}</span>
          <h1 className="hero-title">
            BOVV<span className="hero-title-accent">Company</span>
          </h1>
          <p className="hero-tagline">
            {t.hero.tagline}
          </p>
          <div className="hero-cta-row">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              {t.hero.projects}
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('links')}>
              {t.hero.follow}
            </button>
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
