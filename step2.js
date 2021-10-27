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

//create a function named webCat that takes in a url and use axios to read the url and print the contents of the url to the console
function webCat(url) {
    let axios = require('axios');
    axios.get(url).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    });
}

//check if first command line argument is a url
if (process.argv[2].startsWith('http')) {
    //call the function and pass in the first command line argument
    webCat(process.argv[2]);
}else{
    //call the cat function and pass in the first command line argument
    cat(process.argv[2]);
}