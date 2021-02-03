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
<<<<<<< HEAD
        const test = ['chicken']
        const ingredients = test.map(ingredient => {
            return ingredient
=======
        const food = req.params.ingredients
        console.log(food)
        const ingredients = food.map(ingred => {
            return ingred
>>>>>>> 1a81610dd97d83db6684ca8ce728ebd84cf4cc54
        })

        const params = new URLSearchParams({
            apiKey: '8b43d83809b74d12a33756b8eced8aaf',
            ingredients: ingredients,
<<<<<<< HEAD
            number: 5
        })
        const request = await axios.get(`${baseUrl}${params}`)

=======
            number: 2
        })
        console.log(`${baseUrl}${params}`)
        const request = await axios.get(`${baseUrl}${params}`)
        console.log(request.data)
        
>>>>>>> 1a81610dd97d83db6684ca8ce728ebd84cf4cc54
        res.json(request.data)
    } catch(error) {
        next(error)
    }
})



module.exports = router;