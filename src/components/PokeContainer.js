import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PokeList from './PokeList';
import pokemon from '../img/pokemon.png';


class PokeContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            object:[],
            URL: 'https://pokeapi.co/api/v2/pokemon',
            
        };
        this.nextPage = this.nextPage.bind(this);
        this.previusPage = this.previusPage.bind(this);
    }

    componentDidMount(){
        this.getPokemons();
    }
    
    nextPage(){
        this.setState({
            URL: this.state.object.next,
        });
        this.getPokemons();
    }

    previusPage(){
        this.setState({
            URL: this.state.object.previous, 
        });
        this.getPokemons();
    }

    async getPokemons() {
        await axios.get(this.state.URL)
            .then(response => {
                //console.log(response.data.results);
                console.log(response.data);
                this.setState({
                    pokemons: response.data.results,
                    object: response.data,
                })
            })
            .catch(error => { console.log(error) });
    }

    
    render() {
        let { pokemons = [] } = this.state;
 
        return (
            <div>
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
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.previusPage}>Anterior</Nav.Link>
                        <Nav.Link onClick={this.nextPage}>Siguiente</Nav.Link>
                    </Nav>
                </Navbar>
                <Container className="my-5 mb-5 mb-2">
                    <br/>
                    <Row>
                        {
                            pokemons.map((pokemon, index) => {
                                let urlImage = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/';
                                let i = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
                                return (
                                    <Col xs={3} key={index} >
                                        <PokeList name={pokemon.name} image={`${urlImage}${i}.png?raw=true`} url={i} />
                                    </Col>
                                );
                            })
                        }
                    </Row>

                </Container>
            </div>
        );
    }
}

export default PokeContainer;