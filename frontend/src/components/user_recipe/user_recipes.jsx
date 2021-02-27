import React from 'react';
import UserRecipeList from './user_recipe_list';

class UserRecipes extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    this.props.fetchUserRecipes(this.props.currentUser.id)
  }


  render() {
    // let mappedRecipes = this.props.recipes.map(recipe => {
    //   return <UserRecipeList recipe={recipe} deleteRecipe={deleteRecipe}>
    // })

    return (
        <div>
            <h1>THIS IS THE USER RECIPES</h1>
            {/* <ul>{mappedRecipes}</ul> */}
        </div>
    );
  }
}

export default UserRecipes;