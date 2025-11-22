 Assignment 4 - CS 433/533 Web Security
 Part 1: Framable Sites Analysis
Tested 100 sites from Assignment 3 to determine which can be embedded in iframes and which employ framing protection mechanisms.

Results Summary

- Framable Sites: X out of 100

- Non-Framable Sites: Y out of 100

- Protection Mechanisms Identified:

  - X-Frame-Options Header

  - Content Security Policy (CSP) frame-ancestors

  - JavaScript frame-busting techniques


 Part 2: Frame Path Attack Demonstration

The Path attribute in cookies is designed to limit which paths on a domain can access the cookie, but it provides no security against malicious JavaScript when:

- Cookies lack HttpOnly flag

- Attacker can embed victim content

- Same-origin policy allows frame access



Attack Flow

1. Victim sets cookie with `Path=/victim-path` but no HttpOnly

2. Attacker embeds victim page in iframe

3. Attacker uses JavaScript to access iframe's document.cookie

4. Cookie is stolen despite Path restriction



Defense Recommendations

- Always use HttpOnly flag for session cookies

- Use Secure flag for HTTPS-only transmission

- Implement proper CSP headers

- Consider SameSite attribute for CSRF protection

 Screen shoots 
Framable Sites Test Screenshot framable/images/Framable%20Sites%20Test.png
Frame Path Cookie Screenshot framable/images/Frame%20Path%20Cookie.png
Setting Victim Cookie Screenshot framable/images/Setting%20Victim%20Cookie.png

YouTube Videos

- Framable Analysis:https://youtu.be/I8gzkTC6Fl4

- Frame Path Attack:https://youtu.be/WwZSn89wFjU

Setup Instructions
Part 1 - Framable 
cd framable
node server.js
Visit http://localhost:3001

Part2  - Frame Path Attack
cd framable
node server.js
Visit http://localhost:3000




