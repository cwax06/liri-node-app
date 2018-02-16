// require modules______________________________________________
var keys = require('./keys');
var Twitter = require('twitter');
// end require modules__________________________________________

// initialize the client from the twitter package
var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});

// constructor for main object to export________________________
function MyTwitter() {
    var self = this;
    self.client = client;

    // main functions
    self.printRecentTweets = function (count, cb) {
        // this method will get the past X number of tweets where
        // x will be equal to count
        client.get('statuses/home_timeline', {
            count: count
        }, function (error, tweets, response) {
            if (!error) {
                self.prettyPrintTweets(tweets);
            } else {
                console.log(error);
            }
            if (cb) {
                cb(error, tweets);
            }
        });
    }
    self.prettyPrintTweets = function (tweets) {
        // this will log the tweets in a nice format
        console.log('\n\n');
        console.log('Tweet Timeline, Past ' + tweets.length + ' tweets.');
        console.log('----------------------------------------------------------------------------------');
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
            console.log('@' + tweets[i].user.screen_name);
            console.log('Tweeted at: ' + tweets[i].created_at);
            console.log('Retweet Count: ' + tweets[i].retweet_count);
            console.log('__________________________________________________________________________________');
        }
    }
    self.tweet = function (message, cb) {
        // this will tweet whatever the message is to the user that is authenticated aka me.
        client.post('statuses/update', {
            status: message
        }, function (error, tweet, response) {
            // tweet - Tweet body.
            // response - Raw response object.
            if (cb) {
                cb(error, tweet);
            }
        });
    }
    // end main functions
}

// instantiate the object we are going to export
var myTwitter = new MyTwitter();
module.exports = myTwitter;