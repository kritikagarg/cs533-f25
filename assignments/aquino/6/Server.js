const express = require('express');
const path = require('path');
const md5 = require('md5');
const fs = require('fs');
const port = 4000;

const userLog = require('./userLog.json');
const app = express();

// Get for the server location
app.get("/", async(request, response) =>{

    // List of headers to be used in the hash
    const headerList = ['user-agent', 'accept', 'accept-language'];
    let hash = '';
    headerList.forEach(currHeader =>{
        hash += request.headers[currHeader];
    });

    // Uses md5 and the list of headers to make a unique hash to identify different users
    const userHash = md5(hash);

    // In the event the user has not been seen before
    if(!userLog[userHash]){
        userLog[userHash] = {};

        // Add each header to the user log
        headerList.forEach(currHeader =>{
            userLog[userHash][currHeader] = request.headers[currHeader];
        });
        userLog[userHash]['visit-count'] = 1;

        // Output result to screen
        console.log('New visitor detected. Your new, unique user hash is: ' + userHash);
        response.write("<h1>Welcome, new visitor. Your unique user hash is: " + userHash.toString() + "<\h1>\n");
    }

    // In the event the user has been seen before
    else{
        // Increment the visit count and output result to screen
        userLog[userHash]['visit-count'] += 1;
        response.write("<h1>Welcome back. Your unique user hash is still: " + userHash.toString() + "<\h1>\n");
        console.log('Welcome back. Your user hash is still: ' + userHash);
    }

    // Output results to screen
    response.write("<h2>This user has visited " + userLog[userHash]['visit-count'] + " times<\h2>\n");

    // Updates the userLog.json file when visited
    fs.writeFile('userLog.json', JSON.stringify(userLog), error =>{
        if(error){
            console.log(error);
        }
        else{
            console.log('userLog.json updated');
        }
    })

    /*
    // Reads the Index.html file which is the page format for the root location
    fs.readFile('./HTMLs/Index.html', function(error, data){
        if(error){
            response.writeHead(404);
            response.write('Index.html cannot be found');
        }
        else{
            response.write(data);
        }
        response.end();
    });
    */

    // Uses a different html file based on the browser/method used
    const browser = userHash;
    switch(browser){

        // Case for firefox hash
        case "6bfd06efcc31fe159be1eb31eb84d7e7": {
            fs.readFile('./HTMLs/indexFirefox.html', function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Index.html cannot be found');
            }
            else{
                response.write(data);
            }
            response.end();
            });
        }
        break;

        // Case for edge hash
        case "307cac6c2ff03b98e914b9bdf6d107f7": {
            fs.readFile('./HTMLs/indexEdge.html', function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Index.html cannot be found');
            }
            else{
                response.write(data);
            }
            response.end();
            });
        }
        break;

        // Case for brave hash
        case "b650201ba42cf9033bdac1a7746850c6": {
            fs.readFile('./HTMLs/indexBrave.html', function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Index.html cannot be found');
            }
            else{
                response.write(data);
            }
            response.end();
            });
        }
        break;

        // Case for chrome hash
        case "b273d07444deffe20221f4aa55060eaf": {
            fs.readFile('./HTMLs/indexChrome.html', function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Index.html cannot be found');
            }
            else{
                response.write(data);
            }
            response.end();
            });
        }
        break;

        // case for curl hash
        case "ee36740ce321b42b2b3d5c9ee61c7f21": {
            fs.readFile('./HTMLs/indexCurl.html', function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Index.html cannot be found');
            }
            else{
                response.write(data);
            }
            response.end();
            });
        }
        break;

        // Case for opera hash
        case "8a27d452d1a5aee700e632961ead6902": {
            fs.readFile('./HTMLs/indexOpera.html', function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Index.html cannot be found');
            }
            else{
                response.write(data);
            }
            response.end();
            });
        }
        break;

        default: {
            fs.readFile('./HTMLs/indexUnknown.html', function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Index.html cannot be found');
            }
            else{
                response.write(data);
            }
            response.end();
            });
        }
    };
});


// Listens for server
app.listen(port, function(err){
    if(err){
        console.log('Error', err);
    }
    else{
        console.log('Request server is listening on localhost:' + port);
    }
})