import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserRecipes from './user_recipes';
import { fetchUserRecipes, deleteRecipe} from '../../actions/recipe_action';

const mSTP = (state, ownProps) => ({
    currentUser: state.session.user,
    recipes: state.recipes
})

const mDTP = dispatch => ({
    fetchUserRecipes: id => dispatch(fetchUserRecipes(id)),
    deleteRecipe: id => dispatch(deleteRecipe(id))
})

export default withRouter(connect(mSTP, mDTP)(UserRecipes))