const fs = require('fs');
const express = require('express');
// for parsing json
const bodyParser = require('body-parser');
const fortunes = require('./data/fortunes')
const app = express();

app.use(bodyParser.json())

// .get() determines what happens when users hit the given endpoint
// first param is endpoint, second param is callback that use req and res
app.get('/fortunes', (req, res) => {
  res.json(fortunes)
});

app.get('/fortunes/random', (req, res) => {
  // this gets logged to development console
  //console.log('requesting random fortunes');
  res.json(fortunes[Math.floor(Math.random() * fortunes.length)])
})

app.get('/fortunes/:id', (req, res) => {
  // if (fortunes.find(f => f.id != req.params.id)) {
  //   res.send('No fortune matches your request')
  // }
  res.json(fortunes.find(f => f.id == req.params.id));
});

const writeFortunes = (json) => {
  fs.writeFile('./data/fortunes.json', JSON.stringify(json), err => console.log(err))
}

app.post('/fortunes', (req, res) => {
  // req gives body of data 
  const {message, lucky_number, spirit_animal } = req.body;
  const fortunes_ids = fortunes.map(f => f.id);
  const fortune = { 
    id: (fortunes_ids.length > 0 ? Math.max(...fortunes_ids) : 0) + 1, 
    message, 
    lucky_number, 
    spirit_animal
  }

const new_fortunes = fortunes.concat(fortune);

  writeFortunes(new_fortunes)
  res.json(new_fortunes);

});

// update method
app.put('/fortunes/:id', (req, res) => {
  const { id } = req.params;
  //const { message, lucky_number, spirit_animal } = req.body;

  const old_fortune = fortunes.find(f => f.id == id);
  // console.log(old_fortune)
  // if (message) old_fortune.message = message;
  // if (lucky_number) old_fortune.lucky_number = lucky_number;
  // if (spirit_animal) old_fortune.spirit_animal = spirit_animal;

  ['message', 'lucky_number', 'spirit_animal'].forEach((key) => {
    if (req.body[key]) old_fortune[key] =  req.body[key];
  })

  writeFortunes(fortunes);

  // send back new data 
  res.json(fortunes)
})

// export app so www file can access it
module.exports = app;

// to make server live, call listen() method 
// listen takes port number and optional domain (if no domain, goes to localhost)
// app.listen(port, () => {
//   console.log(`listening on port ${port}`)
// });