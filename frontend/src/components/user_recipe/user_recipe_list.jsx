import React from 'react';

const UserRecipeList = ({recipe, deleteRecipe}) => {
    debugger
    return (
        <div>
            <p>{recipe.recipeTitle}</p>
            <button onClick={() => deleteRecipe(recipe._id)}>Delete Recipe</button>
        </div>
    )
}

export default UserRecipeList