var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('guest', { msg: '방명록 데이터 확인' });
});

module.exports = router;