
import * as RecipApiUtil from '../util/recipes_util';

export const RECEIVE_USER_RECIPES = 'RECEIVE_USER_RECIPES'
export const REMOVE_USER_RECIPE = 'REMOVE_USER_RECIPE'

export const receiveUserRecipes = recipes => {
    return {
        type: RECEIVE_USER_RECIPES,
        recipes
    }
}

export const removeUserRecipe = recipeId => {
    return {
        type: REMOVE_USER_RECIPE,
        recipeId
    }
}

export const fetchUserRecipes = id => dispatch => (
    RecipApiUtil.getUserRecipes(id)
        .then(recipes => dispatch(receiveUserRecipes(recipes)))
        .catch(err => console.log(err))
)

export const deleteRecipe = id => dispatch => (
    RecipApiUtil.destroyUserRecipe(id)
        .then(recipeId => dispatch(removeUserRecipe(recipeId)))
        .catch(err => console.log(err))
)