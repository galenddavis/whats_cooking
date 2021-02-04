import React from 'react';
import RecipeIndexItem from './recipe_index_item'


class RecipeIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {food: this.props.recipes}
              
    }

    render() {
        
        // const recipe = this.props.recipes.map((dish) => {
        //   return <li>{dish.title}</li>
        // });

        const mappedItems = this.props.recipes.length ? this.props.recipes.map((dish) => {
        return <li>{dish.title}</li>}) : null;
        debugger
        return (
          <div>
              <h1>HELLO</h1>
            <ul>
              {mappedItems}
            </ul>
          </div>
        );
    }
}

export default RecipeIndex;