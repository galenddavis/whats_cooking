import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = ({dish}) => {

  const splitTitle = dish.title.split(' ').join('-')
    const url = `https://spoonacular.com/recipes/${splitTitle}-${dish.id}`
  return (
    <div className='card'>
      <li>
        <a href={url}>
          <img src={dish.image} alt={dish.title} />
          <section className='details'>
            <h1>{dish.title}</h1>
            <h1><i class="fas fa-heart"></i> {dish.likes}</h1>
          </section>
        </a>
      </li>
    </div>
  );
}

export default RecipeIndexItem