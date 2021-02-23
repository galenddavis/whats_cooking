const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const axios = require('axios');

const infoUrl = 'https://api.spoonacular.com/recipes/'

router.get('/info', (req, res) => {
    debugger
    try{
        debugger
        const id = req.query.id
        const params = new URLSearchParams({
            apiKey: keys.spoonAPI,
        })
        const request = axios.get(`${infoUrl}${id}/information?includeNutrition=false${params}`)
        console.log(request)
        debugger
        res.json(request.sourceUrl)
    } catch(error) {
        console.log(error)
    }
})

module.exports = router;

// 'https://api.spoonacular.com/recipes/716429/information?includeNutrition=false'

// 