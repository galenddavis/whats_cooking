const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const axios = require('axios');

const infoUrl = 'https://api.spoonacular.com/recipes/'

router.get('/info', async (req, res, next) => {
    try{

        const recipe = req.query.query
        const params = new URLSearchParams({
            includeNutrition: false,
            apiKey: keys.spoonAPI
        })
        const request = await axios.get(`${infoUrl}${recipe}/information?${params}`)
        res.json(request.data)
    } catch(error) {
        next(error)
    }
})

module.exports = router;
