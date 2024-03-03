import React, { useState, useEffect } from 'react';
import './App.css';
import Combo from './components/Combo';
import combos from './data/helldivers2combos.json';

function App() {

  console.log(combos)

  return (
    <div className="App">
      <p>test</p>
      {combos.map(combo => (
        <Combo combo={combo} />
      ))}
    </div>
  );
}

export default App;
