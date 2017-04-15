var stuffINeed = require("./keys.js");
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require("fs");

var client = new Twitter({
  consumer_key: 'UZML7pCxDydXqvxPJUkGgEVcJ',
  consumer_secret: 'J6qIghsra9Ok93XnFG2zInhC8jZNWFRBKa3mI5T2Ef5GdaGDBM',
  access_token_key: '3022902108-nFt7yzkLIroewTcLpxHcn83tZci4nOllEZF8hE2',
  access_token_secret: 'mgCbPEzu7IdLDs5qxa78rCGgKsPW1fcmVKNUWBIZZWcwV',
});




  switch(process.argv[2]){
    case "my-tweets":
      client.get('statuses/user_timeline', {screen_name: 'elonmusk'}, function(error, tweets, response) {
      console.log(JSON.stringify(tweets));
      });
      break;

    case "spotify-this-song":
      var song;
      var band;
      if(process.argv[3]===""){
    
      }else{
    	song = process.argv[3];
      }

      spotify.search({ type: 'track', query: song }, function(err, data) {
        if ( err ) {
          console.log('Error occurred: ' + err);
        return;
        }
        console.log(JSON.stringify(data));
      });
	  break;

    case "movie-this":
      request('http://www.omdbapi.com/?t='+process.argv[3], function (error, response, body) {
      var movie   = JSON.parse(body);
      });
      var title  = movie.Title;
      var year    = movie.Year;
      var rating  = movie.imdbRating;
      var country = movie.Country;
      var lang    = movie.Language;
      var plot    = movie.Plot;
      var actors  = movie.Actors;
      var rottenT = movie.Ratings[1]
      console.log('Title: '    +title+ '\n'
                 +'Year: '     +year +'\n'
                 +'Rating: '   +rating+'\n'
                 +'Country: '  +country+'\n'
                 +'Language: ' +lang+'\n'
                 +'Plot: '     +plot+'\n'
                 +'Actors: '   +actors+'\n'
                 +'Rotten Tomatoes Rating: '  +rottenT+'\n'
                 +'Rotten Tomatoes URL: '); 
  
      break;

    case "do-what-it-says":
      var song;
      fs.readFile("random.txt", "utf8", function(error, data) {
      var dataArr = data.split(",");
      var song =dataArr[1];
      return song;
      });

       spotify.search({ type: 'track', query: song }, function(err, data) {
        if ( err ) {
          console.log('Error occurred: ' + err);
        return;
        }
        console.log((typeof data));
      });
      break;
  }


