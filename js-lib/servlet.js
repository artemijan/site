/**
 * Created by artem on 12/2/14.
 */

'use strict';
/*global exports, require, module*/
var log = require('./log')(module),
    Item = require('./database').Item;//,
//Categories = require('./libs/database').Categories;
var onError = function (res, err) {
    log.error('Internal error(%d): %s', res.statusCode, err.message);
    return res.send(500, 'Item not saved!' + err.message);
};

function initServlet(app) {
    app.get('/', function (req, res) {
        res.render('index.jade', function (err, html) {
            res.send(200, html);
        }, onError);
    });
    app.get('/getAllItems',function(req,res){
        Item.find(function (err, items) {
            res.json(items);
        });
    });
    // We define a new route that will handle bookmark creation
    app.post('/addItem', function (req, res) {
        var item = new Item({
            name: req.body.name,
            count: req.body.count,
            country: req.body.country
        });
        item.categories.create({
            name: req.body.categories || 'unknown'
        }, function (err) {
            if (!err) {
                item.save(function (err) {
                    if (!err) {
                        log.info("item saved");
                        return res.json({"status":"ok"});
                    }
                    onError(res, err);
                });
            } else {
                onError(res, err);
            }
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
                    return res.json({"status":"ok"});
                }
                onError(res, err);
            })
        });
    });
}

exports.initServlet = initServlet;
