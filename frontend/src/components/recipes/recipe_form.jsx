import React from 'react';
import RecipeItem from './recipes_item'


class Recipes extends React.Component {
    constructor(props) {
        debugger
        super(props);

        this.state = [];
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {
        debugger
        return e => {
            // let copy = Object.assign([], this.state)
            (this.state.push(e.target.value))
            
             
        }
        // debugger
        // let copy = Object.assign([], this.state)
        // copy.push(field)
        // return e => this.setState(copy)
        
    }

    handleSubmit(event) {
        debugger
        event.preventDefault();
        const ingredients = this.state;
        this.props.search(ingredients);
    }



    render() {
        debugger
        // const { recipes } = this.props
        // const recipeListItem = recipes.map(recipe => (
        //     <RecipeItem />
        // ))
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Chicken
                    <input onClick={this.update(this.value)} type="checkbox" value='chicken'/>
                    </label>
                    <label>Beans
                    <input onClick={this.update(this.value)} type="checkbox" value='beans'/>
                    </label>
                    <label>Rice
                    <input onClick={this.update(this.value)} type="checkbox" value='rice'/>
                    </label>
                    <label>Onions
                    <input onClick={this.update(this.value)} type="checkbox" value='onions'/>
                    </label>
                    <label>Tomatoes
                    <input onClick={this.update(this.value)} type="checkbox" value='tomatoes'/>
                    </label>
                    <input type="submit" value="What's cooking?"/>
                </form>
            </div>
        )
    }
}

export default Recipes;