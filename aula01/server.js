
// importa o módulo http
const http = require('node:http');
const hostname = '127.0.0.1'; //configura o ip
const port = 3000; //configura a porta

// utiliza o módulo http e chama a funçao createserver
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n teste');
});

// Intância do createServer e chama o listen() que sobe o servidor em um ip e uma porta
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});