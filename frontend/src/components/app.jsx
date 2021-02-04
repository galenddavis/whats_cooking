import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import {Route} from 'react-router-dom'
import NavBar from './nav/navbar_container';
import MainPage from './main/main_page';
import RecipesContainer from '../components/recipes/recipes_container'
import Modal from './modal/modal';
import recipe_index_container from '../components/recipes/recipes_index_container'


const App = () => (
  <div>
    <Modal />
    <NavBar />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <Route path="/search" component={RecipesContainer} />
      <Route path="/index" component={recipe_index_container} />
    </Switch>
  </div>
);

export default App;