# Assignment 6 – Browser Fingerprinting  
## Overview
This assignment demonstrates browser and device fingerprinting using a Node.js + Express server.  
The server fingerprints different clients based on selected HTTP request headers, stores the fingerprints, and recognizes returning clients.

## Fingerprinting Algorithm (Short Description)

The server fingerprints each client using a combination of **at least four HTTP request headers**, including:

- `User-Agent`
- `Accept-Language`
- `Accept-Encoding`
- `Connection`
- `DNT` (optional)
- `Upgrade-Insecure-Requests` (optional)
- `Device-Memory` (Chrome/Android)
- Any other available headers

### How it works:
1. When a client connects to `/`, the server extracts selected headers.
2. These headers are concatenated into a single string.
3. The server generates an MD5 hash of the string → **this becomes the fingerprint**.
4. The fingerprint is logged in `fingerprints.log` with timestamp and header values.
5. If the same fingerprint appears again:
   - The server recognizes the returning client.
   - The response displays a “Welcome back” message.
6. **(Extra Credit)**  
   Based on the fingerprint, the server serves a different HTML file (e.g., `client1.html`, `client2.html`, etc.), giving each browser/device a unique experience.

This approach mimics real-world browser fingerprinting used for analytics, tracking, and cloaking.

---

## Screenshot of Fingerprints
- Chrome ![alt text](<CS533 Assignment 6 Chrome-1.png>)
- Edge ![alt text](<CS533 Assignment 6 Edge.png>)

## Testing Setup (Clients Used)

| Device / Browser | OS | Recognized? |
|------------------|----|-------------|
| Chrome Desktop   | Windows | Yes |
| Edge Desktop     | Windows | Yes |

## How to Run

```bash
cd 6
npm install
node server.js