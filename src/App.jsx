import React from 'react';
import Navbar from './components/Navbar'; 
import Routes from './Router';  

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes />  
    </div>
  );
};

export default App;
