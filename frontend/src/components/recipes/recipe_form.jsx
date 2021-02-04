import React from 'react';
import RecipeItem from './recipes_item'


class Recipes extends React.Component {
    constructor(props) {
        debugger
        super(props);

        this.state = {ingredients: []};
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {
        debugger
        
        return e => {
            
            const copy = Object.assign({}, this.state)
            
            copy.ingredients.push(e.currentTarget.value)
            // let copy = Object.assign([], this.state)
            this.setState({
               copy
            })
            
             
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
                    <input onClick={this.update('chicken')} type="checkbox" value='chicken'/>
                    </label>
                    <label>Beans
                    <input onClick={this.update('beans')} type="checkbox" value='beans'/>
                    </label>
                    <label>Rice
                    <input onClick={this.update('rice')} type="checkbox" value='rice'/>
                    </label>
                    <label>Onions
                    <input onClick={this.update('onions')} type="checkbox" value='onions'/>
                    </label>
                    <label>Tomatoes
                    <input onClick={this.update('tomatoes')} type="checkbox" value='tomatoes'/>
                    </label>
                    <Link to={`/index`}><input type="submit" value="What's cooking?"/></Link>
                    {/* <button onClick={`/index`}>What's cooking?</button> */}
                </form>
            </div>
        )
    }
}

export default Recipes;