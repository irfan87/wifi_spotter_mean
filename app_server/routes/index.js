const express = require('express');
const router = express.Router();
const mainPageController = require('../controllers/main');

/* GET home page. */
router.get('/', mainPageController.index);

module.exports = router;
