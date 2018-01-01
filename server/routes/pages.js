const express = require('express');
const app = express();
const router = express.Router();

router.get('/', function(req, res){
	console.log('about route');
	res.send('In the about route');
});

module.exports = router;