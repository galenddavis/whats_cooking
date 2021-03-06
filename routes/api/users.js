const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require("passport");
const keys = require('../../config/keys');
const jwt = require("jsonwebtoken");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/test', (req, res) => res.json({ msg: 'Users route' }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ id: req.user.id, username: req.user.username, email: req.user.email });
})
//sign in
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          // Throw a 400 error if the email address already exists
          return res.status(400).json({email: "A user has already registered with this address"})
        } else {
          // Otherwise create a new user
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          })
        

        //   newUser.save().then(user => res.send(user)).catch(err => res.send(err));

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                    const payload = {id: user.id, username: user.username };
                    
                    jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    });
                })
                .catch(err => console.log(err));
                
            })
          })
        }
      })
  })
//Log In 
  router.post('/login', (req, res) => {
    const {errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
    .then(user => {
      if(!user) {
        return res.status(404).json({email: 'This user does not exist'})
      }
      
      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(isMatch) {
          const payload = {
              id: user.id,
              username: user.username,
          }
          jwt.sign(
              payload, 
              keys.secretOrKey,
              { expiresIn: 3600},
              (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token
                });
            }
          )
        } else {
          return res.status(400).json({password: "Incorrect password"})
        }
      })
    })
  })


module.exports = router;




