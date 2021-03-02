const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const axios = require('axios');


const searchUrl = 'https://api.spoonacular.com/recipes/findByIngredients?'
const infoUrl = 'https://api.spoonacular.com/recipes/'

router.get('/search', async (req, res, next) => {
    try{
        const food = JSON.stringify(req.query.ingredients)

        const items = new URLSearchParams({
            apiKey: keys.spoonAPI,
            ingredients: food,
            number: 9
        })
        const request = await axios.get(`${searchUrl}${items}`)
        
        res.json(request.data)
    } catch(error) {
        next(error)
    }
})

router.get('/info', async (req, res, next) => {
    try{
        const id = req.query.id
        const params = newURLSearchParams({
            apiKey: keys.spoonAPI,
            includeNutrition: false
        })
        const request = await axios.get(`${infoUrl}${id}information${params}`)
        res.json(request.data)
    } catch(error) {
        next(error)
    }
})





module.exports = router;