import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import RouterComponent from './Router'; // Importa Router.jsx
import './i18n';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-16"> {/* Margin top to prevent content overlap with Navbar */}
        <RouterComponent /> {/* Usa el Router Component */}
      </div>
    </Router>
  );
};

export default App;
