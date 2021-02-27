import React from 'react';
import { Switch } from 'react-router-dom';
import {Route} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import NavBar from './nav/navbar_container';
import MainPage from './main/main_page';
import Modal from './modal/modal';
import Sidebar from './sidebar/sidebar'
import RecipeIndex from './recipes/recipes_index_container'
import Footer from './footer/footer';
import RecipesModal from './modal/recipeModal'
import ProfileContainer from './profile/profile_container'
import GroceriesContainer from './groceries/groceries_container'
import UserRecipeContainer from './user_recipe/user_recipe_container';

const App = () => (
    <div>
        <Modal />
        <RecipesModal />
        <NavBar />
        <div className='main-content'>
            <Sidebar />
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path="/index" component={RecipeIndex} />
                <ProtectedRoute exact path="/recipes" component = {UserRecipeContainer}/>
                <ProtectedRoute exact path="/profile" component = {GroceriesContainer}/>
                {/* <Route path='/search' component={RecipesContainer} /> */}
            </Switch>
        </div>
        <Footer />
    </div>
    
);

export default App;