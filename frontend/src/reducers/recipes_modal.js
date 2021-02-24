import { OPEN_MODAL, CLOSE_MODAL, OPEN_RECIPE_MODAL } from '../actions/modal_actions';

const recipesModalReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case OPEN_RECIPE_MODAL:
            debugger
            return action.modal;
        case CLOSE_MODAL:
            return null
        default:
            return state;
    };
};

export default recipesModalReducer;