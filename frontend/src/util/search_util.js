import axios from 'axios';

export const findRecipes = (ingredients) => (
    console.log(ingredients),
    axios.get('/api/search/search', {params: ingredients})
)  