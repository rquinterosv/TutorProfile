import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouterComponent from './Router';
import ScrollToTop from './components/Scroll';
import { Helmet } from 'react-helmet';
import './i18n';

const PageSEO = () => {
  const location = useLocation();

  const seoData = {
    '/': {
      title: 'RafaQuinteros — Full Stack Developer & Tutor',
      description: 'Full Stack Developer with 5+ years of experience building web applications and teaching others.',
    },
    '/experience': {
      title: 'Experience — RafaQuinteros',
      description: 'My professional journey through companies like Huawei, Desafío Latam, and Czech Group.',
    },
    '/services': {
      title: 'Services — RafaQuinteros',
      description: 'Web development, Microsoft training, and software platform services.',
    },
    '/contact': {
      title: 'Contact — RafaQuinteros',
      description: 'Get in touch for web development projects, tutoring, or consulting services.',
    },
    '/about': {
      title: 'About — RafaQuinteros',
      description: 'Learn more about Rafael Quinteros, Full Stack Developer and Tech Tutor.',
    },
  };

  const currentSEO = seoData[location.pathname] || seoData['/'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Helmet>
      <title>{currentSEO.title}</title>
      <meta name="description" content={currentSEO.description} />
      <meta property="og:title" content={currentSEO.title} />
      <meta property="og:description" content={currentSEO.description} />
      <meta property="og:url" content={`https://rafaquinterosv.com${location.pathname}`} />
    </Helmet>
  );
};

const App = () => {
  return (
    <Router>
      <PageSEO />
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <ScrollToTop />
          <RouterComponent />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
