import { connect } from "react-redux";
import { findRecipes } from '../../actions/search_actions'
import RecipeIndex from './recipes_index'


const mSTP = function (store, ownProps) {
  debugger
  return {
    recipes: store.recipes.recipes.data
  };
};

const mDTP = dispatch => {
  return {
    findRecipes: (ingredients) => dispatch(findRecipes(ingredients))
  }
}

export default connect(mSTP, mDTP)(RecipeIndex);