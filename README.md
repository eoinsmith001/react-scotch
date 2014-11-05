# react-scotch #

This is me doing the tutorial from [scotch](http://scotch.io/tutorials/javascript/learning-react-getting-started-and-concepts)

## Running ##

There are several ways to display the simple webpage in a browser.  Here they are, from most basic onwards.

### Python server ###

You almost certainly have Python installed.  If so,

	python -m SimpleHTTPServer 8081

will serve from the directory

### Node `http-server` ###

You can use Node's version of a simple HTTP Server, though you may have to install it first:

	# install if necessary
	npm install http-server -g
	# serve from current directory
	http-server

### The provided Node `server.js` ###

There is included a `package.json` and `server.js` file which make this project "runnable" as a mini-web-app.

	npm install
	node server.js

Add auto-refresh of content, if you have `nodemon` installed

	npm install -g nodemon
	nodemon server.js

### The provided Express Server ###

Getting more and more complex, there is included a server script which uses the [Express](http://expressjs.com/) framework.

	npm install
	node express_server.js
	# or you could use, for auto-refresh
	# nodemon express_server.js


