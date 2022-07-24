var express = require('express');
var router = express.Router();

router.get('/', main)

function main(req, res, next){
    res.render('pages/billing', { 
        title: 'Billing'
    });
}

module.exports = router