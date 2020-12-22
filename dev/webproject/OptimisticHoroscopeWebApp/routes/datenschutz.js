var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('datenschutz', { title: gConfig.app_name, website_contact_name: gConfig.website_contact_name , app_name: gConfig.app_name});
});

module.exports = router;
