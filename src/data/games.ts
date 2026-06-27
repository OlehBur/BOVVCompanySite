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
      'Dive into the depths of the ocean and survive among predators. A survival arcade game with leaderboards and achievements.',
    genre: 'Arcade / Survival',
    tags: ['Arcade', 'Survival', 'Ocean'],
    coverImage: '../assets/DJ.png',
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
      'Fly, explore, pump the island and deliver goods.',
    genre: 'Casual / Simulators',
    tags: ['Casual', 'Arcade', 'Simulators'],
    coverImage: '../assets/SP.jpg',
    isPublished: false, // in dev
    platforms: {
      // googlePlay: '', //todo
      // steam: '',
      // appStore: '',
    },
    telegramGroup: 'https://t.me/+TWFAsZVJuhQ0MjQy', 
  },
];
