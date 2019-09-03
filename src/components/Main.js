import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import PokeContainer from './PokeContainer';
import PokeInfo from './PokeInfo';

function Main(){
    return(
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/pokemons" component={PokeContainer} />
            <Route path="/pokeinfo/:name/:id" component={PokeInfo} />
        </Switch>
    );
}

export default Main;