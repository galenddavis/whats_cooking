import {getUserRecipes, destroyUserRecipe} from '../util/recipes_util';
import * as RecipeAPIUtil from '../util/recipes_util';

export const RECEIVE_USER_RECIPES = 'RECEIVE_USER_RECIPES'
export const REMOVE_USER_RECIPE = 'REMOVE_USER_RECIPE'
export const RECEIVE_USER_RECIPE = 'RECEIVE_USER_RECIPE'

export const receiveUserRecipes = recipes => {
    debugger
    return {
        
        type: RECEIVE_USER_RECIPES,
        recipes
    }
    
}

export const removeUserRecipe = recipeId => {
    console.log('rrrrrrrrrrrecipeaction', recipeId)
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



export const fetchUserRecipes = id => dispatch => {
    debugger
    return RecipeAPIUtil.getUserRecipes(id)
        .then(recipes => dispatch(receiveUserRecipes(recipes)))
        .catch(err => console.log(err))
        
}

export const deleteRecipe = id => dispatch => {
    debugger
    return RecipeAPIUtil.destroyUserRecipe(id)
        .then(id => dispatch(removeUserRecipe(id)))
        .catch(err => console.log(err))
}

export const addRecipe = recipe => dispatch => {
    debugger
    return RecipeAPIUtil.addRecipe(recipe)
        .then(recipe => dispatch(addRecipe(recipe)))
        .catch(err => console.log(err))
    
}