const express = require('express');
const auth0 = require('auth0');
const dotenv = require('dotenv');
const app = express();


app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


var WebAuth = auth0.WebAuth({
    domain: process.env.domain,
    clientID: process.env.clientID
  });