import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Activity from '../components/Activity';
import PrivacySection from '../components/PrivacySection';
import Links from '../components/Links';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Activity />
      <PrivacySection />
      <Links />
    </>
  );
};

export default HomePage;
