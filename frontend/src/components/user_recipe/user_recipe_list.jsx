import React from 'react';

const UserRecipeList = ({recipe, deleteRecipe}) => {
    debugger
    return (
        <div>
            <p>{recipe.recipeTitle}</p>
            <a href={recipe.recipeSource} target="_blank" rel="noreferrer"><img src={recipe.recipeImage} alt={recipe.recipeTitle}/> </a>
            <button onClick={() => deleteRecipe(recipe._id)}>Delete Recipe</button>
        </div>
    )
}

export default UserRecipeList