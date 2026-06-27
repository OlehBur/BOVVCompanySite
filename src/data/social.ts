export interface SocialLink {
  label: string;
  url: string;
  icon: 'youtube' | 'tiktok' | 'telegram' | 'playmarket';
  description?: string;
}

import { type Translations } from '../i18n/translations';
// const { t } = useLocale();

export const getSocial = (t: Translations): SocialLink[] => [
  // export const socialLinks: SocialLink[] = [
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@Oleh_Bur',
    icon: 'youtube',
    description: t.social.yt_desc,
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@bovv_company',
    icon: 'tiktok',
    description: t.social.tt_desc,
  },
  {
    label: 'Telegram',
    url: 'https://t.me/+TWFAsZVJuhQ0MjQy',
    icon: 'telegram',
    description: t.social.tg_desc,
  },
  {
    label: 'Google Play',
    url: 'https://play.google.com/store/apps/dev?id=9217177903920660550',
    icon: 'playmarket',
    description: t.social.gp_desc,
  },
];

// YouTube channel config for Activity section
export const youtubeChannelId = 'UCYSWEa4ZRc2rS0ZJJ7Sei3A';
// YouTube RSS feed
export const youtubeChannelHandle = '@Oleh_Bur';
export const youtubeRssUrl =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCYSWEa4ZRc2rS0ZJJ7Sei3A'; 
