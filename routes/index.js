var express = require('express'),
    router = express.Router(),
    newsCtrl = require('../controllers/news.js');


/* GET home page. */
router.get('/', newsCtrl.index);


module.exports = router;
