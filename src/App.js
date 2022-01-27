import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function App() {
  const [characterStates, setCharacterStates] = useState({name: '', race: '', class: '', str: 0, const: 0, dex: 0, wis: 0, int: 0, chr: 0 })
  
  return (
    <div>
      <Button>Start</Button>
    </div>
  );
}

export default App;
