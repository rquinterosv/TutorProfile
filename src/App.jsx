import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouterComponent from './Router';
import ScrollToTop from './components/Scroll';
import { Helmet } from 'react-helmet';
import './i18n';

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Rafael Quinteros — Portfolio</title>
        <meta name="description" content="Rafael Quinteros — Business Engineer & Full Stack Developer bridging technical teams and business strategy. Portfolio, experience, and services." />


        <meta property="og:title" content="Rafael Quinteros — Portfolio" />
        <meta property="og:description" content="Business Engineer & Full Stack Developer bridging tech and business strategy." />
        <meta property="og:url" content="https://rafaquinterosv.com" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/rafa-tutoring.appspot.com/o/r.png?alt=media&token=4ab2273b-3b86-454d-af10-4b02196b994d" />
        <meta property="og:image:alt" content="Image description for accessibility" />
        
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/rafa-tutoring.appspot.com/o/r.png?alt=media&token=4ab2273b-3b86-454d-af10-4b02196b994d" />
      </Helmet>

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
