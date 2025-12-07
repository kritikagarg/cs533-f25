## Assignment 7

### Breakdown

YouTube Link: https://youtu.be/QWydaExaYII

For this assignment, we were tasked to take a log-in page, host it locally, and pull user information from the login field on our local server. The website I chose to emulate was https://us.ovhcloud.com/auth/. 

### Resource Simulation 
In order to simulate phishing, I used the command `wget https://us.ovhcloud.com/auth/` to pull the login-page and its relevant resources and host it locally. While not a perfect duplicate, it is similar enough to fool the unsuspecting average user. Using `wget` gave me an unobfuscated `index.html` with obvious username and password fields, all encompassed in a `<form>` field and controlled with a single button. When searching for sites, the following criteria was required:
 * HTML needed to be unobfuscated
 * `wget` needed to be authorized (security would give 401 unauth errors)
 * Login could not require Two-Factor Authentication
 * Login needed to be a single, grouped username and password field rather than the more modern username input into a second password screen.

### User Exfiltration
Once the webpage was saved and packaged, I served it using express.js and added a script within the HTML that pulled the username and password input fields and discretely sent them to the server once the user clicked the "Log In" button. This data, once received by the server, is decompiled and written to a .log file for future use and exploitation. While this implementation simply overwrites the file, a better method would append user data to allow multiple user auth information to be stored.

<img width="659" height="266" alt="image" src="https://github.com/user-attachments/assets/4d5e6d0a-f023-4773-9d78-39ade5344f43" />
<br />^ HTML Script that sends user information to remote server ^
<br />
<img width="659" height="266" alt="image" src="https://github.com/user-attachments/assets/0eeb426e-72d4-4ba4-b154-aebcf82206c5" />
<br />^ Remote server endpoint that writes user data to a log file ^
