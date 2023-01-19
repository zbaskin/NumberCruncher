import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Number Cruncher</h1>
      <form>
          <label for="array">Number Array: </label>
          <input type="text" id="array" name="array" /><br /><br />
          <label for="target">Target: </label>
          <input type="text" id="target" name="target" /><br /><br />
          <input type="button" onclick="callFunction()" value="Submit" />
      </form>
      <p id="result"></p>
    </div>
  );
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
