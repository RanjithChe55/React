Empl.js:

import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";


function Empl(employe) {
  return (
    <div>
      <p>
        <label>empl Name: {employe.name}</label>
      </p>
      <p>
        <label>empl Salary:{employe.job}</label>
      </p>
    </div>
  );
}


export default Empl

App.js:

import logo from './logo.svg';
import './App.css';
import Empl from './Components/Empl'

function App() {
  return (
    <div className="App">
      <Empl name = 'Charlie' job = 'Janitor' />
      <Empl name = 'Mac' job = 'Bouncer' />
      <Empl name = 'Dee' job = 'Aspiring Actress' />
      <Empl name = 'Dennis' job = 'Bartender' />
      
    </div>
  );
}

export default App;
