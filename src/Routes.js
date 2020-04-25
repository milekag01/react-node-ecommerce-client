import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Signup from './components/user/Signup';
import Signin from './components/user/Signin';
import Home from './components/core/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;