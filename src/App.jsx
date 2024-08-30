import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouterComponent from './Router'; // Importa Router.jsx
import './i18n';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen"> {/* Flexbox to handle the layout */}
        <div className="flex-grow"> {/* Main content area */}
          <RouterComponent /> {/* Usa el Router Component */}
        </div>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
};

export default App;
