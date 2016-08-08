Hackers = new Mongo.Collection('Hackers');

if(Meteor.isServer)
{
	Meteor.publish(
		'Hackers', function(){
			return Hackers.find({'allegiance':'White Hat'});
		}

	);

}