var MongoClient = require('mongodb').MongoClient;
var state = {
    db : null
};

module.exports = {
    
    connect : function (url, cb) {

        if (state.db) return cb();

        MongoClient.connect(url, function(err, db) {
            if (err) return cb(err)
            state.db = db;
            cb()
        });
    },

    get : function () {
        return state.db;
    },
    
    close : function (cb) {
        if(state.db){
            state.db.close(function(err, result){
                state.db = null;
                state.mode = null;
                cb(err);
            })
        }
    }
};

