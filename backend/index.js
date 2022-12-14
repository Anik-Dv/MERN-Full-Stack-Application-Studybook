//connect to mongodb with index
const ConnectToMongo = require("./mongodb");
const express = require("express");
var cors = require('cors');
const app = express();
//connect mongo method.
ConnectToMongo();

const port = process.env.port || 5000;
//import express then use to json data
app.use(express.json());
app.use(cors());

// //Available Router
app.use('/api/auth', require("./Routes/auth.js"));
app.use('/api/post', require("./Routes/post.js"));

app.listen(port, () => {
  console.log(`StudyBook Backend listening on http://localhost:${port}`)
});

module.exports = app
