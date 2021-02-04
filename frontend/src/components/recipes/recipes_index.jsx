import React from 'react';
import RecipeIndexItem from './recipe_index_item'


class RecipeIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {food: this.props.recipes}
        #debugger

        
    }

    render() {
        #debugger
        // const recipe = this.props.recipes.map((dish) => {
        //     return {dish}
        // });
        return (
          <div>
              <h1>HELLO</h1>
            {/* <ul>
              <RecipeIndexItem recipe={recipe} />
            </ul> */}
          </div>
        );
    }
}

export default RecipeIndex;