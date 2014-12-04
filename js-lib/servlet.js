/**
 * Created by artem on 12/2/14.
 */

'use strict';
/*global exports, require, module*/
var log = require('./log')(module),
    Item = require('./database').Item;//,
//Categories = require('./libs/database').Categories;
var onError = function (res) {
    log.error('Error');
    res.send(500, "An error has occurred -- ");
};

function initServlet(app) {
    app.get('/', function (req, res) {
        Item.find(function (err, items) {
            if (!err) {
                res.render('index.jade', {items: items}, function (err, html) {
                    res.send(200, html);
                }, onError);
            }
        });
    });
    // We define a new route that will handle bookmark creation
    app.post('/add', function (req, res) {
        var item = new Item({
            name: req.body.name,
            count: req.body.count,
            country: req.body.country
        });
        item.save(function (err) {
            if (!err) {
                log.info("item saved");
                return res.redirect('back');
            }
            log.error('Internal error(%d): %s', res.statusCode, err.message);
            return res.send(500, 'Item not saved!'+ err.message);
        });
    });

    // We define another route that will handle bookmark deletion
    app.get('/delete/:id', function (req, res) {
        Item.findById(req.params.id, function (err, item) {
            if (!item) {
                return res.send(404, 'record not found');
            }
             return item.remove(function (err) {
                if (!err) {
                    log.info("article removed");
                    return res.redirect('back');
                }
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send(500, 'Error while deleting record');
            })
        });
    });
}

exports.initServlet = initServlet;
