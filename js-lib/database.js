/**
 * Created by artem on 12/2/14.
 */
'use strict';
/*global require, module*/
var mongoose = require('mongoose'),
    log = require('./log')(module),
    config = require('./config');
mongoose.connect(config.get('mongoose:uri'));
var db = mongoose.connection;
db.on('error', function (err) {
    log.error('connection error: ' + err);
});
db.once('open', function callback() {
    log.info('Successfully connected to database!');
});
/**
 * Schemas
 */
var Schema = mongoose.Schema,
    ObjectIdSchema = Schema.ObjectId,
    ObjectId = mongoose.Types.ObjectId;
var Item = new Schema({
        name: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            min:0,
            max:1000000,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }),
    Category = new Schema({
        name: {
            type: String,
            required: true
        },
        items: [Item],
        description: {
            type: String,
            required: false
        }
    });
function validateFieldLength(v) {
    return v.length > 3 && v.length < 70;
}
Item.path('name').validate(function (v) {
    return validateFieldLength(v);
});
Item.path('country').validate(function(v){
    return validateFieldLength(v);
});
module.exports.Categories = mongoose.model('Category', Category);
module.exports.Item = mongoose.model('Item', Item);

