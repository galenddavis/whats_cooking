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

        const mappedItems = this.props.recipes !== undefined ? this.props.recipes.map((dish) => {
        return <RecipeIndexItem dish={dish} />}) : null;
        debugger
        return (
          <div>
              <h1>HELLO</h1>
            <ul>
             <li>{mappedItems}</li>
            </ul>
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