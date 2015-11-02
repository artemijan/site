/**
 * Created by artem on 12/4/14.
 */
/*global require, module*/
var nconf = require('nconf');
nconf.argv()
    .env()
    .file({file: './endpoint/config.json'});
module.exports = nconf;