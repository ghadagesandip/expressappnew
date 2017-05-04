var News = require('../model/news.js');


module.exports = {

    getNews : function(req, resp){

        var page = req.params.page ? req.params.page : 1;
        var limit = req.params.limit ? req.params.limit : 10;

        News.news(page, limit, function(err, data){
            if(!err){
                console.log(data)
                resp.render('index', {'news' : data})
            }else{
                resp.render('index');
                resp.end();
            }
        });

    }
};

console.log('controller loaded');