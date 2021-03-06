import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

import NavBar from './navbar';

const mSTP = (state, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    currentPath: ownProps.history.location.pathname
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    login: (user) => dispatch(login(user)),
    // fetchUserRecipes: () => dispatch(fetchUserRecipes)
})

export default withRouter(connect(mSTP, mDTP)(NavBar));