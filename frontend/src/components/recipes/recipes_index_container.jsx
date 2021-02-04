import { connect } from "react-redux";
import { findRecipes } from '../../actions/search_actions'
import RecipeIndex from './recipes_index'


const mSTP = (state) => {
  debugger
  // console.log(Object.values(state.recipes.data))
  return {
    recipes: state.recipes
  };
};

const mDTP = dispatch => {
  return {
    findRecipes: (ingredients) => dispatch(findRecipes(ingredients))
  }
}

export default connect(mSTP, mDTP)(RecipeIndex);