// require packages_____________________________________________
var request = require('request');
// end require packages_________________________________________

// cunstructor for object to export_____________________________
function MyOMDB() {
    var self = this;
    // main functions
    self.printMovie = function (term) {
        var url = "https://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
        request(url, function (error, response, body) {
            if (!error) {
                self.prettyPrintMovie(JSON.parse(body));
            } else {
                console.log('There was an error: ' + error);
            }
        });
    }
    self.prettyPrintMovie = function (movie) {
        console.log('\n\n');
        console.log('Information on ' + movie.Title);
        console.log('----------------------------------------------------');
        console.log('Rated: ' + movie.Rated);
        console.log('Year: ' + movie.Year);
        if (movie.Ratings[0]) {
            console.log('IMDB Rating: ' + movie.Ratings[0].Value);
        }
        if (movie.Ratings[1]) {
            console.log('Rotten Tomatoes Rating: ' + movie.Ratings[1].Value);
        }
        console.log('Counrty Produced in: ' + movie.Country);
        console.log('Language: ' + movie.Language);
        console.log('Plot: ' + movie.Plot);
        console.log('Actors: ' + movie.Actors);
    }

}

// Create object to export
var myOMDB = new MyOMDB();
module.exports = myOMDB;