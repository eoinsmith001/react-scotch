// set up 
var express  = require( 'express' );
var app      = express();
var port     = process.env.PORT || 8081;

// config ---------------------------------------------------

// set static files location - /public/img will be /img for users
app.use( express.static( __dirname ) );
require('./app/routes.js')(app);

// listen ---------------------------------------------------
app.listen( port );
console.log( 'app listening on port %d', port );
