import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import HomePage2 from "../HomePage2";
import HomePage3 from "../HomePage3";
import HomePage4 from "../HomePage4";
import HomePage5 from "../HomePage5";
import HomePage6 from "../HomePage6";
import HomePage7 from "../HomePage7";
import HomePage8 from "../HomePage8";
import HomePage9 from "../HomePage9";
import HomePage10 from "../HomePage10";
import AboutPage from "../AboutPage";
import PorfolioGrid from "../PorfolioGrid";
import PorfolioGrid2 from "../PorfolioGrid2";
import PorfolioGrid3 from "../PorfolioGrid3";
import PorfolioGrid4 from "../PorfolioGrid4";
import PorfolioGridCro from "../PorfolioGridCro";
import ServiceDetails from "../ServiceDetails";
import ProjectDetails from "../ProjectDetails";
import ErroPage from "../404";
import ContactPage from "../ContactPage";
import BlogPage from "../BlogPage";
import BlogDetailsFull from "../BlogFull";
import BlogDetailsPage from "../BlogDetailsPage";
import BlogDetailsFullwidth from "../BlogDetailsFullwidth";

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
            
            <PrivateRoute
                path="/about"
                component={AboutPage}
            />
        
            <PrivateRoute
                path="/404"
                component={ErroPage}
            />
         
            <Route exact component={HomePage} />
        </Switch>
    );
}
