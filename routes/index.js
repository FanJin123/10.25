var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
 	res.header('Access-Control-Allow-Origin','*')
 	var temp=''
 	switch(req.body.abc){
 		case "1":
 		temp=[1,2,3]
 		break;
 		case "2":
 		temp=[4,5,6]
 		break;
 	}
 	res.send([temp]);
});
module.exports = router;
