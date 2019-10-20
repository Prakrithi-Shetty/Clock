import React from 'react';
import './App.css';
import Clock from './Clock/Clock';
import InputDisplay from './InputDisplay/InputDisplay';
import TelephoneIcon from './TelephoneIcon/TelephoneIcon';

function App() {
  const namea = 'Ashwin';
  return (
    <div className="App">
      <Clock name={namea}/>
      <InputDisplay />
      <TelephoneIcon fill={'blue'}/>
    </div>
  );
}

export default App;
