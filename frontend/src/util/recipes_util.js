import axios from 'axios';

export const getUserRecipes = id => {
    return axios.get(`/api/recipes/user/${id}`)
    // axios.get(`/api/user/${recipe.user_id}/recipes`)
}

export const destroyUserRecipe = id => {
    return axios.delete(`/api/recipes/${id}`)
}

export const addRecipe = recipe => {
    return axios.post('/api/recipes/', recipe)
}