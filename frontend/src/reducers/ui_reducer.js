import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import recipesModalReducer from './recipes_modal';

const uiReducer = combineReducers({
    modal: modalReducer,
    recipes: recipesModalReducer
});

export default uiReducer;
