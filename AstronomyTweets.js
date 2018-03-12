/*
Written by: Katie Kaupke
Date: 2018-03-11

Description: 
	1. Select a list of the top 100 tweets with a hashtag of your choice (Node.js) - #Astronomy
	
Node.js Version: v8.10.0
npm Version: v5.6.0

Requires npm install Twitter
*/

//let the user know it's starting
console.log("This is Major Tom to Ground Control: ");
//required 
var rocket = require('Twitter'); //Twitter library used
var crew = require('./config'); //Config file

//The Twitter object
var mission = new rocket(crew); 

//Search parameters for the 100 most recent #Astronomy tweets
var trajectory = {
q: '#Astronomy',
result_type: 'recent',
count: 100
} 

//Get the data
mission.get('search/tweets', trajectory, blastOff); 

//return the formatted data
var itinerary;

function blastOff(error, tweets, response) {

	for (i = 0; i < 100; i++) {
		
		try{
			itinerary = '\ntweet #' + (i + 1) + ', From: @' + tweets.statuses[i]['user']['screen_name'] 
							+ '\n' + tweets.statuses[i]['text'] + '\n' ;

		console.log(itinerary); //print out results 

		}catch(e){ //basic error handling

			console.log('This is Ground Control to Major Tom: Result ' + i + 'is not a valid tweet because of \n' + e);
		}

	}

} 







