import React from 'react';

const RecipeIndexItem = ({recipe}) => {

    const url = () => {
      return (
        'https://ap.spoonacular.com/${recipe.title}${recipe.id}'
      )
    };
  return (
    <div>
      {/* <h1>HELLO from the recipe index item component</h1> */}
      <li>
        <h1>{recipe.title}</h1>
        <a href="{url}">
          <img src="{recipe.image}" alt="{recipe.title}" />
        </a>
        <section>{recipe.likes}</section>
      </li>
    </div>
  );
}

export default RecipeIndexItem