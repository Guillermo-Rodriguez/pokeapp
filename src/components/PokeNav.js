import React from 'react';
import { Navbar } from 'react-bootstrap';
import pokemon from '../img/pokemon.png';
import { Link } from 'react-router-dom';

const PokeNav = () => {
    return (
        <Navbar bg="danger" variant="dark" fixed="top">
            <Navbar.Brand >
                <Link to="/pokemons">
                    <img
                        alt=""
                        src={pokemon}
                        width="90"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Link>
            </Navbar.Brand>
        </Navbar>
    );
}

export default PokeNav;