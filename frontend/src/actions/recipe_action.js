import {getUserRecipes, destroyUserRecipe} from '../util/recipes_util';
import * as RecipeAPIUtil from '../util/recipes_util';

export const RECEIVE_USER_RECIPES = 'RECEIVE_USER_RECIPES'
export const REMOVE_USER_RECIPE = 'REMOVE_USER_RECIPE'
export const RECEIVE_USER_RECIPE = 'RECEIVE_USER_RECIPE'

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

export const receiveUserRecipe = recipe => {
    return {
        type: RECEIVE_USER_RECIPE,
        recipe
    }
}



export const fetchUserRecipes = id => dispatch => (
    RecipeAPIUtil.getUserRecipes(id)
        .then(recipes => dispatch(receiveUserRecipes(recipes)))
        .catch(err => console.log(err))
)

export const deleteRecipe = id => dispatch => (
    RecipeAPIUtil.destroyUserRecipe(id)
        .then(recipeId => dispatch(removeUserRecipe(recipeId)))
        .catch(err => console.log(err))
)

export const addRecipe = recipe => dispatch => {
    debugger
    return RecipeAPIUtil.addRecipe(recipe)
        // .then(recipe => dispatch(addRecipe(recipe)))
        .catch(err => console.log(err))
    
}