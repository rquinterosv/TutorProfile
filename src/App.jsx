import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouterComponent from './Router';
import { Helmet } from 'react-helmet';
import './i18n';

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Rafa Quinteros | Digital Transformation Expert</title>
        <meta name="description" content="Discover the best digital transformation services and programming courses offered by Rafael Quinteros." />

        
        <meta property="og:title" content="Rafa Quinteros | Expert in Digital Transformation" />
        <meta property="og:description" content="Programming courses and professional digital transformation services." />
        <meta property="og:url" content="https://rafaquinterosv.com" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/rafa-tutoring.appspot.com/o/r.png?alt=media&token=4ab2273b-3b86-454d-af10-4b02196b994d" />
        <meta property="og:image:alt" content="Image description for accessibility" />
        
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/rafa-tutoring.appspot.com/o/r.png?alt=media&token=4ab2273b-3b86-454d-af10-4b02196b994d" />
      </Helmet>

      <Navbar />
      <div className="flex flex-col min-h-screen"> 
        <div className="flex-grow"> 
          <RouterComponent /> 
        </div>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
