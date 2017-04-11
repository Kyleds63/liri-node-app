switch(process.argv[2]){
	case "my-tweets":
      var q = '%40elonmusk';
      var result_type = 'recent';
      var count = 20;

      $.ajax({
      	url: 'https://api.twitter.com/1.1/search/tweets.json?q='+ q +'&result_type='+result_type+'&count='+count,
      	method: "Get"
        
      	})
        .done(function(data){
        	console.log(data)
        });
      
	  break;
	case "spotify-this-song":
	  console.log("sportify");
	  break;
	case "movie-this":
	  break;
	case "do-what-it-says":
	  break;
}
