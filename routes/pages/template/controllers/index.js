var express = require('express');
var router = express.Router();

router.get('/', main)

function main(req, res, next){
    res.render('pages/template', { 
        title: 'template'
    });
}

module.exports = router