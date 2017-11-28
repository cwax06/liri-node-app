// At the top of the `liri.js` file, write the code you need to grab the data from keys.js. Then store the keys in a variable.

var Twitter = require('keys.js');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var params = { screen_name: 'nodejs' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});



// Make it so liri.js can take in one of the following commands:

   * `my-tweets`

    * `spotify-this-song`

    * `movie-this`

    * `do-what-it-says`


var twitterConsumerKey = keys.twitterKeys.consumer_key
var twitterConsumerSecret = keys.twitterKeys.consumer_secret
var twitterAccessTokenKey = keys.twitterKeys.access_token_key
var twitterAccessTokenSecret = keys.twitterKeys.access_token_secret

var client = new Twitter({
    consumer_key: twitterConsumerKey,
    consumer_secret: twitterConsumerSecret,
    access_token_key: twitterAccessTokenKey,
    access_token_secret: twitterAccessTokenSecret
});
