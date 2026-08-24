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

const IndieDBIcon = () => (
  // <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <svg width="18" height="18" viewBox="0 0 44 34" fill="currentColor" >
    <path d="M1.11914 25.4072C5.71157 22.3067 13.9791 22.3596 18.2223 22.9071C19.1443 23.2145 20.0493 23.4788 20.9367 23.7028" stroke="currentColor" stroke-width="4" />
    <path d="M20.9355 23.7026C24.3946 24.5756 27.5864 24.8349 30.4755 24.6334" stroke="currentColor" stroke-width="4" />
    <path d="M30.4766 24.6332C35.5594 24.2787 39.7056 22.4983 42.7232 20.125" stroke="currentColor" stroke-width="4" />
    <path d="M33.7226 5.40717C38.1226 9.80717 34.4562 20.0214 32.2226 24.407C25.3221 37.9563 19.777 29.8392 20.2226 23.907C20.5231 19.9071 20.4895 16.6749 18.7217 14.9072C14.7217 10.9072 4.95841 17.8179 4.22263 13.4072C3.2217 7.40694 22.7217 -3.59284 33.7226 5.40717ZM33.7226 5.40717C37.4753 4.27423 40.4559 4.01369 42.7227 4.37278" stroke="currentColor" stroke-width="4" />
    {/* <path d="M23.5 9.5c-4.7-.4-6.8-.1-9.7 1.4-2 1-5 2.8-6.7 4S4 18 4 19s.4 2.1.9 2.5c.5.3 3 0 5.5-.7 3.9-1 4.8-1 6 .2.8.8 1.7 2.6 2.1 4 .6 2.4.5 2.5-5.2 2.6-3.2 0-7.5.6-9.5 1.3-3 1-3.8 1.8-3.8 3.7 0 2.4 0 2.4 3.2.8 1.8-.9 5.9-1.9 9.3-2.1 6-.5 6-.5 7.7 3.1 1.1 2.2 2.5 3.6 3.6 3.6 1 0 3.1-1.3 4.6-2.9 1.6-1.7 4.3-3.2 6.4-3.6 2.1-.3 4.5-.8 5.5-1.1.9-.3 1.7-1.2 1.7-2 0-1-.6-1.3-1.7-1-1 .3-3.1.8-4.7 1.2-2.6.6-2.8.5-2.2-1.2.5-1 1-3.7 1.3-6s0-5.1-.6-6.2c-.9-1.8-.8-2.3 1-3.2 1.1-.7 3.2-.9 4.5-.6 1.4.4 2.4.2 2.4-.4 0-.7-2.4-1.1-6.2-1-3.5 0-9-.2-12.3-.5" /> */}
    {/* <path d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM7 11V13H9V15H11V13H13V11H11V9H9V11H7ZM15 10C14.4477 10 14 10.4477 14 11C14 11.5523 14.4477 12 15 12C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10ZM17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12Z"/> */}
    {/* <path d="M4.1 11.2C3.2 10.3 3.8 8.1 5.9 6.7C8.5 5.0 12.2 4.4 15.6 5.2C19.1 6.0 20.8 7.5 20.4 8.7C20.0 9.9 17.5 10.5 15.1 11.1C13.5 11.5 12.8 12.4 12.8 13.9C12.8 15.2 13.5 17.2 13.5 18.5C13.5 19.8 12.1 20.0 11.2 19.8C10.2 19.6 9.8 18.2 9.9 16.8C10.0 15.1 9.4 13.8 8.1 13.0C6.3 11.9 4.9 12.0 4.1 11.2Z" /> */}
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

            {game.platforms.indiedb && (
              <a
                href={game.platforms.indiedb}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn platform-btn--indiedb"
                title={`${t.game_card.view} Indie DB`}
              >
                <IndieDBIcon />
                <span>Indie DB</span>
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
