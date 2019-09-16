var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employeeController');

/* GET users listing. */
router.get('/', employeeController.index);

module.exports = router;
