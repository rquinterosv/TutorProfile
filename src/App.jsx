import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-lg font-bold">Logo</a>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:bg-blue-700 p-2 rounded">Home</a></li>
            <li><a href="#" className="text-white hover:bg-blue-700 p-2 rounded">About</a></li>
            <li><a href="#" className="text-white hover:bg-blue-700 p-2 rounded">Services</a></li>
            <li><a href="#" className="text-white hover:bg-blue-700 p-2 rounded">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="p-5">
        <h1 className="text-3xl font-bold text-blue-500">
          Tailwind CSS está funcionando!
        </h1>
      </div>
    </div>
  );
}

export default App;
