import React from 'react';
// import {Link} from 'react-router-dom';



class Recipes extends React.Component {
    constructor(props) {
    
        super(props);

        this.state = {ingredients: []};
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {
        return e => {
            
            const copy = Object.assign({}, this.state)
            
            copy.ingredients.push(e.currentTarget.value)
            // let copy = Object.assign([], this.state)
            this.setState({copy})
            
             
        }
        //
        // let copy = Object.assign([], this.state)
        // copy.push(field)
        // return e => this.setState(copy)
        
    }

    handleSubmit(event) {
    
        event.preventDefault();
        const ingredients = this.state;
        this.props.search(ingredients).then(this.props.history.push('/index'))
    }



    render() {
    
        // const { recipes } = this.props
        // const recipeListItem = recipes.map(recipe => (
        //     <RecipeItem />
        // ))

        // const index = this.props.recipes.length ? (
        //     <div><RecipeIndex recipe = {this.props.recipes}/></div>
        // ) : null;

        return (
        
            <div className='sidebar-body'>
                <form onSubmit={this.handleSubmit}>
                    <div className='food-group'>
                        <section className='notes'>
                            <h3>Protein:</h3>
                        
                            <label>
                            <input onClick={this.update('chicken')} type="checkbox" value='chicken'/>
                            Chicken</label>

                            <label>
                            <input onClick={this.update('beef')} type="checkbox" value='beef'/>
                            Beef</label>

                            <label>
                            <input onClick={this.update('tofu')} type="checkbox" value='tofu'/>
                            Tofu</label>

                            <label>
                            <input onClick={this.update('turkey')} type="checkbox" value='turkey'/>
                            Turkey</label>

                            <label>
                            <input onClick={this.update('pork')} type="checkbox" value='pork'/>
                            Pork</label>
                        </section>
                    </div>

                    <div className='food-group'>
                    <section className='notes'>
                        <h3>Veggies: </h3>
                            <label>
                            <input onClick={this.update('beans')} type="checkbox" value='beans'/>
                            Beans</label>

                            <label>
                            <input onClick={this.update('onions')} type="checkbox" value='onions'/>
                            Onions</label>

                            <label>
                            <input onClick={this.update('tomatoes')} type="checkbox" value='tomatoes'/>
                            Tomatoes</label>

                            <label>
                            <input onClick={this.update('mushrooms')} type="checkbox" value='mushrooms'/>
                            Mushrooms</label>

                            <label>
                            <input onClick={this.update('okra')} type="checkbox" value='okra'/>
                            Okra</label>
                    
                    </section>
                    </div>

                    <div className='food-group'>
                    <section className='notes'>
                        <h3>Carbs: </h3>
                            <label>
                            <input onClick={this.update('rice')} type="checkbox" value='rice'/>
                            Rice</label>

                            <label>
                            <input onClick={this.update('bread')} type="checkbox" value='bread'/>
                            Bread</label>

                            <label>
                            <input onClick={this.update('Pasta')} type="checkbox" value='Pasta'/>
                            Pasta</label>
                        
                    </section>
                    </div>
                    
                    <input type="submit" value="What's cooking?"/>
                </form>
                {/* {index} */}
            </div>
        )
    }
}

export default Recipes;