import {connect} from 'react-redux';
import {fetchUserRecipes} from '../../actions/recipe_action'
import Profile from './profile'


const mSTP = (state) => {
    return {
        recipes: Object.values(state.recipes.user),
        currentUser: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        fetchUserRecipes: id => dispatch(fetchUserRecipes(id))
    };
};

export default connect(mSTP, mDTP)(Profile);