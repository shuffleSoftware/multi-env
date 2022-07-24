var express = require('express');
var router = express.Router();

router.get('/', main)

function main(req, res, next){
    res.status(200).send({msg:'ok'})
}

module.exports = router