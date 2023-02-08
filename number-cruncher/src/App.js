import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Form.js';
import Results from './Results.js';
import callFunction from './functions.js';

function App() {
  const [combos, setCombos] = useState([]);
  const [comboRange, setComboRange] = useState([]);
  const [range, setRange] = useState(10);
  const [hasMoreResults, setMoreResults] = useState(false);
  const [uniqueChecked, setUnique] = useState(true);

  const setVariables = (combos, cRange) => {
    setCombos(combos);
    setRange(cRange);
    setComboRange(combos.slice(0, cRange));
    if (combos.length > range + 10) setMoreResults(true);
    else setMoreResults(false);
  }

  const getCombos = () => {
    setTimeout(() => {
      var combinations = callFunction(uniqueChecked);
      setVariables(combinations, 10);
    }, 1000);
  }

  const getMoreResults = () => {
    setVariables(combos, range + 10);
  }

  const updateUnique = () => {
    setUnique(!uniqueChecked);
    var combinations = callFunction(!uniqueChecked);
    setVariables(combinations, 10);
  }

  return (
    <div className="App">
      <Form 
        onChange={getCombos}
        uniqueChecked={uniqueChecked}
        uniqueClick={updateUnique}
      />
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

// Test Values: 40, 70, 36.91, 249, -28.46, -0.09, 40, 22.39, 92.40, -110.07, 401.66, -132.25, 98.33, -52.79, 392, 1110
// = 560.34

// Test Values: 12.99, 73.86, 84.92, 27.04, 57.35, 25.34, 556.52, 80.01, 53.35, 15, 
// 12.85, 10.72, 51.41, 4.99, 93.93, 7.26, 13.84, 154.68, 61.02, 2.50, 187.45, 15.23, 11.26, 11.66, 29.86, 16.76, 84.98
// = 707.03

// TODO: fix freeze on large numbers, copy text to clipboard UI