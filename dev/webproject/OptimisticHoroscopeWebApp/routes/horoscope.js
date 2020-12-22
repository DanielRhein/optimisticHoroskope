const Router = require('express-promise-router');
var expressPromiseRouter = new Router();
var path = require('path');
const article = require('../db/sequelize');
const { Op } = require("sequelize");
//md5 to html converter
var showdown  = require('showdown');
var footnotes = require('showdown-footnotes');
showdown.setOption('tables',true);
showdown.setOption('omitExtraWLInCodeBlocks',true);
showdown.setOption('parseImgDimensions', true);
showdown.setOption('literalMidWordUnderscores', true);
showdown.setOption('strikethrough', true);
showdown.setOption('ghCodeBlocks', true);
showdown.setOption('tasklists', true);
showdown.setOption('smoothLivePreview', true);
showdown.setOption('encodeEmails', true);
var converter = new showdown.Converter({noHeaderID:true,extensions: [footnotes]});

/* GET home page. */
expressPromiseRouter.get('/:id', async function(req, res, next) {
  console.log("Going into id function");
  if (req.params.id == 0)
  {
    res.render('<h1> not found <h1>');
  }
  console.log("Parameter is set to "+req.params.id);
  var id = req.params.id;
  //var fs = require('fs');
  //let latestThema  = await article.findOne({ where: { [Op.or]: [ {en_id:{ [Op.eq]: id }}, { de_id: { [Op.eq]: id}}]}, order:[['published','DESC']], limit:1});  console.log(latestThema);
  //var filepath = path.join(__dirname,"..","articles",req.params.id+".md");
  //if (latestThema!=undefined)
  //{
  //  var file = fs.readFileSync(filepath, "utf8");
  //  fs.close
  //  let html      = converter.makeHtml(file);
    res.render('horoscope',{ title: gConfig.app_name+' horoskop ',id: id, text: 'Everthing is fine', javanonce: nonce.getHash()});
  //}
  //else
  //{
//    res.sendStatus(404);
//  }
});

module.exports = expressPromiseRouter;
