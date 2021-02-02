import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

function Modal({modal, closeModal, openModal}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                <section className='modal-header'>
                    <h1 onClick={() => openModal('signup')}>Sign Up</h1>
                    <h1 onClick={() => openModal('login')}>Log In</h1>
                </section>
                <span className='modal-body'>{component}</span>
            </div>
        </div>
    )
}

const mSTP = state => {
    return {
        modal: state.ui.modal
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mSTP, mDTP)(Modal);
