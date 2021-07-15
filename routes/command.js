var express = require('express');
var router = express.Router();

const si = require('systeminformation'); //https://www.npmjs.com/package/systeminformation

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(501).send("501 Not Implemented");
});

module.exports = router;
