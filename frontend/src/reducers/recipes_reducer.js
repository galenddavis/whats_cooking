import { RECEIVE_RECIPES } from '../actions/search_actions';

const nullState = {recipes: {}}

const RecipesReducer = (state = nullState, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_RECIPES:
            
            // return [recipes].push(action.recipes);
            return Object.assign({}, state, {recipes: action.recipes}) ;
            // return action.recipes;

        default:
            return state;
    }
}

export default RecipesReducer;