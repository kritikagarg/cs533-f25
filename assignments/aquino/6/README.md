 # Assignment 6 Submission

 ## Assignment Description
This assignment demonstrates how an [express server](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/Server.js) can be used to fingerprint browsers, recognizing clients when they return. 

When the server interacts with a client, it generates an md5 hash based on the 'user-agent', 'accept', and 'accept-language' headers. This hash serves as an identifier, and is first used to determine if it is a new client or a returning client by comparing the client's hash to the list of client hashes in [userLog.json](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/userLog.json). If its hash matches any of the hashes in the user logs, then the server recognizes it as a returning client, and otherwise recognizes it as a new client. 

When a new client visits, its headers and hash are recorded in the user logs, and its visit count set to one. 
![image alt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/Screenshots/Firefox-first.png)

When a returning client visits, its visit count is simply incremented by one. In addition, the server outputs text to indicate to the user if they are new or returning, and also their number of visits. 
![image alt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/Screenshots/Firefox-revisit.png)


The server is also able to recognize the browser being used by recognizing the hash of the client and using the appropriate HTML file.

Ex. Chrome
![image alt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/Screenshots/Chrome-example.png)

Ex. Opera
![image alt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/Screenshots/Opera-example.png)

Ex. Curl
![image alt](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/Screenshots/curl-example.png)


## Included Files
The directory [6](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/6/) contains all of the files used in this assignment. 
* [Server.js](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/Server.js): Javascript file which runs the server and fingerprinting algorithm.
* [userLog.json](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/userLog.json): JSON file that holds records each client.
* [HTMLs Directory](https://github.com/jaqui004/cs533-f25/tree/main/assignments/aquino/6/HTMLs): This directory includes all of the HTML files that can be served to the user. The HTML used depends on the browser.
    - [indexBrave.html](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/HTMLs/indexBrave.html): Used for the Brave browser.
    - [indexChrome.html](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/HTMLs/indexChrome.html): Used for the Google Chrome browser.
    - [indexCurl.html](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/HTMLs/indexCurl.html): Used for the curl.
    - [indexEdge.html](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/HTMLs/indexEdge.html): Used for the Microsoft Edge browser.
    - [indexFirefox.html](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/HTMLs/indexFirefox.html): Used for the Firefox browser.
    - [indexOpera.html](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/HTMLs/indexOpera.html): Used for the Opera browser.
    - [indexUnknown.html](https://github.com/jaqui004/cs533-f25/blob/main/assignments/aquino/6/HTMLs/indexUnknown.html): Used for everything else.

 # Video Demonstration

The video showing the demonstration of the servers can be found [here](https://youtu.be/mRlhFzWzxJc).
