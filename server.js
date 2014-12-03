var http = require('http'),
    express = require('express'),
    app = express(),
    sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database('bookstore'),
    servlet = require('./js-lib/servlet'),
    dbWorker = require('./js-lib/db-worker');
/*global require, __dirname, express, process*/
/* We add configure directive to tell express to use Jade to
   render templates */
app.configure(function() {
    app.set('views', __dirname + '/public/html');
    app.engine('.html', require('jade').__express);
    // Allows express to get data from POST requests
    app.use(express.bodyParser());
    app.use(express.static(__dirname +'/public'));
});
dbWorker.init(db);
servlet.initServlet(app, dbWorker);
/* This will allow Cozy to run your app smoothly but
 it won't break other execution environment */
var port = process.env.PORT || 8080;
var host = process.env.HOST || "127.0.0.1";

// Starts the server itself
var server = http.createServer(app).listen(port, host, function() {
    console.log("Server listening to %s:%d within %s environment",
                host, port, app.get('env'));
});