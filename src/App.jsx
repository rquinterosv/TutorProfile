import React from 'react';
import Navbar from './components/Navbar'; 
import Routes from './Router';
import './i18n';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes />  
    </div>
  );
};

export default App;
