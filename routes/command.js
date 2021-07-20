var express = require('express');
var router = express.Router();

const si = require('systeminformation'); //https://www.npmjs.com/package/systeminformation

const DUMMY_DATA = [
  {
    id: 'c1',
    title: 'Minecraft'
  }
  ,
  {
    id: 'c2',
    title: 'Tf2'
  }
  ,
  {
    id: 'c3',
    title: 'website'
  }
  ,
  {
    id: 'c4',
    title: 'website2'
  }
  ,
  {
    id: 'c5',
    title: 'FTP'
  }
  ,
  {
    id: 'c6',
    title: 'voip'
  }
  ,
  {
    id: 'c7',
    title: 'reboot'
  }
  ,
  {
    id: 'c8',
    title: 'WOOOOOOO'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send(DUMMY_DATA);
});

module.exports = router;
