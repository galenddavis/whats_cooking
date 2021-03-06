import axios from 'axios';

export const findRecipes = (ingredients) => (
    axios.get('/api/search/search', {params: ingredients})
)  

export const getRecipeInfo = (id) => (
    axios.get('/api/info/info', {params: {query: id}})
)
