const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const axios = require('axios');
// import * as Errors from '../../frontend/src/actions/session_actions';

// router.get('/test', (req, res) => res.json({ msg: 'search route' }));

// router.get('/search', (req, res, next) => {

//     const ingredients = req.map(ingred => {
//         return `&ingredients=${ingred}`
//     })

//     const request = `https://api.spoonacular.com/recipes/findByIngredients?${keys.spoonAPI}${ingredients}&number=2`
//     console.log(request)
    
//     axios.get(request)
//         .then(recipes => (console.log(recipes.data)))
//         .catch((err) => next(err))   
// })

const baseUrl = 'https://api.spoonacular.com/recipes/findByIngredients?'

router.get('/search', async (req, res, next) => {

    try{
        const food = req.params.ingredients
        console.log(food)
        const ingredients = food.map(ingred => {
            return ingred
        })

        const params = new URLSearchParams({
            apiKey: '8b43d83809b74d12a33756b8eced8aaf',
            ingredients: ingredients,
            number: 2
        })
        console.log(`${baseUrl}${params}`)
        const request = await axios.get(`${baseUrl}${params}`)
        console.log(request.data)
        
        res.json(request.data)
    } catch(error) {
        next(error)
    }
})



module.exports = router;