const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const axios = require('axios');
// import * as Errors from '../../frontend/src/actions/session_actions';

// router.get('/test', (req, res) => res.json({ msg: 'search route' }));

router.get('/search', (req, res, next) => {

    const ingredients = req.map(ingred => {
        return `&ingredients=${ingred}`
    })

    const request = `https://api.spoonacular.com/recipes/findByIngredients?${keys.spoonAPI}${ingredients}&number=2`
    console.log(request)
    
    axios.get(request)
        .then(recipes => (console.log(recipes.data)))
        .catch((err) => next(err))   
})

module.exports = router;