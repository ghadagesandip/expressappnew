var express = require('express'),
    router = express.Router(),
    newsCtrl = require('../controllers/news.js');


/* GET home page. */
router.get('/add-news', newsCtrl.addNews);

router.get('/', newsCtrl.all);
router.post('/', newsCtrl.create);
router.post('/:id', newsCtrl.remove);
router.get('/edit/:id', newsCtrl.edit);
router.post('/update/:id', newsCtrl.update);


module.exports = router;
