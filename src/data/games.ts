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

export const games: GameData[] = [
  {
    id: 'deep-jaws',
    title: 'Deep Jaws',
    description:
      'Занурся в глибини океану та виживи серед хижаків. Аркадна гра на виживання з таблицями лідерів та досягненнями.',
    genre: 'Аркада / Виживання',
    tags: ['Аркада', 'Виживання', 'Океан'],
    coverImage: 'my-dev-site/src/assets/DJ.png',
    isPublished: true,
    platforms: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.bovvcompany.deepjaws', 
    },
    telegramGroup: 'https://t.me/+ckpwFkUvGSc2Mjky', 
  },
  {
    id: 'spin-the-prop',
    title: 'Spin the Prop',
    description:
      'Літай, досліджуй, прокачуй острів та доставляй товари.',
    genre: 'Казуальна',
    tags: ['Казуальна', 'Aркада'],
    coverImage: 'my-dev-site/src/assets/SP.jpg',
    isPublished: false, // in dev
    platforms: {
      // googlePlay: '', //todo
      // steam: '',
      // appStore: '',
    },
    telegramGroup: 'https://t.me/+TWFAsZVJuhQ0MjQy', 
  },
];
