var express = require('express');
var router = express.Router();

const si = require('systeminformation'); //https://www.npmjs.com/package/systeminformation

/* GET home page. */
router.get('/', function(req, res, next) {

  valueObject = {
    cpu: '*',
    osInfo: '*',
  }

  si.get(valueObject)
  //si.getStaticData()
  .then(data => res.send(data))
  .catch(error => res.send(error));
});

module.exports = router;
