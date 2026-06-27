import React, { useEffect, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import './Activity.css';


const CHANNEL_ID = 'UCYSWEa4ZRc2rS0ZJJ7Sei3A';
const CHANNEL_HANDLE = 'Oleh_Bur';
const MAX_VIDEOS = 8;
const MAX_SHORTS = 4;

// YouTube RSS thr pub cors-proxy (allorigins)
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const PROXY = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`;
// ──────────────────────────────────────────────────────────────────────────────

interface VideoItem {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  url: string;
  isShort: boolean;
}

const parseRSS = (xml: string): VideoItem[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');
  const entries = Array.from(doc.querySelectorAll('entry'));

  return entries.map((entry) => {
    const videoId = entry.querySelector('videoId')?.textContent || '';
    const title = entry.querySelector('title')?.textContent || '';
    const published = entry.querySelector('published')?.textContent || '';

    return {
      id: videoId,
      title,
      published,
      thumbnail: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
      url: `https://www.youtube.com/watch?v=${videoId}`,
      isShort: title.toLowerCase().includes('#BOVVCompany') || title.toLowerCase().includes('short'),
    };
  });
};

const VideoCard: React.FC<{ video: VideoItem; isShort?: boolean }> = ({ video, isShort }) => {
  const formattedDate = new Date(video.published).toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <a
      href={isShort ? `https://www.youtube.com/shorts/${video.id}` : video.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`video-card ${isShort ? 'video-card--short' : ''}`}
    >
      <div className="video-card-thumb">
        <img src={video.thumbnail} alt={video.title} loading="lazy" />
        <span className="video-card-play">▶</span>
        {isShort && <span className="video-card-short-badge">Short</span>}
      </div>
      <div className="video-card-info">
        <p className="video-card-title">{video.title.replace(/#\w+/g, '').trim()}</p>
        <span className="video-card-date">{formattedDate}</span>
      </div>
    </a>
  );
};

const Activity: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(PROXY);
        const json = await res.json();
        const items = parseRSS(json.contents);
        setVideos(items);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const shorts = videos.filter((v) => v.isShort).slice(0, MAX_SHORTS);
  const regular = videos.filter((v) => !v.isShort).slice(0, MAX_VIDEOS);

  return (
    <section className="activity section" id="activity">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">{t.activity.follow_us}</span>
          <h2 className="section-title">{t.activity.title}</h2>
          <p className="section-subtitle">
            {t.activity.last_vid_from} {' '}
            <a
              href={`https://youtube.com/@${CHANNEL_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              {t.activity.yt_channel}
            </a>
          </p>
        </div>

        {loading && (
          <div className="activity-loading">
            <div className="loader" />
            <p>{t.activity.loading_vid}</p>
          </div>
        )}

        {error && (
          <div className="activity-error">
            <p>
              {t.activity.failed_downl_vid}{' '}
              <a
                href={`https://youtube.com/@${CHANNEL_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                @{CHANNEL_HANDLE}
              </a>
            </p>
          </div>
        )}

        {!loading && !error && (
          <>
            {regular.length > 0 && (
              <div className="activity-block">
                <h3 className="activity-sub-title">
                  <span>▶</span> {t.activity.last_vid}
                </h3>
                <div className="videos-grid">
                  {regular.map((v) => (
                    <VideoCard key={v.id} video={v} />
                  ))}
                </div>
              </div>
            )}

            {shorts.length > 0 && (
              <div className="activity-block">
                <h3 className="activity-sub-title">
                  <span>#</span> {t.activity.shorts}
                </h3>
                <div className="shorts-grid">
                  {shorts.map((v) => (
                    <VideoCard key={v.id} video={v} isShort />
                  ))}
                </div>
              </div>
            )}
            {/* {regular.length === 0 && shorts.length === 0 && (
              <p className="activity-empty">
                Videos have not yet appeared. Subscribe so you don't miss out!
              </p>
            )} */}
          </>
        )}
      </div>
    </section>
  );
};

export default Activity;
