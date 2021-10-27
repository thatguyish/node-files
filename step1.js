//create a function named cat that takes in a path and reads the file in that path then prints the contents of the file to the console
function cat(path) {
    var fs = require('fs');
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error(err.message);
            process.exit(1);
        }
        console.log(data);
    });
}

//call the function and pass in the first command line argument
cat(process.argv[2]);
