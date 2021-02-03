import { RECEIVE_RECIPES } from '../actions/search_actions';

const nullState = {recipes: []}

const RecipesReducer = (state = nullState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RECIPES:
            // debugger
            return action.recipe;
        default:
            return state;
    }
}

export default RecipesReducer;