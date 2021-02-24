const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const axios = require('axios');


const searchUrl = 'https://api.spoonacular.com/recipes/findByIngredients?'

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





module.exports = router;