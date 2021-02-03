import { connect } from 'react-redux';
import { findRecipes } from '../../actions/search_actions';
import Recipes from './recipe_form'

const mSTP = state => ({
    recipes: state.recipes
})

const mDTP = dispatch => ({
    search: ingredients => dispatch(findRecipes(ingredients))
})

export default connect(mSTP, mDTP)(Recipes);