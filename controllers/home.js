const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		//console.log(users);
		next();
	}
});

router.get('/', (req, res)=>{
	var volenteer =	req.cookies['uname'];
	var id =	req.cookies['id'];
	res.render('home/index', {name: volenteer , id: id});
});

router.post('/', (req, res)=>{

	var campagions = {
		uid : req.cookies['id'],
		target_fund: req.body.target_fund,
		raised_fund: req.body.raised_fund,
		ctype		:  req.body.ctype,
		description	: req.body.description,
		image :  'false_image', //req.body.img
		Publish_date: req.body.Publish_date,
		endDate		: req.body.endDate,
		status : req.body.status,
		title :  req.body.title
		

	};
//console.log(campagions.description);

	userModel.insert(campagions, function(status){
		if(status){
			//res.cookie('uname', req.body.username);
			//res.redirect('/home');
			console.log('inserted');
		}else{
			//res.redirect('/login');
			console.log('not inserted');
		}
	});
});


router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/userlist', {users: results});
	});

})


module.exports = router;