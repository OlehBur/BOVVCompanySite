export interface SocialLink {
  label: string;
  url: string;
  icon: 'youtube' | 'tiktok' | 'telegram' | 'playmarket';
  description?: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@Oleh_Bur', 
    icon: 'youtube',
    description: 'Videos and devlogs',
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@bovv_company', 
    icon: 'tiktok',
    description: 'Shorts and clips',
  },
  {
    label: 'Telegram',
    url: 'https://t.me/+TWFAsZVJuhQ0MjQy', 
    icon: 'telegram',
    description: 'News, announcements and devtests',
  },
  {
    label: 'Google Play',
    url: 'https://play.google.com/store/apps/dev?id=9217177903920660550', 
    icon: 'playmarket',
    description: 'Our games',
  },
];

// YouTube channel config for Activity section
export const youtubeChannelId = 'UCYSWEa4ZRc2rS0ZJJ7Sei3A'; 
// YouTube RSS feed
export const youtubeChannelHandle = '@Oleh_Bur';
export const youtubeRssUrl =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCYSWEa4ZRc2rS0ZJJ7Sei3A'; 
