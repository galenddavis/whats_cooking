import {connect} from 'react-redux';
import {fetchUserRecipes, deleteRecipe} from '../../actions/recipe_action'
import { removeGroceryItem, fetchGroceryList } from '../../actions/grocery_action';
import Profile from './profile'


const mSTP = (state) => {
    return {
        recipes: state.userRecipes.user,
        currentUser: state.session.user,
        groceries: state.groceries 
    };
};

const mDTP = dispatch => {
    return {
        fetchUserRecipes: id => dispatch(fetchUserRecipes(id)),
        deleteRecipe: id => dispatch(deleteRecipe(id)),
        removeGroceryItem: item => dispatch(removeGroceryItem(item)),
        fetchGroceryList: (id) => dispatch(fetchGroceryList(id))
    };
};

export default connect(mSTP, mDTP)(Profile);