import * as APISessionUtils from '../util/session_utils';
import jwt_decode from 'jwt-decode';


export const LOGOUT_USER = 'LOGOUT_USER'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_USER_SIGNIN = 'RECEIVE_USER_SIGNIN'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const REMOVE_ERRORS = 'REMOVE_ERRORS'

export const logoutUser = () => ({
    type: LOGOUT_USER
})

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})


export const receiveUserSignin = () => ({
    type: RECEIVE_USER_SIGNIN
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const removeErrors = () => ({
    type: REMOVE_ERRORS
})


export const login = user => dispatch => (
    APISessionUtils.login(user).then(res => {
        const { token } = res.data; 
        localStorage.setItem('jwtToken', token);
        APISessionUtils.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(errors => {
        dispatch(receiveErrors(errors.response.data));
    })
)
export const signup = user => dispatch => (
    APISessionUtils.signup(user).then(res => {
        const { token } = res.data; 
        localStorage.setItem('jwtToken', token);
        APISessionUtils.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    })
    .catch(errors => {
        dispatch(receiveErrors(errors.response.data));
    })
)

// export const signup = user => dispatch => {
//     return APISessionUtils.signup(user).then(
//         () => dispatch(receiveUserSignin()),
//         errors => dispatch(receiveErrors(errors.response.data))
//     )
// }

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APISessionUtils.setAuthToken(false)
    dispatch(logoutUser())
};

