const express = require('express');
const fortunes = require('./data/fortunes')
const app = express();

// .get() determines what happens when users hit the given endpoint
// first param is endpoint, second param is callback that use req and res
app.get('/fortunes', (req, res) => {
  res.json(fortunes)
});

// export app so www file can access it
module.exports = app;

// to make server live, call listen() method 
// listen takes port number and optional domain (if no domain, goes to localhost)
// app.listen(port, () => {
//   console.log(`listening on port ${port}`)
// });