const express = require('express');
const router = express.Router();

router.get('/', main);

/**
 * main route
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {number} The sum of the two numbers
 */
function main(req, res, next) {
  if (config.env != 'production') {
    return res.status(403).send({
      msg: 'Página solamente permitida en production',
    });
  }
  res.render('pages/billing', {
    title: 'Billing',
    env: config.env,
    app_version: config.app_version,
  });
}

module.exports = router;
