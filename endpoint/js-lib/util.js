/**
 * Created by artem on 11/3/15.
 */
/*global module*/
module.exports = function (log) {
    var util = {};
    util.onError = function (res, err) {
        log.error('Internal error(%d): %s', res.statusCode, err.message);
        return res.send(500, err.message);
    };
    util.deleteById = function (item, res) {
        if (!item) {
            return res.send(404, 'record not found');
        }
        return item.remove(function (err) {
            if (!err) {
                log.info('Item deleted');
                return res.json({"status": "ok"});
            }
            util.onError(res, err);
        });
    };
    return util;
};
