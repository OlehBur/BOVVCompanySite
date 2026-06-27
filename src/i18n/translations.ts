export type Locale = 'uk' | 'en';

export const translations = {
    uk: {
        activity: {
            follow_us: 'Слідкуйте за нами',
            last_vid_from: 'Останні відео з нашого',
            yt_channel: 'YouTube каналу',
            loading_vid: 'Вантажу Відео...',
            failed_downl_vid: 'Не вдалось завантажити віде. Спробуйте переглянути їх напряму:',
            last_vid: 'Останні відео',
            shorts: 'Шортси',
        },
        footer: {
            tagline: 'Абсолютно все, що ви тільки можете уявити — можна втілити в грі. Єдині обмеження це ваші навички та час.',
            games: 'Ігри',
            contact: 'Зв\'язатись',
            policy: 'Політика Конфіденційності',
            rights: "Всі права захищені"
        },
        game_card: {
            live: 'Доступна',
            dev: 'В розробці',
            community: 'Спільнота',
            download: 'Скачати з',
            view: 'Переглянути в',
        },
        links: {
            stay_connected: 'Залишайся на зв\'язку',
            we_online: 'Ми онлайн💖',
            subscribe: 'Підпишіться — ми публікуємо девлоги, новини та анонси нових ігор.'
        },
        privacy: {
            transparency: 'Прозорість',
            privacy: 'Політика Конфіденційності',
            respect: 'Ми поважаємо вашу конфіденційність. Ознайомтеся з політиками щодо кожного з наших продуктів.',
            view_full: 'Ознайомтеся з повною версією Політики Конфіденційності для',
            back: 'Повернутись',
            effective_date: 'Дата набрання чинності:',
            contact: 'Зв\'язок',
            questions: 'Якщо у вас виникнуть будь-які питання чи зауваження, будь ласка, звертайтеся до нас за адресою:',
            others: 'Інші'
        },
        game_data: {
            dj_desc: 'Пориньте в глибини океану та виживіть серед хижаків. Аркадна гра на виживання та стратегію з таблицями лідерів та досягненнями.',
            dj_genre: 'Аркада / Виживання',
            dj_tags: ['Аркада', 'Виживання', 'Океан'],
            sp_desc: 'Літай, досліджуй, будуй власний острів, заробляй гроші та доставляй товари.',
            sp_genre: 'Казуальна / Симулятор',
            sp_tags: ['Казуальна', 'Аркада', 'Симулятор']
        },
        social: {
            yt_desc: 'Відео та девлоги',
            tt_desc: 'Шортси та кліпи',
            tg_desc: 'Новини, анонси та тести',
            gp_desc: 'Доступ до наших ігор'
        },
        nav: {
            home: 'Головна',
            projects: 'Проєкти',
            activity: 'Активність',
            privacy: 'Privacy Policy',
            contacts: 'Контакти',
        },
        hero: {
            eyebrow: 'Студія незалежних ігор',
            tagline: 'Маленька студія. Великі ідеї.\nМи робимо ігри, які затягують.',
            projects: 'Наші проєкти',
            follow: 'Слідкувати',
        },
        projects: {
            eyebrow: 'Що ми робимо',
            title: 'Наші проєкти',
            subtitle: 'Ігри, які ми з любов\'ю розробляємо — від концепції до релізу.',
        },
    },
    en: {
        activity: {
            follow_us: 'Follow us',
            last_vid_from: 'Latest videos from our',
            yt_channel: 'YouTube channel',
            loading_vid: 'Loading video...',
            failed_downl_vid: 'Failed to download video. Watch the channel live:',
            last_vid: 'Latest videos',
            shorts: 'Shorts',
        },
        footer: {
            tagline: 'Everything you can imagine can be turned into a game. The only limits are your skills and time.',
            games: 'Games',
            contact: 'Contact',
            policy: 'Privacy Policy',
            rights: "All rights reserved"
        },
        game_card: {
            live: 'Live',
            dev: 'In development',
            community: 'Community',
            download: 'Download on',
            view: 'View on',
        },
        links: {
            stay_connected: 'Stay connected',
            we_online: 'We are online',
            subscribe: 'Subscribe - we publish devlogs, updates and announcements of new games.'
        },
        privacy: {
            transparency: 'Transparency',
            privacy: 'Privacy Policy',
            respect: 'We respect your privacy. See the policies for each of our products.',
            view_full: 'View the full Privacy Policy for',
            back: 'Back',
            effective_date: 'Effective date:',
            contact: 'Contact',
            questions: 'If you have any questions or concerns, feel free to reach us at:',
            others: 'Others'
        },
        game_data: {
            dj_desc: 'Dive into the depths of the ocean and survive among predators.A survival arcade game with leaderboards and achievements.',
            dj_genre: 'Arcade / Survival',
            dj_tags: ['Arcade', 'Survival', 'Ocean'],
            sp_desc: 'Fly, explore, build your own island, earn money, and deliver goods.',
            sp_genre: 'Casual / Simulators',
            sp_tags: ['Casual', 'Arcade', 'Simulators']
        },
        social: {
            yt_desc: 'Videos and devlogs',
            tt_desc: 'Shorts and clips',
            tg_desc: 'News, announcements and devtests',
            gp_desc: 'Our games'
        },
        nav: {
            home: 'Home',
            projects: 'Projects',
            activity: 'Activity',
            privacy: 'Privacy Policy',
            contacts: 'Contacts',
        },
        hero: {
            eyebrow: 'Indie Game Studio',
            tagline: ' Everything you can imagine can be turned into a game. The only limits are your skills and time.<br /> We make addictive games.',
            projects: 'Our projects',
            follow: 'Follow us',
        },
        projects: {
            eyebrow: 'What we do',
            title: 'Our projects',
            subtitle: 'Games we craft with love — from concept to release.',
        },
    },
} as const;

export type Translations = typeof translations.en; 