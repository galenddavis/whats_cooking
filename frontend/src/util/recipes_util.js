import axios from 'axios';

export const getUserRecipes = id => (
    axios.get(`/api/recipes/user/${id}`)
)

export const destroyUserRecipe = id => {
    axios.delete(`/api/recipes/user/${id}`)
}