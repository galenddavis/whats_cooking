import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openRecipeModal } from '../../actions/modal_actions';

function recipesModal({ modal, closeModal, openRecipeModal }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case `recipe`:
            component = <RecipeShowComponent 
                dish={this.props.info} 
                recipe={this.props.recipes}/>;
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
        openModal: modal => dispatch(openRecipeModal(modal))
    };
};

export default connect(mSTP, mDTP)(recipesModal);