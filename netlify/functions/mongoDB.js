"use strict";

const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb+srv://dbUser:dSeSZxw4UtnAG9Z5@cluster0.5z1pk.mongodb.net/Books?retryWrites=true&w=majority',
  { useNewUrlParser: true,  useUnifiedTopology: true });
  
module.exports = client.connect();
