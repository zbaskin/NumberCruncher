import './App.css';
import React, { useState } from 'react';
import Form from './Form.js';
import Results from './Results.js';
import callFunction from './functions.js';

function App() {
  const [combos, setCombos] = useState([]);
  const [comboRange, setComboRange] = useState([]);
  const [range, setRange] = useState(10);
  const [hasMoreResults, setMoreResults] = useState(false);

  const getCombos = () => {
    var combinations = callFunction();
    setCombos(combinations);
    setRange(10);
    setComboRange(combinations.slice(0, 10));
    if (combinations.length > range) setMoreResults(true); 
    else setMoreResults(false);
  }

  const getMoreResults = () => {
    setRange(range + 10);
    setComboRange(combos.slice(0, range + 10));
    if (combos.length > range) setMoreResults(true); 
    else setMoreResults(false);
  }

  return (
    <div className="App">
      <Form onChange={getCombos} />
      <Results 
        combinations={comboRange} 
        onClick={getMoreResults} 
        moreResults={hasMoreResults} 
      />
    </div>
  );
}
export default App;

// Test Values: 1,3,1,0,5,0,1,1,6,2,2,4,1,4

// Test Values: 44.19, 87.09, 263.57, 3095.32, 6329.94, 144.42, 393.60, 2178.40, 
// 205.17, 315.14, 1016.50, 1427.41, 870.00, 163.31, 2397.93, 2742.81, 51399.55, 8766.58, 75.98, 53.35
// = 4416.48