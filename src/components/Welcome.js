import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../css/style.css';
import Pokeball from '../img/Pokeball.png';
const Welcome = ()=>{
    return(
        <div className="App-header">
            <Link to='/pokemons'>
                <img src={Pokeball} width="200px" alt="Pokeball"  className="zoom" />
            </Link>
        </div>
    )
}

export default Welcome;