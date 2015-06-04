var redis = require('redis');
var client = redis.createClient('6379','edb1i'); //creates a new client
client.set('framework', 'AngularJS', function(err, reply) {
  console.log(reply);

});

client.get('framework', function(err, reply) {
    //console.log(reply);
});

client.on('message',function(channel ,message){
                console.log(message);
                console.log(channel);
});
getUserFeatureMap('framework',function(data){
	console.log('returnvalues'+ data);
});

//var getFeat = getUserFeatureMap('framework');
//console.log('getFeat' + getFeat);


function getUserFeatureMap (username,callback) {
     getRclientValues(username,'getUserFeatureMap',function(data){
	callback(data);
	});
}

function getRclientValues(key,name,callback){
	
    client.get(key,function(err,data){
                console.log(name+'  for '+key);
                console.log('data is'+ data);
		callback(data);
        });
}

