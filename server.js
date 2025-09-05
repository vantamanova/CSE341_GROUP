const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');

const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});