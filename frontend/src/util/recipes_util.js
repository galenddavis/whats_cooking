import axios from 'axios';

export const getUserRecipes = id => {
    debugger
    return axios.get(`/api/recipes/user/${id}`)
    // axios.get(`/api/user/${recipe.user_id}/recipes`)
}

export const destroyUserRecipe = id => {
    // axios.delete(`/api/recipes/user/${id}`)
    debugger
    return axios.delete(`/api/recipes/${id}`)
}

export const addRecipe = recipe => {
    debugger
    
    return axios.post('/api/recipes/', recipe)
}