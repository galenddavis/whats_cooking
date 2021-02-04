import React from 'react';
import RecipeItem from './recipes_item';
import {Link} from 'react-router-dom';
import RecipeIndex from './recipes_index';


class Recipes extends React.Component {
    constructor(props) {
        #debugger
        super(props);

        this.state = {ingredients: []};
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {
        #debugger
        
        return e => {
            
            const copy = Object.assign({}, this.state)
            
            copy.ingredients.push(e.currentTarget.value)
            // let copy = Object.assign([], this.state)
            this.setState({
               copy
            })
            
             
        }
        // #debugger
        // let copy = Object.assign([], this.state)
        // copy.push(field)
        // return e => this.setState(copy)
        
    }

    handleSubmit(event) {
        #debugger
        event.preventDefault();
        const ingredients = this.state;
        this.props.search(ingredients);
        // this.props.history.push('/index')
    }



    render() {
        #debugger
        // const { recipes } = this.props
        // const recipeListItem = recipes.map(recipe => (
        //     <RecipeItem />
        // ))

        const index = this.props.recipes.length ? (
            <div><RecipeIndex recipe = {this.props.recipes}/></div>
        ) : null;

        return (
            <div className='sidebar-body'>
                <form onSubmit={this.handleSubmit}>
                    <div className='food-group'>
                        <section className='notes'>
                            <h3>Protein:</h3>
                        
                            <label>Chicken
                            <input onClick={this.update('chicken')} type="checkbox" value='chicken'/>
                            </label>

                            <label>Beef
                            <input onClick={this.update('beef')} type="checkbox" value='beef'/>
                            </label>

                            <label>Tofu
                            <input onClick={this.update('tofu')} type="checkbox" value='tofu'/>
                            </label>

                            <label>Turkey
                            <input onClick={this.update('turkey')} type="checkbox" value='turkey'/>
                            </label>

                            <label>Pork
                            <input onClick={this.update('pork')} type="checkbox" value='pork'/>
                            </label>
                        </section>
                    </div>

                    <div className='food-group'>
                    <section className='notes'>
                        <h3>Veggies: </h3>
                            <label>Beans
                            <input onClick={this.update('beans')} type="checkbox" value='beans'/>
                            </label>

                            <label>Onions
                            <input onClick={this.update('onions')} type="checkbox" value='onions'/>
                            </label>

                            <label>Tomatoes
                            <input onClick={this.update('tomatoes')} type="checkbox" value='tomatoes'/>
                            </label>

                            <label>Mushrooms
                            <input onClick={this.update('mushrooms')} type="checkbox" value='mushrooms'/>
                            </label>

                            <label>Okra
                            <input onClick={this.update('okra')} type="checkbox" value='okra'/>
                            </label>
                    
                    </section>
                    </div>

                    <div className='food-group'>
                    <section className='notes'>
                        <h3>Carbs: </h3>
                            <label>Rice
                            <input onClick={this.update('rice')} type="checkbox" value='rice'/>
                            </label>

                            <label>Bread
                            <input onClick={this.update('bread')} type="checkbox" value='bread'/>
                            </label>

                            <label>Pasta
                            <input onClick={this.update('Pasta')} type="checkbox" value='Pasta'/>
                            </label>
                        
                    </section>
                    </div>
                    
                    
                    <input type="submit" value="What's cooking?"/>

                </form>
                {index}
            </div>
        )
    }
}

export default Recipes;