import axios from 'axios';

export const findRecipes = (ingredients) => (
    axios.get('/api/search/search', {params: ingredients})
)  