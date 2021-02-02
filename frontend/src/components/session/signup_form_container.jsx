import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
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
});

export default connect(mSTP, mDTP)(SessionForm)