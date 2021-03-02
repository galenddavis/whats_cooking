import React from 'react';

const UserRecipeList = ({recipe, deleteRecipe}) => {
    debugger
    return (
        <li className='saved-card'>
            <div className='card-body'>
                <a href={recipe.recipeSource} target="_blank" rel="noreferrer"><img src={recipe.recipeImage} alt={recipe.recipeTitle}/> </a>
                <div className='card-details'>
                    <p>{recipe.recipeTitle}</p>
                    {/* <button onClick={() => deleteRecipe(recipe._id)}>Delete Recipe</button> */}
                    <i class="fas fa-times" onClick={() => deleteRecipe(recipe._id)}></i>
                </div>
            </div>
        </li>
    )
}

export default UserRecipeList