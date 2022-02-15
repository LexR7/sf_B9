const http = require('http');
const path = require('path');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
//  const filePath = request.url.substr(1);
  const filePath = path.join(__dirname+'/app/index.js');
  fs.readFile(filePath, function(error, data){
    if(error){
      rese.statusCode = 404;
      res.end("Resourse not found!");
    }
    else{
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

