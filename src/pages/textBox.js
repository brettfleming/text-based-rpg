import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function textBox() {
   const [gameTextArray, setGameTextArray] = useState([]) 
    
    return (
      <div>
          <div>
              <p>text will go here</p>
            </div>
            <div>
                <p>player input options will go here</p>
            </div>
      </div>
    );
  }
  
  export default App;
