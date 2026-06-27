import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Activity from '../components/Activity';
import PrivacySection from '../components/PrivacySection';
import Links from '../components/Links';

const HomePage: React.FC = () => {
  //After switching from another page (e.g. Privacy), we pick up the scroll target
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo');
    if (target) {
      sessionStorage.removeItem('scrollTo');

      setTimeout(() => {//mini delay
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  }, []);

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
