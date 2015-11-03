/**
 * Created by artem on 11/3/15.
 */
/*global module, require*/
var User = require('../database').User,
    log = require('../log')(module),
    util = require('../util')(log);
module.exports = function (app) {
    /**
     * User list
     */
    app.get('/users', function (req, res) {
        User.find(function (err, users) {
            res.json(users);
        });
    });
    /**
     * get user by id
     */
    app.get('/user/:id', function (req, res) {
        User.findById(req.params.id, function (err, user) {
            if (!err) {
                res.json(user);
            } else {
                util.onError(res, err);
            }
        });
    });
    /**
     * Post user
     */
    app.post('/user/add', function (req, res) {
        var user = new User({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        });
        user.save(function (err) {
            if (!err) {
                res.json(user);
            } else {
                util.onError(res, err);
            }
        });

    });
    /**
     * Delete user
     */
    app.delete('/user/:id', function (req, res) {
        User.findById(req.params.id, function (err, item) {
            util.deleteById(item, res);
        });
    });
    /**
     * Modify user
     */
    app.put('/user', function (req, res) {
        User.findById(req.body.id, function (err, user) {
            user.name = req.body.name;
            user.password = req.body.password;
            user.email = req.body.email;
            user.save(function (err) {
                if (!err) {
                    res.json(user);
                } else {
                    util.onError(res, err);
                }
            })
        })
    });
    app.post('/login', function (req, res) {
        User.find({name: req.body.name}, function (err, user) {
            if (err) {
                util.onError(res, err)
            } else if (user.length === 0) {
                util.onError(res, {message: 'Can\'t find account.'});
            } else if (req.body.password == user[0].password) {
                req.session.logedIn = true;
                res.json({status: 'OK', sessionId: req.session.sessionId});
            } else {
                util.onError(res, {message: 'Incorrect password.'});
            }
        })
    });
    log.info('User routes loaded');
};