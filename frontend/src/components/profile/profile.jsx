import React from 'react';
import UserRecipeList from '../user_recipe/user_recipe_list';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.getUserRecipes = this.getUserRecipes.bind(this);
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

    getUserRecipes() {
        let {recipes} = this.props;
        console.log(recipes)
        debugger
        if (recipes.length === 0) {
            return (
                <div>No Recipes Saved :(</div>
            )
        } else {
            debugger
            const userRecipes = recipes.map(recipe => {
                return <UserRecipeList recipe = {recipe} deleteRecipe = {this.props.deleteRecipe}/>
            })
            return userRecipes
        }
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
                    <h1>Saved Recipes</h1>
                    <ul>
                        {/* {groceries} */}
                    </ul>
                    <ul>
                        {this.getUserRecipes()}
                    </ul>
                    {/* {this.state.recipes.map(recipe => (
                        <UserRecipes key={recipe._id} recipeId ={recipe.recipeId} /> 
                    ))} */}
                </div>
            );
        // }
    }
}

export default Profile;