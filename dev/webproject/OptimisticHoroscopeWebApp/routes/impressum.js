var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('impressum', { title: gConfig.app_name+' - Impressum', website_contact_name: gConfig.website_contact_name, website_contact_phone: gConfig.website_contact_phone, website_contact_email: gConfig.website_contact_email, website_contact_plz: gConfig.website_contact_plz, website_contact_city: gConfig.website_contact_city, website_contact_street: gConfig.website_contact_street, website_contact_routenumber: gConfig.website_contact_routenumber});
});

module.exports = router;
