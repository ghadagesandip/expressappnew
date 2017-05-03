var news  = require('./model/testinsert.js');
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/expressmyapp';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.close();
});

module.exports = {

    insertData : function(req, resp){

        news.add(req.body, function(err, data){
            if(!err){
                console.log('inserted ', data);
                res.render('index');
                resp.end();
            }
        })
    }
}