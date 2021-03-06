const express = require('express');
const router = express.Router();
const passport = require('passport');
const Recipe = require('../../models/Recipe');

router.get("/test", (req, res) => {
  res.json({ msg:"This is the recipe route"});
});

router.get("/user/:user_id",
passport.authenticate("jwt", { session: false}),
(req, res) => {
  Recipe.find({user: req.params.user_id})
    .sort({ date: -1 })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json(err));
})

router.post("/",
passport.authenticate("jwt", { session: false}),
(req, res) => {
  Recipe.findOne({recipeTitle: req.body.title})
  .then(title => {
    if(title){
    } else {
        const newRecipe = new Recipe({
        user: req.user.id,
        recipeTitle: req.body.title,
        recipeSource: req.body.sourceUrl,
        recipeImage: req.body.image
      })
        newRecipe.save()
        .catch(err => res.status(400).json(err));
      }
  })
})
 

router.delete("/:recipeId",
passport.authenticate("jwt", { session: false}),
  (req,res) => {
      Recipe.findByIdAndRemove(req.params.recipeId)
      .then(id => {
        return res.json(id)})
      .catch(err => res.status(400).json(err));
  })

module.exports = router