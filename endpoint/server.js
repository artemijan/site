/*global require, __dirname, module*/

'use strict';
var http = require('http'),
    express = require('express'),
    app = express(),
    servlet = require('./js-lib/servlet'),
    log = require('./js-lib/log')(module),
    config = require('./js-lib/config');
/* We add configure directive to tell express to use Jade to
 render templates */
app.configure(function () {
    app.set('views', './public/views');
    app.engine('.html', require('jade').__express);
    // Allows express to get data from POST requests
    app.use(express.bodyParser());
    app.use(express.static('./public'));
});
servlet.initServlet(app);
/* This will allow Cozy to run your app smoothly but
 it won't break other execution environment */

// Starts the server itself
var host = config.get('host'),
    port = config.get('port');
module.exports = {
    run: function () {
        http.createServer(app).listen(config.get('port'), config.get('host'), function () {
            log.info("Server listening to %s:%d within %s environment",
                host, port, app.get('env'));
        });
    }
};