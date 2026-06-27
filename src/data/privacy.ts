export interface PolicySection {
  title: string;
  content: string | string[];
}

export interface PrivacyPolicy {
  gameId: string;
  gameTitle: string;
  effectiveDate: string;
  lastUpdated: string;
  intro: string;
  sections: PolicySection[];
  contactEmail: string;
}

export const privacyPolicies: PrivacyPolicy[] = [
  {
    gameId: 'deep-jaws',
    gameTitle: 'Deep Jaws',
    effectiveDate: '10.12.2025',
    lastUpdated: '2026-06-27',
    intro:
      'We at BovvCompany respect your privacy. This policy explains what data is collected when you use Deep Jaws, how it is used, and your rights regarding it.',
    sections: [
      {
        title: '1. Data Collection',
        content: [
          'Deep Jaws is a free-to-play game. The app itself does not directly collect, store, or sell any personal information.',
          'Google Play Games Services may be used for features such as leaderboards and achievements. This service, provided by Google, may collect identifiers (such as Device IDs or Google Account IDs) solely for authenticating scores, maintaining game progress, and ensuring service integrity. This data is governed by Google\'s Privacy Policy.',
          'The app does not track your activity for its own analytics or advertising purposes.',
        ],
      },
      {
        title: '2. Advertising',
        content: [
          'Deep Jaws is a free game supported by advertising. Ads are served through Unity LevelPlay (IronSource) — a verified, GDPR-compliant ad mediation platform.',
          'The ad network may use device identifiers or other technical data to serve relevant ads. We, as the developer, do not directly access, store, or control this data. For details, please review Unity\'s Privacy Policy.',
          'You may opt out of personalized advertising through your device settings.',
        ],
      },
      {
        title: '3. In-App Purchases',
        content: [
          'Deep Jaws offers optional in-app purchases. All transactions are securely processed by Google Play Billing. We do not receive, handle, or store any payment or credit card information.',
        ],
      },
      {
        title: '4. Children\'s Privacy',
        content: [
          'This app is intended for general audiences and is not specifically targeted at children under 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided personal data, please contact us and we will address the matter promptly.',
        ],
      },
      {
        title: '5. Changes to This Policy',
        content: [
          'We may update this Privacy Policy from time to time. Any changes will be reflected here with a revised effective date.',
        ],
      },
    ],
    contactEmail: 'bovv.company@gmail.com',
  },
  {
    gameId: 'spin-the-prop',
    gameTitle: 'Spin the Prop',
    effectiveDate: '31.01.2026',
    lastUpdated: '2026-06-27',
    intro:
      'BovvCompany is committed to protecting your privacy. This Privacy Policy describes how Spin the Prop handles information during your use of the application.',
    sections: [
      {
        title: '1. Information Collection and Use',
        content: [
          'Spin the Prop does not collect, store, or share any personal data from users. We do not request access to contacts, location, camera, microphone, or any other sensitive information.',
        ],
      },
      {
        title: '2. Advertising',
        content: [
          'The app displays third-party advertisements. These ads may be provided by external ad networks, which may use their own technologies — such as cookies or device identifiers — to deliver personalized or non-personalized ads.',
          'We, as the developer, do not collect, store, or have direct access to this information. For details on their data practices, please refer to the privacy policies of the respective providers.',
        ],
      },
      {
        title: '3. In-App Purchases & Donations',
        content: [
          'Spin the Prop may offer optional donations or small in-app purchases. All transactions are processed securely through Google Play Billing. We do not handle or store any payment information.',
        ],
      },
      {
        title: '4. Children\'s Privacy',
        content: [
          'The app is suitable for general audiences. We do not knowingly collect any personal information from children. If you have concerns, please contact us.',
        ],
      },
      {
        title: '5. Changes to This Policy',
        content: [
          'We may update this Privacy Policy from time to time. Any changes will be reflected in this document with a new "Last updated" date.',
        ],
      },
    ],
    contactEmail: 'bovv.company@gmail.com',
  },
];
