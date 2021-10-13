import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";

// import AboutPage from "../AboutPage";

import ErroPage from "../404";


// Normal Route
import PrivateRoute from "../_PrivateRoute";
import PublicRoute from "../_PublicRoute";

export default function Routes() {
    return (
        <Switch>
            <PublicRoute
                exact
                path="/"
                component={HomePage}
            />
            <PrivateRoute
                path="/home"
                component={HomePage}
            />
            
            {/* <PrivateRoute
                path="/about"
                component={AboutPage}
            /> */}
        
            <PrivateRoute
                path="/404"
                component={ErroPage}
            />
         
            <Route exact component={HomePage} />
        </Switch>
    );
}
