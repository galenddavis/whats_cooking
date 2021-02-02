import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Sign In'
})

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)