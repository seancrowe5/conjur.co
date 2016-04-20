
Parse.initialize('myAppId','masterKey');
Parse.serverURL = 'http://conjur-web.herokuapp.com/parse';

var obj = new Parse.Object('GameScore');
obj.set('score',1339);
obj.save().then(function(obj) {
  console.log(obj.toJSON());
  var query = new Parse.Query('GameScore');
  query.get(obj.id).then(function(objAgain) {
    console.log(objAgain.toJSON());
  }, function(err) {console.log(err); });
}, function(err) { console.log(err); });