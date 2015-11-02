/**
 * Created by artem on 12/2/14.
 */
/*global require, module*/
var mongoose = require('mongoose'),
    log = require('./log')(module),
    config = require('./config');
require('mongo-relation');
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
var Schema = mongoose.Schema;
var Item = new Schema({
        name: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            min: 0,
            max: 1000000,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        categories: [{type: mongoose.Schema.ObjectId, ref: 'Category'}]
    }),
    Category = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: false
        },
        items: [{type: mongoose.Schema.ObjectId, ref: 'Item'}]
    });
Category.habtm('Item');
Item.habtm('Category');
function validateFieldLength(v) {
    return v.length > 3 && v.length < 70;
}
Item.path('name').validate(function (v) {
    return validateFieldLength(v);
});
Item.path('country').validate(function (v) {
    return validateFieldLength(v);
});
module.exports.Categories = mongoose.model('Category', Category);
module.exports.Item = mongoose.model('Item', Item);

