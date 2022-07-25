const express = require('express');
const router = express.Router();
const fs = require('fs');

fs.readdir(`${__dirname}/pages`, (err, folders) => {
  if (err) console.log(err);
  else {
    folders.forEach((folder) => {
      router.use(
          `/${folder}`,
          require(`${__dirname}/pages/${folder}/controllers/`),
      );
    });
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    env: config.env,
    app_version: config.app_version,
  });
});

module.exports = router;
