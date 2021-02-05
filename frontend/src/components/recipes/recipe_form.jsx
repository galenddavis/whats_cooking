import React from 'react';
import RecipeItem from './recipes_item';
import {Link} from 'react-router-dom';
import RecipeIndex from './recipes_index';


class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      checked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  //   componentWillUnmount() {
  //     this.state = { ingredients: [] };
  //     document.getElementById("checkbox").checked = false;
  //   }

//   componentDidMount() {
//     this.state = { ingredients: [] };
//     document.getElementById("checkbox").checked = false;
//   }

  update(field) {
    return (e) => {
      const copy = Object.assign({}, this.state);
      if (!this.state.ingredients.includes(e.currentTarget.value)) {
        copy.ingredients.push(e.currentTarget.value);
        this.setState(copy);
      } else {
        this.setState(copy);
      }
    };
  }
  //
  // let copy = Object.assign([], this.state)
  // copy.push(field)
  // return e => this.setState(copy)

  handleSubmit(event) {
    event.preventDefault();
    const ingredients = this.state;
    console.log(ingredients);
    this.props.search(ingredients).then(this.props.history.push("/index"));
  }

  handleCheck(e) {
    this.setState({ check: e.target.checked });
  }

    // unCheck() {
    // document.getElementById("radio").checked = false;
    // }

    // uncheckAll(){
    //     ('input[type="checkbox"]:checked').prop('checked',false);
    //  }
   
  render() {
    //  const UnCheckAll = (chk) => {
    //     for (i = 0; i < chk.length; i++){
    //     chk[i].checked = false 
    //   }
    // }   
    // const { recipes } = this.props
    // const recipeListItem = recipes.map(recipe => (
    //     <RecipeItem />
    // ))

    // const index = this.props.recipes.length ? (
    //     <div><RecipeIndex recipe = {this.props.recipes}/></div>
    // ) : null;

    return (
      <div className="sidebar-body">
        <form onSubmit={this.handleSubmit}>
          <div className="food-group">
            <section className="notes">
              <h3>Protein:</h3>

              <label>
                Chicken
                <input
                  id='radio'
                  onClick={this.update("chicken")}
                  type="checkbox"
                  value="chicken"
                    // onChange = {this.handleCheck}
                    // checked = {this.state.check}
                />
              </label>

              <label>
                Beef
                <input
                  id='radio'
                  onClick={this.update("beef")}
                  type="checkbox"
                  value="beef"
                //   onChange = {this.handleCheck}
                //     checked = {this.state.check}
                />
              </label>

              <label>
                Tofu
                <input
                  id='radio'
                  onClick={this.update("tofu")}
                  type="checkbox"
                  value="tofu"
                //   onChange = {this.handleCheck}
                //     checked = {this.state.check}
                />
              </label>

              <label>
                Turkey
                <input
                  id='radio'
                  onClick={this.update("turkey")}
                  type="checkbox"
                  value="turkey"
                //   onChange = {this.handleCheck}
                //     checked = {this.state.check}
                />
              </label>

              <label>
                Pork
                <input
                  id='radio'
                  onClick={this.update("pork")}
                  type="checkbox"
                  value="pork"
                //   onChange = {this.handleCheck}
                //     checked = {this.state.check}
                />
              </label>
            </section>
          </div>

          <div className="food-group">
            <section className="notes">
              <h3>Veggies: </h3>
              <label>
                Beans
                <input
                id='radio'
                  onClick={this.update("beans")}
                  type="checkbox"
                  value="beans"
                />
              </label>

              <label>
                Onions
                <input
                id="radio"
                  onClick={this.update("onions")}
                  type="checkbox"
                  value="onions"
                />
              </label>

              <label>
                Tomatoes
                <input
                 id='radio'
                  onClick={this.update("tomatoes")}
                  type="checkbox"
                  value="tomatoes"
                />
              </label>

              <label>
                Mushrooms
                <input
                  id="radio"
                  onClick={this.update("mushrooms")}
                  type="checkbox"
                  value="mushrooms"
                />
              </label>

              <label>
                Okra
                <input
                  id="radio"
                  onClick={this.update("okra")}
                  type="checkbox"
                  value="okra"
                />
              </label>
            </section>
          </div>

          <div className="food-group">
            <section className="notes">
              <h3>Carbs: </h3>
              <label>
                Rice
                <input
                  id="radio"
                  onClick={this.update("rice")}
                  type="checkbox"
                  value="rice"
                />
              </label>

              <label>
                Bread
                <input
                  id="radio"
                  onClick={this.update("bread")}
                  type="checkbox"
                  value="bread"
                />
              </label>

              <label>
                Pasta
                <input
                  id="radio"
                  onClick={this.update("Pasta")}
                  type="checkbox"
                  value="Pasta"
                />
              </label>
            </section>
          </div>

          <input type="submit" value="What's cooking?" />
          {/* <input onClick={this.unCheck()}>Reset</input> */}
          {/* <button onClick ={this.uncheckAll}>RESET</button> */}
        </form>
        {/* {index} */}
      </div>
    );
  }
}

export default Recipes;