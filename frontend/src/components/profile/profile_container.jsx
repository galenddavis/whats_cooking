import {connect} from 'react-redux';
import {fetchUserRecipes} from '../../actions/recipe_action'
import { removeGroceryItem, fetchGroceryList } from '../../actions/grocery_action';
import Profile from './profile'


const mSTP = (state) => {
    return {
        recipes: state.recipes.user,
        currentUser: state.session.user,
        groceries: state.groceries 
    };
};

const mDTP = dispatch => {
    return {
        fetchUserRecipes: id => dispatch(fetchUserRecipes(id)),
        removeGroceryItem: item => dispatch(removeGroceryItem(item)),
        fetchGroceryList: (id) => dispatch(fetchGroceryList(id))
    };
};

export default connect(mSTP, mDTP)(Profile);