import { RECEIVE_RECIPES, RECIPE_INFO } from '../actions/search_actions';

const nullState = {recipes: {}, info: {}}

const RecipesReducer = (state = nullState, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_RECIPES:
            // return [recipes].push(action.recipes);
            return Object.assign({}, state, {recipes: action.recipes});
        case RECIPE_INFO:
            console.log(action.info)
            return Object.assign({}, state, {info: action.info});
            // let src = action.info  
            // return src
        default:
            return state;
    }
}

export default RecipesReducer;