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
    debugger
    try{
        console.log(req.query)
        const food = JSON.stringify(req.query.ingredients)
        debugger
        console.log(food)
        // const foodItems = food.map(ingred => {
        //     debugger
        //     return ingred
        // })

        const items = new URLSearchParams({
            apiKey: '8b43d83809b74d12a33756b8eced8aaf',
            ingredients: food,
            number: 2
        })
        console.log(`${baseUrl}${items}`)
        const request = await axios.get(`${baseUrl}${items}`)
        console.log(request.data)
        
        res.json(request.data)
    } catch(error) {
        next(error)
    }
})



module.exports = router;