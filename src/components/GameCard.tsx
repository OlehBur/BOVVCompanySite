import React from 'react';
import { type GameData } from '../data/games';
import { useLocale } from '../i18n/LocaleContext';
import './GameCard.css';

interface Props {
  game: GameData;
}

const GooglePlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.37.2.8.23 1.2.07l12.44-7.18-2.84-2.85L3.18 23.76zM.5 1.5C.18 1.88 0 2.42 0 3.1v17.8c0 .68.18 1.22.5 1.6l.08.08 9.97-9.97v-.23L.58 1.42.5 1.5zM20.8 10.41l-2.9-1.68-3.17 3.17 3.17 3.17 2.92-1.69c.83-.48.83-1.28-.02-1.97zM4.38.17L16.82 7.35l-2.84 2.84L3.18.27C3.58.1 4.01.13 4.38.17z" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.1 13.999l-2.97-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.836.953l-.778-.393z" />
  </svg>
);

const SteamIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.029 4.524 4.524s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0z" />
  </svg>
);

const AppStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GameCard: React.FC<Props> = ({ game }) => {
  const hasAnyPlatform =
    game.platforms.googlePlay || game.platforms.steam || game.platforms.appStore;
  const { t } = useLocale();

  return (
    <div className="game-card">
      <div className="game-card-cover">
        <img
          src={game.coverImage}
          alt={game.title}
          className="game-card-img"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '';
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="game-card-cover-fallback">
          <span className="game-card-cover-letter">{game.title[0]}</span>
        </div>
        <div className="game-card-genre-badge">{game.genre}</div>
      </div>

      <div className="game-card-body">
        <h3 className="game-card-title">{game.title}</h3>

        <div className="game-card-tags">
          {game.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <p className="game-card-desc">{game.description}</p>

        <div className="game-card-footer">
          {/* Status */}
          <div className="game-card-status">
            {game.isPublished ? (
              <span className="status-badge status-badge--live">● {t.game_card.live}</span>
            ) : (
              <span className="status-badge status-badge--wip">⟳ {t.game_card.dev}</span>
            )}
          </div>

          {/* Platform links */}
          <div className="game-card-platforms">
            {game.platforms.googlePlay && (
              <a
                href={game.platforms.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn platform-btn--gplay"
                title={`${t.game_card.download} Google Play`}
              >
                <GooglePlayIcon />
                <span>Google Play</span>
              </a>
            )}

            {game.platforms.steam && (
              <a
                href={game.platforms.steam}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn platform-btn--steam"
                title={`${t.game_card.view} Steam`}
              >
                <SteamIcon />
                <span>Steam</span>
              </a>
            )}

            {game.platforms.appStore && (
              <a
                href={game.platforms.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn platform-btn--appstore"
                title={`${t.game_card.download} App Store`}
              >
                <AppStoreIcon />
                <span>App Store</span>
              </a>
            )}

            {!game.isPublished && !hasAnyPlatform && (
              <span className="platform-btn platform-btn--soon">
                Soon
              </span>
            )}

            {game.telegramGroup && (
              <a
                href={game.telegramGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn platform-btn--tg"
                title={`Telegram  ${t.game_card.community}`}
              >
                <TelegramIcon />
                <span>{t.game_card.community}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div >
  );
};

export default GameCard;
