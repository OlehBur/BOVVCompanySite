export interface GameData {
  id: string;
  title: string;
  description: string;
  genre: string;
  tags: string[];
  coverImage: string; // path to image, e.g. '/images/deep-jaws-cover.jpg'
  isPublished: boolean;
  platforms: {
    googlePlay?: string;   // URL if available
    steam?: string;        // URL if available
    appStore?: string;     // URL if available
  };
  telegramGroup?: string; // Telegram group/channel URL
}

import dj_img from '../assets/DJ.png';
import sp_img from '../assets/SP.jpg';
import { type Translations } from '../i18n/translations';


export const getGames = (t: Translations): GameData[] => [
  {
    id: 'deep-jaws',
    title: 'Deep Jaws',
    description: t.game_data.dj_desc,
    genre: t.game_data.dj_genre,
    tags: [...t.game_data.dj_tags],
    coverImage: dj_img,
    isPublished: true,
    platforms: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.bovvcompany.deepjaws',
    },
    telegramGroup: 'https://t.me/+ckpwFkUvGSc2Mjky',
  },
  {
    id: 'spin-the-prop',
    title: 'Spin the Prop',
    description: t.game_data.sp_desc,
    genre: t.game_data.sp_genre,
    tags: [...t.game_data.sp_tags],
    coverImage: sp_img,
    isPublished: false, // in dev
    platforms: {
      // googlePlay: '', //todo
      // steam: '',
      // appStore: '',
    },
    telegramGroup: 'https://t.me/+TWFAsZVJuhQ0MjQy',
  },
];
