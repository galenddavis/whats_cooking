import React from 'react';
import UserRecipes from '../user_recipe/user_recipes';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }
    
    componentWillMount() {
        debugger
        // console.log(this.props.currentUser.id)
        this.props.fetchUserRecipes(this.props.currentUser.id);
        // this.props.fetchGroceryList(this.props.currentUser.id)
    }

    componenentWillReceiveProps(nextState) {
        this.setState({recipes: nextState.recipes});
    }
    
    render() {
        let {groceries} = this.props;
        debugger
        // if (this.state.recipes.length === 0) {
        //     return (
        //         <div>Are you not eating dinner?</div>
        //     )
        // } else {
            return (
                <div>
                    <h2>Saved Recipes</h2>
                    <ul>
                        {groceries}
                    </ul>
                    {this.state.recipes.map(recipe => (
                        <UserRecipes key={recipe._id} recipeId ={recipe.recipeId} /> 
                    ))}
                </div>
            );
        // }
    }
}

export default Profile;