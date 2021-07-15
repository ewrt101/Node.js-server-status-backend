var express = require('express');
var router = express.Router();

const si = require('systeminformation'); //https://www.npmjs.com/package/systeminformation

/* GET home page. */
router.get('/', function(req, res, next) {

  valueObject = {
    time: 'uptime',
    mem: 'total, free, used, active, available',
    currentLoad: 'currentLoad, avgLoad',
    fsSize: '*',
    cpuTemperature: '*',
    networkStats: 'rx_sec, tx_sec'
    
  }

  si.get(valueObject)
  .then(data => res.send(data))
  .catch(error => res.send(error));
});

module.exports = router;
