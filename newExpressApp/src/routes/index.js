var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employeeController');

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.send({
    result: []
  });
});
router.get('/profile', function(req, res, next) {
  res.send({
    result: []
  });
});
router.get('/books', employeeController.index);

module.exports = router;
