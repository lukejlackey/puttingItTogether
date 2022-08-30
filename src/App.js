import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard.js'

function App() {
  return (
    <div>
      <PersonCard firstName="Luke" lastName="Lackey" age={24} hairColor="Brown"/>
      <PersonCard firstName="Ukel" lastName="Lackey" age={24} hairColor="Brown"/>
      <PersonCard firstName="Kelu" lastName="Lackey" age={24} hairColor="Brown"/>
      <PersonCard firstName="Eluk" lastName="Lackey" age={24} hairColor="Brown"/>
    </div>
  );
}

export default App;
