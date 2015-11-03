/*global require, __dirname, module*/

'use strict';
var http = require('http'),
    express = require('express'),
    app = express(),
    servlet = require('./js-lib/servlet'),
    log = require('./js-lib/log')(module),
    config = require('./js-lib/config'),
    session = require('express-session');
/* We add configure directive to tell express to use Jade to
 render templates */
var unsavePaths = {'/': ['GET'], '/user/add': ['POST']};

app.configure(function () {
    app.set('views', './public/views');
    app.engine('.html', require('jade').__express);
    // Allows express to get data from POST requests
    app.use(express.bodyParser());
    app.use(express.static('./public'));
    app.use(session({path: '/', httpOnly: true, secret: 'super secret key', cookie: {maxAge: 360000}}));
    app.use(function (req, res, next) {
        if (!unsavePaths[req.url] || (unsavePaths[req.url].length > 0 && unsavePaths[req.url].indexOf(req.method) == -1)) {
            if (req.session.logedIn !== true) {
                res.send(403, {message: 'Access denied. Please login into the system.'});
            }
        } else {
            next();
        }
    });
});
servlet.initServlet(app);
/* This will allow Cozy to run your app smoothly but
 it won't break other execution environment */

// Starts the server itself
var host = config.get('host'),
    port = config.get('port');
http.createServer(app).listen(config.get('port'), config.get('host'), function () {
    log.info("Server listening to %s:%d within %s environment",
        host, port, app.get('env'));
});