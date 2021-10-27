import { writeFile, readFile } from 'fs';

function handleData(data, outPutFile) {
    if (outPutFile) {
        writeFile(outPutFile, data, function (err) {
            if (err) {
                console.log(err);
                process.exit(1);
            }
        });
    } else {
        console.log(data);
    }
}
//create a function named cat that takes in a path and reads the file in that path then prints the contents of the file to the console
function cat(path,outPutFile) {
    readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error(err.message);
            process.exit(1);
        }
        // console.log(data);
        handleData(data,outPutFile);
    });
}

//create a function named webCat that takes in a url and use axios to read the url and print the contents of the url to the console
function webCat(url,outPutFile) {
    let axios = require('axios');
    axios.get(url).then(function (response) {
        // console.log(response.data);
        handleData(response.data,outPutFile);
    }).catch(function (error) {
        console.log(error);
    });
}

let path = "";
let outPutFile = "";

//check if first command line argument is a url
if (process.argv[2] =="--out"){
    outPutFile = process.argv[3];
    path = process.argv[4];
}else{
    path = process.argv[2];
}

if(path.startsWith("http")){
    webCat(path,outPutFile);
}
else{
    cat(path,outPutFile);
}