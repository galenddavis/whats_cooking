import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';

function recipesModal({ modal, closeModal, openModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case `recipe`:
            component = <recipeShowComponent />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
               {component}
            </div>
        </div>
    );
}



const mSTP = state => {
    return {
        modal: state.ui.recipes, 
        recipes: store.recipes.recipes.data,
        info: store.recipes.info.data
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mSTP, mDTP)(recipesModal);