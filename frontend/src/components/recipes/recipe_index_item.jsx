import React from 'react';

class RecipeIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.getInfo = this.getInfo.bind(this)
  }

  
  getInfo(id) {
    this.props.recipeInfo(id)
    setTimeout(() => this.handleModal(), 1000)
  }
  handleModal() {
    this.props.recipeModal();

  }

  render(){
    const { dish } = this.props
    return (
      <div className='card'>
      <li>
        <img src={dish.image} alt={dish.title} onClick={() => this.getInfo(dish.id)} />
        <section className='details'>
          <h1>{dish.title}</h1>
          {/* <h1><i className="fas fa-heart"></i> {dish.likes}</h1> */}
        </section>
      </li>
    </div>
  )};
}


export default RecipeIndexItem