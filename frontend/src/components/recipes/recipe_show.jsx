import React from 'react';
import { Link } from 'react-router-dom'

class RecipeShowComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            
        }
        this.grocerylist = this.grocerylist.bind(this)
        this.saveRecipe = this.saveRecipe.bind(this)
    }

    componentWillUnmount() {
        this.setState({isLoading: true})
    }

    saveRecipe() {
        debugger
        let recipe = this.props.dish
        this.props.addRecipe(recipe)
    }

    grocerylist() {
        const formSubmit = document.querySelector('.form-button')
        formSubmit.classList.toggle('form-button-active');

        let match;
        this.props.recipe.forEach(food => {
            // debugger
            if (this.props.dish.id === food.id) {
                match = food
            }
        })
        console.log(this.props.user)
        if (!this.props.user) {
            this.props.openModal();
        } else {
          match.missedIngredients.forEach(ingredient => {
              this.props.addGroceryItem(ingredient)
          })
        }
    }


    render() {
        let { dish, recipe } = this.props;

        let match;
        recipe.forEach(food => {
            // debugger
            if (this.props.dish.id === food.id) {
                match = food
            }
        })

        let ingredients = match.missedIngredients.map(ingredient => (
            <li>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
        ))
        // if (dish) {this.state.isLoading = false}
        if (this.state.isLoading === false) {
            return (<div>
                <h1>Loading Recipe Info...</h1>
            </div>)
        } else {
            
            return (
                <div className='recipe-show'>
                    <section className='ingredients'>
                        <h1>{dish.title}</h1>
                        <a href={dish.sourceUrl} target="_blank" rel="noreferrer">
                            <h3>Full Recipe</h3>
                        </a>
                        <div className='grocery-list'>
                            <h3>Grocery List</h3>
                            <ul>
                                {ingredients}
                            </ul>
                            <h3><Link to='/profile' className=''>Profile</Link></h3>
                            
                        </div>
                        <div className='buttons'>

                            <button onClick={this.grocerylist} className='form-button'>Add to Grocery List</button>
                            <button onClick={() => this.saveRecipe()}>Save this Recipe!</button>
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