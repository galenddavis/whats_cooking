import React from 'react';
import RecipeIndexItem from './recipe_index_item'


class RecipeIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {food: this.props.recipes}
              
    }

    render() {

      debugger
      
      // const recipe = this.props.recipes.map((dish) => {
      //   return dish.title
      // });
      const mappedItems = this.props.recipes.recipes.data.length ? this.props.recipes : null;
      
      debugger
        return (
          <div>
            <h1>Hi</h1>
            {/* <ul>{mappedItems}</ul> */}
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