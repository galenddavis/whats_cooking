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
  console.log('recipe action--------------------', recipeId)
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
  return RecipeAPIUtil.getUserRecipes(id)
    .then(recipes => dispatch(receiveUserRecipes(recipes)))
    .catch(err => console.log(err))        
}

export const deleteRecipe = id => dispatch => {
  return RecipeAPIUtil.destroyUserRecipe(id)
    .then(id => {
      return dispatch(removeUserRecipe(id))})
    .catch(err => console.log(err))
}

export const addRecipe = recipe => dispatch => {
  return RecipeAPIUtil.addRecipe(recipe)
      .then(recipe => dispatch(addRecipe(recipe)))
      .catch(err => console.log(err))
    
}