const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require('path');

const users = require('./routes/api/users')
const search = require('./routes/api/search')
const info = require('./routes/api/info')
const recipes = require('./routes/api/recipes')
const grocerylist = require('./routes/api/grocerylist')

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err));


// for postman
app.use(bodyParser.urlencoded({ //postman
    extended: false 
}));

app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);

// app.get('/', (req, res) => {

//     res.send('You only have one week to do this.')
// });

app.use('/api/users', users)
app.use('/api/search', search)
app.use('/api/info', info)
app.use('/api/recipes', recipes)
app.use('/api/grocerylist', grocerylist)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }

  
const port = process.env.PORT || 5000;
console.log("=============", process.env.PORT)

app.listen(port, () => console.log(`Server is running on port ${port}`));
