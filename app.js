const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('You only have one week to do this.'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));