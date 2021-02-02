import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form'
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  errors: Object.values(state.errors.session),
  formType: "Log In",
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SessionForm)