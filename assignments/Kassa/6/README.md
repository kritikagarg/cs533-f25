# Assignment 6 — Browser Fingerprinting

## Links to Code
- server.js: [View on GitHub](https://github.com/dkass002/cs533-f25/blob/main/assignments/Kassa/6/server.js)  
- fingerprints.log: [View on GitHub](https://github.com/dkass002/cs533-f25/blob/main/assignments/Kassa/6/fingerprints.log)  
- clients directory: [View on GitHub](https://github.com/dkass002/cs533-f25/tree/main/assignments/Kassa/6/clients)  

## Fingerprinting Algorithm
My fingerprinting server uses four HTTP headers to generate a browser fingerprint:

- User-Agent  
- Accept-Language  
- DNT  

These values are combined and hashed using MD5 to create a unique fingerprint for each client.

## Fingerprint Screenshots
Here are six example fingerprints captured by the server:

![Fingerprint 1](screenshots/Screenshot%201.png)  
![Fingerprint 2](screenshots/Screenshot%202.png)  
![Fingerprint 3](screenshots/Screenshot%203.png)  
![Fingerprint 4](screenshots/Screenshot%204.png)  
![Fingerprint 5](screenshots/Screenshot%205.png)  
![Fingerprint 6](screenshots/Screenshot%206.png)  

> Note: The images are stored in the `screenshots/` folder in this repository.

## YouTube Demonstration
[Watch the video on YouTube](https://www.youtube.com/watch?v=ysgxfDSAMTg)
