# Assignment 5 – CS 433/533 Web Security (Fall 2025)

This assignment demonstrates CORS behavior (blocking and allowing JSON responses and custom headers) and Content-Security-Policy effects on iframe embedding. All files are located in directory **5** with subfolders **5.1**, **5.2**, and **5.3**.

---

## 5.1 – CORS: Blocking and Allowing JSON from Another Origin

Two Node.js servers were created:

- Server A (port 4000) serves the HTML page.
- Server B (port 4001) serves a JSON file containing my four favorite items from Assignment 2:
  - Jim Carrey
  - Grand Canyon
  - Harry Potter
  - The Matrix

### Blocking
When CORS headers are not present on Server B, the browser blocks the JSON response.  
Chrome DevTools shows the standard “Blocked by CORS policy” message.  
The HTML page displays an error.

### Allowing
After enabling:

Access-Control-Allow-Origin: http://localhost:4000

the browser successfully loads and prints the JSON response.  
Screenshots in this directory show both the blocked and allowed states.

---

## 5.2 – CORS: Blocking and Allowing Custom HTTP Response Headers

Server B was modified to send four custom headers:

X-CS533f25-favorite1: jim-carrey
X-CS533f25-favorite2: grand-canyon
X-CS533f25-favorite3: harry-potter
X-CS533f25-favorite4: the-matrix

### Blocking
Without:

Access-Control-Expose-Headers

the JavaScript code on Server A cannot read these headers.  
The fetch() response prints “Headers blocked by CORS”.

### Allowing
After enabling:

Access-Control-Expose-Headers: X-CS533f25-favorite1, X-CS533f25-favorite2, X-CS533f25-favorite3, X-CS533f25-favorite4

the browser allows JavaScript to read all four headers.  
Screenshots show both the blocked and allowed states.

---

## 5.3 – Content-Security-Policy: Embedding a Remote Site

Archive.org was selected because it allowed framing in Assignment 4.

Two servers were created:

- server_allowed.js (port 4000)  
  No CSP. The iframe successfully loads the remote page.

- server_blocked.js (port 4001)  
  Sends:  
  Content-Security-Policy: frame-ancestors 'none'

The iframe is blocked and the browser console shows the CSP violation message.

---

## Videos

 Short YouTube video demonstrate:

1. 5.1 JSON blocked and allowed  
2. 5.2 Custom headers blocked and allowed  
3. 5.3 Iframe allowed and blocked by CSP

https://youtu.be/U4i7Z3wRke8



