import { 
    LOGOUT_USER,
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_SIGNIN  } from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGOUT_USER:
            return {
                isAuthenticated: false,
                user: undefined
            };
        case RECEIVE_USER_SIGNIN:
            return {
                ...state, 
                isSignedIn: true
            }
        case RECEIVE_CURRENT_USER:
            return {
                ...state, 
                isAuthenticated: !!action.currentUser, 
                user: action.currentUser
            }
        default: 
            return state
    }
}

export default sessionReducer;