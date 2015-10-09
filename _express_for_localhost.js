var express = require("express")
var http = require('http');

var app = express();
app.use(express.static(__dirname));
app.use("/demo", express.static(__dirname));

var port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
server.on('error', onError);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error('Port ' + port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('Port ' + port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}