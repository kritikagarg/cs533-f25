# Assignment 4 

## Framable Sites
- Total tested: 100
- Framable: 34
- Not Framable: 66
- Framable Sites:
  - These sites allowed being framed because they did not include X-Frame-Options headers or Content-Security-Policy frame-ancestors directives
- Not Framable Sites:
  - These sites blocked framing using either:
    - X-Frame-Options: DENY or SAMEORIGIN
    - Content-Security-Policy: frame-ancestors
## Sites Table
| URL | Framable | Reason |
|-----|----------|--------|
| https://ign.com | true | No XFO or CSP blocking |
| https://w3.org | false | CSP frame-ancestors present |
| https://thenai.org | true | No XFO or CSP blocking |
| https://viglink.com | false | X-Frame-Options: SAMEORIGIN |
| https://terra.com.br | false | X-Frame-Options: SAMEORIGIN |
| https://namecheap.com | false | X-Frame-Options: SAMEORIGIN |
| https://samsung.com | false | X-Frame-Options: SAMEORIGIN |
| https://bp2.blogger.com | true | No XFO or CSP blocking |
| https://ytimg.com | false | Request failed or site unreachable |
| https://wikimedia.org | true | No XFO or CSP blocking |
| https://www.google.com | false | X-Frame-Options: SAMEORIGIN |
| https://fandom.com | false | X-Frame-Options: SAMEORIGIN |
| https://instructables.com | false | CSP frame-ancestors present |
| https://blog.google | true | No XFO or CSP blocking |
| https://hollywoodreporter.com | false | CSP frame-ancestors present |
| https://zendesk.com | false | CSP frame-ancestors present |
| https://surveymonkey.com | false | CSP frame-ancestors present |
| https://github.com | false | X-Frame-Options: DENY |
| https://bp0.blogger.com | true | No XFO or CSP blocking |
| https://tvtropes.org | false | X-Frame-Options: SAMEORIGIN |
| https://tmz.com | false | X-Frame-Options: SAMEORIGIN |
| https://smh.com.au | false | X-Frame-Options: sameorigin |
| https://dw.com | false | CSP frame-ancestors present |
| https://vk.com | false | X-Frame-Options: sameorigin |
| https://adobe.com | true | No XFO or CSP blocking |
| https://www.wikipedia.org | true | No XFO or CSP blocking |
| https://reddit.com | false | X-Frame-Options: SAMEORIGIN |
| https://fr.wikipedia.org | true | No XFO or CSP blocking |
| https://cnbc.com | false | CSP frame-ancestors present |
| https://target.com | false | X-Frame-Options: SAMEORIGIN |
| https://focus.de | true | No XFO or CSP blocking |
| https://plos.org | true | No XFO or CSP blocking |
| https://substack.com | false | CSP frame-ancestors present |
| https://wikia.com | true | No XFO or CSP blocking |
| https://instagram.com | false | X-Frame-Options: DENY |
| https://uol.com.br | false | CSP frame-ancestors present |
| https://standard.co.uk | false | CSP frame-ancestors present |
| https://cambridge.org | false | X-Frame-Options: SAMEORIGIN |
| https://metro.co.uk | true | No XFO or CSP blocking |
| https://docs.google.com | false | X-Frame-Options: DENY |
| https://wp.com | false | X-Frame-Options: SAMEORIGIN |
| https://techradar.com | false | X-Frame-Options: SAMEORIGIN |
| https://m.me | false | CSP frame-ancestors present |
| https://kickstarter.com | false | X-Frame-Options: SAMEORIGIN |
| https://stackoverflow.com | false | X-Frame-Options: SAMEORIGIN |
| https://cnn.com | true | No XFO or CSP blocking |
| https://nydailynews.com | true | No XFO or CSP blocking |
| https://mediafire.com | false | X-Frame-Options: SAMEORIGIN |
| https://google.es | false | X-Frame-Options: SAMEORIGIN |
| https://usatoday.com | false | X-Frame-Options: deny |
| https://groups.google.com | false | X-Frame-Options: DENY |
| https://doubleclick.net | true | No XFO or CSP blocking |
| https://godaddy.com | false | X-Frame-Options: DENY |
| https://whitehouse.gov | false | X-Frame-Options: DENY |
| https://express.co.uk | false | X-Frame-Options: DENY |
| https://google.pl | false | X-Frame-Options: SAMEORIGIN |
| https://addtoany.com | true | No XFO or CSP blocking |
| https://netflix.com | false | X-Frame-Options: DENY |
| https://alexa.com | true | No XFO or CSP blocking |
| https://es.wikipedia.org | true | No XFO or CSP blocking |
| https://office.com | false | X-Frame-Options: SAMEORIGIN |
| https://walmart.com | false | X-Frame-Options: SAMEORIGIN |
| https://vistaprint.com | true | No XFO or CSP blocking |
| https://indiegogo.com | false | X-Frame-Options: SAMEORIGIN |
| https://mozilla.org | false | X-Frame-Options: DENY |
| https://naver.com | false | X-Frame-Options: DENY |
| https://files.wordpress.com | false | X-Frame-Options: SAMEORIGIN |
| https://scribd.com | false | X-Frame-Options: SAMEORIGIN |
| https://list-manage.com | false | Request failed or site unreachable |
| https://dreamstime.com | true | No XFO or CSP blocking |
| https://it.wikipedia.org | true | No XFO or CSP blocking |
| https://ipv4.google.com | false | X-Frame-Options: SAMEORIGIN |
| https://pt.wikipedia.org | true | No XFO or CSP blocking |
| https://flickr.com | true | No XFO or CSP blocking |
| https://cbc.ca | false | X-Frame-Options: SAMEORIGIN |
| https://tools.google.com | true | No XFO or CSP blocking |
| https://nicovideo.jp | false | X-Frame-Options: SAMEORIGIN |
| https://yandex.com | true | No XFO or CSP blocking |
| https://europapress.es | true | No XFO or CSP blocking |
| https://pbs.org | true | No XFO or CSP blocking |
| https://webnode.page | false | X-Frame-Options: DENY |
| https://amebaownd.com | false | Request failed or site unreachable |
| https://nytimes.com | false | X-Frame-Options: DENY |
| https://booking.com | true | No XFO or CSP blocking |
| https://techcrunch.com | false | X-Frame-Options: SAMEORIGIN |
| https://archive.org | true | No XFO or CSP blocking |
| https://storage.googleapis.com | true | No XFO or CSP blocking |
| https://picasa.google.com | true | No XFO or CSP blocking |
| https://bp.blogspot.com | false | Request failed or site unreachable |
| https://dailymotion.com | false | X-Frame-Options: DENY |
| https://imageshack.us | false | X-Frame-Options: SAMEORIGIN |
| https://ads.google.com | false | X-Frame-Options: SAMEORIGIN |
| https://nature.com | false | X-Frame-Options: DENY |
| https://joomla.org | false | X-Frame-Options: SAMEORIGIN |
| https://googleblog.com | true | No XFO or CSP blocking |
| https://oracle.com | false | X-Frame-Options: sameorigin |
| https://gstatic.com | true | No XFO or CSP blocking |
| https://un.org | false | X-Frame-Options: SAMEORIGIN |
| https://windows.net | false | Request failed or site unreachable |
| https://youronlinechoices.com | false | X-Frame-Options: SAMEORIGIN |

## Frame Path Attack
This portion demonstrates why the Path attribute for cookies alone is not sufficient for security.

## Evidence
Include screenshots or link to short demo videos:
- Framable demo video: [link]
- Frame Path attack video: [link]