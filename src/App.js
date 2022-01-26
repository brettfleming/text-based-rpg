import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from React

function App() {
  const [characterStates, setCharacterStates] = useState({name: '', race: '', class: '', str: 0, const: 0, dex: 0, wis: 0, int: 0, chr: 0 })
  
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

export default App;
