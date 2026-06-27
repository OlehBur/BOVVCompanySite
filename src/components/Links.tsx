import React from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { getSocial } from '../data/social';
import './Links.css';

const iconMap: Record<string, React.ReactNode> = {
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.81a8.18 8.18 0 0 0 4.78 1.52v-3.4a4.85 4.85 0 0 1-1.01-.24z" />
    </svg>
  ),
  telegram: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.1 13.999l-2.97-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.836.953l-.778-.393z" />
    </svg>
  ),
  playmarket: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M3.18 23.76c.37.2.8.23 1.2.07l12.44-7.18-2.84-2.85L3.18 23.76zM.5 1.5C.18 1.88 0 2.42 0 3.1v17.8c0 .68.18 1.22.5 1.6l.08.08 9.97-9.97v-.23L.58 1.42.5 1.5zM20.8 10.41l-2.9-1.68-3.17 3.17 3.17 3.17 2.92-1.69c.83-.48.83-1.28-.02-1.97zM4.38.17L16.82 7.35l-2.84 2.84L3.18.27C3.58.1 4.01.13 4.38.17z" />
    </svg>
  ),
};

const colorMap: Record<string, string> = {
  youtube: '#FF0000',
  tiktok: '#69C9D0',
  telegram: '#26A5E4',
  playmarket: '#34A853',
};

const Links: React.FC = () => {
  const { t } = useLocale();
  const socialLinks = getSocial(t); 

  return (
    <section className="links section" id="links">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{t.links.stay_connected}</span>
          <h2 className="section-title">{t.links.we_online}</h2>
          <p className="section-subtitle">
            {t.links.subscribe}
          </p>
        </div>

        <div className="links-grid">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
              style={{ '--card-color': colorMap[link.icon] ?? '#7C3AED' } as React.CSSProperties}
            >
              <span className="social-link-icon">{iconMap[link.icon]}</span>
              <div className="social-link-info">
                <span className="social-link-label">{link.label}</span>
                {link.description && (
                  <span className="social-link-desc">{link.description}</span>
                )}
              </div>
              <span className="social-link-ext">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
