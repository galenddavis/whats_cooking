import { connect } from "react-redux";
import { findRecipes, getInfo } from '../../actions/search_actions'
import RecipeIndex from './recipes_index'


const mSTP = function (store, ownProps) {
  return {
    recipes: store.recipes.recipes.data
  };
};

const mDTP = dispatch => {
  return {
    findRecipes: (ingredients) => dispatch(findRecipes(ingredients)), 
    recipeInfo: (id) => dispatch(getInfo(id))
  }
}

export default connect(mSTP, mDTP)(RecipeIndex);