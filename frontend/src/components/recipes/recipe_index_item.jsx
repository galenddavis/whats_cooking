import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndexItem = ({dish}) => {

    // const url = () => {
    //   return (
    //     // 'https://api.spoonacular.com/${dish.title}${dish.id}'
    //     'https://www.google.com'
    //   )
    // };

    const url = `https://api.spoonacular.com/recipes/${dish.title}-${dish.id}`

  return (
    <div className = 'recipecards'>
      {/* <h1>HELLO from the recipe index item component</h1> */}
      <a rel={'external'} className="fab fa-instagram" target="_blank" href={url}>
        <h1>{dish.title}</h1>
      </a>
        {/* // <a href = 'www.google.com'><h1>{dish.title}</h1></a> */}
        
          <img src={dish.image} alt={dish.title} />
        
        <h1>{dish.likes}</h1>
        <h1>TEST</h1>
        
    </div>
  );
}

export default RecipeIndexItem