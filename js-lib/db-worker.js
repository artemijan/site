/**
 * Created by artem on 12/2/14.
 */
/*global exports*/
var database, worker = {},
    error = function (err, callback) {
        if (callback) {
            callback(err);
        }
    },
    success = function (arg, callback) {
        if (callback) {
            callback(arg);
        }
    };
worker.init = function (db) {
    database = db;
    var initSQL = "SELECT name FROM sqlite_master WHERE type='table' AND name='bookmarks'";
    // Database initialization
    database.get(initSQL, function (err, row) {
        if (err !== null) {
            console.log(err);
        }
        else if (row == null) {
            database.run('CREATE TABLE "bookmarks" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "title" VARCHAR(255), url VARCHAR(255))', function (err) {
                if (err !== null) {
                    console.log(err);
                }
                else {
                    console.log("SQL Table 'bookmarks' initialized.");
                }
            });
        }
        else {
            console.log("SQL Table 'bookmarks' already initialized.");
        }
    });
};
worker.getAllBooks = function (onSuccess, onError) {
    database.all('SELECT * FROM bookmarks ORDER BY title', function (err, row) {
        if (err !== null) {
            error(err, onError);
        }
        else {
            success(row, onSuccess);
        }
    });
};
worker.addBook = function (book, onSuccess, onError) {
    var sqlRequest = "INSERT INTO 'bookmarks' (title, url) VALUES('" + book.title + "', '" + book.author + "')";
    database.run(sqlRequest, function (err) {
        if (err !== null) {
            error(err, onError);
        }
        else {
            success(null, onSuccess);
        }
    });
};
worker.deleteBookById = function (id, onSuccess, onError) {
    database.run("DELETE FROM bookmarks WHERE id='" + id + "'", function (err) {
        if (err !== null) {
            error(err, onError);
        }
        else {
            success(null, onSuccess);
        }
    });
};
for (var key in worker) {
    if (worker.hasOwnProperty(key)) {
        exports[key] = worker[key];
    }
}