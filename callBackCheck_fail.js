var redis = require('redis');
var client = redis.createClient('6379','edb1i'); //creates a new client
client.set('framework', 'AngularJS', function(err, reply) {
  console.log(reply);

});


client.on('message',function(channel ,message){
                console.log(message);
                console.log(channel);
});

var getFeat = getUserFeatureMap('framework');
console.log('getFeat' + getFeat);


function getUserFeatureMap (username) {
     getRclientValues(username,'getUserFeatureMap');
}

function getRclientValues(key,name){
	
    client.get(key,function(err,data){
                console.log(name+'  for '+key);
                console.log('data is'+ data);
		return data;
        });
}

