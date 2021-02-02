import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form'
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  errors: Object.values(state.errors.session),
  formType: "Log In",
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(SessionForm)