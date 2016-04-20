
Parse.initialize('myAppId','masterKey');
Parse.serverURL = 'http://localhost:1337/parse';

//create a parse object
var obj = new Parse.Object('GameScore');

//set value of the 'score' field for this object
obj.set('score',1339);

//save the object
obj.save().then(function(obj) {
    
    //print the object to the console
    console.log(obj.toJSON()); 
    
    //now that we've created and saved an object,
    //let's query for it to make sure it's there
    var query = new Parse.Query('GameScore');
    
    //run query for the object ID we just created
    query.get(obj.id).then(function(objAgain) {
        
        //print the retrieved object to console
        console.log(objAgain.toJSON());
    
    },function(err) {
        console.log(err); 
    });
}, function(err) {
    console.log(err); 
});