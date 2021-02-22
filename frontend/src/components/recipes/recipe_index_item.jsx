import React from 'react';

const RecipeIndexItem = ({dish, recipeInfo}) => {

  // const splitTitle = dish.title.split(' ').join('-')
  // const url = `https://spoonacular.com/recipes/${splitTitle}-${dish.id}`
  const info = recipeInfo(dish.id) || null;
  const url = info.sourceUrl;
  debugger
  return (
    <div className='card'>
      <li>
        <a href={url}>
          <img src={dish.image} alt={dish.title} />
          <section className='details'>
            <h1>{dish.title}</h1>
            <h1><i className="fas fa-heart"></i> {dish.likes}</h1>
          </section>
        </a>
      </li>
    </div>
  );
}

export default RecipeIndexItem