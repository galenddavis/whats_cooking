const express = require("express");
const router = express.Router();
const passport = require("passport");
const Groceries = require("../../models/GroceryList");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the grocery route" });
});


router.get("/user/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Groceries.find({ user: req.params.user_id })
      .then((groceries) => res.json(groceries))
      .catch((err) => res.status(400).json(err));
  }
);

router.post("/",
passport.authenticate("jwt", { session: false }),
(req, res) => {
  const newGrocery = new Groceries({
    user: req.user.id,
    name: req.body.name
  })

  newGrocery.save()
  .then(grocery => res.json(grocery))
})

router.delete("/:_id", //turky Id 
passport.authenticate("jwt", {session:false}),
(req,res) => {
  GroceryList.findByIdAndRemove(req.params._id)
  .then(id => res.json(id))
  .catch(err => res.status(400).json(err));
})

module.exports = router