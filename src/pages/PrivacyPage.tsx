import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { privacyPolicies } from '../data/privacy';
import { useLocale } from '../i18n/LocaleContext';
import './PrivacyPage.css';

const PrivacyPage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const policy = privacyPolicies.find((p) => p.gameId === gameId);
  const { t } = useLocale();

  if (!policy) return <Navigate to="/" replace />;

  const handleBack = () => {
    sessionStorage.setItem('scrollTo', 'privacy');
    navigate('/');
  };

  return (
    <div className="privacy-page">
      <div className="privacy-page-inner container">
        <button className="privacy-back" onClick={handleBack}>
          ← {t.privacy.back}
        </button>

        <header className="privacy-page-header">
          <span className="section-eyebrow">{t.privacy.privacy}</span>
          <h1 className="privacy-page-title">{policy.gameTitle}</h1>
          <div className="privacy-page-meta">
            <span>{t.privacy.effective_date} {policy.effectiveDate}</span>
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
          <h2>{t.privacy.contact}</h2>
          <p>
            {t.privacy.questions}{' '}
            <a href={`mailto:${policy.contactEmail}`} className="inline-link">
              {policy.contactEmail}
            </a>
          </p>
        </div>

        {/* Links to other policies */}
        <div className="privacy-page-other">
          <p className="privacy-page-other-label">{t.privacy.others}:</p>
          <div className="privacy-page-other-links">
            {privacyPolicies
              .filter((p) => p.gameId !== gameId)
              .map((p) => (
                <button
                  key={p.gameId}
                  className="btn btn-ghost btn--sm"
                  onClick={() => navigate(`/privacy/${p.gameId}`)}
                >
                  {p.gameTitle}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
