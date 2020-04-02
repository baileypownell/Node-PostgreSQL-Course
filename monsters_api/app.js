const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./routes')


// middleware
// use bodyParser BEFORE routes
app.use(bodyParser.json());
app.use('/', routes)

app.use((err, req, res, next) => {
  res.json(err);
})

module.exports = app;
