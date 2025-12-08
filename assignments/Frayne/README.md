# Assignment 7 – Phishing Site Deployment

---

## Overview
This project involves deploying a simple phishing-style website on a local Express.js server and demonstrating the site in action. The extra credit portion includes installing and running Zphisher inside a WSL/Ubuntu environment.

Both demonstrations show:
- The phishing page loading in a browser
- Dummy credentials being entered
- Logging of those credentials on the server

---

## Issues Encountered
While completing the assignment, I ran into a few challenges:

### **Regular Assignment**
1. **package.json JSON error**  
   I accidentally forgot a comma after `"type": "module"` which caused an `EJSONPARSE` error.  
   Fix: Ensure commas are correctly placed between all JSON fields.

### **Extra Credit (Zphisher)**
1. **WSL had no Linux distro**  
   Running `wsl` originally gave an error:  

## Screenshots

### **1. Phishing Site Displayed in Browser (Regular Assignment)**
![Phishing site in Chrome](<img width="1918" height="915" alt="PhishingPage" src="https://github.com/user-attachments/assets/fab659ed-f5ed-4a9c-ae7a-a3a04f7201e3" />
)
*The main phishing page successfully rendered from my local Express.js server.*

### **2. Harvested Credentials Log (Regular Assignment)**
![Credentials log](<img width="1026" height="464" alt="logfile" src="https://github.com/user-attachments/assets/3111572b-290f-4c23-a887-a6e7b35de34e" />
)
*Shows dummy usernames and passwords being captured and logged.*

---

### **3. Extra Credit – Zphisher Pages**
![Zphisher Facebook site](<img width="1357" height="733" alt="Facebookextra" src="https://github.com/user-attachments/assets/388f1488-0ea7-458d-9b16-d8982d6cd22b" />
)
*Zphisher Facebook template page running on Ubuntu inside WSL.*
![Zphisher Instagram site](<img width="1351" height="756" alt="InstagramExtra" src="https://github.com/user-attachments/assets/32c778be-a4f5-4d6f-aef0-5cf8a4c38f8c" />
)
*Zphisher Instagram template page running on Ubuntu inside WSL.*
![Zphisher Twitch site](<img width="1311" height="753" alt="TwitchExtra" src="https://github.com/user-attachments/assets/501a79b4-3d73-4d7b-b931-abcad4ba6bb2" />
)
*Zphisher Twitch template page running on Ubuntu inside WSL.*
---

## Demo Videos

### **Regular Assignment Demonstration**
🔗 https://youtu.be/vc6KV6GPxLw

### **Extra Credit Demonstration**
🔗 https://youtu.be/EDBgBPk5nZ4

---

## Notes
This assignment demonstrates:
- Running a simple Express.js phishing-like server
- Logging POST submission data
- Accessing the server from other devices on the network
- Running a phishing template tool (Zphisher) inside WSL/Ubuntu
>>>>>>> 342e1e8 (Assignment 7 Submission)

