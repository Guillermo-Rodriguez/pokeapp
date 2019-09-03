import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Tooltip, OverlayTrigger } from 'react-bootstrap';
import '../css/style.css';

const PokeList = ({ name, image, url }) => {
    return (
        <div className="my-3">
            <Card style={{ width: '16rem' }} className="card-zoom">
                <Card.Body>
                    <Card.Text>
                        <Card.Img variant="top" src={image} alt="Poke" />
                    </Card.Text>
                    <div className="text-center">
                        <Link to={`/pokeinfo/${name}/${url}`} className="pokelink">
                            <OverlayTrigger
                                key={name}
                                placement={"bottom"}
                                overlay={
                                    <Tooltip id={`tooltip-${name}`}>
                                        More info of <strong>{name}</strong>.
                                    </Tooltip>
                                }
                                >
                                <div>{name}</div>
                            </OverlayTrigger>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
            );
        }
        export default PokeList;
