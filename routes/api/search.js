const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const axios = require('axios');
// import * as Errors from '../../frontend/src/actions/session_actions';

router.get('/test', (req, res) => res.json({ msg: 'search route' }));

router.get('/search', (req, res, next) => {
    let test = ['chicken']
    console.log(test)

    const ingredients = test.map(ingred => {
        return `&ingredients=${ingred}`
    })
    const request = `https://api.spoonacular.com/recipes/findByIngredients?${keys.spoonAPI}${ingredients}&number=2`
    console.log(request)
    
    axios.get(String({request}))
    // console.log(request)
    .then(() => res.json())
        // console.log(request)
    .catch((err) => next(err))
        
})


module.exports = router;