const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from users where username='" +user.username+ "' and password='"+ user.password +"'";
		db.getResults(sql, function(results){
			//console.log(results.username);

			if(results.length >0 ){

				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getById: function(id, callback){

	},
	getAll: function(callback){
		var sql = "select * from campaigns";
		db.getResults(sql,function(results){
			callback(results);
		});
	},
	insert: function(campaign, callback){
	var sql	="INSERT INTO campaigns(uid,target_fund,raised_fund, ctype,description,image,publisedDate,endDate,status,title) VALUES ('"+campaign.uid+"','"+campaign.target_fund+"','"+campaign.raised_fund+"','"+campaign.ctype+"','"+campaign.description+"','"+campaign.image+"','"+campaign.Publish_date+"','"+campaign.endDate+"','"+campaign.status+"','"+campaign.title+"')";
	//	var sql = "INSERT INTO campaigns (uid,target_fund,raised_fund,ctype,description,image,publisedDate,endDate,status,title)VALUES ('" +campagions.uid+ "' ,'"+ campagions.target_fund +"','"+ campagions.raised_fund +"','"+ campagions.ctype +"','"+ campagions.description +"','"+ campagions.image +"','"+ campagions.Publish_date+"','"+ campagions.endDate +"','"+ campagions.status +"','"+ campagions.title +"'";
		//console.log(campagions);
		//var sql = "INSERT INTO campaigns(uid,target_fund,raised_fund,ctype,description,image,publisedDate,endDate,status,title) VALUES ?";
	//	db.execute(sql, [campagions.uid ,campagions.target_fund ,campagions.raised_fund ,campagions.ctype , campagions.description , campagions.image , campagions.Publish_date, campagions.endDate , campagions.status , campagions.title], function(results){
			db.execute(sql,function(status){
				callback(status);
			
		});
		

	},
	getbyName: function(user,callback){
		var sql = "select * from users where username='" +user.username+ "' and password='"+ user.password +"'";
		db.getResults(sql,function(results){
			callback(results);
		});
	},
	update:function(user, callback){
		var sql="update campaigns set uid='"+user.uid+"', target_fund='"+user.target_fund+"', raised_fund='"+ user.raised_fund +"',ctype='"+ user.ctype +"',description='"+ user.description +"',image='"+ user.image +"',publisedDate='"+ user.Publish_date+ "',endDate='"+user.endDate+"',status='"+user.status+"',title='"+user.title+"' where id= '"+ user.c_id +"'  ";
		db.execute(sql,function(status){
				callback(status);
			
		});
	},
	delete: function(user, callback){
		var sql="delete from campaigns where id ='"+user.c_id+"' ";
			db.execute(sql,function(status){
				callback(status);
			
		});
	}
}