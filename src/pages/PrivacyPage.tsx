import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { privacyPolicies } from '../data/privacy';
import './PrivacyPage.css';

const PrivacyPage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const policy = privacyPolicies.find((p) => p.gameId === gameId);

  if (!policy) return <Navigate to="/" replace />;

  return (
    <div className="privacy-page">
      <div className="privacy-page-inner container">
        <Link to="/#privacy" className="privacy-back">
          ← Назад
        </Link>

        <header className="privacy-page-header">
          <span className="section-eyebrow">Privacy Policy</span>
          <h1 className="privacy-page-title">{policy.gameTitle}</h1>
          <div className="privacy-page-meta">
            <span>Effective date: {policy.effectiveDate}</span>
          </div>
        </header>

        <p className="privacy-page-intro">{policy.intro}</p>

        {policy.sections.map((sec) => (
          <div key={sec.title} className="privacy-page-section">
            <h2>{sec.title}</h2>
            {Array.isArray(sec.content) ? (
              <ul>
                {sec.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{sec.content}</p>
            )}
          </div>
        ))}

        <div className="privacy-page-contact">
          <h2>Contact</h2>
          <p>
            If you have any questions or concerns, feel free to reach us at:{' '}
            <a href={`mailto:${policy.contactEmail}`} className="inline-link">
              {policy.contactEmail}
            </a>
          </p>
        </div>

        {/* Links to other policies */}
        <div className="privacy-page-other">
          <p className="privacy-page-other-label">Інші Privacy Policies:</p>
          <div className="privacy-page-other-links">
            {privacyPolicies
              .filter((p) => p.gameId !== gameId)
              .map((p) => (
                <Link key={p.gameId} to={`/privacy/${p.gameId}`} className="btn btn-ghost btn--sm">
                  {p.gameTitle}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
