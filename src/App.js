import React from 'react';
import './App.css';
import Clock from './Clock/Clock';
import InputDisplay from './InputDisplay/InputDisplay';

function App() {
  const namea = 'Ashwin';
  return (
    <div className="App">
      <Clock name={namea}/>
      <InputDisplay />
    </div>
  );
}

export default App;
