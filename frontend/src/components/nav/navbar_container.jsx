import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUserRecipes } from '../../actions/recipe_action'
import { withRouter } from 'react-router-dom';

import NavBar from './navbar';

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    login: (user) => dispatch(login(user)),
    // fetchUserRecipes: () => dispatch(fetchUserRecipes)
})

export default withRouter(connect(mSTP, mDTP)(NavBar));