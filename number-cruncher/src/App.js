import React, { Component } from 'react';
import './App.css';

const combinationSum = function (candidates, target) {
  let res = [];
  let temp = [];
  let iterate = (index,sum) => {
      if (sum>target) return;
      if (sum === target) {
          res.push([...temp]);
          return;
      }
      for (let i =index; i<candidates.length;i++) {
          if (candidates[i]>target) continue;
          temp.push(candidates[i]);
          iterate(i, sum+candidates[i]);
          temp.pop();
      }
  }
  iterate(0,0);
  console.log(res);
  return res;
}

function printArray(a) {
  let s = "";
  for (let item of a) {
      if (Array.isArray(item)) s += "[" + printArray(item) + "]";
      else s += item + ", ";
  }
  return s;
};

function callFunction() {
  var arrVal = document.getElementById("array").value;
  var x = document.getElementById("target").value;
  
  var arr = [];
  var arrStr = arrVal.split(",");
  for (var i = 0; i < arrStr.length; i++) {
      arr.push(parseInt(arrStr[i]));
  }

  var result = combinationSum(arr, parseInt(x));
  var str = printArray(result);

  document.getElementById("result").innerHTML = str;
};

class Form extends Component {
  render() {
    return (
      <div className="App">
        <h1>Number Cruncher</h1>
        <form>
          <label htmlFor="array">Number Array: </label>
          <input type="text" id="array" name="array" /><br /><br />
          <label htmlFor="target">Target: </label>
          <input type="text" id="target" name="target" /><br /><br />
          <input type="button" onClick={callFunction} value="Submit" />
        </form>
        <p id="result"></p>
      </div>
    );
  }
}

function App() {
  return (
    <Form />
  );
}
export default App;
