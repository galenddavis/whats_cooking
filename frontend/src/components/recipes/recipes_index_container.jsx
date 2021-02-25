import { connect } from "react-redux";
import { findRecipes, getInfo } from '../../actions/search_actions'
import RecipeIndex from './recipes_index'
import { openRecipeModal, closeModal, openModal } from '../../actions/modal_actions';


const mSTP = function (store, ownProps) {
  return {
    recipes: store.recipes.recipes.data, 
    info: store.recipes.info.data
    
  };
};

const mDTP = dispatch => {
  return {
    findRecipes: (ingredients) => dispatch(findRecipes(ingredients)), 
    recipeInfo: (id) => dispatch(getInfo(id)),
    openRecipeModal: () => dispatch(openRecipeModal(`recipe`)),
    closeModal: () => dispatch(closeModal()),
    
  }
}

export default connect(mSTP, mDTP)(RecipeIndex);