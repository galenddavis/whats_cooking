import { connect } from "react-redux";
import RecipeIndex from './recipes_index'


const mSTP = function (store, ownProps) {
  
  return {
    recipes: store.recipes.data
  };
};

// const mDTP = dispatch => {
//   return {

//   }
// }

export default connect(mSTP, null)(RecipeIndex);