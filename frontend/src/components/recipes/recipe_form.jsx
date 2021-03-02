import React from 'react';
// import {Link} from 'react-router-dom';



class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      checkbox: [
        {chickenchecked: false},
        {beefchecked: false},
        {tofuchecked: false},
        {turkeychecked: false},
        {porkchecked: false},
        {beanschecked: false},
        {onionschecked: false},
        {tomatoeschecked: false},
        {mushroomschecked: false},
        {okrachecked: false},
        {ricechecked: false},
        {breadchecked: false},
        {pastachecked: false},
      ]
    
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    // this.uncheckAll = this.uncheckAll.bind(this);
  }

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
    this.props.search(ingredients).then(this.props.history.push("/index"));
  }

  handleCheck(e) {
      // debugger
    if (this.state.chicken === false) {
        this.setState( {chickenchecked: e.target.chickenchecked = true });
    } else {
        this.setState( {chickenchecked: e.target.chickenchecked = false });
    }
  }

//   uncheckAll(){
//     ('input[type="checkbox"]:checked').prop('checked',false);
//   }

   
    // uncheckAll(){
    //    let items = document.getElementById('radio');
    //    for (let i = 0; i < items.length; i++){
    //      if (items[i].type === 'checkbox')
    //      items[i].checked = false
    //    }
    // }
   
  render() {
  // debugger

    return (
      <div className="sidebar-body">
        <form onSubmit={this.handleSubmit}>
        <input type="submit" value="What's cooking?" className='submit' />
          <div className="food-group">
            <section className="notes">
              <h3>Protein:</h3>

              <label htmlFor='radio' className='label'>
                <input
                  id='radio'
                  onClick={this.update("chicken")}
                  type="checkbox"
                  value="chicken"
                    onChange = {this.handleCheck}
                    chickenchecked = {this.state.chickencheck}
                />
              Chicken</label>

              <label className='label'>
                
                <input
                  id='radio'
                  onClick={this.update("beef")}
                  type="checkbox"
                  value="beef"
                //   onChange = {this.handleCheck}
                //     checked = {this.state.check}
                />
              Beef</label>

              <label>
                
                <input
                  id='radio'
                  onClick={this.update("tofu")}
                  type="checkbox"
                  value="tofu"
                //   onChange = {this.handleCheck}
                //     checked = {this.state.check}
                />
              Tofu</label>

              <label>
                
                <input
                  id='radio'
                  onClick={this.update("turkey")}
                  type="checkbox"
                  value="turkey"
                //   onChange = {this.handleCheck}
                //     checked = {this.state.check}
                />
              Turkey</label>

              <label>
                
                <input
                  id='radio'
                  onClick={this.update("pork")}
                  type="checkbox"
                  value="pork"
                //   onChange = {this.handleCheck}
                //     checked = {this.state.check}
                />
              Pork</label>
            </section>
          </div>

          <div className="food-group">
            <section className="notes">
              <h3>Veggies: </h3>
              <label>
                
                <input
                id='radio'
                  onClick={this.update("beans")}
                  type="checkbox"
                  value="beans"
                />
              Beans</label>

              <label>
                
                <input
                id="radio"
                  onClick={this.update("onions")}
                  type="checkbox"
                  value="onions"
                />
              Onions</label>

              <label>
                
                <input
                 id='radio'
                  onClick={this.update("tomatoes")}
                  type="checkbox"
                  value="tomatoes"
                />
              Tomatoes</label>

              <label>
                
                <input
                  id="radio"
                  onClick={this.update("mushrooms")}
                  type="checkbox"
                  value="mushrooms"
                />
              Mushrooms</label>

              <label>
                
                <input
                  id="radio"
                  onClick={this.update("okra")}
                  type="checkbox"
                  value="okra"
                />
              Okra</label>
              </section>
          </div>

          <div className="food-group">
            <section className="notes">
              <h3>Carbs: </h3>
              <label>
                
                <input
                  id="radio"
                  onClick={this.update("rice")}
                  type="checkbox"
                  value="rice"
                />
             Rice</label>

              <label>
                
                <input
                  id="radio"
                  onClick={this.update("bread")}
                  type="checkbox"
                  value="bread"
                />
              Bread</label>

              <label>
                
                <input
                  id="radio"
                  onClick={this.update("Pasta")}
                  type="checkbox"
                  value="Pasta"
                />
              Pasta</label>
            </section>
          </div>

          {/* <input type="submit" value="What's cooking?" /> */}
          {/* <input onClick={this.uncheckAll}>Reset</input> */}
          {/* <button onClick ={this.uncheckAll}>RESET</button> */}
        </form>
        {/* {index} */}
      </div>
    );
  }
}

export default Recipes;