import React from 'react';
import { getInfo } from '../../actions/search_actions';

class RecipeShowComponent extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        let { dish, recipe } = this.props;
        debugger
        let ingredients = recipe.map(ingredient => (
            <li>{ingredient.title}</li>
        ))
        return (
            <div>
                <ul>
                    <h3>Grocery List</h3>
                    {ingredients}
                </ul>
                <img src={dish.image} alt={dish.title} />
                <h1>{dish.creditsText}</h1>
            </div>
        )
    }
}

export default RecipeShowComponent;