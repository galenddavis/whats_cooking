import React from 'react';
import UserRecipes from './user_recipes';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserRecipes(this.props.currentUser.id);
    }

    componenentWillReceiveProps(nextState) {
        this.setState({recipes: nextState.recipes});
    }
    
    render() {
        if (this.state.recipes.length === 0) {
            return (
                <div>Are you not eating dinner?</div>
            )
        } else {
            return (
                <div>
                    <h2>Saved Recipes</h2>
                    {this.state.recipes.map(recipe => (
                        <UserRecipes key={recipe._id} recipeId ={recipe.recipeId} /> 
                    ))}
                </div>
            );
        }
    }
}

export default Profile;