import { RECEIVE_USER_RECIPES, REMOVE_USER_RECIPE } from '../actions/recipe_action';

const UserRecipeReducer = (state = { user: {}}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_USER_RECIPES:
            nextState.user = action.recipes.data;
        case REMOVE_USER_RECIPE:
            delete nextState[action.recipeId]
            return nextState
        default:
            return state;
    }
}

export default UserRecipeReducer;