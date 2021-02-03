import { RECEIVE_RECIPES } from '../actions/search_actions';


const RecipesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RECIPES:
            return action.data;
        default:
            return state;
    }
}

export default RecipesReducer;