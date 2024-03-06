import React, { useState, useEffect } from 'react';
import './App.css';
import { Combo } from './components/Combo';
import { List } from './components/List';
import { Terminal } from './components/Terminal';
import combos from './data/helldivers2combos.json';

function App() {

  return (
    <div className="App">
      <p>COMBO HERO!!!</p>
      
      <Terminal combos={combos} />
    
    </div>
  );
}

export default App;
