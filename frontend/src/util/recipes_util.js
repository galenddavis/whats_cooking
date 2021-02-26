import axios from 'axios';

export const getUserRecipes = id => (
    axios.get(`/api/recipes/user/${id}`)
    // axios.get(`/api/user/${recipe.user_id}/recipes`)
)

export const destroyUserRecipe = recipeID => {
    // axios.delete(`/api/recipes/user/${id}`)
    axios.delete(`/api/recipes/${recipeID}`)
}

export const addRecipe = recipe => {
    debugger
    
    return axios.post('/api/recipes/', recipe)
}