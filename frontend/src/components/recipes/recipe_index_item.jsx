import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = ({dish}) => {

  const splitTitle = dish.title.split(' ').join('-')
    const url = `https://spoonacular.com/recipes/${splitTitle}-${dish.id}`
  return (
    <div>
      {/* <h1>HELLO from the dish index item component</h1> */}
      <li>
        <a href={url}>
        <h1>{dish.title}</h1>
          <img src={dish.image} alt={dish.title} />
        <section>{dish.likes}</section>
        </a>
      </li>
    </div>
  );
}

export default RecipeIndexItem