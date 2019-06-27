var express = require('express');
var router = express.Router();
var itens = require('../controller/itens');

/* GET home page. */
router.get('/', itens.listar);
module.exports = router;
