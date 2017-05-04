var db = require('../db')

module.exports = {

    news : function(page, limit, cb){

        var collection = db.get().collection('news');
        collection.find().toArray(function(err, news) {
            console.log('news', news);
            cb(err, news);
        })
    }
};
console.log('model loaded');