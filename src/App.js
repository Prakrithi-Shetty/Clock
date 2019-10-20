import React from 'react';
import './App.css';
import Clock from './Clock/Clock';

function App() {
  const name = 'Ashwin';
  return (
    <div className="App">
      <Clock name={name}/>
    </div>
  );
}

export default App;
