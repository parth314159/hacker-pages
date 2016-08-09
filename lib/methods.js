Meteor.methods({
	
	'addhacker' : function(newhacker){
		Hackers.insert(newhacker);
	}

	});