# Assignment 5 - CS 433/533 Web Security, Fall 2025

## Overview
This assignment demonstrates the following concepts:
1. Cross-Origin Resource Sharing (CORS)
2. Custom HTTP Response Headers
3. Content-Security-Policy (CSP) embedding
4. Extra credit: Hosting files on GitHub Pages

All code, HTML, and JSON files are located in the corresponding directories under `5/`.

---

## Directory Structure
```
5/
├── 5.1/
│ ├── public/
│ │ └── index.html
│ ├── server1.js
│ └── server2.js
│
├── 5.2/
│ ├── public/
│ │ └── index.html
│ ├── server1.js
│ └── server2.js
│
└── 5.3/
├── index.html
└── server.js
```

## 5.1 - CORS: Blocking and Reading JSON Responses

**Description:**  
This demonstrates how a JavaScript fetch request from one origin (Server 1) can be blocked or allowed by another origin (Server 2).

**Files:**
- `server1.js` - Runs on port 3000 (origin of the page making requests)
- `server2.js` - Runs on port 4000 (origin serving the JSON)
- `index.html` - Fetches `/favorites.json` from Server 2

**Steps Taken:**
1. Started both servers on different ports.
2. Attempted to fetch JSON from Server 2 without enabling CORS → **blocked**.
3. Enabled CORS on Server 2 → **allowed**.

## 5.2 - CORS: Blocking and Reading Custom HTTP Headers

**Description:**  
This demonstrates how custom headers (X-CS533f25-*) are blocked or allowed based on CORS.

**Files:**
- `server2.js` - Returns four custom headers related to my favorite things.
- `index.html` - Fetches JSON and attempts to read custom headers.

**Steps Taken:**
1. Attempted to read headers with CORS disabled → **headers blocked**.
2. Enabled CORS → **headers allowed**.

## 5.3 - Content-Security-Policy: Embedding Another Site

**Description:**  
This demonstrates how CSP can allow or block embedding of another site.

**Files:**
- `index.html` - Contains an `<iframe>` attempting to embed a framable site from Assignment 4.
- `server.js` - Serves the HTML page with and without CSP headers.

**Steps Taken:**
1. Served page without CSP → iframe embedding **allowed**.
2. Added CSP header `frame-ancestors 'none'` → iframe embedding **blocked**.
