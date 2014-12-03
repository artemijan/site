/**
 * Created by artem on 12/2/14.
 */
/*global exports, require*/
var DBWorker;
var onError = function (res) {
    res.send(500, "An error has occurred -- " + err);
};
function initServlet(app, db) {
    DBWorker = db;
    app.get('/', function (req, res) {
        DBWorker.getAllBooks(function (row) {
                res.render('index.jade', {books: row, title:'All books'}, function (err, html) {
                    res.send(200, html);
                });
            },
            onError);
    });
    // We define a new route that will handle bookmark creation
    app.post('/add', function (req, res) {
        var book = {
            title: req.body.title,
            author: req.body.author
        };
        DBWorker.addBook(book, function () {
            res.redirect('back');
        }, onError);
    });

    // We define another route that will handle bookmark deletion
    app.get('/delete/:id', function (req, res) {
        DBWorker.deleteBookById(req.params.id, function () {
            res.redirect('back');
        }, onError);
    });
};
exports.initServlet = initServlet;