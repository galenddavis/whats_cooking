import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form'
import { closeModal } from "../../actions/modal_actions";

const mSTP = state => ({
    errors: Object.values(state.errors.session),
    formType: 'Sign Up'
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  login: (user) => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SessionForm)