import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form'
import { closeModal, openModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  errors: Object.values(state.errors.session),
  user: state.session.isAuthenticated,
  formType: "Log In",
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  openModal: () => dispatch(openModal('login')),
  removeErrors: () => dispatch(removeErrors()),
  login: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm)