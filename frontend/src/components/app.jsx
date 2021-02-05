import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import {Route} from 'react-router-dom'
 
import NavBar from './nav/navbar_container';
import MainPage from './main/main_page';
import Modal from './modal/modal';
import Sidebar from './sidebar/sidebar'
import RecipeIndex from './recipes/recipes_index_container'


const App = () => (
    <div>
        <Modal />
        <NavBar />
        <div className='main-content'>
            <Sidebar />
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path="/index" component={RecipeIndex} />
                {/* <Route path='/search' component={RecipesContainer} /> */}
            </Switch>`
        </div>
    </div>
    
);

export default App;