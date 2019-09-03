import React from 'react';
import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import axios from 'axios';
import PokeNav from './PokeNav';

class PokeInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.match.params.name,
            id: this.props.match.params.id,
            pokeinfo: [],
            abilities: [],
        };
    }

    async componentDidMount() {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.id}/`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    pokeinfo: response.data,
                    abilities: response.data.abilities,
                });
                console.log(this.state);
            })
            .catch(error => { console.log(error) });
    }

    render() {
        let urlImage = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork';
        let { abilities = [], pokeinfo = [] } = this.state;
        let front_sprit = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        let back_sprit = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";
        return (
            <>
                <PokeNav />
                <Container className="my-5">
                    <Row>
                        <Col xs={8} className="mx-auto my-5">
                            <Card className="my-4">
                                <Row>
                                    <Col xs={6}>
                                        <Card.Body>
                                            <Card.Text className="text-center">
                                                <img src={`${urlImage}/${this.state.id}.png?raw=true`} width="300px" alt="Pokeball" className="img-fluid" />
                                            </Card.Text>
                                            <h1 className="text-center">{this.state.name}</h1>
                                        </Card.Body>
                                    </Col>
                                    <Col xs={6}>
                                        <Accordion defaultActiveKey="">
                                            <Card>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                    Habilities
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <ul>

                                                            {
                                                                abilities.map((abilitie, i) => (
                                                                    <li key={i}>{abilitie.ability.name}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                    Caracteristicas
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body>
                                                       <ul>
                                                           <li>Experiencia: {pokeinfo.base_experience}</li>
                                                           <li>Altura: {pokeinfo.height}</li>
                                                           <li>Anchura: {pokeinfo.weight}</li>
                                                       </ul>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                                    Apariencia
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Body>
                                                        <Row>
                                                            <Col xs={6}>
                                                                Front <br />
                                                                <img src={`${front_sprit}/${this.state.id}.png?raw=true`} width="200px" alt="Pokeball" className="img-fluid" />
                                                            </Col>
                                                            <Col xs={6}>
                                                                Back <br />
                                                                <img src={`${back_sprit}/${this.state.id}.png?raw=true`} width="200px" alt="Pokeball" className="img-fluid" />
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default PokeInfo;
