// require packages_____________________________________________
var fs = require('fs');
// end require packages_________________________________________

// constructor for object to export_____________________________
function MyFileReaderWriter() {
    var self = this;
    //functions
    self.readCSVFile = function (path, cb) {
        fs.readFile(path, "utf8", function (error, data) {
            if (!error) {
                var output = []; // this will be an array of rows
                var rowsTemp = data.split('\r\n');
                for (var i = 0; i < rowsTemp.length; i++) {
                    output.push(rowsTemp[i].split(','));
                }
            }
            cb(error, output);
        });
    }
}

// Create object to export
var myFileReaderWriter = new MyFileReaderWriter();
module.exports = myFileReaderWriter;