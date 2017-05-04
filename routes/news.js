var express = require('express'),
    router = express.Router(),
    newsCtrl = require('../controllers/news.js');


/* GET home page. */
router.get('/add-news', newsCtrl.addNews);

router.get('/', newsCtrl.all);
router.post('/', newsCtrl.create);
router.post('/:id', newsCtrl.remove);


module.exports = router;
