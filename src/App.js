import React, { useState, useEffect } from 'react';
import './App.css';
import Combo from './components/Combo';
import List from './components/List';
import combos from './data/helldivers2combos.json';

function App() {

  return (
    <div className="App">
      <p>COMBO HERO!!!</p>
      <List combos={ combos }/>
    </div>
  );
}

export default App;
