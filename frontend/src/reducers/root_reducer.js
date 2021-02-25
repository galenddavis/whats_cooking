import { combineReducers } from 'redux';
import sessionReducer from './session_reducer'
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import RecipesReducer from './recipes_reducer'
import groceryReducer from './groceries_reducer'

const RootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    recipes: RecipesReducer,
    ui: uiReducer,
    groceries: groceryReducer
})

export default RootReducer;