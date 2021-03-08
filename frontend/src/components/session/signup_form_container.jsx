import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form'
import { closeModal, openModal } from "../../actions/modal_actions";

const mSTP = state => ({
    errors: Object.values(state.errors.session),
    user: state.session.isAuthenticated,
    formType: 'Sign Up'
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  openModal: () => dispatch(openModal('signup')),
  login: (user) => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors()),
  login: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm)