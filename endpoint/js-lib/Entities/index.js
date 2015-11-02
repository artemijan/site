/**
 * Created by artem on 2/23/15.
 */
/*global require, module*/
var mongoose = require('mongoose'),
    log = require('../log')(module),
    config = require('../config');
require('mongo-relation');
/**
 * Define
 * @type {exports}
 */
var user = require('./User');
