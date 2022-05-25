const express = require('express');
const joivalidator = require('../middleware/joivalidator');
const router = express.Router();
const { getallusers, create, getUserbyID, deleteid, getASU ,update } = require('../postresDB/middleware');

router.get('/', getallusers, function (req, res) {});

router.get('/id/:id',getUserbyID,function (req, res) {});   

router.get('/getAST',getASU, function (req, res) {});

router.put('/:id',joivalidator,update, function (req, res) {});

router.post('/',joivalidator,create,function(req,res){});

router.delete('/delete/:id',deleteid ,function (req, res) {});

module.exports = router;
