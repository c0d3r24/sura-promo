import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Template from '../containers/Template';
import Home from '../containers/Home';
import Cards from '../containers/Cards';
import Canvas from '../containers/Canvas';
import Prints from '../containers/Prints';
const createRoute = () => {
    return (
        <Route 
        path="/"
        component={Template}>
        <IndexRoute
            component={Home}
        />
        <Route
            path={'/cards'}
            component={Cards}
        />
         <Route
            path={'/canvas'}
            component={Canvas}
        />
        <Route
            path={'/prints'}
            component={Prints}
        />
        </Route>
    );
}

const Routes = createRoute();
 export default Routes;