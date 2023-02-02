const express = require('express');
const app = express();
require('dotenv').config();

var webAuth = new auth0.WebAuth({
    domain: process.env.domain,
    clientID: process.env.clientID
  });
  
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});