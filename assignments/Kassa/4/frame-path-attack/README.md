&nbsp;Assignment 4 - CS 433/533 Web Security



&nbsp;Part 1: Framable Sites Analysis



Tested 100 sites from Assignment 3 to determine which can be embedded in iframes and which employ framing protection mechanisms.



Results Summary

\- Framable Sites: X out of 100

\- Non-Framable Sites: Y out of 100  

\- Protection Mechanisms Identified\*\*:

&nbsp; - X-Frame-Options Header

&nbsp; - Content Security Policy (CSP) frame-ancestors

&nbsp; - JavaScript frame-busting techniques

&nbsp;Detailed Findings



&nbsp;Common Protection Methods



1\. X-Frame-Options

&nbsp;  - X-Frame-Options: DENY

&nbsp;  - X-Frame-Options: SAMEORIGIN 

&nbsp;  - X-Frame-Options: ALLOW-FROM uri



2\. Content Security Policy 

&nbsp;  - Content-Security-Policy: frame-ancestors 'none'

&nbsp;  - Content-Security-Policy: frame-ancestors 'self'

&nbsp;  - Content-Security-Policy: frame-ancestors https:



3\. JavaScript Frame Busting 

&nbsp;  - if (top != self) top.location = self.location;

&nbsp;  - More sophisticated detection and redirection



&nbsp;Example Test Results

| Site | Framable | Protection Method | Notes |

|------|----------|-------------------|-------|

| example.com | No | X-Frame-Options: DENY | Complete blocking |

| sample.org | Yes | None | Successfully framed |

| test.net | No | CSP frame-ancestors | Modern protection |



&nbsp;Part 2: Frame Path Attack Demonstration



The Path attribute in cookies is designed to limit which paths on a domain can access the cookie, but it provides no security against malicious JavaScript when:

\- Cookies lack HttpOnly flag

\- Attacker can embed victim content

\- Same-origin policy allows frame access



Attack Flow

1\. Victim sets cookie with `Path=/victim-path` but no HttpOnly

2\. Attacker embeds victim page in iframe  

3\. Attacker uses JavaScript to access iframe's document.cookie

4\. Cookie is stolen despite Path restriction



Defense Recommendations

\- Always use `HttpOnly` flag for session cookies

\- Use `Secure` flag for HTTPS-only transmission

\- Implement proper CSP headers

\- Consider SameSite attribute for CSRF protection



&nbsp;YouTube Videos

\- Framable Analysis: 

\- Frame Path Attack: 



Setup Instructions



Part 1 - Framable Testing

&nbsp; bash

cd framable

npm install express

node server.js

&nbsp;Visit http://localhost:3000

