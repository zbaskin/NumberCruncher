import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Results from './Results.js';
import callFunction from './functions.js'
import { useState } from 'react';

function App() {
  const [combos, setCombos] = useState(0);

  const getCombos = () => {
    var combinations = callFunction();
    setCombos(combinations);
  }

  return (
    <div className="App">
      <Form onClick={getCombos} />
      <Results combinations={combos} />
    </div>
  );
}
export default App;

// Test Values: 1,3,1,0,5,0,1,1,6,2,2,4,1,4