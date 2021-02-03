
import * as APISearchUtils from '../util/search_util'

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'


export const receiveRecipes = (recipes) => ({
    type: RECEIVE_RECIPES,
    recipes
})

// export const findRecipes = ingredients => dispatch => (
//     APISearchUtils.findRecipes(ingredients).then(
//         recipes => dispatch(receiveRecipes(recipes))
//     )
// )

export const findRecipes = ingredients => dispatch => (
    APISearchUtils.findRecipes(ingredients).then(
        recipes => dispatch(receiveRecipes(recipes))
    )
)