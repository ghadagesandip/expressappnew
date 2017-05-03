var express = require('express');
var router = express.Router();
var news = require('./controllers/news.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
