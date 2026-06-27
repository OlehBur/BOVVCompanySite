import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import { LocaleProvider } from './i18n/LocaleContext';

const App: React.FC = () => {
  return (
    <LocaleProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy/:gameId" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LocaleProvider>
  );
};

export default App;
