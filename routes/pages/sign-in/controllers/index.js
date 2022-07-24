const express = require('express');
const router = express.Router();

router.get('/', main);

/**
 * main route
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function main(req, res, next) {
  res.render('pages/sign-in', {
    title: 'sign-in',
  });
}

module.exports = router;
