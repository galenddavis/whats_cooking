import React from 'react';
import { getInfo } from '../../actions/search_actions';

class RecipeShowComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentWillUnmount() {
        this.setState({isLoading: true})
    }


    render() {
        let { dish, recipe } = this.props;

        let match;
        recipe.forEach(food => {
            debugger
            console.log(dish.id)
            console.log(food.id)
            if (this.props.dish.id === food.id) {
                match = food
            }
        })

        let ingredients = match.missedIngredients.map(ingredient => (
            <li>{ingredient.name}</li>
        ))
        // if (dish) {this.state.isLoading = false}
        if (this.state.isLoading === false) {
            return (<div>
                <h1>Loading Recipe Info...</h1>
            </div>)
        } else {
            return (
                <div className='recipe-show'>
                    <section className='grocery-list'>
                        <h1>{dish.title}</h1>
                        <ul>
                        <h3>Grocery List</h3>
                            {ingredients}
                        </ul>
                        <div className='buttons'>
                            <button>Add to Grocery List</button>
                            <button>Save this Recipe!</button>
                        </div>
                    </section>
                    <section className='recipe'>
                        <img src={dish.image} alt={dish.title} />
                    </section>
                </div>
            )
        }  
    }
}

export default RecipeShowComponent;