import React from 'react';
// import { useState, useEffect } from 'react';
import './App.css';
// import { Combo } from './components/Combo';
// import { List } from './components/List';
import { Terminal } from './components/Terminal';
import combos from './data/combos.json';

function App() {

  return (
    <div className="App">
      <p>DANCE DANCE LIBERATION!!!</p>
      
      <Terminal combos={combos} />
    
    </div>
  );
}

export default App;
