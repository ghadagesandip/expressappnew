var db = require('../db');
var ObjectId = require('mongodb').ObjectID;

module.exports = {

    recent : function(cb){

        var collection = db.get().collection('news');
        collection.find().sort({'_id': -1}).limit(100).toArray(function(err, news) {
            cb(err, news);
        })

    },

    news : function(cb){
        var collection = db.get().collection('news');
        collection.find().toArray(function(err, news) {
            console.log('news', news);
            cb(err, news);
        })
    },

    add : function(data, cb){
        var collection = db.get().collection('news');
        collection.insertOne(data, function(err, result){
            cb(err, result);
        });
    },

    delete : function(id, cb){
        var collection = db.get().collection('news');
        collection.findOneAndDelete({_id : ObjectId(id)}, function(err, data){
            console.log(err,data)
            cb(err, data);
        })
    }

};
console.log('model loaded');