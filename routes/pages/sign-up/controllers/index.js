var express = require('express');
var router = express.Router();

router.get('/', main)

function main(req, res, next){
    res.render('pages/sign-up', { 
        title: 'sign-up'
    });
}

module.exports = router