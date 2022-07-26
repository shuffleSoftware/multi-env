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
  res.render('pages/profile', {
    title: 'profile',
    env: config.env,
    app_version: config.app_version,
  });
}

module.exports = router;
