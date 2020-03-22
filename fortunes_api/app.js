const express = require('express');
const fortunes = require('./data/fortunes')
const app = express();

// .get() determines what happens when users hit the given endpoint
// first param is endpoint, second param is callback that use req and res
app.get('/fortunes', (req, res) => {
  res.json(fortunes)
});

app.get('/fortunes/random', (req, res) => {
  // this gets logged to development console
  console.log('requesting random fortunes');

  res.json(fortunes[Math.floor(Math.random() * fortunes.length)])
})

app.get('/fortunes/:id', (req, res) => {
  console.log(req.params);
  if (fortunes.find(f => f.id != req.params.id)) {
    res.send('No fortune matches your request')
  }
  res.json(fortunes.find(f => f.id == req.params.id));
})

// export app so www file can access it
module.exports = app;

// to make server live, call listen() method 
// listen takes port number and optional domain (if no domain, goes to localhost)
// app.listen(port, () => {
//   console.log(`listening on port ${port}`)
// });