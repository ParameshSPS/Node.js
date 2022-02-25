const express = require('express');
const app = express();

const people = require('../Routes/People');
const auth = require('../Routes/Auth');

// static assets
app.use(express.static('./Methods-Public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});