var News = require('../model/news.js');


module.exports = {

    index : function(req, resp){

        News.recent(function(err, data){
            if(!err){
                resp.render('index', {'news' : data})
            }else{
                resp.render('index');
                resp.end();
            }
        });
    },

    all : function(req, resp){

        News.news(function(err, data){
            if(!err){
                console.log(data);
                resp.render('news', {'news' : data})
            }else{
                resp.render('news');
                resp.end();
            }
        });
    },

    create : function(req, resp){
        console.log('req.body', req.body);
        News.add(req.body, function(err, data){
            if(!err){
                console.log('added record');
                resp.redirect('/news');
                resp.end();
            }else{
                resp.redirect('/news');
                resp.end();
            }
        });
    },

    edit : function(req, resp){

            News.findById(req.params.id, function(err, data){
                console.log('news', data)
                resp.render('edit-news', {news: data})


                });
    },

    remove : function(req, resp){
        News.delete(req.params.id, function(err, date){
            console.log('status ',date);
            if(!err){
                resp.redirect('/news');
                resp.end();
            }else{
                console.log(err);
                resp.redirect('/news',{message : 'Sorry, could not delete news'});
                resp.end();
            }
        })
    },

    addNews : function(req, resp){
        resp.render('add-news');
        resp.end();
    },

    update : function(req, resp){
        News.updateRecord(req.params.id, req.body, function(err, data){
            if(!err){
                resp.redirect('/news');
                resp.end();
            }else{
                resp.render('edit-news');
            }
        });
    }
};

console.log('controller loaded');