import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Signup from './components/user/Signup';
import Signin from './components/user/Signin';
import Home from './components/core/Home';
import PrivateRoute from './api/auth/PrivateRoute';
import AdminRoute from './api/auth/AdminRoute';
import Dashboard from './components/user/UserDashboard.js';
import AdminDashboard from './components/user/AdminDashboard.js';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;