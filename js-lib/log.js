/**
 * Created by artem on 12/4/14.
 */

'use strict';
/*global require, module*/
var winston = require('winston');
function getLogger(module) {
    var path = module.filename.split('/').splice(-2).join('/');
    return new winston.Logger({
        transports: [
            new winston.transports.Console({
                colorize: true,
                level: 'debug',
                label: path
            })
        ]
    });
}
module.exports = getLogger;
