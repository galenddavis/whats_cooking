import React from 'react';
import RecipeItem from './recipes_item'

class Recipes extends React.Component {
    constructor(props) {
        super(props);

        this.state = []
    }

    update(field) {
        event => this.setState({
            [field]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const ingredients = this.state;
        this.props.findRecipes(ingredients);
    }


    render() {
        const { recipes } = this.props
        const recipeListItem = recipes.map(recipe => (
            <RecipeItem />
        ))
        return (
            <div>
                <form>
                    <input type="checkbox" value='chicken'/>
                    <label>Chicken</label>
                    <input type="checkbox" value='beans'/>
                    <label>Beans</label>
                </form>
            </div>
        )
    }
}

export default Recipes;