// require packages_____________________________________________
var Spotify = require('node-spotify-api');
var keys = require('./keys');
// end require packages_________________________________________

var spotify = new Spotify({
    id: keys.spotifyKeys.client_id,
    secret: keys.spotifyKeys.client_secret
});

// cunstructor for object to export_____________________________
function MySpotify() {
    var self = this;
    // main functions
    self.printSongs = function (term) {
        spotify.search({
            type: 'track',
            query: term
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            self.prettyPrintSongs(data.tracks.items);
        });
    }
    self.prettyPrintSongs = function (tracks) {
        console.log('\n\n');
        console.log('Spotify Results');
        console.log('---------------------------------------------------------');
        for (var i = 0; i < tracks.length; i++) {
            var artists = [];
            for (var j = 0; j < tracks[i].artists.length; j++) {
                artists.push(tracks[i].artists[j].name);
            }
            console.log('Song Title: ' + tracks[i].name);
            console.log('Atrist(s): ' + artists.join(', '));
            console.log('Album: ' + tracks[i].album.name);
            console.log('Preview Link: ' + tracks[i].preview_url);
            console.log('_________________________________________________________');

        }
    }
}

// Create object to export
var mySpotify = new MySpotify();
module.exports = mySpotify;