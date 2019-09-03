import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Tooltip, OverlayTrigger } from 'react-bootstrap';
import '../css/style.css';

class PokeList extends React.Component {
    constructor() {
        super();
        this.state = {
            favs: '',
        };
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    // handleSubmit(name){
    //     //e.preventDefault();
    //     this.setState({favs: name,});
	// 	this.props.addPokeFav(this.state);
	// 	//console.log('add pokemon...');
	// }

    render() {
        return (
            <div className="my-3">
                <Card style={{ width: '16rem' }} className="card-zoom">
                    <Card.Body>
                        <Card.Text>
                            <Card.Img variant="top" src={this.props.image} alt="Poke" />
                        </Card.Text>
                        <div className="text-center">
                            <Link to={`/pokeinfo/${this.props.name}/${this.props.url}`} className="pokelink">
                                <OverlayTrigger
                                    key={this.props.name}
                                    placement={"bottom"}
                                    overlay={
                                        <Tooltip id={`tooltip-${this.props.name}`}>
                                            More info of <strong>{this.props.name}</strong>.
                                    </Tooltip>
                                    }
                                >
                                    <div>{this.props.name}</div>
                                </OverlayTrigger>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
    export default PokeList;
