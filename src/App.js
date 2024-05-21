import React from 'react';
// import { useState, useEffect } from 'react';
import './App.css';
import { Terminal } from './components/Terminal';
import combos from './data/combos.json';

function App() {

  return (
    <div className="App">
      
      <Terminal combos={combos} />
    
    </div>
  );
}

export default App;
