const http = require('http');

const server = http.createServer((req, res) => {
      res.end('Voilà la première réponse du server !');
});

server.listen(process.env.PORT || 3000);