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