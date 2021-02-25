import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal, openRecipeModal } from '../../actions/modal_actions';
import { addGroceryItem } from '../../actions/grocery_action';
import RecipeShowComponent from '../recipes/recipe_show';

function recipesModal({ addGroceryItem, modal, openModal, closeModal, openRecipeModal, info, recipes, user }) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case `recipe`:
            debugger
            component = <RecipeShowComponent 
                openModal = {openModal}
                dish={info} 
                user = {user}
                addGroceryItem ={addGroceryItem}
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
        info: state.recipes.info.data || null,
        user: state.session.isAuthenticated,
    };
};

const mDTP = dispatch => {
    debugger
    return {
        closeModal: () => dispatch(closeModal()),
        openRecipeModal: modal => dispatch(openRecipeModal(modal)),
        openModal: () => dispatch(openModal('signup')),
        addGroceryItem: item => dispatch(addGroceryItem(item))
    };
};

export default connect(mSTP, mDTP)(recipesModal);