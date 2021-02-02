import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import NavBar from './nav/navbar_container';
import MainPage from './main/main_page';

import Modal from './modal/modal';


const App = () => (
    <div>
        <Modal />
        <NavBar />
        <Switch>
            <AuthRoute exact path='/' component={MainPage} />
        </Switch>
    </div>
    
);

export default App;