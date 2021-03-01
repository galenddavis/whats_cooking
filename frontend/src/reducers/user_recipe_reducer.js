import { RECEIVE_USER_RECIPES, REMOVE_USER_RECIPE } from '../actions/recipe_action';

const UserRecipeReducer = (state = { user: [], userRecipes: []}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_USER_RECIPES:
            debugger
            nextState.user = action.recipes.data;
        case REMOVE_USER_RECIPE:
            debugger
            console.log('actionnnnnnnnnnnnnnnnnnnnn', action)
            console.log('stateeeeeeeeeeeeeeeeeeeeee', state)
            // return {data}
            // delete nextState[action.recipeId.data._id]
            return nextState
            // return {user: nextState.userRecipes.user.filter(recipe => recipe._id !== action.data._id)}
        default:
            return state;
    }
}

export default UserRecipeReducer;