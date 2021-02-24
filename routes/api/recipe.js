const express = require('express');
const router = express.Router();
const passport = require('passport');
const Recipe = require('../../models/Recipe');

router.get("/test", (req, res) => {
  res.json({ msg:"This is the recipe route"});
});

router.post("/",
passport.authenticate("jwt", { session: false}),
(req, res) => {
  
  const newRecipe = new Recipe({
    user: req.user.id,
    apiRecipeId: req.body.apiRecipeId
  })

  newRecipe.save()
  .then(recipe => res.json(recipe));
})

module.exports = router