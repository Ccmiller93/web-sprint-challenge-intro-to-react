import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import {API_KEY, BASE_URL} from './Constants'
import Details from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Details></Details>
    </div>
  );
}

export default App;
