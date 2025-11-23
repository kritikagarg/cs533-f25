## Assignment 6

### Breakdown
For this assignment, we were tasked to fingerprent browsers across my network. To do this, I created an Express server that served a single index.html file. Once a browser communicated with that server, a check was made to see whether or not that browser had interacted with the server before or not. 

If it did not previously interact with the server:
* A random number (called a User ID, or UID) was generated on the browser side and saved to localstorage as "user-id"
* That UID was sent to the server via API call at the /capture/:uid endpoint
* The UID is used with a couple other http headers from that browser to create a hashed UID
* This hashed value is saved as a JavaScript map on the server, with its value being a dictionary of characteristics stored on the server

After this is done, if a browser revisits the server address, the following occurs:
* The UID is pulled from localstorage and sent to the server
* The server hashes the UID and http headers, creating the hashed UID
* The server pulls the user data correlating to that hashed UID and sends it as a response to the client.
* The html webpage changes with the information provided from the server

### Testing Hardware/Software

I used six different browser instances across three clients:
* Ubuntu Linux Laptop: Firefox Private, Google Chrome Private
* Windows 11 Desktop: Firefox, Microsoft Edge
* Pixel 7 (Android) Phone: Firefox (not shown), Chrome

### Screenshots

Desktop Firefox:
<img width="1280" height="719" alt="image" src="https://github.com/user-attachments/assets/e24b9da9-607a-4613-a79d-8e8d80d82eae" />

Desktop Edge (First Visit):
<img width="1280" height="719" alt="image" src="https://github.com/user-attachments/assets/746cec88-fb49-450c-bdf3-883291455270" />

Desktop Edge (Second Visit):
<img width="1280" height="719" alt="image" src="https://github.com/user-attachments/assets/b50a942d-fb02-4c4f-8c29-34393c685bab" />

Android Chrome (First Visit):
<img width="591" height="1280" alt="image" src="https://github.com/user-attachments/assets/46138c05-96a2-4a9b-be3e-1b39256e6d47" />

YouTube Link: https://www.youtube.com/watch?v=cW6zPad3epQ
