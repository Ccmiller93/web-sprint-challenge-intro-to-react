import React, { useState } from 'react';
import Character from "./components/Character"
import './App.css';
import Axios from 'axios';
import {BASE_URL} from './Constants'

const App = () => {
  const [characters, setCharacters] = useState([])

  useState(() => {

    Axios.get(BASE_URL)
      .then((info) => {
        // console.log(info)
        setCharacters(info.data.results)
      })
      .catch((err) => {
        console.log("there is an error", err)
      })
  },[])

    return (
      <div className="App">
        <h1 className="Header">Rick and Morty Characters</h1>

        {
          characters.map((character, index) => (
            <Character key={`app-character-map-${index}`} character={character} />
          ))
        }

      </div>
    );
  }

export default App;