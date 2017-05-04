var express = require('express'),
    router = express.Router(),
    newsCtrl = require('../controllers/news.js');


/* GET home page. */
router.get('/', function(req, res) {
  newsCtrl.getNews(req, res);
});


module.exports = router;
