"use strict"

const clientPromise = require('./mongoDB');
const headers = require('./headersCORS');

exports.handler = async (event, context) => {

  if (event.httpMethod == "OPTIONS") {
    return { statusCode: 200, headers, body: "OK" };
  }

  try {
    const client = await clientPromise;

    const authors = client.db("Books").collection("Books").find({}).toArray((err, result) => {
      if (err) console.log(err);
      return { statusCode: 200, headers, body: JSON.stringify(result)};
    });

   
  } catch (error) {
    console.log(error);
    return { statusCode: 400, headers, body: JSON.stringify(error) };
  }
};
