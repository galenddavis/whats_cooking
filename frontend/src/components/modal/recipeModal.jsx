import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openRecipeModal } from '../../actions/modal_actions';
import RecipeShowComponent from '../recipes/recipe_show'

function recipesModal({ modal, closeModal, openRecipeModal, info, recipes }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case `recipe`:
            debugger
            component = <RecipeShowComponent 
                dish={info} 
                recipe={recipes}/>;
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
    debugger
    return {
        modal: state.ui.recipes, 
        recipes: state.recipes.recipes.data,
        info: state.recipes.info.data || null
    };
};

const mDTP = dispatch => {
    debugger
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openRecipeModal(modal))
    };
};

export default connect(mSTP, mDTP)(recipesModal);