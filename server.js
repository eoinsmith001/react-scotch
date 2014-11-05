var port     = process.env.PORT || 8081;
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port);
console.log( "listening on port: %d", port );
