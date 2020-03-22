// Node is non-blocking 
// Nodemon is a module that allows to serve our node application with a live reload feature enabled.
// EXPRESS is a web framework 
// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const http = require('http');

const hostname = 'localhost';

const port = 3003;

const server = http.createServer((req, res) => {
  const {url} = req;
  console.log(url);
  if (url === '/translations') {
    let translations = { 1: 'one', 2: 'two', 3: 'three'};
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(translations));
    res.end();
  }
  res.end('welcome to node');
});

server.listen(port, hostname, () => {
  console.log(`Server is running at ${hostname}:${port}`)
});