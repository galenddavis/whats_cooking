import React from 'react';
import UserRecipeList from '../user_recipe/user_recipe_list';
import GroceryList from '../groceries/groceries_container'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.getUserRecipes = this.getUserRecipes.bind(this);
    }
    
    componentWillMount() {
        this.props.fetchUserRecipes(this.props.currentUser.id);
    }

    componenentWillReceiveProps(nextState) {
      this.setState({recipes: nextState.recipes});
    }

    getUserRecipes() {
        let {recipes} = this.props;

        if (recipes.length === 0) {
            return (
              <div>No Recipes Saved :(</div>
            )
        } else {
            const userRecipes = recipes.map(recipe => {
              return <UserRecipeList recipe = {recipe} deleteRecipe = {this.props.deleteRecipe}/>
            })
          return userRecipes
        }
    }
    render() {
      return (
        <div className='user-profile'>
          <section>
            <GroceryList />
          </section>
          <section className='recipe-array'>
            <h1>Saved Recipes</h1>
            <ul className='saved-recipes'>
                {this.getUserRecipes()}
            </ul>
          </section>
        </div>
      );
    }
}

export default Profile;