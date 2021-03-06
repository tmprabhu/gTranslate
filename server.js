process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require('express')
var bodyParser = require("body-parser");
const app = express()
const translate = require('google-translate-api');
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function (req, res) {
  res.send('Hello World!')
})
 app.post('/gTran', function(req , response){
		//res.send(req.body.message);
		response.header("Access-Control-Allow-Origin", "*");
		console.log("===>"+req.body.sMsg+"-"+req.body.fromL+"-"+req.body.toL);
		var sMsg = req.body.sMsg;
		var fromL = req.body.fromL;
		var toL = req.body.toL;
		translate(sMsg, {from:fromL,to: toL}).then(res => {
		//console.log(res.text);
		//=> I speak English
		//console.log(res.from.language.iso);
		//=> nl
		var tranMsg = '{"tMsg":"'+res.text+'","tLan":"'+res.from.language.iso+'"}';
		response.send(tranMsg);
		}).catch(err => {
			console.error(err);
		});
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})