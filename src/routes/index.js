import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Template from '../containers/Template';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
const createRoute = () => {
    return (
        <Route 
        path="/"
        component={Template}>
        <IndexRoute
            component={Home}
        />
        <Route
            path={'/profile'}
            component={Profile}
        />
        </Route>
    );
}

const Routes = createRoute();
 export default Routes;