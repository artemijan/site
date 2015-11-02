/**
 * Created by artem on 2/23/15.
 */
/*global require, module*/
var User = {
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
};
module.exports.User = User;