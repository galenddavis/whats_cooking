import React from 'react';
import RecipeIndexItem from './recipe_index_item'


class RecipeIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {food: this.props.recipes}
              
    }

    render() {
        
        const recipe = this.props.recipes.map((dish) => {
            return <RecipeIndexItem dish={dish} />
        });
        return (
          <div>
              <h1>HELLO</h1>
              {/* {recipe} */}
          </div>
        );
    }
}

export default RecipeIndex;