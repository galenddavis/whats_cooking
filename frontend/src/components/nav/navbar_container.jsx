import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

import NavBar from './navbar';

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    login: (user) => dispatch(login(user))
})

export default withRouter(connect(mSTP, mDTP)(NavBar));