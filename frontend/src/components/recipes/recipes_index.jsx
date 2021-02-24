import React from "react";
import RecipeIndexItem from "./recipe_index_item";

class RecipeIndex extends React.Component {
  

  render() {
    // const recipe = this.props.recipes.map((dish) => {
    //   return <li>{dish.title}</li>
    // });

        const mappedItems = this.props.recipes !== undefined ? this.props.recipes.map((dish) => {
        return <RecipeIndexItem key={dish.id} dish={dish} recipeInfo={this.props.recipeInfo} />}) : null;
        return (
          <div className='index-container'>
              {/* <h1 className='blurb'>Let us know what you have in your fridge, and we'll tell you what to cook!</h1> */}
                <div className ='search-container'>
                    <ul className='search-results'>{mappedItems}</ul>
                </div>
          </div>
          // <div>
          //     <h1>HELLO</h1>
          //   <ul>
          //     {recipe}
          //   </ul>
          // </div>
        );
    }
}

export default RecipeIndex;
