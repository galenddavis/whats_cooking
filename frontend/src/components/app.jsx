import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import {Route} from 'react-router-dom'

import NavBar from './nav/navbar_container';
import MainPage from './main/main_page';
import RecipesContainer from '../components/recipes/recipes_container'
import Modal from './modal/modal';
import Sidebar from './sidebar/sidebar'


const App = () => (
    <div>
        <Modal />
        <NavBar />
        <div className='main-content'>
            <Sidebar />
            <Switch>
                <AuthRoute exact path='/' component={MainPage} />
                {/* <Route path='/search' component={RecipesContainer} /> */}
            </Switch>`
        </div>
    </div>
    
);

export default App;