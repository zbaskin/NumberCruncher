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
    setComboRange(combinations.slice(0, range));
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
      <Form onClick={getCombos} />
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