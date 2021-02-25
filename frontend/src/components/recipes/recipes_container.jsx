import { connect } from 'react-redux';
import { findRecipes } from '../../actions/search_actions';
import Recipes from './recipe_form'
import { withRouter } from 'react-router-dom'


const mSTP = state => ({
    recipes: state.recipes,
    
})

const mDTP = dispatch => ({
    search: ingredients => dispatch(findRecipes(ingredients)),
    
})

export default withRouter(connect(mSTP, mDTP)(Recipes));