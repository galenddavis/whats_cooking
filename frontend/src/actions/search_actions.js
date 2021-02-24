
import * as APISearchUtils from '../util/search_util'

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'
export const RECIPE_INFO = 'RECIPE_INFO'


export const receiveRecipes = (recipes) => ({
    type: RECEIVE_RECIPES,
    recipes
})

export const recipeInfo = (info) => ({
    type: RECIPE_INFO, 
    info
})


export const findRecipes = ingredients => dispatch => (
    APISearchUtils.findRecipes(ingredients).then(
        recipes => dispatch(receiveRecipes(recipes))
    )
)

export const getInfo = id => dispatch => {
    debugger
    return APISearchUtils.getRecipeInfo(id).then(
        info => dispatch(recipeInfo(info))
    )
}

