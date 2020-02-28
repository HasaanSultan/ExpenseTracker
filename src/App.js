import React from 'react';
import logo from './logo.svg';
import {header} from './components/Header'
import {AddTransaction} from  './components/AddTransaction'
import './App.css';

function App() {
  return (
    <div className="App">
      <header />
      <AddTransaction/>
    </div>
  );
}

export default App;
