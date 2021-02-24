import React from 'react';

class RecipeShowComponent extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        let { dish, recipe } = this.props;
        let ingredients = recipe.missedIngredients.map(ingredient => (
            <li>{ingredient.name}</li>
    ))
        return (
            <div>
                <ul>
                    <h3>Grocery List</h3>
                    {ingredients}
                </ul>
            </div>
        )
    }
}

export default RecipeShowComponent;