var express = require('express');
var router = express.Router();
var env = require("../config/env")
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res) {
  var data = new Date().toISOString().substring(0,16)
  axios.get(env.apiAccessPoint)
  .then(response => {
    res.render('index', {plantas: response.data, d: data})
  })
  .catch(erro => {
    res.render('error', {error: erro})
  })
});

router.get('/:id', function(req, res) {
  var data = new Date().toISOString().substring(0,16)
  axios.get(env.apiAccessPoint + "/" + req.params.id)
  .then(response => {
    res.render('planta', {p: response.data, d: data})
  })
  .catch(erro => {
    res.render('error', {error: erro})
  })
});

router.get('/especies/:id', function(req, res) {
  var data = new Date().toISOString().substring(0,16)
  axios.get(env.apiAccessPoint + "?especie=" + req.params.id)
  .then(response => {
    res.render('especies', {plantas: response.data, d: data})
  })
  .catch(erro => {
    res.render('error', {error: erro})
  })
});

module.exports = router;
