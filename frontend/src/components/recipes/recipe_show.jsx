import React from 'react';
import { Link } from 'react-router-dom'

class RecipeShowComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            
        }
        this.grocerylist = this.grocerylist.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
        this.groceryToggle = this.groceryToggle.bind(this);
        this.recipeToggle = this.recipeToggle.bind(this);
    }

    componentWillUnmount() {
        this.setState({isLoading: true})
    }

    saveRecipe() {
        this.recipeToggle();
        let recipe = this.props.dish
        this.props.addRecipe(recipe)
    }

    grocerylist() {
        this.groceryToggle();
        let match;
        this.props.recipe.forEach(food => {
            if (this.props.dish.id === food.id) {
                match = food
            }
        })
        if (!this.props.user) {
            this.props.openModal();
        } else {
          match.missedIngredients.forEach(ingredient => {
              this.props.addGroceryItem(ingredient)
          })
        }
    }

    groceryToggle() {
        const grocerySubmit = document.getElementById('grocery-button')
        grocerySubmit.classList.toggle('grocery-button-active');
    }

    recipeToggle() {
        const recipeSubmit = document.getElementById('recipe-button')
        recipeSubmit.classList.toggle('recipe-button-active');
    }
    
    render() {
        let { dish, recipe } = this.props;

        let match;
        recipe.forEach(food => {
            // 
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
                            <h3 onClick={() => this.props.closeModal()}><Link to='/profile' className=''>Profile</Link></h3>
                            
                        </div>
                        <div className='buttons'>
                            <button onClick={this.grocerylist} id='grocery-button'>Add to Grocery List</button>
                            <button onClick={() => this.saveRecipe()} id='recipe-button'>Save this Recipe!</button>
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