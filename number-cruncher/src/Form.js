import combinationSum from "./functions.js";
import React, { Component } from 'react';

function printArray(a) {
    let s = "";
    for (let item of a) {
        s += "["
        for (let i = 0; i < item.length - 1; i++) {
            s += item[i] + ", ";
        }
        s += item[item.length - 1] + "]"
    }
    return s;
};
  
function callFunction() {
    var arrVal = document.getElementById("array").value;
    var x = document.getElementById("target").value;
    
    var arr = [];
    var arrStr = arrVal.split(",");
    for (var i = 0; i < arrStr.length; i++) {
        arr.push(parseFloat(arrStr[i]));
    }
  
    var result = combinationSum(arr, parseFloat(x));
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

export default Form;