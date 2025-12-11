Assignment 5 — CS 433/533 Web Security (Fall 2025)



This directory contains demos for:



5.1 CORS: Blocking and reading JSON from another origin



5.2 CORS: Blocking and reading custom HTTP response headers



5.3 Content-Security-Policy \& X-Frame-Options: embedding allowed vs blocked



5.4 Extra credit: instructions for using GitHub Pages



Servers



Server A (client pages): http://localhost:3000



Server B (resource server): http://localhost:4000



Files of interest



serverA.js — serves client HTML pages



serverB.js — serves JSON, custom headers, pages with/without frame-ancestors 



5.1/client\_fetch.html — fetch tests blocked and allowed JSON



5.2/client\_headers.html — demonstrates reading custom headers blocked/allowed



5.3/local\_embed\_page.html — attempts to iframe the allowed/blocked pages from server B



5.3/embed\_allowed.html — embeddable page (served from server B)



5.3/embed\_blocked.html — blocked page (server B sets X-Frame-Options and CSP)





How to run



cd 5



npm install



npm run start:serverB 



npm run start:serverA



YouTube video: https://youtu.be/5uoMgb-7Fd0



5.1: Network request to /favorites.json showing the response is blocked by CORS.

5.2: Response for /headers-block 

5.3: The allowed iframe shows content.

