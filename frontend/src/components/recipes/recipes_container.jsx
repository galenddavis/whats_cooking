import { connect } from 'react-redux';
import { findRecipes } from '../../actions/search_actions';
import Recipes from './recipes'

const mSTP = state => ({
    recipes: state.recipes
})

const mDTP = dispatch => ({
    search: dispatch(findRecipes(ingredients))
})

export default connect(mSTP, mDTP)(Recipes);