# Assignment 3

Reporter Name: Ryan Thomson

Report Date: 10-05-2025

# Report Description 
 This Cookie Fetcher program fetches cookies from a list of websites and generates a report on their attributes. As specified in the assignment, the program counts various cookie attributes such as HttpOnly, Secure, SameSite policies, and Path attributes. 
It also tracks the minimum and maximum number of cookies found on any single site. 
I wrote this program in go primarly using the http module, with goccy/go-yaml for YAML parsing for a small config to fully generate the README.md.
The report as outlined contains a summary of the findings, including total counts and percentages for each attribute, as well as a detailed breakdown of cookies per site. 
The program is designed to handle errors gracefully, logging any issues encountered during the fetching process. 
Overall, this assignment helped me understand how to work with HTTP requests and responses in Go, as well as how to parse and analyze cookie data effectively.




# Cookie Report 

| URL | Status Code | Total Cookies | HttpOnly | Secure | SameSite | SameSite Strict | SameSite Lax | SameSite None | Path | Root Path | Non-root Path | Notes |
|-|-|-|-|-|-|-|-|-|-|-|-|-|
| amazon.com | 200 OK | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
| news.google.com | 200 OK | 2 | 1 | 2 | 1 | 0 | 0 | 1 | 2 | 2 | 0 |  |
| biblegateway.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| oup.com | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| whatsapp.com | 200 OK | 3 | 2 | 3 | 3 | 0 | 1 | 2 | 3 | 3 | 0 |  |
| buydomains.com | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| estadao.com.br | 200 OK | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 0 |  |
| berkeley.edu | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| pinterest.com | 200 OK | 4 | 3 | 3 | 2 | 0 | 1 | 1 | 4 | 4 | 0 |  |
| ietf.org | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| theguardian.com | 200 OK | 4 | 0 | 2 | 0 | 0 | 0 | 0 | 4 | 4 | 0 |  |
| joomla.org | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| dan.com | 200 OK | 7 | 0 | 1 | 0 | 0 | 0 | 0 | 7 | 7 | 0 |  |
| java.com | 403 Forbidden | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| sina.com.cn | 204 No Content | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| ads.google.com | 429 Too Many Requests | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| www.over-blog.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| code.google.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| google.com.tw | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| public-api.wordpress.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| narod.ru | 200 OK | 4 | 1 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 0 |  |
| bigcommerce.com | 200 OK | 5 | 1 | 1 | 5 | 0 | 4 | 1 | 5 | 5 | 0 |  |
| howstuffworks.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| justgiving.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| www.livejournal.com | 200 OK | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| weather.com | 200 OK | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |  |
| themeforest.net | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| bestfreecams.club | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| scmp.com | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| techcrunch.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| gizmodo.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| metro.co.uk | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| indiatimes.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| tinyurl.com | 200 OK | 5 | 4 | 5 | 5 | 0 | 4 | 1 | 5 | 5 | 0 |  |
| amazon.es | 405 Method Not Allowed | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 10 | 0 |  |
| smh.com.au | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| zendesk.com | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| gravatar.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| googleblog.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| uol.com.br | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| disney.com | 403 Forbidden | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| taringa.net | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| sky.com | 200 OK | 4 | 0 | 2 | 0 | 0 | 0 | 0 | 4 | 4 | 0 |  |
| newyorker.com | 200 OK | 5 | 1 | 3 | 3 | 0 | 0 | 3 | 5 | 5 | 0 |  |
| depositfiles.com | 200 OK | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
| intel.com | 403 Forbidden | 2 | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |  |
| thenai.org | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| sciencemag.org | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| tmz.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| draft.blogger.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| policies.google.com | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| reverbnation.com | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| independent.co.uk | 200 OK | 18 | 2 | 10 | 0 | 0 | 0 | 0 | 18 | 18 | 0 |  |
| bp0.blogger.com | 400 Bad Request | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| mega.io | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| box.com | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| ovh.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| nps.gov | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| google.it | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| tvtropes.org | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| ok.ru | 200  | 4 | 4 | 1 | 1 | 0 | 0 | 1 | 3 | 3 | 1 |  |
| google.co.jp | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| doi.org | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| tiktok.com | 200 OK | 3 | 3 | 3 | 1 | 0 | 1 | 0 | 3 | 3 | 0 |  |
| wp.com | 200 OK | 4 | 0 | 4 | 4 | 1 | 0 | 3 | 4 | 4 | 0 |  |
| biglobe.ne.jp | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| standard.co.uk | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| un.org | 200 OK | 4 | 0 | 1 | 2 | 0 | 0 | 2 | 4 | 4 | 0 |  |
| theverge.com | 200 OK | 2 | 0 | 1 | 1 | 0 | 1 | 0 | 2 | 2 | 0 |  |
| gsmarena.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| amzn.to | 405 Method Not Allowed | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
| canva.com | 403 Forbidden | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| spiegel.de | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| ziddu.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| vice.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| get.google.com | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| microsoft.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| ibm.com | 200 OK | 2 | 0 | 1 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |  |
| target.com | 200 OK | 11 | 3 | 9 | 8 | 0 | 1 | 7 | 11 | 11 | 0 |  |
| justice.gov | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| alexa.com | 405 Method Not Allowed | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| aliexpress.com | 200  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| forms.gle | 400 Bad Request | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| hollywoodreporter.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| kakao.com | 200 OK | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
| video.google.com | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| freepik.com | 403 Forbidden | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| francetvinfo.fr | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| interia.pl | 200 OK | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
| reddit.com | 200 OK | 6 | 1 | 6 | 4 | 1 | 0 | 3 | 6 | 6 | 0 |  |
| whitehouse.gov | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| google.es | 200 OK | 2 | 2 | 2 | 2 | 0 | 1 | 1 | 2 | 2 | 0 |  |
| psychologytoday.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| ja.wikipedia.org | 200 OK | 6 | 4 | 6 | 2 | 0 | 0 | 2 | 6 | 6 | 0 |  |
| telegram.me | 200 OK | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
| enable-javascript.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
| de.wikipedia.org | 200 OK | 5 | 3 | 5 | 2 | 0 | 0 | 2 | 5 | 5 | 0 |  |
| akamaihd.net | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Dead Link, DNS Lookup Failed |
| ggpht.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Dead Link, DNS Lookup Failed |
| huawei.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | Errored URL, TLS Handshake Failed |
| Totals | N/A | 156 | 62 | 101 | 73 | 2 | 20 | 51 | 155 | 155 | 1 |  |




# Cookie Summary

|Min| Max | Median | Mean |
|--------|-------|--------|-------|
| 0 | 18 | 1.00 | 1.61 |
# HTTP responses
 ## amazon.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:48:07 GMT] Etag:["33992-6406e99d23272"] Last-Modified:[Sun, 05 Oct 2025 19:47:11 GMT] Server:[Server] Set-Cookie:[skin=noskin; path=/; domain=.amazon.com] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Content-Type,Accept-Encoding,User-Agent] Via:[1.1 a71dc86d67780d7478c72e1b147b8a32.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[Mh1UHafkUc65MKmDZmJ0ipt4wxrRYbOP8GqFu7t2fK5Qy05qCHrEbw==] X-Amz-Cf-Pop:[IAD61-P10] X-Amz-Rid:[GZDAX0G3KQD7E61KBXHE] X-Cache:[Miss from cloudfront]]
```

## news.google.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Content-Length:[0] Content-Security-Policy:[require-trusted-types-for 'script';report-uri /_/DotsSplashUi/cspreport script-src 'unsafe-inline' https: http:;object-src 'none';base-uri 'self';report-uri /_/DotsSplashUi/cspreport;worker-src 'self'] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[same-origin-allow-popups] Cross-Origin-Resource-Policy:[same-site] Date:[Sun, 05 Oct 2025 19:48:08 GMT] Expires:[Mon, 01 Jan 1990 00:00:00 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*] Pragma:[no-cache] Reporting-Endpoints:[default="/_/DotsSplashUi/web-reports?context=eJzjctDikmII0JBi-LxjBmvrzXOsk4HYUOESqz0QX06_xFokcYW1AYg_Vd1gFai-wZrEfpO1AIhND95idQZiIR6OH9O6j7MJvHg3uYVJSTkpvzA-Jb-kuLggJ7E4ozi1qCy1KN7IwMjUwNLYQM_AMr7AAAAiCSuC"] Server:[ESF] Set-Cookie:[NID=525=bGh-D2m0FA_z8nfgeOsqZ2S-491sFKnnE8d2u6KVTRUsTBVIfZfTy3XGiOyApkQwFzTMyx4ZGiicNqWZaThneIU_mRexG8D1L4eUj2ZlHYJSe-BhVIs5nK85Vuj88dW1fuW_7nDXiAvFHOnMH6kG0jV7d4LN-O4PAzymtEs4neJR7CBWPoC6kjRVrjnxIJtUDhSX9sXIszqXwhtgts-2rw; expires=Mon, 06-Apr-2026 19:48:08 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none GN_PREF=W251bGwsIkNBSVNDd2o0bG92SEJoQzRxNjk1Il0_; Expires=Mon, 06-Apr-2026 07:48:08 GMT; Path=/; Secure] Strict-Transport-Security:[max-age=31536000] Vary:[Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Ua-Compatible:[IE=edge] X-Xss-Protection:[0]]
```

## biblegateway.com

```
200 OK
map[Age:[990] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:31:38 GMT] Server:[nginx] Strict-Transport-Security:[max-age=7776000] Vary:[Accept-Encoding] Via:[1.1 6a615842cf9e2c637f2872ee9b70eb72.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[UjZ4dpNCBTAoaMwRYn1x4YuFwN49AFCrHNGKHv8NiSGHEgmhMT3A8w==] X-Amz-Cf-Pop:[IAD50-C2] X-Cache:[Hit from cloudfront]]
```

## oup.com

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f6f54fbda9388-IAD] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:48:09 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f6f54fbda9388"] Set-Cookie:[__cf_bm=_MyoHjlmXtizGvIig14wQ7Hwk410UXR1wVnjUrhY6Do-1759693689-1.0.1.1-Y.XOPQOlAZcnjm9GJcHFR.JPAO8VYhhNwi4PqmA7fw5dGnY1tt3ZdQ9ZnOjpd5gtfIikuA4h0zFBGJzf6p4WprEM6Z1S4LQVQx.pnSUBMmo; path=/; expires=Sun, 05-Oct-25 20:18:09 GMT; domain=.corp.oup.com; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## whatsapp.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, no-cache, no-store, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[default-src 'self' blob:;script-src *.whatsapp.com *.whatsapp.net *.facebook.com *.facebook.net 'nonce-N5qC1PHx' 'self' blob:;style-src *.whatsapp.com *.whatsapp.net 'unsafe-inline' *.facebook.com 'self' data: blob:;connect-src *.whatsapp.com *.whatsapp.net wss://*.facebook.com:* *.fbcdn.net 'self' data: blob:;font-src *.whatsapp.com *.whatsapp.net *.facebook.com static.xx.fbcdn.net data:;img-src *.whatsapp.com *.whatsapp.net *.facebook.com *.fbcdn.net static.xx.fbcdn.net *.cdninstagram.com 'self' data: blob:;media-src *.fbcdn.net 'self' data: blob:;child-src 'self' data: blob:;frame-src *.facebook.com *.whatsapp.com 'self' data: blob:;manifest-src 'self' data: blob:;object-src 'self' data: blob:;worker-src *.whatsapp.com *.whatsapp.net *.facebook.com *.facebook.net 'nonce-N5qC1PHx' 'self' data: blob:;block-all-mixed-content;upgrade-insecure-requests;] Content-Type:[text/html; charset="utf-8"] Cross-Origin-Embedder-Policy-Report-Only:[require-corp;report-to="coep_report"] Cross-Origin-Opener-Policy:[same-origin-allow-popups] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:48:09 GMT] Document-Policy:[include-js-call-stacks-in-crash-reports] Expires:[Sat, 01 Jan 2000 00:00:00 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(), attribution-reporting=(), autoplay=(), bluetooth=(), camera=(), ch-device-memory=(), ch-downlink=(), ch-dpr=(), ch-ect=(), ch-rtt=(), ch-save-data=(), ch-ua-arch=(), ch-ua-bitness=(), ch-viewport-height=(), ch-viewport-width=(), ch-width=(), clipboard-read=(), clipboard-write=(), compute-pressure=(), display-capture=(), encrypted-media=(), fullscreen=(self), gamepad=(), geolocation=(), gyroscope=(), hid=(), idle-detection=(), interest-cohort=(), keyboard-map=(), local-fonts=(), magnetometer=(), microphone=(), midi=(), otp-credentials=(), payment=(), picture-in-picture=(), private-state-token-issuance=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), shared-storage=(), shared-storage-select-url=(), private-state-token-redemption=(), usb=(), unload=(self), window-management=(), xr-spatial-tracking=();report-to="permissions_policy"] Pragma:[no-cache] Report-To:[{"max_age":2592000,"endpoints":[{"url":"https:\/\/www.facebook.com\/browser_reporting\/coop\/?minimize=0"}],"group":"coop_report","include_subdomains":true}, {"max_age":86400,"endpoints":[{"url":"https:\/\/www.facebook.com\/browser_reporting\/coep\/?minimize=0"}],"group":"coep_report"}, {"max_age":259200,"endpoints":[{"url":"https:\/\/www.whatsapp.com\/whatsapp_browser_error_reports\/?brsid=7557826847258597670&cpp=C3&cv=1028015759&st=1759693689311"}]}, {"max_age":21600,"endpoints":[{"url":"https:\/\/www.whatsapp.com\/whatsapp_browser_error_reports\/"}],"group":"permissions_policy"}] Reporting-Endpoints:[coop_report="https://www.facebook.com/browser_reporting/coop/?minimize=0", coep_report="https://www.facebook.com/browser_reporting/coep/?minimize=0", default="https://www.whatsapp.com/whatsapp_browser_error_reports/?brsid=7557826847258597670&cpp=C3&cv=1028015759&st=1759693689311", permissions_policy="https://www.whatsapp.com/whatsapp_browser_error_reports/"] Set-Cookie:[wa_csrf=YKtzLcnGexQib1Egbx4IkK; path=/; domain=.whatsapp.com; secure; httponly; SameSite=None wa_lang_pref=en; expires=Sun, 12-Oct-2025 19:48:09 GMT; Max-Age=604800; path=/; domain=.whatsapp.com; secure; SameSite=None wa_ul=08d43eb4-a29c-442e-8ef1-453fda2b1749; expires=Sat, 03-Jan-2026 19:48:09 GMT; Max-Age=7776000; path=/; domain=.www.whatsapp.com; secure; httponly; SameSite=Lax] Strict-Transport-Security:[max-age=31536000; preload; includeSubDomains] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Fb-Connection-Quality:[EXCELLENT; q=0.9, rtt=13, rtx=0, c=14, mss=1380, tbw=4303, tp=-1, tpl=-1, uplat=370, ullat=0] X-Fb-Debug:[eSRepE1CphWEw7ct0aQhwMI5eNls/HJc7LZWd2iF0nV62VWUxKZF96rZXxS95yTGn/sn5oznE4J4O19E0fTBNg==] X-Frame-Options:[DENY] X-Xss-Protection:[0]]
```

## buydomains.com

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f6f58998fd707-IAD] Content-Length:[8520] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:48:09 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f6f58998fd707"] Set-Cookie:[__cf_bm=Cfs_YOsj0iXdC7tx87SyxjGPRcddtnv4WmdncPTVook-1759693689-1.0.1.1-yqnuO.U13BvinxI_6uRM2mMfZV0al1q2dVzNC67O8Ei9I9_coE2_EHwttlrvhY_lD4IJKDyzTfkD0ttnp7wsCdZ6Ac151bt9hmt1Tr53a_E; path=/; expires=Sun, 05-Oct-25 20:18:09 GMT; domain=.buydomains.com; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## estadao.com.br

```
200 OK
map[Accept-Ch:[Sec-CH-UA,Sec-CH-UA-Mobile,Sec-CH-UA-Platform,Sec-CH-UA-Arch,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Model,Sec-CH-Device-Memory] Cache-Control:[private, max-age=60] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:48:10 GMT] Etag:[W/"1429cb-5d25lmyskLSPxlxXM27MHwf3Gew"] Expires:[Sun, 05 Oct 2025 19:49:10 GMT] Last-Modified:[Sun, 05 Oct 2025 19:46:50 GMT] Mpulse_cdn_cache:[HIT] Mpulse_origin_time:[0] Server:[openresty] Server-Timing:[ak_p; desc="1759693689855_34697817_150787055_100_145657_11_30_-";dur=1] Set-Cookie:[datadome=nFPjW5z1rwtEwwEeLcfB7u9kqYqaha~oid4fIBDa0k3Kd8O1NzQ~xO0u~4hY4vBrNMvLh_jHz2c7xlBEyZW7l3Hxal3UvlLe7_ax9IDByMhdPa0oest0UmQdyWtgqg0A; Max-Age=31536000; Domain=.estadao.com.br; Path=/; Secure; SameSite=Lax] X-Arc-Edgecontroller:[1.1.0] X-Arc-Pb-Mx-Id:[00000000] X-Arc-Pb-Request-Id:[b3b1530c-b42c-4bd8-a1dd-791c89ee4a97] X-Arc-Request-Id:[0.59721102.1759693689.8fcd3ef] X-Arc-Ttl:[120] X-Datadome:[protected]]
```

## berkeley.edu

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f6f7ad99caf78-IAD] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:48:15 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f6f7ad99caf78"] Set-Cookie:[__cf_bm=MMkzgpcrc9XI7LsWHXeIvG_DpwQM.cr8EJPGsO8cxFA-1759693695-1.0.1.1-20roXTGfUrc5wMvZ2MGMDN2A452SvDLgqZIRI2NAmhNyigi_zi91zpdoeV8BgfyQO8jGprQc6TqJzUoF3K.IaDMXD8AanpNVWUWEr5JuO2I; path=/; expires=Sun, 05-Oct-25 20:18:15 GMT; domain=.berkeley.edu; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## pinterest.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Full,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Model,Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443";ma=604800] Connection:[keep-alive] Content-Security-Policy:[default-src 'self' blob: s.pinimg.com s1.pinimg.com; font-src 'self' m.media-amazon.com *.amazon-adsystem.com s.pinimg.com s1.pinimg.com data: fonts.googleapis.com fonts.gstatic.com use.typekit.net; style-src 'self' blob: 'unsafe-inline' data: *.pinimg.com *.pinterest.com accounts.google.com fonts.googleapis.com *.adyen.com *.adyenpayments.com; img-src blob: data: *; base-uri 'none'; connect-src 'self' blob: m.media-amazon.com *.amazon-adsystem.com htlb.casalemedia.com *.ada.support *.pinimg.com *.pinterest.com accounts.google.com *.adyen.com pinterest-salvador.s3.amazonaws.com *.adyenpayments.com *.facebook.com www.recaptcha.net https://pinterest-api.arkoselabs.com/ www.googleapis.com *.dropboxapi.com pinterest-aberdeen.s3.amazonaws.com pinterest-aberdeen.s3.us-east-1.amazonaws.com pinterest-anaheim.s3.amazonaws.com pinterest-anaheim.s3.us-east-1.amazonaws.com pinterest-hilo.s3.amazonaws.com pinterest-hilo.s3.us-east-1.amazonaws.com pinterest-sim-toontown.s3.amazonaws.com pinterest-sim-toontown.s3.us-east-1.amazonaws.com pinterest-media-upload.s3.amazonaws.com pinterest-media-upload.s3.us-east-1.amazonaws.com pinterest-media-upload.s3-accelerate.amazonaws.com pinterest-media-upload.s3-accelerate.us-east-1.amazonaws.com pinterest-milwaukee.s3.amazonaws.com pinterest-milwaukee.s3.us-east-1.amazonaws.com pinterest-poughkeepsie.s3.amazonaws.com pinterest-poughkeepsie.s3.us-east-1.amazonaws.com pinterest-waterloo.s3.amazonaws.com pinterest-waterloo.s3.us-east-1.amazonaws.com pinterest-plymouth.s3.amazonaws.com pinterest-plymouth.s3.us-east-1.amazonaws.com pinterest-salvador.s3.us-east-1.amazonaws.com pinterest-yamagata.s3.amazonaws.com pinterest-yamagata.s3.us-east-1.amazonaws.com *.cedexis.com *.cedexis-radar.net *.tvpixel.com api.pinadmin.com *.live-video.net https://*.daily.co https://*.pluot.blue wss://*.wss.daily.co api.basistheory.com; form-action 'self' *.adyen.com *.klarna.com *.tink.com *.adyenpayments.com; frame-src 'self' *.ada.support *.pinimg.com *.pinterest.com *.adyen.com static-sandbox.dlocal.com static.dlocal.com *.google.com *.facebook.com www.recaptcha.net https://iframe.arkoselabs.com/ https://pinterest-api.arkoselabs.com/ api.sardine.ai api.sandbox.sardine.ai pinterest-hilo.s3.amazonaws.com pinterest-hilo.s3.us-east-1.amazonaws.com pinterest-sim-toontown.s3.amazonaws.com pinterest-sim-toontown.s3.us-east-1.amazonaws.com pinterest-milwaukee.s3.amazonaws.com pinterest-milwaukee.s3.us-east-1.amazonaws.com pinterest-waterloo.s3.amazonaws.com pinterest-waterloo.s3.us-east-1.amazonaws.com pinterest-tolu.s3.amazonaws.com *.pinterdev.com content.googleapis.com *.youtube.com *.youtube-nocookie.com *.ytimg.com player.vimeo.com calendly.com vine.co bid.g.doubleclick.net *.fls.doubleclick.net pinlogs.s3.amazonaws.com pinlogs.s3.us-east-1.amazonaws.com advertising-delivery-metric-reports.s3.amazonaws.com advertising-delivery-metric-reports.s3.us-east-1.amazonaws.com servedby.flashtalking.com pinterest-uk.admo.tv pinterest-uk-web.admo.tv fbrpc://call *.linkedin.com px.ads.linkedin.com api.basistheory.com js.basistheory.com 3ds.basistheory.com; media-src 'self' blob: m.media-amazon.com data: *.pinimg.com *.live-video.net; object-src 'self'; script-src 'nonce-593eccf7102c06c87543e9225c8c352b' 'strict-dynamic' 'self' blob: 'unsafe-inline' *.pinimg.com *.pinterest.com *.adyen.com js.dlocal.com js-sandbox.dlocal.com static-sandbox.dlocal.com static.dlocal.com *.adyenpayments.com 'report-sample' *.google.com connect.facebook.net *.google-analytics.com *.facebook.com *.googleadservices.com *.doubleclick.net *.googletagmanager.com radar.cedexis.com *.cedexis-test.com www.gstatic.com/recaptcha/ www.gstatic.cn/recaptcha/ www.recaptcha.net https://pinterest-api.arkoselabs.com/ api.sardine.ai api.sandbox.sardine.ai 'wasm-unsafe-eval' js.basistheory.com 3ds.basistheory.com; worker-src 'self' blob: 'unsafe-inline'; report-uri /_/_/csp_report/?rid=6427629897947515; frame-ancestors 'self' , script-src 'self' blob: 'unsafe-inline' *.pinimg.com *.pinterest.com *.adyen.com js.dlocal.com js-sandbox.dlocal.com static-sandbox.dlocal.com static.dlocal.com *.adyenpayments.com 'report-sample' *.google.com connect.facebook.net *.google-analytics.com *.facebook.com *.googleadservices.com *.doubleclick.net *.googletagmanager.com radar.cedexis.com *.cedexis-test.com www.gstatic.com/recaptcha/ www.gstatic.cn/recaptcha/ www.recaptcha.net https://pinterest-api.arkoselabs.com/ api.sardine.ai api.sandbox.sardine.ai 'wasm-unsafe-eval' js.basistheory.com 3ds.basistheory.com; report-uri /_/_/csp_report/?rid=6427629897947515] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy-Report-Only:[same-origin; report-to="coop-endpoint"] Date:[Sun, 05 Oct 2025 19:48:15 GMT] Link:[<https://i.pinimg.com>; rel=preconnect; crossorigin=anonymous, <https://s.pinimg.com>; rel=preconnect; crossorigin=anonymous, <https://v1.pinimg.com>; rel=preconnect; crossorigin=anonymous] Origin-Trial:[AvlUIFJouPpJAKljRGh7EnYm2Brnx/eu51h39Z7p11vbzNlw2YhkUhxvxZdkS709VlGGNw4Gcg/a9mAzHDrEcQ0AAAB5eyJvcmlnaW4iOiJodHRwczovL3BpbnRlcmVzdC5jb206NDQzIiwiZmVhdHVyZSI6IlNlbmRGdWxsVXNlckFnZW50QWZ0ZXJSZWR1Y3Rpb24iLCJleHBpcnkiOjE2ODQ4ODYzOTksImlzU3ViZG9tYWluIjp0cnVlfQ==] P3p:[CP="This is not a P3P policy. See https://www.pinterest.com/_/_/help/articles/pinterest-and-p3p for more info."] Pinterest-Generated-By:[coreapp-webapp-prod-0a011c30] Pinterest-Version:[53b4edc] Referrer-Policy:[origin] Reporting-Endpoints:[coop-endpoint="https://www.pinterest.com/_/_/coop_report/", coep-endpoint="https://www.pinterest.com/_/_/coep_report/"] Set-Cookie:[csrftoken=181ed574a82ce0f61d69c309b782c2c0; path=/; expires=Mon, 05 Oct 2026 19:48:15 GMT; samesite=lax; secure _pinterest_sess=TWc9PSYzWUJaT0MxQzNFZ1JlbjJrRlFPSzVmOEtKQUlTbE9laU9Gb0J2ekRFSkdiZUx4aVdkc0JaUytDRzNxRTFUQ0RQMEtwRU04TGl4RmVPZmdHWU1DWHh6cWJrbjR1My9lTXdHSXdVVXpzeGU0UT0mMWhHKytpdTRVUlBPTnpMZU0zbS8xSUcvcnVzPQ==; path=/; expires=Wed, 30 Sep 2026 19:48:15 GMT; domain=.pinterest.com; samesite=none; secure; httponly _auth=0; path=/; expires=Wed, 30 Sep 2026 19:48:15 GMT; domain=.pinterest.com; secure; httponly _routing_id="bff4efef-c4be-4015-ab73-c15814887941"; Max-Age=86400; Path=/; HttpOnly] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Timing-Allow-Origin:[https://pinterest.com] Vary:[User-Agent, Accept-Encoding] X-Cdn:[fastly] X-Content-Type-Options:[nosniff] X-Envoy-Upstream-Service-Time:[22] X-Frame-Options:[SAMEORIGIN] X-Pinterest-Rid:[6427629897947515] X-Pinterest-Rid-128bit:[4d4a48cfb7169423593387564ed78b5d] X-Ua-Compatible:[IE=edge] X-Xss-Protection:[1; mode=block]]
```

## ietf.org

```
200 OK
map[Age:[60] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[public, max-age=14400] Cf-Cache-Status:[HIT] Cf-Ray:[989f6f7c7d9305b7-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:48:15 GMT] Expires:[Sun, 05 Oct 2025 23:48:15 GMT] Last-Modified:[Sun, 05 Oct 2025 19:32:52 GMT] Referrer-Policy:[same-origin] Server:[cloudflare] Set-Cookie:[__cf_bm=_9Er7.EzCMbnwL0xUJ5.DlROfsc7_Gb7p8GBgaSg70A-1759693695-1.0.1.1-yHNSH9QgVeEKWvs7TK6QbDkxh_8Hc5d_up5ce_uBlvaBGAZYli4u2z2mPQYYqCb0CzBjseufDx6cE3kw9WA1elB1MmVcumqdAWjA6kq5L3o; path=/; expires=Sun, 05-Oct-25 20:18:15 GMT; domain=.ietf.org; HttpOnly; Secure; SameSite=None] Vary:[Cookie] X-Content-Type-Options:[nosniff] X-Frame-Options:[DENY]]
```

## theguardian.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[0] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[max-age=60, stale-while-revalidate=6, stale-if-error=864000, private,no-transform] Connection:[keep-alive] Content-Length:[1241038] Content-Security-Policy:[upgrade-insecure-requests; default-src https:; script-src https: 'unsafe-inline' 'unsafe-eval' blob: 'unsafe-inline'; frame-src https: data:; style-src https: 'unsafe-inline'; img-src https: data: blob:; media-src https: data: blob:; font-src 'self' https://assets.guim.co.uk https://pasteup.guim.co.uk https://interactive.guim.co.uk https://dashboard.ophan.co.uk data:; connect-src https: wss: blob:; child-src https: blob:; object-src 'none'; base-uri 'none'] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:48:20 GMT] Etag:[W/"hash4958074774528718345"] Feature-Policy:[camera 'none'; microphone 'none'; midi 'none'; geolocation 'none'] Link:[<https://assets.guim.co.uk/polyfill.io/v3/polyfill.min.js?rum=0&features=es6%2Ces7%2Ces2017%2Ces2018%2Ces2019%2Cdefault-3.6%2CHTMLPictureElement%2CIntersectionObserver%2CIntersectionObserverEntry%2CURLSearchParams%2Cfetch%2CNodeList.prototype.forEach%2Cnavigator.sendBeacon%2Cperformance.now%2CPromise.allSettled&flags=gated&callback=guardianPolyfilled&unknown=polyfill&cacheClear=1>; rel=prefetch,<https://assets.guim.co.uk/assets/frameworks.client.web.6b5647f09664a1f0b5f4.js>; rel=prefetch,<https://assets.guim.co.uk/assets/index.client.web.b951e9cd37def3460e83.js>; rel=prefetch,<https://assets.guim.co.uk/commercial/64e2212ea0dfddf4a1b4/graun.standalone.commercial.js>; rel=prefetch,,<https://assets.guim.co.uk/>; rel=preconnect,<https://i.guim.co.uk>; rel=preconnect,<https://j.ophan.co.uk>; rel=preconnect,<https://ophan.theguardian.com>; rel=preconnect,<https://api.nextgen.guardianapps.co.uk>; rel=preconnect,<https://hits-secure.theguardian.com>; rel=preconnect,<https://interactive.guim.co.uk>; rel=preconnect,<https://phar.gu-web.net>; rel=preconnect,<https://static.theguardian.com>; rel=preconnect,<https://support.theguardian.com>; rel=preconnect] Onion-Location:[https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/us] Permissions-Policy:[camera=(), microphone=(), midi=(), geolocation=(), interest-cohort=(), clipboard-read=(), unload=()] Referrer-Policy:[no-referrer-when-downgrade] Set-Cookie:[GU_mvt_id=539404; expires=Sat, 03 Jan 2026 19:48:20 GMT; path=/; domain=.theguardian.com; Secure gu_client_ab_tests=; path=/; max-age=2592000 gu_v2_mvt_id=416; path=/; max-age=2592000 GU_geo_country=US; path=/; Secure] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Gu-Dotcomponents:[true] X-Gu-Edition:[us] X-Gu-Frontend-Git-Commit-Id:[29999cae32786d35cccd60ea63165177c2169312] X-Timer:[S1759693701.594454,VS0,VS0,VE91] X-Xss-Protection:[1; mode=block]]
```

## joomla.org

```
200 OK
map[Cache-Control:[no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f6f9f3f520a8f-IAD] Connection:[keep-alive] Content-Security-Policy:[default-src 'self'; script-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com https://*.google-analytics.com https://*.googletagmanager.com https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.joomla.org https://*.pingdom.net https://*.googleapis.com https://*.doubleclick.net https://*.amazon-adsystem.com https://completion.amazon.com; style-src 'self' 'unsafe-inline' https://*.joomla.org https://hcaptcha.com https://*.hcaptcha.com https://fonts.googleapis.com; connect-src 'self' https://*.joomla.org https://hcaptcha.com https://*.hcaptcha.com https://*.pingdom.net https://*.doubleclick.net https://*.google-analytics.com; frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://*.google.com https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com https://www.slideshare.net; font-src 'self' https://fonts.gstatic.com https://*.joomla.org; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com https://*.joomla.org https://*.pingdom.net https://*.doubleclick.net https://*.gstatic.com https://*.google.com https://*.googleapis.com https://img.youtube.com  https://i1.ytimg.com https://i.ytimg.com https://i9.ytimg.com https://s.ytimg.com https://*.amazon-adsystem.com https://*.ssl-images-amazon.com https://*.assoc-amazon.com https://m.media-amazon.com https://opensourcematters.org https://*.opensourcematters.org; media-src 'self' https://*.googlevideo.com; report-uri https://wwwjorg.report-uri.com/r/t/csp/enforce] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:48:21 GMT] Expires:[Wed, 17 Aug 2005 00:00:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:33:26 GMT] Nel:[{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}] Permissions-Policy:[interest-cohort=()] Pragma:[no-cache] Referrer-Policy:[no-referrer-when-downgrade] Report-To:[{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DZ6A3sMiteHF7JOzzWzgAjzG2EvsPmkfhU7gPzPmcPEZbd%2B4j%2B7PQKPDKmJLQCC%2BSXr9rTFEvI9X9xrlyXzHUigRBtd4qWpVmMUI"}]}] Server:[cloudflare] Strict-Transport-Security:[max-age=31536000; includeSubDomains] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Litespeed-Cache:[hit] X-Turbo-Charged-By:[LiteSpeed] X-Xss-Protection:[1; mode=block]]
```

## dan.com

```
200 OK
map[Cache-Control:[s-maxage=15, stale-while-revalidate] Connection:[keep-alive] Content-Length:[123086] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:48:21 GMT] Etag:["165to5s4clx2mtb"] Server:[envoy] Set-Cookie:[traceid=7990fbfa69d406ec3d0ea0aeef858c70; Max-Age=120; Path=/; Expires=Sun, 05 Oct 2025 19:50:21 GMT fb_sessiontraffic=S_TOUCH=&pathway=01d773e4-a238-41a6-bed9-97e56305faa4&V_DATE=&pc=0; Path=/; Domain=afternic.com; Expires=Sun, 05 Oct 2025 20:08:21 GMT pathway=01d773e4-a238-41a6-bed9-97e56305faa4; Path=/; Domain=afternic.com; Expires=Sun, 05 Oct 2025 20:08:21 GMT visitor=vid=01d773e4-a238-41a6-bed9-97e56305faa4; Path=/; Domain=afternic.com; Expires=Sun, 04 Oct 2026 19:48:21 GMT _policy={"restricted_market":false,"tracking_market":"none"}; Path=/; Domain=afternic.com; Expires=Mon, 05 Oct 2026 19:48:21 GMT market=en-US; expires=Mon, 05-Oct-2026 19:48:21 GMT; path=/; domain=.afternic.com _abck=6A1B2B2AAEB543CF8E5BAC37F4332E7A~-1~YAAQk8gwF4ztNqiZAQAAoQHrtQ4xD831XbY0zWEd+cxbtz1Rm2YVnjOdnjfXt3wYJceIwB7GR+7YXzO0m5F+e1JouC6FxUNuEJmdzsWNrofheIEKgiTQVdBYgcU9HMOhuJZ/RRmG+zYb4yD1+NnpSoC3TH09b5nYCbB0U8TuoUqJ71Fx7od8+yUY5AiFc+wdJ3WYYVGHEtivQJJTl6ZN+chpKKUJPH4ZwCtxZ7OYv/9jJLZFrQEJsg4utOI+31TQRE/yKQjvI8/gx5t6xujzRnvo8SV7svECv3MuMa2v/VtPLoiEvUWLF99Y48JJg0Cbgw+lZnEC5C0WZ0eEd/zJTrTJLQhL4YMA32T4A4FDsoNM1aiJWDh7dbcwJ90Wrq6l0dM0k1ZsOmF88GDHdS1p+tE+jUp+SLJ+jTMXkdgiUtrEkhJwCZlpIWKczucbh7RtJsB/MVbZWs9ACDRIgFP+1jKhAr8LUw==~-1~-1~-1~-1~-1; Domain=.afternic.com; Path=/; Expires=Mon, 05 Oct 2026 19:48:21 GMT; Max-Age=31536000; Secure bm_sz=893362EFB47B52FB33EC56851F54A406~YAAQk8gwF43tNqiZAQAAoQHrtR0QnJQXXAHJBN+9rG2951IhSxVCL9BOYEoA+aQfXuepS6HSGdIFkzY1h7NaeZqeh10ATjfGkXhc8u8y/SFzeSiJtllWd/keJQMvnvziqjgNZ8tMf08o5gPmfUrolaXaz2Q0yUvuZGMdH/dHa7vImRp6gLYk8wFDjYw9GCpmFz39CGalMFJztVINOb8zHP2jRBlaSHfw1PiMs4L6sG6Q/23nrKdBjifCDJm0y0ydIj7cjftHYeuvp0gVHmAx04DPqtXwKhuu4R4gV+Pljxyn+eYW7pQhzV1OoTTpsUn34D9P5NpW40q/IXlfXl4vD2MbVe67Borcn2WdjX3G~4535617~3422516; Domain=.afternic.com; Path=/; Expires=Sun, 05 Oct 2025 23:48:21 GMT; Max-Age=14400] X-Arc:[2] X-Envoy-Upstream-Service-Time:[18] X-Nextjs-Cache:[STALE] X-Powered-By:[Express]]
```

## java.com

```
403 Forbidden
map[Akamai-Grn:[0.6cc83017.1759693701.b2ddbaad] Akamai-Request-Bc:[[a=23.48.200.108,b=3000875693,c=g,n=US_VA_ASHBURN,o=20940]] Cache-Control:[max-age=1800] Content-Length:[358] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:48:21 GMT] Expires:[Sun, 05 Oct 2025 20:18:21 GMT] Mime-Version:[1.0] Server:[AkamaiGHost] Server-Timing:[ak_p; desc="1759693701685_389073004_3000875693_16_61873_13_19_-";dur=1]]
```

## sina.com.cn

```
204 No Content
map[Cache-Control:[no-cache] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:48:24 GMT] Sinawap-Debug:[sinawap-mainpage-online-f585dd8bc-mr7kh] X-Custom:[Method is illegal] X-Powered-By:[PHP/7.0.15]]
```

## ads.google.com

```
429 Too Many Requests
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Content-Length:[1103] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:48:25 GMT]]
```

## www.over-blog.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[1221] Cache-Control:[public, s-maxage=3600] Content-Length:[229152] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:28:03 GMT] Referrer-Policy:[no-referrer-when-downgrade] Strict-Transport-Security:[max-age=31536000;preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[DENY] X-Xss-Protection:[1;mode=block]]
```

## code.google.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, must-revalidate] Content-Length:[5418] Content-Security-Policy:[script-src 'nonce-AtF5fchs1DoWgN-ajTwMsg' 'report-sample' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline' http: https:; object-src 'none'; report-uri https://csp.withgoogle.com/csp/codesite; base-uri 'none'] Content-Security-Policy-Report-Only:[require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/codesite] Content-Type:[text/html] Cross-Origin-Opener-Policy:[same-origin; report-to="codesite"] Cross-Origin-Resource-Policy:[cross-origin] Date:[Sun, 05 Oct 2025 19:48:25 GMT] Expires:[Fri, 01 Jan 1990 00:00:00 GMT] Last-Modified:[Tue, 17 Sep 2024 06:08:00 GMT] Pragma:[no-cache] Report-To:[{"group":"codesite","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/codesite"}]}] Server:[sffe] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Xss-Protection:[0]]
```

## google.com.tw

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-EiHyWfX9SuxztefZv0Vz7A' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:48:25 GMT] Expires:[Sun, 05 Oct 2025 19:48:25 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5u21YQD1ZOFCCXD4x9bmEufeySos0o0zHkj0GkGHRke3jH_hQjgbg; expires=Fri, 03-Apr-2026 19:48:25 GMT; path=/; domain=.google.com.tw; Secure; HttpOnly; SameSite=lax NID=525=hKE7wn9OX_04z3PQLPnrYqni7IvtiZlmOi0VPuSg4Xn9Rd-P9DGNRwlUURWEr07gFtZiEkeW3JxuBNiF5-z7J7vifLgGqXUj_l_z2t6QP96R1YExAEvrMa3HiHWZPdii8F_8nWqbAZOZFZ2xv2p94DFsQ-bGvN0NdpKC1YIIdRzaJfuw8uvQObv9E1g0t7h6bKX6CM49wOHvhnNlZHVF; expires=Mon, 06-Apr-2026 19:48:25 GMT; path=/; domain=.google.com.tw; Secure; HttpOnly; SameSite=none] X-Content-Security-Policy-Report-Only:[default-src https: data:; options eval-script inline-script; report-uri /csp_report] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## public-api.wordpress.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:48:30 GMT] Host-Header:[WordPress.com] Link:[<https://wp.me/p2gHKz-pRl>; rel=shortlink] Server:[nginx] Server-Timing:[a8c-cdn, dc;desc=dca, cache;desc=STALE;dur=1.0] Strict-Transport-Security:[max-age=31536000] Vary:[Accept-Encoding accept, content-type, cookie] X-Ac:[4.dca _dca STALE] X-Frame-Options:[SAMEORIGIN] X-Hacker:[Want root?  Visit join.a8c.com/hacker and mention this header.]]
```

## narod.ru

```
200 OK
map[Accept-Ranges:[bytes] Connection:[keep-alive] Content-Length:[2024] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:48:30 GMT] Etag:["68dbaa72-7e8"] Keep-Alive:[timeout=60] Last-Modified:[Tue, 30 Sep 2025 10:01:22 GMT] Server:[ddos-guard] Set-Cookie:[__ddg8_=rABwBdYOq2JJ8wVe; Domain=.narod.ru; Path=/; Expires=Sun, 05-Oct-2025 20:08:30 GMT __ddg10_=1759693710; Domain=.narod.ru; Path=/; Expires=Sun, 05-Oct-2025 20:08:30 GMT __ddg9_=74.99.95.85; Domain=.narod.ru; Path=/; Expires=Sun, 05-Oct-2025 20:08:30 GMT __ddg1_=ghpxtF3qLBJvFmDFpKzH; Domain=.narod.ru; HttpOnly; Path=/; Expires=Mon, 05-Oct-2026 19:48:30 GMT]]
```

## bigcommerce.com

```
200 OK
map[Age:[3551] Alt-Svc:[h3=":443"; ma=86400] Bc-Ray:[1] Cache-Control:[public, max-age=0, must-revalidate] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f6fe2c92d38af-IAD] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' app.makeswift.com] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:48:31 GMT] Document-Policy:[js-profiling] Referrer-Policy:[no-referrer-when-downgrade] Server:[cloudflare] Set-Cookie:[c_consent=%7B%22anonymousId%22%3A%220dba122b-6e13-4d60-8e8d-680a7213bba6%22%2C%22geo%22%3A%7B%22country%22%3A%22United%20States%20of%20America%22%7D%2C%22gpc%22%3Afalse%7D; Path=/; Expires=Mon, 05 Oct 2026 19:48:31 GMT; Domain=bigcommerce.com; SameSite=lax c_user=%7B%22anonymousId%22%3A%220dba122b-6e13-4d60-8e8d-680a7213bba6%22%2C%22traits%22%3A%7B%7D%7D; Path=/; Expires=Mon, 05 Oct 2026 19:48:31 GMT; Domain=bigcommerce.com; SameSite=lax ajs_anonymous_id=0dba122b-6e13-4d60-8e8d-680a7213bba6; Path=/; Expires=Mon, 05 Oct 2026 19:48:31 GMT; Domain=bigcommerce.com; SameSite=lax segmentAnonId=0dba122b-6e13-4d60-8e8d-680a7213bba6; Path=/; Expires=Mon, 05 Oct 2026 19:48:31 GMT; Domain=bigcommerce.com; SameSite=lax __cf_bm=gc5tgxxfGFM1JJf14VTHWCBcICMoJJs6QicLRi8Zxw0-1759693711-1.0.1.1-cNXlzll6eZVWD8XipAggzACpfMgTxLw6eNBwH6qE27IVMnDr5KICPVI1vyE9eTp4bL6v3snwaO.79FABjvtknzmtkMHq7BEKiKD_gSE6vws; path=/; expires=Sun, 05-Oct-25 20:18:31 GMT; domain=.bigcommerce.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=2592000; includeSubDomains] X-Matched-Path:[/en-US/[[...path]]] X-Powered-By:[Next.js] X-Vercel-Cache:[HIT] X-Vercel-Id:[iad1::iad1::xg56g-1759693711816-dbc343bb4fcb]]
```

## howstuffworks.com

```
200 OK
map[Connection:[keep-alive] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:48:32 GMT] Expires:[Sun, 05 Oct 2025 15:58:32 -0400] Server:[nginx] Via:[1.1 9d9b3f05e994245e3be7cd3dbae1ce50.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[mdKeCnhYHsmDF-dl7BNOQSJwIkpyYnxmmHmenaYlQog8fVk-HaSV4A==] X-Amz-Cf-Pop:[JFK52-P6] X-Cache:[Miss from cloudfront]]
```

## justgiving.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[46] Cache-Control:[public, max-age=60] Connection:[keep-alive] Content-Length:[3763] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:48:32 GMT] Etag:["5ccfba8338195771d8c30ecc05a80b05"] Last-Modified:[Thu, 04 Sep 2025 07:03:10 GMT] Referrer-Policy:[same-origin] Server:[AmazonS3] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Via:[1.1 62997e8047323290451b8a864e88914c.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[PIIk956yvifiOXFxTNl-GU-ru2JmOGWuBylCah6-8kmr4CFEjIVMDw==] X-Amz-Cf-Pop:[IAD50-C2] X-Amz-Server-Side-Encryption:[AES256] X-Amz-Version-Id:[HLLUDBb4iNLpM_1V1IFtjp93EceKHkHM] X-Cache:[Hit from cloudfront] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[1; mode=block]]
```

## www.livejournal.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[0] Cache-Control:[private, proxy-revalidate] Connection:[keep-alive] Content-Md5:[ce7FhvZlZiJxC/MAWBd0zg] Content-Security-Policy:[default-src 'self' *.livejournal.com *.livejournal.net *.dsp-rambler.ru *.google.com google.com *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru *.tiktok.com tiktok.com *.youtube.com youtube.com; script-src 'self' *.livejournal.com *.livejournal.net *.24smi.net *.adfox.ru *.adlooxtracking.com adlooxtracking.com *.adlooxtracking.ru adlooxtracking.ru ad.mail.ru api.giphy.com bs.serving-sys.ru cdn.ampproject.org cdn.jsdelivr.net cdnjs.smi2.ru *.cdn-vk.ru content.adriver.ru *.criteo.com *.criteo.net *.doubleclick.net *.dropbox.com dsp-rambler.ru *.dsp-rambler.ru embed.bsky.app *.exelator.com *.facebook.com *.facebook.net gist.github.com googleads.g.doubleclick.net *.google-analytics.com *.googleapis.com *.google.com google.com *.google.ru *.googlesyndication.com *.googletagmanager.com googletagmanager.com *.googletagservices.com *.gstatic.com *.instagram.com js.mamydirect.com *.lj.ru mc.yandex.com mc.yandex.ru *.newrelic.com *.nr-data.net *.ok.ru openstat.net pingback.giphy.com *.pingdom.com *.pingdom.net *.pinterest.com *.plista.com privacy-cs.mail.ru *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru rb.infox.sg r.mradx.net *.rnet.plus *.rubiconproject.com r.webturn.ru *.scorecardresearch.com sdk.canva.com *.services.livejournal.com smi2.ru ssl.p.jwpcdn.com static.smi2cdn.ru static.smi2.net static.xx.fbcdn.net stat.media telegram.org tiktokcdn-us.com *.tiktok.com tiktok.com tns-counter.ru *.top100.ru top-fwz1.mail.ru tpc.googlesyndication.com *.ttwstatic.com twemoji.maxcdn.com *.twimg.com *.twitter.com *.videos.livejournal.com vk.com *.vk.com vk.ru *.vk.ru *.weborama.fm weborama.fm *.weborama.fr weborama.fr *.weborama.ru weborama.ru *.weborama-tech.ru weborama-tech.ru *.webturn.ru *.webvisor.org *.yahooapis.com *.yandex.ru yandex.ru yastatic.net ymetrica.com *.youtube.com youtube.com z.moatads.com 'unsafe-inline' 'unsafe-eval'; style-src http: https: data: 'unsafe-inline'; img-src blob: http: https: data:; frame-src http: https:; font-src http: https: data:; connect-src 'self' *.livejournal.com *.livejournal.net ad.adriver.ru ad.mail.ru *.ad-tech.ru api.giphy.com bs.serving-sys.ru cdn.ampproject.org *.criteo.com csi.gstatic.com data00.adlooxtracking.com dsp-rambler.ru *.dsp-rambler.ru *.eaglecdn.com export-download.canva.com sdk.canva.com *.g.doubleclick.net googleads.g.doubleclick.net *.google-analytics.com *.googleapis.com *.google.com google.com *.googletagmanager.com googletagmanager.com graph.facebook.com gstatic.com *.lj.ru lj.stat.eagleplatform.com mc.yandex.by mc.yandex.com mc.yandex.md mc.yandex.ru pingback.giphy.com *.pingdom.net privacy-cs.mail.ru *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru rb.infox.sg *.rnet.plus *.services.livejournal.com *.ssp.rambler.ru ssp.rambler.ru static-mon.yandex.net static.xx.fbcdn.net stat.media stats.g.doubleclick.net smi2.net smi2.ru sve.online.sberbank.ru *.tiktok.com tiktok.com top-fwz1.mail.ru *.twitter.com *.webturn.ru *.webvisor.org wss://www.livejournal.com yandexmetrica.com yandexmetrica.com:29010 yandexmetrica.com:30103 *.yandex.net *.yandex.ru yandex.ru yastatic.net ymetrica1.com ymetrica.com *.youtube.com youtube.com; report-uri https://www.livejournal.com/csp_reports; report-to livejournal; media-src http: https: blob: data: storage.mds.yandex.net; frame-ancestors 'self'; worker-src 'self' blob:; object-src 'self' blob: *.livejournal.net youtube.com *.youtube.com; child-src 'self' blob:;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:48:33 GMT] Etag:[GgZzW/ce7FhvZlZiJxC/MAWBd0zg] Keep-Alive:[timeout=50] P3p:[CP="NON DSP NID ADMa DEVa TAIa PSAa PSDa OUR IND UNI COM NAV"] Permissions-Policy:[browsing-topics=()] Referrer-Policy:[no-referrer-when-downgrade] Reporting-Endpoints:[livejournal="https://www.livejournal.com/csp_reports"] Server:[nginx] Set-Cookie:[luid=URNKAWjiy5GStJXepR0hAgB=; expires=Thu, 31-Dec-37 23:55:55 GMT; domain=.livejournal.com; path=/; secure; samesite=none] Vary:[Accept-Encoding,ETag] X-Aws-Id:[3dt-ws10] X-Lj-Flow-Id:[aOLLkaLknY4uZ0mBEinV-AAAABI] X-Splittest:[none] X-Varnish:[431921095] X-Vws-Id:[kr-varn02-new.lj.rambler.tech]]
```

## weather.com

```
200 OK
map[Access-Control-Allow-Credentials:[false] Access-Control-Allow-Headers:[*] Access-Control-Allow-Methods:[GET,POST,OPTIONS] Access-Control-Allow-Origin:[*] Access-Control-Max-Age:[86400] Akamai-Grn:[0.05643017.1759693714.3977400a] Cache-Control:[max-age=0, no-cache] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:48:34 GMT] Etag:["17faa9-XAC9uCjU/bLYbqvLqtfAGVa/WUA"] Expires:[Sun, 05 Oct 2025 19:48:34 GMT] Pragma:[no-cache] Property-Id:[TWC-WX-Prod] Set-Cookie:[ci=TWC-Locale-Group=US&TWC-Device-Class=mobile&X-Origin-Hint=PROD-AWS-Daybreak-home&TWC-Network-Type=wifi&TWC-GeoIP-Country=US&TWC-GeoIP-Lat=36.7522&TWC-GeoIP-Long=-76.2168&TWC-Privacy=usa-va&TWC-GeoIP-DMA=544&TWC-GeoIP-City=CHESAPEAKE&TWC-GeoIP-Region=VA; path=/; domain=.weather.com; secure gbuuid=1dcc845f-1f37-40d2-8120-015d32b9568d; Expires=Tue, 04 Nov 2025 19:48:34 GMT; Domain=.weather.com; Path=/ ] Strict-Transport-Security:[max-age=15552000; preload] Twc-Ak-Req-Id:[3977400a] Twc-Device-Class:[mobile] Twc-Experiment:[e30=] Twc-Geoip-City:[CHESAPEAKE] Twc-Geoip-Country:[US] Twc-Geoip-Dma:[544] Twc-Geoip-Latlong:[36.7522,-76.2168] Twc-Geoip-Region:[VA] Twc-Locale-Group:[US] Twc-Path-Locale:[/] Twc-Privacy:[usa-va] Twc-Subs:[none] Twc-Unit:[u] Webcakes-App-Name:[daybreak-home] Webcakes-App-Version:[1.0.0-937cf4493b] Webcakes-Region:[us-west-2] X-Content-Type-Options:[nosniff] X-Dns-Prefetch-Control:[off] X-Download-Options:[noopen] X-Frame-Options:[SAMEORIGIN] X-In-Ew-Prod:[True] X-Lma:[PS] X-Origin-Hint:[PROD-AWS-Daybreak-home] X-Xss-Protection:[1; mode=block]]
```

## themeforest.net

```
200 OK
map[Age:[686] Cache-Control:[max-age=1800, public, stale-while-revalidate=300, stale-if-error=28800] Cf-Cache-Status:[HIT] Cf-Ray:[989f6ff15c1ac987-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:48:34 GMT] Etag:[W/"fea034b466ac40492739de0d1409bba7"] Link:[<https://assets.market-storefront.envato-static.com/storefront/assets/styles-6c9e4c66b95218621e92b7dde84114b72086b294d927dc693bc5ab27f5f14fae.css>; rel=preload; as=style; type=text/css,<https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/search-header-05971474482f1a21d041838addc1f022fa748078e6e4d40f6f728e743231b234.webp>; rel=preload; as=image; type=image/webp,<https://assets.market-storefront.envato-static.com/storefront/assets/logos/themeforest-dd57a83e1947d49586491f03d1c3eedc4c6a438d2740328c5277e6b67bc46ad9.webp>; rel=preload; as=image; type=image/webp,<https://assets.market-storefront.envato-static.com/storefront/assets/styles-6c9e4c66b95218621e92b7dde84114b72086b294d927dc693bc5ab27f5f14fae.css>; rel=preload; as=style; nopush,<https://assets.market-storefront.envato-static.com/storefront/assets/datadog-63af54d672d0e3f0dca938d8e51990edb7cd6b1287f2aee19557c5af87f6a7c3.js>; rel=preload; as=script; crossorigin=anonymous; nopush] Referrer-Policy:[strict-origin-when-cross-origin] Server:[cloudflare] Set-Cookie:[__cf_bm=7uy4ZR5HGRuTJEo9qNM3IzlQhyqu_5tggomYXdzzaBg-1759693714-1.0.1.1-KUlnFyFeUzFEvdy2GmqjcChmPUW3EanFFHRKOpO6wmKeVUe4p_qNugVNvWY4Ac.XqcewWWIc2fhr6id7JXXM_puKkEcsdXRXtgKFIV1G6x8; path=/; expires=Sun, 05-Oct-25 20:18:34 GMT; domain=.themeforest.net; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=31536000] X-Content-Digest:[55f1b9a966d347b00eaaea27fd9afa9892d8f902] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Permitted-Cross-Domain-Policies:[none] X-Rack-Cache:[stale, invalid, store] X-Request-Id:[e5f4906a-4e66-461d-93bb-fd1c0648d6d8] X-Runtime:[0.216610] X-Xss-Protection:[0]]
```

## bestfreecams.club

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f6ff278ebde8e-IAD] Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:48:34 GMT] Last-Modified:[Sun, 17 Jan 2021 11:50:09 GMT] Nel:[{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}] Report-To:[{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7UXmGebQQw15VtdLlJiOCzGcYt7yGyLguKtXKOjZ3GW7oJTS6ZxWh18up5drRk9IDCM2PsB5cPXXhQayRvu0JMf%2BkYN9uO0lkiT7bwonrJaO5JLTtg%3D%3D"}]}] Server:[cloudflare] X-Amz-Id-2:[jB3EGi6+sZOpOvRTxh0d5YH9oTBxELkUW7XcTBXHLm7IgkCZeyLBBdMNzlo4M2BoBL1ds2C+LaLPxPv4CvfahAjlQHJUA7EbHwsJWys8fts=] X-Amz-Request-Id:[QQGA991QFHE4GZR5]]
```

## scmp.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[public, max-age=5, stale-while-revalidate=3600] Cf-Cache-Status:[HIT] Cf-Ray:[989f7012def9879b-IAD] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'none'] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:48:40 GMT] Last-Modified:[Sun, 05 Oct 2025 19:48:25 GMT] Server:[cloudflare] Set-Cookie:[__cf_bm=uxCb2U4VZZRNbCUVWeBH4AlJB0JI0kTIABOGzfSXKS0-1759693720-1.0.1.1-YViEp3aKwpPvzVuOtbZX5cazLF0K9ojxsPkVGmmwk2PTzyUsc7dIjS91N6HhRj5pmQYynkZcucGVFFZTMz6LdUZt5mNyeAxdS5CfwHrKp88; path=/; expires=Sun, 05-Oct-25 20:18:40 GMT; domain=.scmp.com; HttpOnly; Secure; SameSite=None] Vary:[Accept-Encoding] X-Cache-Control:[public, max-age=60, stale-while-revalidate=3600] X-Cached-By:[production-varnish-scmp-pwa-v2-6479c54978-jrfqg] X-Content-Encoding:[br] X-Hits:[1] X-Url:[/]]
```

## techcrunch.com

```
200 OK
map[Accept-Ranges:[bytes] Access-Control-Allow-Methods:[*] Access-Control-Allow-Origin:[https://techcrunch.com] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[default-src 'self' *.techcrunch.com; frame-ancestors 'self'; frame-src 'self' https: data:; style-src 'self' 'unsafe-inline' *; img-src 'self' * data:; connect-src 'self' https:; object-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; worker-src 'self' blob:; media-src 'self' *.youtube.com *.jetpackdigital.com; font-src 'self' * data:; upgrade-insecure-requests; block-all-mixed-content; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:48:45 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://techcrunch.com/wp-json/>; rel="https://api.w.org/"] Permissions-Policy:[autoplay=(), camera=(), fullscreen=*, geolocation=*, display-capture=(self), microphone=()] Referrer-Policy:[no-referrer-when-downgrade] Server:[nginx] Strict-Transport-Security:[max-age=300;includeSubdomains] Vary:[Accept-Encoding, Origin] X-Cache:[STALE] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca8 181 249 80]]
```

## gizmodo.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache, no-store, must-revalidate] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f70380c1f1f6d-IAD] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests; frame-ancestors 'self'] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:48:45 GMT] Last-Modified:[Sun, 05 Oct 2025 19:20:00 GMT] Nel:[{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}] Permissions-Policy:[autoplay=(*), fullscreen=(*), accelerometer=(*), geolocation=(*)] Referrer-Policy:[no-referrer-when-downgrade] Report-To:[{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aaBM4o2in5NintNR2LH0Kg6PKyFx%2Bz09ew%2FFXbEW9pjTAS0zSjpOnSSghzFnFf6Sj9sufEBOkyFMTE6BhAwmdcS8o8XCcNtx6Wg%3D"}]}] Server:[cloudflare] Server-Timing:[cfCacheStatus;desc="DYNAMIC" cfEdge;dur=4,cfOrigin;dur=6] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] Vary:[Accept-Encoding, Cookie] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Rocket-Nginx-Serving-Static:[Yes]]
```

## metro.co.uk

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:48:45 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://metro.co.uk/wp-json/>; rel="https://api.w.org/"] Server:[nginx] Strict-Transport-Security:[max-age=31536000] Vary:[Accept-Encoding] X-Cache:[MISS] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca5 0 10 9980]]
```

## indiatimes.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[max-age=1161] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' *.indiatimes.com] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:48:46 GMT] Expires:[Sun, 05 Oct 2025 20:08:07 GMT] Geo-Info:[Country:US;Continent:NA] Permissions-Policy:[ch-ua=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-model=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-mobile=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-platform=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-platform-version=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com")] Server:[Bhoot] Strict-Transport-Security:[max-age=25920000; includeSubdomains] X-Content-Header:[gzip] X-Frame-Options:[sameorigin] X-Xss-Protection:[1; mode=block]]
```

## tinyurl.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[max-age=900, private] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f705bdde80824-IAD] Connection:[keep-alive] Content-Language:[en] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:50:41 GMT] Server:[cloudflare] Set-Cookie:[XSRF-TOKEN=eyJpdiI6ImxuSnZmcTJQWHdzbFFVRndZTHlxQVE9PSIsInZhbHVlIjoiek1hK0FjOWZpSlNkM2w5clFpQ1BCL0pJeFJvNWJyNWRPdjY3TGhwZUYxL28rZVBXSmVUTVdBdWh1Y2NkcG0xTEZDamNRQS9uSzk3SE1zSk5XS0hWVE9jUlhVVUxWZzRtVWNuTHgrYVRxMWxYWUJyVit4ZzI1aHZRU2IvaGJ5clYiLCJtYWMiOiI5OGM4ZTI4ZmJkYWM3NGMzY2UwNWE3NTY5NDAzMDk1NWJhODNkZDk0NmZhZWFhMzc0NzczMzdmOWE1ZDUxNWI3IiwidGFnIjoiIn0%3D; expires=Sun, 05 Oct 2025 21:50:41 GMT; Max-Age=7200; path=/; domain=.tinyurl.com; secure; samesite=lax tinyurl-session=eyJpdiI6Im9MWXFBQzFoNitBMFpNNzNNbUtiTEE9PSIsInZhbHVlIjoid1dmMUlMR1RUOElEOGl2Z2hhSDlGSERQbkNyRFg4UzNXSjJUK3dYMTZPWXA2Nm1HYXNsdjA0eStDMUNXSGF4dldCeVc1ZXhGYnZ0aVdDZ2R5a0FLSEdyaFRvQlNnaGl5T2craEdLWjlIcldYcEtXakV1eU13cWdNVmhSZ2MxQXgiLCJtYWMiOiI3NzE3NzY1N2JiNzZlMWM5NTA2ZTllNDNmNmY4NTk1YTExMmE4MDBiYzI3YTVhZDFmNGU4MTJiMjQ4Mzg3MzVjIiwidGFnIjoiIn0%3D; expires=Sun, 05 Oct 2025 21:50:41 GMT; Max-Age=7200; path=/; domain=.tinyurl.com; secure; httponly; samesite=lax tinyUUID=eyJpdiI6InZrU1VOVXBkekY4TTB5N0xTTHF6eUE9PSIsInZhbHVlIjoiNFdyVXNkdDhkTmVGU1NPWHQzQlBBcUZCV2hmTDIxdXJoRlZNait2WVBqYWRaYVlhWDY2Zy9jSkRBeVNVWDdvUjdGTkREYkxNdE9WSDhXOHBxTDR2NThwRVczdUptVGZpclBkS1ZJNmY0cUk9IiwibWFjIjoiNDRlYmRmZjU1YmE4YWI1NzJiYThmNGJjMTBjNDRjNThmMjk1ZjE5MDRhYWU5YTRlNWJkMTNjN2VlMzcyY2VjYiIsInRhZyI6IiJ9; expires=Mon, 09 Nov 2026 19:50:41 GMT; Max-Age=34560000; path=/; domain=.tinyurl.com; secure; httponly; samesite=lax early-access=eyJpdiI6Im5xYTVGZTMrL3ljZTN4RnlXdmw1VHc9PSIsInZhbHVlIjoiLzEvRVZQNkJzZFlxclJHS1huWE9EdlJ2cStPSnlZNDdOYlJJdE1pS3JDZ3JESTA0MGxBVkxxc0FJYmc0TjB3QjJOTUtHUTRXQWtKTi9DMEh0RmZEVTRFMVE2dHM2dDFneGIxb1hZQnRSWTg9IiwibWFjIjoiMWYwMjRjMmZlNTBjZGMyODgxMjFhMWQyOGZmMmQ1MjQ5MDYyMmUzMmVlZDU5YzgwZTViMjFiYjViNzZhZTZmOCIsInRhZyI6IiJ9; expires=Mon, 09 Nov 2026 19:50:41 GMT; Max-Age=34560000; path=/; domain=.tinyurl.com; secure; httponly; samesite=lax __cf_bm=BlnSxw4VyUoMmFCp84xNR7Rk0MXRC2eZhnerM8vDyEk-1759693841-1.0.1.1-jUQhoxTT8cGefwrEnmpmoFwSwoycnH9pHYJFIa8xoaKUi_FHxC_W2xNy9OiICYQvWN4H1QV23ODZKBxQmJ1sKSARCeAinifLMETZOUjXg6o; path=/; expires=Sun, 05-Oct-25 20:20:41 GMT; domain=.tinyurl.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[1; mode=block]]
```

## amazon.es

```
405 Method Not Allowed
map[Allow:[GET, POST, PUT, DELETE, OPTIONS] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[0] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:50:42 GMT] Expires:[-1] Pragma:[no-cache] Server:[Server] Set-Cookie:[session-id=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:50:42 GMT session-id-time=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:50:42 GMT session-token=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:50:42 GMT ubid-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:50:42 GMT at-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:50:42 GMT lc-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:50:42 GMT x-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:50:42 GMT x-wl-uid=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:50:42 GMT sess-at-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:50:42 GMT UserPref=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:50:42 GMT] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent,Content-Type,X-Amazon-Wtm-Tag-OPF-ES-ENV-VAR-LRA-SEARCH,X-Amazon-Wtm-Tag-OPF-ES-ENV-VAR-LRA,X-Amazon-Wtm-Tag-OPF-ES-ENV-VAR-DP-LRA,Accept-Encoding,User-Agent] Via:[1.1 a600e3c81bf9abac46be91cc4659d176.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[27BNAOgYa820y2ilb28PK9FcQr3naRcksItUWseeliocguQD4BPL1Q==] X-Amz-Cf-Pop:[IAD61-P7] X-Amz-Rid:[GSWPYB86P8X3X1ZQ78D9] X-Cache:[Error from cloudfront] X-Frame-Options:[SAMEORIGIN]]
```

## smh.com.au

```
200 OK
map[Accept-Ch:[sec-ch-ua-model,sec-ch-ua-platform-version] Accept-Ranges:[bytes] Age:[20] Cache-Control:[public, max-age=20, no-transform] Connection:[keep-alive] Content-Length:[1209641] Content-Security-Policy:[frame-ancestors 'self' *.ffxblue.com.au *.ffx.io *.smh.com.au *.theage.com.au *.brisbanetimes.com.au *.watoday.com.au *.cdn.ampproject.org *.platform.ink; upgrade-insecure-requests] Content-Security-Policy-Report-Only:[child-src blob: data: https:; connect-src https: wss:; default-src blob: data: https: 'report-sample' 'unsafe-eval' 'unsafe-inline'; font-src data: https:; form-action https:; frame-src data: https:; img-src blob: data: https:; media-src blob: data: https:; object-src https:; script-src https: 'unsafe-eval' 'unsafe-inline'; style-src https: 'unsafe-inline'; report-uri https://csp.ffx.io/; report-to csp-endpoint] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:50:42 GMT] Permissions-Policy:[camera=(), geolocation=(), microphone=()] Referrer-Policy:[no-referrer-when-downgrade] Report-To:[{"endpoints":[{"url":"https://csp.ffx.io/"}],"group":"csp-endpoint","include_subdomains":true,"max_age":7884000}] Strict-Transport-Security:[max-age=31536000] Uber-Trace-Id:[f1eab4fc785a5d75:f1eab4fc785a5d75:0:1] Vary:[Accept-Encoding, app-vary, app-vary] Via:[1.1 varnish, 1.1 varnish] X-Brand-Short-Name:[smh] X-Cache:[MISS, HIT, MISS] X-Cache-Hits:[0, 23, 0] X-Content-Type-Options:[nosniff] X-Frame-Options:[sameorigin] X-Render-Name:[rw] X-Served-By:[cache-syd10137-SYD, cache-syd10173-SYD, cache-iad-kcgs7200160-IAD] X-Varnish-Grace:[none] X-Xss-Protection:[0]]
```

## zendesk.com

```
200 OK
map[Age:[1373] Cache-Control:[public, max-age=3600] Cf-Cache-Status:[HIT] Cf-Ray:[989f73144ab6d69d-IAD] Connection:[keep-alive] Content-Security-Policy:[default-src * wss://*.zopim.com 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' app.optimizely.com *.zendesk.com *.zendesk.co.jp *.zendesk.co.uk *.zendesk.com.br *.zendesk.com.mx *.zendesk.de *.zendesk.es *.zendesk.fr *.zendesk.kr *.zendesk.nl *.zendesk.tw *.zendesk.hk; font-src * data:; img-src * data:; media-src * blob:;worker-src 'self' blob:] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:50:42 GMT] Expires:[Sun, 05 Oct 2025 20:50:42 GMT] Last-Modified:[Sun, 05 Oct 2025 19:27:49 GMT] Link:[<https://web-assets.zendesk.com>; rel=preconnect, </scripts/adobe-websdk.js>; rel=preload; as=script] Nc:[T] Server:[cloudflare] Set-Cookie:[__cf_bm=nDhrmtNvwPN5jKaI_fk9nnp92NKkUQ6yPULoywKwNII-1759693842-1.0.1.1-sFUdES3cKjJZLOTCCLq9ns_A_8.bZT6JKqVPVCeUP_I1OiFmIg7KcZioQLCE2ja758lvt5_tQw_kmMLoZms1xaHhi9gMw1kZM42z99PDbJw; path=/; expires=Sun, 05-Oct-25 20:20:42 GMT; domain=.www.zendesk.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=0; preload] X-Content-Type-Options:[nosniff]]
```

## gravatar.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache, must-revalidate, max-age=0] Connection:[keep-alive] Content-Language:[en] Content-Security-Policy:[default-src gravatar.com *.gravatar.com; script-src gravatar.com *.gravatar.com *.wp.com *.google-analytics.com *.googletagmanager.com *.facebook.net apis.google.com/js/ 'nonce-f86e7b109fef' 'nonce-f8d34b3226cb' telegram.org/js/; style-src 'self' gravatar.com *.gravatar.com *.wp.com fonts.googleapis.com 'nonce-f8d34b3226cb' 'nonce-31ebbcd0bb30' 'sha256-NE3gBSsVG0IdyINKOXv7oHDjOD1hoJpOCZQDS8LzvUc=' 'sha256-biLFinpqYMtWHmXfkA1BPeCY0/fNt46SAZ+BBk5YUog=' 'sha256-ONA8DqqhBTsIrZzU3/jZyRdkNkkAGEU74EH252dbGS8=' 'sha256-uYx4ryugsGdahnaIId0IhtdPIgBkKBfNZg2/H0eWhqk=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-xi7Iu5TcqJkb4mlu0FHpAYfWWCETn5kNH3GPA4Coh4M=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-YrOy05n87EW8L5yLZin6THAZq/8Vb6v4uqVq1nOY9X8=' 'sha256-Fw2RK+YpRih15zbXuAaoQAV98ZS+OLAX6wDQ2AkaEho=' 'sha256-t9/679CRyrVA6r3JGaAzcO+diam/7WLn6KXJHJuOzUI=' 'sha256-h0RPO0+/L+WC46JS6RvM6D3KN9C2LfMai6hxwzVFU2k=' 'sha256-YIktaUP7IBRwVksGEOmRykAcO2jHTw97BHns4OnHTIw=' 'sha256-MSTZvl0psO46WYZImeDzGMr7OqGRUy5RPDaeL19QpBk='; font-src data: gravatar.com *.gravatar.com *.wp.com fonts.gstatic.com; img-src data: https: blob:; media-src https://videos.files.wordpress.com/ s.gravatar.com blob:; frame-src gravatar.com *.gravatar.com automattic.crowdsignal.net widgets.wp.com td.doubleclick.net www.googletagmanager.com oauth.telegram.org; connect-src gravatar.com *.gravatar.com *.wp.com data: blob: *.google-analytics.com *.analytics.google.com analytics.google.com googleadservices.com www.googleadservices.com google.com https://public-api.wordpress.com/ *.pexels.com *.giphy.com *.google.com stats.g.doubleclick.net; object-src 'none'; base-uri 'self'; report-uri https://public-api.wordpress.com/csp/; worker-src 'self' blob:;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:50:42 GMT] Expires:[Wed, 11 Jan 1984 05:00:00 GMT] P3p:[CP="CAO PSA"] Server:[nginx] Strict-Transport-Security:[max-age=31536000; includeSubdomains; preload] Vary:[Accept-Encoding] X-Frame-Options:[SAMEORIGIN]]
```

## googleblog.com

```
200 OK
map[Access-Control-Allow-Origin:[*] Content-Language:[en-us] Content-Length:[0] Content-Security-Policy:[script-src 'self' 'strict-dynamic' 'unsafe-inline' *.googleanalytics.com *.google-analytics.com *.youtube.com youtube.com optimize.google.com https://s.ytimg.com *.googletagmanager.com storage.googleapis.com *.googleapis.com *.google.com cdn.ampproject.org *.gstatic.com gstatic.com googleadservices.com *.googleadservices.com 'sha256-hdPneczWRi+c9LQVo+PzNzlNr9TacChC0CW0fiDBHkI=' 'sha256-DE/j4w1a1HDIXysWgFTrJCJK6JWEcHqScfyMr9zq9R4=' 'sha256-Ehy9lGqrTi8OqqWxX1HN6hKJT7iwwYMFJ+HLjpEobO0=' 'sha256-s/yvuH0ZHyO+7N8dM5CshPem4K1PknDExYN18xHq0LI=' 'sha256-MWQdkIAX5J//suH1t5P3PFFwFUiphY0PxD6VVzbBehQ=' 'sha256-587vJAV9t9k86IMQixmyKa7lbPaDhkGzrJsdngtoiAA=' 'sha256-nlbIOie3vmdUUZjQFDMa7iipxS6Qst8pPhTLjibMsRk=' 'sha256-+LJ+tgqOXIri3+D/uJC785tov3eXewv8x+Pkenx+3Z8=' 'sha256-PnD9J8UK8zpwVizQXkEtbZOvTiv9C/05Nn81NEwPBoQ=' 'sha256-LH1mE8uiAlSGs6/ejmL47sTk8G+/Hh6T1ydVxa0idaM=' 'sha256-GuPeLJgWIkkS7hCKcSc+mQs6jTN0D8QzfW624B4OMME=' 'sha256-CDqe41szG4ZmAxS54wSNKisRTrwu1wxcuRQv09PB3Nk=' 'sha256-Xyk5Ei/Yh7DuZgaxNfbPswkpmMKHk5Jy18vkxjfPMj0=' 'sha256-Q+8W9SyZ6wnayM05rLv0YuHooUH/nnzpE2XQZJ/ekjY=' 'sha256-1lOrojGb+aoV56bZpsODLpb+j+HHbONNEpX/YqVtiUU=' 'sha256-sAsQphoZozaLVFpcda3bvT5euqcGL4MqVnizAR+Xla4=' 'sha256-ZlqdbaXB1F4Evuv/nmY3QGBLFBbrfiNndyYxbgdQn7g=' 'sha256-OEwIbDcQTxJYhU2ONmKA0LutIDdkmge2c+9IPFv5vFE='; frame-src 'self' www.google.com *.youtube.com youtube.com accounts.google.com *.doubleclick.net apis.google.com optimize.google.com *.google.com *.cdn.ampproject.org https://www.gstatic.com/ https://www.youtube-nocookie.com/; media-src 'self' data: *.gstatic.com storage.googleapis.com *.googlevideo.com; base-uri 'none'; img-src * data: blob:; default-src 'self' *.gstatic.com storage.googleapis.com; object-src 'none'; style-src 'self' 'unsafe-inline' fonts.googleapis.com *.gstatic.com storage.googleapis.com *.google.com cdn.ampproject.org; font-src 'self' themes.googleusercontent.com *.gstatic.com https://fonts.gstatic.com storage.googleapis.com fonts.googleapis.com *.cdn.ampproject.org; require-trusted-types-for 'script'; connect-src 'self' cdn.ampproject.org *.google.com storage.googleapis.com https://services.google.com/fb/submissions/thekeywordtest/ https://services.google.com/fb/submissions/0a65d7733e1f11ea9701614fc033d30c/ *.gstatic.com gstatic.com *.cdn.ampproject.org *.doubleclick.net https://readaloud.googleapis.com/ *.google-analytics.com https://www.youtube.com/] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:50:48 GMT] Server:[Google Frontend] X-Cloud-Trace-Context:[904b5cc3d3e523b4f337d8413323e723]]
```

## uol.com.br

```
200 OK
map[Akamai-Cache-Status:[Miss from child, Miss from parent] Akamai-Grn:[0.e5f6d517.1759693848.27c026ff] Cache-Control:[no-transform, max-age=10, must-revalidate, proxy-revalidate] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' *.intranet *.uolinc.com;] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:50:49 GMT] Etag:["d8617410a4cc1e3a2e9fe330a686fe64"] Expires:[Sun, 05 Oct 2025 19:50:59 GMT] Last-Modified:[Sun, 05 Oct 2025 19:50:37 GMT] Referrer-Policy:[no-referrer-when-downgrade] Strict-Transport-Security:[max-age=31536000; includeSubDomains]]
```

## disney.com

```
403 Forbidden
map[Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[max-age=0] Content-Length:[368] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:50:49 GMT] Expires:[Sun, 05 Oct 2025 19:50:49 GMT] Mime-Version:[1.0] Server:[AkamaiGHost] X-Origin:[Matterhorn_TLS]]
```

## taringa.net

```
200 OK
map[Accept-Ranges:[bytes] Age:[43999] Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Length:[5524] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 07:37:31 GMT] Etag:["dad326e0c72e97f50d1f97bd43485350"] Last-Modified:[Thu, 10 Oct 2024 14:30:42 GMT] Server:[AmazonS3] Via:[1.1 a94c2fe17ec873611f5b797fc2b571aa.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[tWAMrkS0hX_ZQxI1RRIy53mAQdwV2DTnLhgx6cKNHqxFhV2QXdjwGQ==] X-Amz-Cf-Pop:[IAD61-P10] X-Amz-Server-Side-Encryption:[aws:kms] X-Amz-Server-Side-Encryption-Aws-Kms-Key-Id:[arn:aws:kms:us-east-1:746669208358:key/e6ff8e56-eef8-4594-92b3-60c63580f79c] X-Amz-Server-Side-Encryption-Bucket-Key-Enabled:[true] X-Cache:[Hit from cloudfront]]
```

## sky.com

```
200 OK
map[Cache-Control:[max-age=0, no-cache, no-store] Connection:[keep-alive] Content-Security-Policy:[default-src 'none';  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.awin1.com *.bskyb.com *.clicktale.net *.contentsquare.com *.contentsquare.net *.demdex.net *.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.googletagmanager.com *.intercom.io *.intercomcdn.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.lucidcx.com *.medallia.eu *.optimizely.com *.paa-reporting-advertising.amazon *.qualtrics.com *.redditstatic.com *.sky.com *.skyassets.com *.snapchat.com *.stripe.com *.taggstar.com *.tvsquared.com *.yext-pixel.com *.yimg.com *.zenaps.com aax-eu.amazon-adsystem.com acdn.adnxs.com analytics.tiktok.com analytics.twitter.com android-webview-video-poster: answers2-embed.sky.com.pagescdn.com api.branch.io api2.branch.io app.link assets.adobedtm.com assets.sitescdn.net bat.bing.com britishskybroadcasti.tt.omtrdc.net c.amazon-adsystem.com c5.adalyser.com cdn-assets-prod.s3.amazonaws.com cdn.branch.io cdn.co-buying.com cdn.privacy-mgmt.com cdn.spatialbuzz.com cdn.tt.omtrdc.net cdnjs.cloudflare.com connect.facebook.net content.zeotap.com edge.adobedc.net https://cdn.prod.uidapi.com https://js.adsrvr.org ib.adnxs.com js-cdn.dynatrace.com js.smct.co js.smct.io lantern.roeyecdn.com maps.googleapis.com platform.twitter.com players.brightcove.net rules.quantcount.com s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com secure.quantserve.com servedby.flashtalking.com sky.likewizesupport.com skycustomer.likewizesupport.com smct.co smct.io static.ads-twitter.com tagmanager.google.com the.sciencebehindecommerce.com unpkg.com vjs.zencdn.net www.dwin1.com www.facebook.com www.googleadservices.com www.gstatic.com yahoo.com;  style-src 'self' 'unsafe-inline' *.clicktale.net *.contentsquare.net *.doubleclick.net *.googlesyndication.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.medallia.eu *.sky.com *.skyassets.com assets.adobedtm.com assets.sitescdn.net fonts.googleapis.com players.brightcove.net s0.2mdn.net sky.likewizesupport.com sky.lucidcx.com skycustomer.likewizesupport.com tagmanager.google.com www.facebook.com www.googletagmanager.com www.gstatic.com;  font-src 'self' data: *.google.co.uk *.google.com *.google.ie *.intercomcdn.com *.kampyle.com *.medallia.eu *.sky.com *.skyassets.com *.snapchat.com fonts.gstatic.com fonts.smct.co fonts.smct.io players.brightcove.net sky.likewizesupport.com sky.lucidcx.com skycustomer.likewizesupport.com use.typekit.net www.pinterest.com;  img-src 'self' android-webview-video-poster: data: *.akamaihd.net *.atdmt.com *.awin1.com *.boltdns.net *.brightcove.com *.brightcovecdn.com *.clicktale.net *.cloudfront.net *.contentsquare.net *.contentstack.io *.demdex.net *.doubleclick.net *.g.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.googletagmanager.com *.gumgum.com *.intercom.io *.intercomassets.com *.intercomassets.eu *.intercomcdn.com *.intercomcdn.eu *.kampyle.com *.liveperson.net *.lpsnmedia.net *.lucidcx.com *.medallia.eu *.mktgcdn.com *.online-metrix.net *.optimizely.com *.qualtrics.com *.reddit.com *.sky *.sky.com *.skyassets.com *.snapchat.com *.tvsquared.com *.yahoo.com *.yext-pixel.com *.zenaps.com 8th.io aax-eu.amazon-adsystem.com acdn.adnxs.com ad.doubleclick.net ade.googlesyndication.com adservice.google.com analytics.tiktok.com analytics.twitter.com api.branch.io api2.branch.io app.link assets.adobedtm.com bat.bing.com c.amazon-adsystem.com c5.adalyser.com cdn.branch.io cdn.privacy-mgmt.com cdn.smct.co cdn.smct.io cdn.spatialbuzz.com cms.quantserve.com connect.facebook.net ct.pinterest.com dmp.v.fwmrm.net ep.smct.co ep.smct.io events.smct.co ib.adnxs.com lantern.roeye.com live.staticflickr.com maps.googleapis.com maps.gstatic.com match.adsrvr.org mwzeom.zeotap.com pixel.quantserve.com players.brightcove.net pm.w55c.net px.smct.co px.smct.io s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com servedby.flashtalking.com sky.likewizesupport.com skycustomer.likewizesupport.com smct.co smct.io ssl.gstatic.com t.co tags.w55c.net tracking.audio.thisisdax.com www.facebook.com www.googleadservices.com www.gstatic.com www.pinterest.com;  connect-src 'self' android-webview-video-poster: blob: *.akamaihd.net *.akstat.io *.analytics.google.com *.assistant.watson.appdomain.cloud *.bf.dynatrace.com *.boltdns.net *.brightcovecdn.com *.bskyb.com *.clicktale.net *.contentsquare.net *.contentstack.io *.demdex.net *.doubleclick.net *.g.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.googletagmanager.com *.intercom.io *.intercomcdn.com *.intercomcdn.eu *.intercomusercontent.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.lucidcx.com *.medallia.eu *.optimizely.com *.paa-reporting-advertising.amazon *.qualtrics.com *.reddit.com *.redditstatic.com *.sky.com *.skyassets.com *.snapchat.com *.taggstar.com *.tvsquared.com *.wepowerconnections.com *.yext-pixel.com *.yext.com *.yextapis.com *.yimg.com aax-eu.amazon-adsystem.com acdn.adnxs.com ad.doubleclick.net analytics.tiktok.com api.amplitude.com api.amplitude.com api.branch.io api.iperceptions.com api.taggstar.com api2.branch.io app.link assets.adobedtm.com awk.epgsky.com bat.bing.com britishskybroadcasti.tt.omtrdc.net c.amazon-adsystem.com cdn-assets-prod.s3.amazonaws.com cdn.branch.io cdn.privacy-mgmt.com cdn.spatialbuzz.com cdn.taggstar.com cfg.smct.co cfg.smct.io cognito-identity.eu-west-1.amazonaws.com connect.facebook.net ct.pinterest.com dmp.v.fwmrm.net edge.adobedc.net edge.api.brightcove.com ep.smct.co ep.smct.io faro-collector-prod-eu-west-0.grafana.net firehose.eu-west-1.amazonaws.com https://*.google.com https://*.prod.uidapi.com https://prod.uidapi.com ib.adnxs.com insight.adsrvr.org ipb.smct.co ipb.smct.io ipl.smct.co ipl.smct.io js.smct.co js.smct.io maps.googleapis.com match.adsrvr.org mwzeom.zeotap.com paa-reporting-advertising.amazon pagead2.googlesyndication.com players.brightcove.net pm.w55c.net poc.idscan.cloud prod.idscan.cloud qa.taggstar.com s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com sky.likewizesupport.com skycustomer.likewizesupport.com smct.co smct.io spl.zeotap.com the.sciencebehindecommerce.com vip.timezonedb.com wss://*.liveperson.net wss://*.sky.com www.facebook.com www.googleadservices.com www.gstatic.com www.pinterest.co.uk www.pinterest.com www.zenaps.com;  frame-src 'self' blob: *.awin1.com *.bskyb.com *.clicktale.net *.contentsquare.net *.demdex.net *.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.medallia.eu *.online-metrix.net *.optimizely.com *.paa-reporting-advertising.amazon *.qualtrics.com *.sky.com *.skyassets.com *.snapchat.com *.stripe.com *.zenaps.com 12660277.fls.doubleclick.net 1580034.fls.doubleclick.net 3662759.fls.doubleclick.net 6993240.fls.doubleclick.net aax-eu.amazon-adsystem.com acdn.adnxs.com analytics.twitter.com answers2-embed.sky.com.pagescdn.com api.branch.io api2.branch.io app.link assets.adobedtm.com c.amazon-adsystem.com cdn.branch.io cdn.privacy-mgmt.com cdn.spatialbuzz.com connect.facebook.net ct.pinterest.com d2d7do8qaecbru.cloudfront.net dmp.v.fwmrm.net ib.adnxs.com insight.adsrvr.org lantern.roeye.com live.tvgenius.net ls.smct.co ls.smct.io match.adsrvr.org paa-reporting-advertising.amazon players.brightcove.net pm.w55c.net s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com servedby.flashtalking.com sky.likewizesupport.com sky.lucidcx.com skycustomer.likewizesupport.com smct.co smct.io td.doubleclick.net universal.iperceptions.com w.etadirect.com www.facebook.com www.googleadservices.com www.googletagmanager.com www.pinterest.co.uk www.pinterest.com;  frame-ancestors 'self';  worker-src blob: 'self' *.liveperson.net *.sky.com *.skyassets.com assets.adobedtm.com;  child-src 'self' blob: *.intercom-sheets.com;  media-src 'self' blob: data: *.akamaihd.net *.boltdns.net *.brightcovecdn.com *.cf.brightcove.com *.clicktale.net *.contentsquare.net *.contentstack.io *.demdex.net *.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.intercomcdn.com *.liveperson.net *.lpsnmedia.net *.media.brightcove.com *.sky.com *.skyassets.com assets.adobedtm.com bat.bing.com www.facebook.com;  object-src 'self' *.sky.com;  form-action *.intercom.help *.intercom.io;  report-uri /csp-reports] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:50:50 GMT] Etag:["13bx9h5ogn35tnn"] Expires:[Sun, 05 Oct 2025 19:50:50 GMT] Link:[<https://stage.static.skyassets.com>; rel="preconnect"] Pragma:[no-cache] Server:[Google Frontend] Set-Cookie:[countryAKA=other; path=/; domain=.sky.com; secure optimizelyEndUserId=58c54d467c2965235ae77a3a0b76265c; expires=Fri, 03-Apr-2026 19:50:50 GMT; path=/; domain=.sky.com _abck=029E6C43F6E3E5EB58009C11BA5F5DA3~-1~YAAQalXIF/RvCJuZAQAAlkXttQ4D4ao+WT+LeYGqfK1aZCwqSpN8SMZSumLwPt8W57BrvrVXLDinvxrplRQNjEUfoGQPxv0JwoweWiVWvjvXdN7XcOSQtvXoy6njCYlrnj626ishI7GvgG6zQgBu1amENIfITtQoVlGgYBM8IUGFH60KHF0iE7Vis+Fg4V6psN4S41bP8TMeHdmJArXShnUNd+U9p+XQJuEspw/ugLA/24pIZqYPx42kKOipnpFbFwCo47jIC/F7z5E3iqg7XWr3f+YFOvMXSdzUBqDa7sV4alUv81OC6rLnG57GnwUkfZAXGDxGCevt4XaO0rkPnRiuPSFLFHcKy27Me89rqwtHXsq7LPWwqIN96A+HZeng1GXSOkm33CQ0HSJ4nVqiIfTU0k2gVy2bzrcR4pcvYOBxfFipfx8amYW6m3tE1oPl9gMvcmSUfzZi1VRbHWoSbL4=~-1~-1~-1~-1~-1; Domain=.sky.com; Path=/; Expires=Mon, 05 Oct 2026 19:50:50 GMT; Max-Age=31536000; Secure bm_sz=0EBE12B5D0F27CF2CA2DA841F35ABE5B~YAAQalXIF/VvCJuZAQAAlkXttR0f5IGl423sE9H9NVJgXFgUXSRLNyg7PqItpNpyZJ3GaS2a6NM7Pwu+amptNVTcydoX9j/Dn4e/eAo2bVAzOpgL/OnPdFcu9/C8yMqqP+x0lcDDhM+JInHng00oL8+qORfcnlTPDySVIu+XSG/gPdptrld2kwUoCZjan3GF0LjPYokyYrZjotIMqZpwxn66y0hF5580WelYTxdFA/MBQrMLEGZfoazgt1alY0BnzSIHeCEgmY+cx8iYXgTFcHL/xGpuUd/0l7qk/hxFvwfXVCbCnkeiUtYArBNg7RbPf2I2x9WsdC+eqgU81QlIkstsY+DWsH1BXA==~3228739~3551558; Domain=.sky.com; Path=/; Expires=Sun, 05 Oct 2025 23:50:49 GMT; Max-Age=14399] Strict-Transport-Security:[max-age=63072000; preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Powered-By:[Next.js] X-Queueit-Connector:[akamai]]
```

## newyorker.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Back-Lae-Origin-Response-Start:[1759693858482] Cache-Control:[stale-while-revalidate=60, stale-if-error=86400, s-maxage=900] Connection:[keep-alive] Content-Length:[2266735] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:50:58 GMT] Modified-At:[1759684334] Server:[CloudFront] Set-Cookie:[xid1=1; Expires=Sun, 05 Oct 2025 19:51:13 GMT; Domain=.newyorker.com; path=/; CN_segments=co.w2541; Expires=Fri, 03 Apr 2026 19:50:58 GMT; Domain=.newyorker.com; path=/; CN_xid_refresh=f469abbe-cf16-4089-8313-39d8cedb0457; Expires=Mon, 05 Oct 2026 19:50:58 GMT; Domain=.newyorker.com; path=/; Secure; httponly; SameSite=None; CN_xid=f469abbe-cf16-4089-8313-39d8cedb0457; Expires=Fri, 03 Apr 2026 19:50:58 GMT; Domain=.newyorker.com; path=/; Secure; SameSite=None; CN_geo_country_code=US; Expires=Fri, 03 Apr 2026 19:50:58 GMT; path=/; Domain=.newyorker.com;  Secure; SameSite=None;] Vary:[accept-encoding] Via:[1.1 3055c6bccfd52f4c0ae40793124cb388.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[WKvHXLWfKv-eQPX0dMJfalCs-_1wNOZc1ZaeFOtsIu-yK1LrKcDdkw==] X-Amz-Cf-Pop:[IAD55-P6] X-Cache:[Miss from cloudfront] X-Content-Type-Options:[nosniff] X-Organization-Slug:[the-new-yorker] X-Ua-Device:[mobile]]
```

## depositfiles.com

```
200 OK
map[Cache-Control:[no-store, no-cache, must-revalidate] Content-Security-Policy:[frame-ancestors depositfiles.com *.depositfiles.com depositfiles.org *.depositfiles.org dfiles.eu *.dfiles.eu dfiles.com *.dfiles.com] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:50:58 GMT] Expires:[Thu, 19 Nov 1981 08:52:00 GMT] Pragma:[no-cache] Server:[nginx] Set-Cookie:[uprand=95351f3f6117cec64e6781847e492d10; path=/; domain=.depositfiles.com] X-Frame-Options:[SAMEORIGIN]]
```

## intel.com

```
403 Forbidden
map[Access-Control-Allow-Origin:[*] Alt-Svc:[h3=":443"; ma=93600] Content-Length:[367] Content-Security-Policy:[frame-ancestors 'self' https://premiersupport.intel.com https://c0.avaamo.com *.intel.com; object-src 'self';] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:50:59 GMT] Expires:[Sun, 05 Oct 2025 19:50:59 GMT] Mime-Version:[1.0] Server:[AkamaiGHost] Set-Cookie:[detected_bandwidth=HIGH; path=/; domain=.intel.com; secure; HttpOnly src_countrycode=us; path=/; domain=.intel.com; secure; HttpOnly] Strict-Transport-Security:[max-age=31536000 ; includeSubDomains ; preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Grn:[0.8d0c0317.1759693859.5b98d8b9] X-Xss-Protection:[1; mode=block]]
```

## thenai.org

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f737fce8d20cf-IAD] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:50:59 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f737fce8d20cf"] Set-Cookie:[__cf_bm=1oZ6oSvq4NyIuVWtHNzEy6xc7ZBjkTY5kKyMSW27i5s-1759693859-1.0.1.1-NdylhZCxz89.4wOfb5c_VC61LDoljIzjjXGdqHwB.lZ1HVNbLkOGzhYWytaF4KViIxKFd52WHxQyc_Dje74RKyT7W.r33Ds4_4l8vOHBWaQ; path=/; expires=Sun, 05-Oct-25 20:20:59 GMT; domain=.thenai.org; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## sciencemag.org

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f7382fc6c3988-IAD] Content-Length:[8584] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:51:00 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f7382fc6c3988"] Set-Cookie:[__cf_bm=Pdl8kfSt6qQbbICMpM5odOmcthsDnGW4PLnjZbRqfJA-1759693860-1.0.1.1-d9kvpoJg52W0A4WRh6XB_4NIb9vE5VvXulPi.UZOCrzh.dtk0JPRx_LQpMfJ2rc2VtdthFG2hmTmP9t5fug.RW.psD8_p8WAGXmJhT9IdZs; path=/; expires=Sun, 05-Oct-25 20:21:00 GMT; domain=.www.sciencemag.org; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=15552000] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## tmz.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Platform, Sec-CH-UA] Age:[52] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[max-age=30, public, s-maxage=60] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:00 GMT] Link:[<https://imagez.tmz.com>; rel="preconnect"; crossorigin="anonymous",<https://static.tmz.com>; rel="preconnect"; crossorigin="anonymous",<https://strike.fox.com>; rel="preconnect",<https://prod-foxkit.kts.fox>; rel="preconnect",<https://prod-foxkit.kts.fox>; rel="preconnect"] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-mobile=*, ch-ua-model=*, ch-ua-platform-version=*, ch-ua-platform=*, ch-ua=*] Referrer-Policy:[unsafe-url] Server:[Apache] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Vary:[CloudFront-Viewer-Country,CloudFront-Is-Mobile-Viewer,CloudFront-Is-Tablet-Viewer] Via:[1.1 649b4de6ebe50fb3c542f3d95c8ed8ba.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[zbSWrBI3-n2ow9szc-rO8luTc_axSCW_bmbz8ZFNUH11dV-0VLcrwQ==] X-Amz-Cf-Pop:[IAD89-C2] X-Cache:[Miss from cloudfront] X-Content-Type-Options:[nosniff] X-Fpc:[hit] X-Fpc-Key:[88f72662f8c1b3a6edd2e2adba09ff1d2bfa80f2d23f2ad38feb695258dd657b] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[1; mode=block]]
```

## draft.blogger.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, must-revalidate] Content-Length:[168646] Content-Security-Policy:[script-src  'nonce-4sYPd9UuLOWRJY-GtAncNw' 'report-sample' 'strict-dynamic' 'unsafe-eval' 'unsafe-hashes' 'unsafe-inline' http: https:; object-src 'none'; report-uri https://csp.withgoogle.com/csp/blogger-tech; base-uri 'self'] Content-Type:[text/html] Cross-Origin-Opener-Policy-Report-Only:[same-origin; report-to="blogger-tech"] Cross-Origin-Resource-Policy:[cross-origin] Date:[Sun, 05 Oct 2025 19:51:01 GMT] Expires:[Fri, 01 Jan 1990 00:00:00 GMT] Last-Modified:[Tue, 06 May 2025 06:08:00 GMT] Pragma:[no-cache] Report-To:[{"group":"blogger-tech","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/blogger-tech"}]}] Server:[sffe] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Xss-Protection:[0]]
```

## policies.google.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Content-Length:[0] Content-Security-Policy:[require-trusted-types-for 'script';report-uri /_/IdentityPoliciesUi/cspreport script-src 'unsafe-inline' https: http:;object-src 'none';base-uri 'self';report-uri /_/IdentityPoliciesUi/cspreport;worker-src 'self'] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[unsafe-none] Cross-Origin-Resource-Policy:[same-site] Date:[Sun, 05 Oct 2025 19:51:01 GMT] Expires:[Mon, 01 Jan 1990 00:00:00 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*] Pragma:[no-cache] Reporting-Endpoints:[default="/_/IdentityPoliciesUi/web-reports?context=eJwB9wAI_wq8ASoKGgBSKBoAsCK4Aqs6uwI3YOQCsHjmAjtH6AJP_OkCNtqXBdnflwXeYZgFhdnOBZPZzgXmis8F3_zPBTEg0gU_INIFchjUBYAY1AXRX9QF7qjUBaxC1QVJLdYFJUrXBWux1wXc1tcF8nrYBRB72AViB9kFcAfZBeOM2QWVcdoFNcHaBUPB2gXW39sFRgbcBbq63AXlx9wFYd_cBa3h3AUlp90F1ZtJBrbMSQbA9EkGQvRKBhuqSwZR9EwGEgsIpZiLxwYQmNXNWSIpYm9xX2lkZW50aXR5cG9saWNpZXNzZXJ2ZXJfMjAyNTA5MzAuMDBfcDCe-Wjc"] Server:[ESF] Set-Cookie:[NID=525=PH0vrR50kpFYgC_kPCwa1Fu8n_HA9VmPpDylkg0Wp5EY4h1za606Eadb1a1FX1g6L1RiKbwkHeKbtsM4DnobAt5D8Sy8O-eq7GLYaOcC_gQJAan5XEaMrW_hOQF1MBRgoWM2p9OGa4XA1hMlaDlFh88p0GzY1mmPJk4uZePaGkMA1Uevj4VLHSTA309jOLlejxrl0zhD7PmRqwNOuWQY7g; expires=Mon, 06-Apr-2026 19:51:01 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none] Vary:[Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site] X-Content-Type-Options:[nosniff] X-Ua-Compatible:[IE=edge] X-Xss-Protection:[0]]
```

## reverbnation.com

```
200 OK
map[Cache-Control:[max-age=0, private, must-revalidate] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:06 GMT] Etag:[W/"8e90b55ca4fdda9d80e10aaac78750c6"] P3p:[CP="DSP ALL COR OUR SAMi UNRi CUR ADM TAI IVA IVD CONo BUS DEM UNI STA LOC NAV COM INT", policyref="/w3c/p3p.xml"] Rn-App-Events:[1] Server:[Apache] Set-Cookie:[_reverbnation_session=f546020efa470a3c765807e92171f587; domain=.reverbnation.com; path=/; expires=Mon, 06 Oct 2025 07:51:06 GMT; secure; HttpOnly; SameSite=None] X-Digits-Of-Pi:[] X-Frame-Options:[SAMEORIGIN] X-Request-Id:[51aebf64-341e-435a-a942-2d45c31c61ee] X-Runtime:[0.042355] X-Ua-Compatible:[IE=Edge,chrome=1] X-Xss-Protection:[1; mode=block]]
```

## independent.co.uk

```
200 OK
map[Accept-Ranges:[bytes] Access-Control-Allow-Credentials:[true] Access-Control-Allow-Origin:[*] Age:[0] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Cache-Tag:[independent.co.uk,v11.22.0,us,section_1741,web_indy_prod_section_1741_publication_1,indy_prod,web_indy_prod,web_indy_prod_section_1741,web_indy_prod_publication_1,web_indy_prod_2025-10-05,web_indy_prod_2025-10-05_publication_1,web_indy_prod_us] Canary:[1] Connection:[keep-alive] Content-Language:[en] Content-Length:[355740] Content-Security-Policy:[default-src https: 'unsafe-inline' data: blob:; frame-src https: data:; script-src https: 'unsafe-inline' 'unsafe-eval' blob: 'unsafe-inline'; media-src https: 'unsafe-inline' data: blob:; img-src https: http: data: blob:; frame-ancestors https:] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:06 GMT] Etag:[W/"56d9c-gGhU7ORXv9XsUp5ANQF6adPD/HM-gzip"] Feature-Policy:[camera 'none'; microphone 'none'; midi 'none'; geolocation 'none'] Link:[<https://static.independent.co.uk>; rel=dns-prefetch, <https://static.independent.co.uk>; rel=preconnect, <https://assets.the-independent.com>; rel=dns-prefetch, <https://assets.the-independent.com>; rel=preconnect] Permissions-Policy:[camera=(), microphone=(), midi=(), geolocation=(), interest-cohort=()] Referrer-Policy:[no-referrer-when-downgrade] Set-Cookie:[Locale=US ; Path=/ ; gdpr=0 ; Path=/ ; subscriber_origin=us ; Path=/ ; _pc_subscriber_origin=us ; Path=/ ; feat__support_now_donate_copy=true ; Path=/ ; Secure ; Expires=Thu, 30 Oct 2025 19:51:06 GMT ; is_mobile_or_tablet=true ; Path=/ ; Secure ; Expires=Mon, 05 Oct 2026 19:51:06 GMT ; feat__bulletin_taboola_feed=true ; Path=/ ; Secure ; Expires=Thu, 04 Dec 2025 19:51:06 GMT ; esi-uuid=446e1005-a1ee-4c40-bd45-06e63c1cc49c ; Path=/ ; Secure; HttpOnly; Expires=Mon, 05 Oct 2026 19:51:06 GMT ; esi-permutive-id=446e1005-a1ee-4c40-bd45-06e63c1cc49c; Path=/ ; Secure ; Locale=US ; Path=/ ; gdpr=0 ; Path=/ ; subscriber_origin=us ; Path=/ ; _pc_subscriber_origin=us ; Path=/ ; feat__support_now_donate_copy=true ; Path=/ ; Secure ; Expires=Thu, 30 Oct 2025 19:51:06 GMT ; is_mobile_or_tablet=true ; Path=/ ; Secure ; Expires=Mon, 05 Oct 2026 19:51:06 GMT ; feat__bulletin_taboola_feed=true ; Path=/ ; Secure ; Expires=Thu, 04 Dec 2025 19:51:06 GMT ; esi-uuid=446e1005-a1ee-4c40-bd45-06e63c1cc49c ; Path=/ ; Secure; HttpOnly; Expires=Mon, 05 Oct 2026 19:51:06 GMT ; esi-permutive-id=446e1005-a1ee-4c40-bd45-06e63c1cc49c; Path=/ ; Secure ;] Speculation-Rules:[/speculationrules.json] Strict-Transport-Security:[max-age=63072000;  preload] Via:[1.1 varnish, 1.1 varnish] X-Backend:[flow-us] X-Cache:[MISS, MISS] X-Cache-Hits:[0, 0] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Head-Hash:[] X-Served-By:[cache-lga21963-LGA, cache-iad-kiad7000146-IAD] X-Timer:[S1759693867.537181,VS0,VE276] X-Xss-Protection:[1; mode=block]]
```

## bp0.blogger.com

```
400 Bad Request
map[Access-Control-Allow-Origin:[*] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Content-Length:[1555] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:06 GMT] Server:[fife] Timing-Allow-Origin:[*] Vary:[Origin] X-Content-Type-Options:[nosniff] X-Xss-Protection:[0]]
```

## mega.io

```
200 OK
map[Connection:[keep-alive] Content-Security-Policy:[default-src 'self' data: blob: *.mega.co.nz *.mega.nz *.mega.io http://*.mega.nz http://*.mega.io; script-src 'self' *.mega.co.nz *.mega.nz *.mega.io https://*.googletagmanager.com https://analytics.google.com *.hsadspixel.net *.hs-analytics.net js.hscta.net *.hubspot.com static.hsappstatic.net *.usemessages.com *.hs-banner.com *.hubspotusercontent20.net *.hubspot.net *.hscollectedforms.net *.hsleadflows.net *.hsforms.net *.hsforms.com *.hs-scripts.com *.hubspotfeedback.com feedback.hubapi.com data: blob:; connect-src *.mega.co.nz *.mega.nz *.mega.io http://*.mega.nz http://*.mega.io https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com *.hubapi.com js.hscta.net *.hubspot.com *.hs-banner.com *.hscollectedforms.net *.hsforms.com; style-src 'self' 'unsafe-inline' *.mega.co.nz *.mega.nz *.mega.io *.hubspotusercontent20.net cdn2.hubspot.net data: blob:; frame-src 'self' *.megapay.nz mega: *.megaad.nz https://mega.nz/ https://mega.io/ *.hubspot.com *.hs-sites.com *.hubspot.net play.hubspotvideo.com *.hsforms.net *.hsforms.com; img-src 'self' *.mega.co.nz *.mega.nz *.mega.io data: blob: mega.nz *.hubspot.com js.hscta.net no-cache.hubspot.com *.hubspotusercontent20.net *.hubspot.net cdn2.hubspot.net *.hsforms.net *.hsforms.com; frame-ancestors 'self' https://mega.nz/; child-src 'self' *.mega.co.nz *.mega.nz *.mega.io data: blob: mega.nz *.hsforms.com;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:07 GMT] Server:[nginx] Strict-Transport-Security:[max-age=31536000] Vary:[Accept-Encoding] X-Cache-Status:[HIT] X-Content-Type-Options:[nosniff] X-Xss-Protection:[1; mode=block]]
```

## box.com

```
200 OK
map[Aaa-Loc-Header:[US] Age:[205749] Alt-Svc:[h3=":443"; ma=86400] Box-Country:[US] Cache-Control:[max-age=30, public, s-maxage=2592000] Cf-Cache-Status:[HIT] Cf-Ray:[989f73afccb68011-IAD] Connection:[keep-alive] Content-Language:[en] Content-Security-Policy:[default-src * 'self' blob: data: 'unsafe-inline'; font-src 'self' data: fonts.googleapis.com fonts.gstatic.com] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:07 GMT] Expires:[Sun, 19 Nov 1978 05:00:00 GMT] Last-Modified:[Fri, 03 Oct 2025 10:32:02 GMT] Link:[<//assets.box.com>; rel=preconnect; crossorigin] Server:[cloudflare] Set-Cookie:[__cf_bm=A2xQKh6FE6NAXQflD6qsy2RHq3cvsG8G8FRhlLDEo.c-1759693867-1.0.1.1-.20SLuxdaFN4.JcOERfxO8SkMIKy_8lMMp3DrWEkZZkd6uiA6AzbNdGZMHsNyO4zr9OlQX2q5gx85NSoeve5Kk_fBy_qy0CeYuxiRI_4.Zw; path=/; expires=Sun, 05-Oct-25 20:21:07 GMT; domain=.box.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=2592000; includeSubDomains; preload] Vary:[Cookie,Box-Country,X-Box-Geo-Country,X-Frame-Options,Accept-Encoding] Via:[varnish] X-Ah-Environment:[prod] X-Box-Geo-Country:[US] X-Cache:[HIT] X-Cache-Hits:[12] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Request-Id:[v-33642ecc-a044-11f0-8d6a-839da39d07d2] X-Xss-Protection:[1; mode=block]]
```

## ovh.com

```
200 OK
map[Accept-Ranges:[bytes] Access-Control-Allow-Origin:[*] Cache-Control:[public, must-revalidate, max-age=90] Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:51:11 GMT] Vary:[Accept-Encoding] X-Cacheable:[Cacheable: miss] X-Cdn-Pop:[syd] X-Cdn-Pop-Ip:[139.99.229.0/27] X-Content-Type-Options:[nosniff] X-Frame-Options:[ORIGIN] X-Iplb-Instance:[54394] X-Iplb-Request-Id:[8B63E502:3BFE_C063418B:01BB_68E2CC2E_20B104:4642] X-Request-Id:[11016266] X-Toujours-Debout-Branch:[B] X-Toujours-Debout-Location:[BHS] X-Xss-Protection:[1; mode=block]]
```

## nps.gov

```
200 OK
map[Access-Control-Allow-Origin:[*] Age:[361977] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[67534] Content-Type:[text/html;charset=UTF-8] Date:[Wed, 01 Oct 2025 15:18:14 GMT] P3p:[policyref="https://www.nps.gov/w3c/p3p.xml", CP="ALL DSP COR OTP PUB BUS OTC"] Pragma:[no-cache] Server:[Apache] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] Vary:[Accept-Encoding] Via:[1.1 106b379635dfddf7c6b711479e954458.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[7iJqpcv5jwdOE-AFD9fN-J8dyFs9NYCsfdK4K0-ISHlEql1B9XabpA==] X-Amz-Cf-Pop:[IAD61-P8] X-Cache:[Hit from cloudfront]]
```

## google.it

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-Yy0q-ARXLh0i0-otxactcQ' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:11 GMT] Expires:[Sun, 05 Oct 2025 19:51:11 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5vlWPRFQiEiHx2BR7O-9QaWa_mjVSdZ32zpk99U3AZXY4TeF4gERw; expires=Fri, 03-Apr-2026 19:51:11 GMT; path=/; domain=.google.it; Secure; HttpOnly; SameSite=lax NID=525=iDX6kyGLv0bOBhlbCKjRDyQqyf4pfdL3WdEdjN3phDlsEE_cwpzeWBp5lLFjtJLArA-N0oI-sJsrA1GcJDSo67G6MbZZarpHcYYwKfduVWlTr_B3B5RuYCzXwUlWCdRTmi-V_yqnn-pfqJMsz2xinba_le8A72koQzQI1LxbhUtgiO2QU612kR-lZm_-3MTDh8HAYzgzPbDs791ET58; expires=Mon, 06-Apr-2026 19:51:11 GMT; path=/; domain=.google.it; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## tvtropes.org

```
200 OK
map[Age:[3] Cache-Control:[public, s-maxage=180, max-age=0] Cf-Cache-Status:[HIT] Cf-Ray:[989f73c8ea561fd3-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:11 GMT] Last-Modified:[Sun, 05 Oct 2025 19:51:08 GMT] Link:[<https://assets.tvtropes.org/design/assets/bundle.css?rev=8dc2ef2b86ce864f0e6e4b541bec2c2e99d9869a>; rel=preload; as=style;] Server:[cloudflare] Vary:[Accept-Encoding] X-Frame-Options:[DENY]]
```

## ok.ru

```
200 
map[Cache-Control:[private, no-cache, no-store, max-age=0] Connection:[keep-alive] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:17 GMT] Expires:[Mon, 26 Jul 1997 05:00:00 GMT] Pragma:[no-cache] Referrer-Policy:[strict-origin-when-cross-origin] Server:[kittenx] Server-Timing:[tid;desc="CRKBorh9BRBTGxmuI_uG8u4WGMh7PA",front;dur=8.751] Set-Cookie:[JSESSIONID=b18bd67d7640661e405280ef473f45e7c3ada00bfe9b6932.e0a4e1bd; Domain=.ok.ru; Path=/; HttpOnly bci=3634132961366330106; Max-Age=2147483647; Expires=Fri, 23 Oct 2093 23:05:24 GMT; Domain=ok.ru; Path=/; HttpOnly _statid=80dc8d4f-075b-45d8-94c2-b04025c4d582; Max-Age=2147483647; Expires=Fri, 23 Oct 2093 23:05:24 GMT; Domain=ok.ru; Path=/; HttpOnly ss_mo=fvjlsdznSf3RO033ig32h6NpKpnbORBfdlM9npeY6W8fKJrQ4Oxc5JLlgrO72jOw7Kr7-jjeoegoyoT23_jRA9tmzL2bBo3E-Qo; Secure; Max-Age=86400; HttpOnly; SameSite=None; Domain=m.ok.ru] Vary:[Accept-Encoding accept-encoding] X-Trace-Id:[CRKBorh9BRBTGxmuI_uG8u4WGMh7PA]]
```

## google.co.jp

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-Ux5_jsq8AYHBmpUsXbVMOQ' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:17 GMT] Expires:[Sun, 05 Oct 2025 19:51:17 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5v0xakUHDELm3nffVBS0qtxlHM_1fQDhSmyfmd2dPiqbjEq7uHUFg; expires=Fri, 03-Apr-2026 19:51:17 GMT; path=/; domain=.google.co.jp; Secure; HttpOnly; SameSite=lax NID=525=XpP45uWFd7ipmb-z7oFVodAmg6izRDEHbcvCuZdUG-tWNDiMX7UM-4BiFmW0V89o3bGDh38-1FM9w_q2_wSy9F-_x6SwBbQnem1N6XDmkKPIje3cbQRtAvgzEAyDWygOEDzCZCMYzUSo9SyEM7y1Ao8Wl9HyA05gf7WDvgE6DmkrBxE-JP33yht8jruNtgJ2oInhljgFA-T4RDfbbdM; expires=Mon, 06-Apr-2026 19:51:17 GMT; path=/; domain=.google.co.jp; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## doi.org

```
200 OK
map[Accept-Ranges:[bytes] Connection:[keep-alive] Content-Encoding:[gzip] Content-Length:[7326] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:51:18 GMT] Etag:["db5a053ebfb0c722cf72a3597173d425"] Last-Modified:[Thu, 02 Oct 2025 08:16:33 GMT] Server:[AmazonS3] Via:[1.1 83abbdac1eb1a9b7f18f692b71f8efbc.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[5BzCq2atyb2-WS24gEeSIDbxfIwvntmpaQ4ohSVioZPHH0ohwQzv1A==] X-Amz-Cf-Pop:[IAD55-P10] X-Amz-Meta-Md5chksum:[db5a053ebfb0c722cf72a3597173d425] X-Amz-Server-Side-Encryption:[AES256] X-Cache:[Miss from cloudfront]]
```

## tiktok.com

```
200 OK
map[Access-Control-Allow-Credentials:[true] Access-Control-Expose-Headers:[x-tt-traceflag,x-tt-logid] Cache-Control:[max-age=0, no-cache, no-store] Connection:[keep-alive] Content-Security-Policy:[report-uri https://mon16-normal-useast5.tiktokv.us/monitor_browser/collect/batch/security/?bid=tiktok_pns&ev_type=csp&p=KpZCFgIee2DS8vDgItQS4&v=19; report-to csp-endpoint; upgrade-insecure-requests; default-src 'self' 'unsafe-eval' 'unsafe-inline' blob: bytedance: data: wss://*.tiktok.com wss://*.tiktokv.com wss://*.tiktokv.eu wss://tiktok.com wss://tiktokv.com *.adsintegrity.net *.akamaized.net *.amazonaws.com *.bing.com *.bitssec.com *.braintree-api.com *.braintreegateway.com *.bytedapm.com *.bytedgame.com *.bytehwm-row.com *.byteicdn.com *.byteintl.com *.byteintl.net *.byteintlapi.com *.byteintlstatic.com *.bytelemon.com *.byteoversea.com *.byteoversea.net *.bytevcloudapi.com *.capcut.com *.cloudflare.com *.ctfassets.net *.doubleclick.net *.evbuc.com *.eventim.de *.facebook.com *.facebook.net *.fbsbx.com *.fcdnstatic-intl.com *.fdmstatic.com *.g-p-static.com *.gauthmath.com *.giphy.com *.goofy-cdn.com *.goofy.app *.google.com *.googleadservices.com *.googleapis.com *.googletagmanager.com *.gstatic.com *.hsforms.com *.hsforms.net *.ibytedtos.com *.ibyteimg.com *.isnssdk.com *.jumio.ai *.kakao.com *.lemon8-app.com *.lemon8cdn.com *.licdn.com *.linkedin.com *.midtrans.com *.muscdn.com *.musical.ly *.oecstatic.com *.omise.co *.pangle-ads.com *.paypal.com *.pipopay.com *.pipopayment.us *.redditstatic.com *.resso.me *.sgsnssdk.com *.soundon.global *.tableau.com *.tenor.com *.tiktok-row.net *.tiktok.com *.tiktok.ru *.tiktok.vn *.tiktokapis.com *.tiktokcdn-eu.com *.tiktokcdn-in.com *.tiktokcdn-us.com *.tiktokcdn.com *.tiktokcreativeone.com *.tiktokforbusinessoutbound.com *.tiktokglobalshop.com *.tiktokmusic.me *.tiktokshop.com *.tiktokstaticb.com *.tiktokus.info *.tiktokv.com *.tiktokv.eu *.tiktokv.us *.tiktokw.eu *.tiktokw.us *.topbuzzcdn.com *.ttcdn-us.com *.ttlivecdn.com *.ttlstatic.com *.ttwstatic.com *.vimeo.com *.vodupload.com *.yahoo.co.jp *.yhgfb-static.com *.youtube-nocookie.com *.zhiliaoapp.com api.music.apple.com code.jquery.com facebook.com google.com i.ticketweb.com images.universe.com media.ticketmaster.eu play.itunes.apple.com res.cloudinary.com s1.ticketm.net static-label.frontgatetickets.com static.captchami.com t.co tikitoks.com tiktok.com tiktok.ua tiktok.vn tiktokfollowersfree.com tiktokv.com unpkg.com vimeo.com; connect-src * 'unsafe-inline' blob: data:; frame-src bytedance: *.kakao.com *.tiktok.com access.line.me accounts.google.com api.twitter.com appleid.apple.com assets.braintreegateway.com client-api.arkoselabs.com h.online-metrix.net lf16-web.tiktokcdn.com newassets.hcaptcha.com recaptcha.google.com tx41v.arkoselabs.com www.facebook.com www.google.com; script-src 'inline-speculation-rules' 'report-sample' 'unsafe-eval' *.tiktokcdn-us.com apis.google.com billshark-cdn.s3.amazonaws.com c.paypal.com cdnjs.cloudflare.com client-api.arkoselabs.com connect.facebook.net developers.kakao.com googleads.g.doubleclick.net js-cdn.music.apple.com/musickit/v3/musickit.js js.braintreegateway.com js.hcaptcha.com js.hsforms.net recaptcha.google.com s20.tiktokcdn.com s3.amazonaws.com sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/bric-captcha-ttweb/core-captcha/ static.captchami.com tiktok.captchami.com tx41v.arkoselabs.com unpkg.com vimeo.com www.facebook.net www.google.com www.googleadservices.com www.googleapis.com www.googletagmanager.com www.gstatic.com www.vimeo.com; worker-src www.tiktok.com/business/sw.js www.tiktok.com/embed/sw.js www.tiktok.com/firebase-messaging-sw.js www.tiktok.com/help/sw.js www.tiktok.com/sw.js www.tiktok.com/tiktokstudio/static/worker/ www.tiktok.com/tiktokstudio/sw.js www.tiktok.com/web-static-js/ www.tiktok.com/webapp-desktop/static/worker/; frame-ancestors tea-va.bytedance.net www.tiktok.com] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:18 GMT] Expires:[Sun, 05 Oct 2025 19:51:18 GMT] Feature-Policy:[microphone 'none'; geolocation 'none'] Pragma:[no-cache] Referrer-Policy:[strict-origin-when-cross-origin] Reporting-Endpoints:[csp-endpoint="https://mon16-normal-useast5.tiktokv.us/monitor_browser/collect/batch/security/?bid=tiktok_pns"] Server:[nginx] Server-Timing:[inner; dur=82 cdn-cache; desc=MISS, edge; dur=2, origin; dur=100] Set-Cookie:[tt_csrf_token=Pei93qnV-k5QiO4PuOwbT43hUuIGqxb9H3zg; path=/; domain=.tiktok.com; samesite=lax; secure; httponly ttwid=1%7Cw99uGlOLHgfELnPVgZf-Xr229TD7cCGTHFMK0k1mIZ4%7C1759693878%7C5d84697bb7301cc4d6ac0744ef753b561a1fb1996ce641fc2508dc350e02516d; Domain=.tiktok.com; Path=/; Expires=Wed, 30 Sep 2026 19:51:18 GMT; HttpOnly; Secure tt_chain_token=cRdm/2gMJZFb8vCm3+UHfQ==; path=/; expires=Fri, 03 Apr 2026 19:51:18 GMT; domain=.tiktok.com; secure; httponly] Strict-Transport-Security:[max-age=31536000; includeSubdomains] X-Akamai-Request-Id:[bcd3bb56] X-Bytefaas-Enable-Stream:[true] X-Bytefaas-Execution-Duration:[78.41] X-Bytefaas-Request-Id:[20251005195118163DB656EDD31883B1AE] X-Cache:[TCP_MISS from a23-53-12-19.deploy.akamaitechnologies.com (AkamaiGHost/22.2.5-a9c17ad842a5a5bbb9fede73ebb832d8) (-)] X-Content-Type-Options:[nosniff] X-Download-Options:[noopen] X-Frame-Options:[SAMEORIGIN] X-Gw-Dst-Psm:[serverless.tiktok.mobile] X-Origin-Response-Time:[102,23.53.12.19] X-Powered-By:[Goofy Node] X-Pumbaa-Web-Avail:[1] X-Tt-Logid:[20251005195118163DB656EDD31883B1AE] X-Tt-Trace-Host:[01b1fdab09f538f36940b193e1fe1dc01c8f17b327a01886837c95b977a269b9b7d310d6e024559b24188ec5e9e27697c8e77dca49a8c0afb77127c40f1b00afd8d9e065c298c03e6665b9530cc8fc58899a348bb4669729bc9b195c38c2afa091] X-Tt-Trace-Id:[00-251005195118163DB656EDD31883B1AE-118184A2297918D9-00] X-Tt-Trace-Tag:[id=16;cdn-cache=miss;type=dyn] X-Xss-Protection:[1; mode=block]]
```

## wp.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:23 GMT] Host-Header:[WordPress.com] Server:[nginx] Server-Timing:[a8c-cdn, dc;desc=dca, cache;desc=BYPASS;dur=5.0] Set-Cookie:[tk_ai=qnPpy0S3yXGl1AZyA8BeuGah; expires=Fri, 04 Oct 2030 19:51:23 GMT; Max-Age=157680000; path=/; domain=.wordpress.com; secure; SameSite=None tk_ai_explat=qnPpy0S3yXGl1AZyA8BeuGah; expires=Fri, 04 Oct 2030 19:51:23 GMT; Max-Age=157680000; path=/; domain=.wordpress.com; secure; SameSite=None tk_qs=_en%3Dwpcom_experiment_variation_assigned%26_ut%3Danon%26_ui%3DqnPpy0S3yXGl1AZyA8BeuGah%26_ts%3D1759693883397%26experiment_id%3D22340%26experiment_variation_id%3D5354%26reason%3Dset_by_anon_id; path=/; domain=.wordpress.com; secure; SameSite=Strict explat_test_aa_weekly_lohp_2025_week_40=treatment; expires=Mon, 20 Oct 2025 00:00:00 GMT; Max-Age=1224517; path=/; domain=.wordpress.com; secure; SameSite=None] Strict-Transport-Security:[max-age=31536000; preload] Vary:[Accept-Encoding Cookie] X-Ac:[1.dca _dca BYPASS] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Hacker:[Want root?  Visit join.a8c.com/hacker and mention this header.] X-Xss-Protection:[1; mode=block]]
```

## biglobe.ne.jp

```
200 OK
map[Accept-Ranges:[bytes] Connection:[keep-alive] Content-Length:[254] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:51:24 GMT] Last-Modified:[Thu, 22 May 2025 10:12:49 GMT] Server:[Apache] Strict-Transport-Security:[max-age=31536000]]
```

## standard.co.uk

```
200 OK
map[Access-Control-Allow-Credentials:[true] Age:[1088] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[stale-if-error=604800, public, stale-while-revalidate=3600, max-age=60, s-maxage=10800] Cf-Cache-Status:[HIT] Cf-Ray:[989f74190de982c9-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:24 GMT] Server:[cloudflare] Set-Cookie:[__cf_bm=eS7XLBzrkJBYjZgKX9HcVRGNUqwgNM.riRIV_rXpMAY-1759693884-1.0.1.1-0pFtHEGT17FrEqD7Fse3780iRTB1SvEWqhjz9RAsoBI6BIyO4yVrsN6B97JFVA6qyCP1KI0ZyExbK.q9AqF_yyYSc2Ugmvi_oJYJ5s63hMI; path=/; expires=Sun, 05-Oct-25 20:21:24 GMT; domain=.www.standard.co.uk; HttpOnly; Secure; SameSite=None] Speculation-Rules:["/speculationrules.json"] Strict-Transport-Security:[max-age=63072000;  preload] Surrogate-Key:[standard.co.uk v2.7.7 section_28 web_standard_prod_section_28_publication_1 standard_prod web_standard_prod web_standard_prod_section_28 web_standard_prod_publication_1 web_standard_prod_2025-10-05 web_standard_prod_2025-10-05_publication_1 standard.co.uk_v2.7.7 v2.7.7_section standard.co.uk_v2.7.7_section] Vary:[Origin,Accept-Encoding]]
```

## un.org

```
200 OK
map[Cache-Control:[public, max-age=900] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' https://*.un.org;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:24 GMT] Etag:["1759693669-0"] Expires:[Sun, 19 Nov 1978 05:00:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:47:49 GMT] Referrer-Policy:[strict-origin-when-cross-origin] Server:[Apache] Set-Cookie:[AWSALBTG=C86Ux04gX9tc/BJs/+9QrOuC2QxuqmJlHEmY0jDShOz1kTzrqNnTMx4g6XbMcnMdxcBxsXAGrhn+hudGSyl1wF9udGMZpuMcb3oLIQ0x9azaUjuPlQPHDqshsiCQRq9aCiIKlGd3aFfLWqli6wPUWnS0AZPeeJM717qX+7I/NMJf; Expires=Sun, 12 Oct 2025 19:51:24 GMT; Path=/ AWSALBTGCORS=C86Ux04gX9tc/BJs/+9QrOuC2QxuqmJlHEmY0jDShOz1kTzrqNnTMx4g6XbMcnMdxcBxsXAGrhn+hudGSyl1wF9udGMZpuMcb3oLIQ0x9azaUjuPlQPHDqshsiCQRq9aCiIKlGd3aFfLWqli6wPUWnS0AZPeeJM717qX+7I/NMJf; Expires=Sun, 12 Oct 2025 19:51:24 GMT; Path=/; SameSite=None; Secure AWSALB=5MblHKkTGYPS2Wy2g8SuI+3L7YYyiGP1+xyim+vFVFejGimR2UMB8x53Kw9gwRDEvZ+EnT/E/Ig8iCRxq6jDXjlnc3w9NRGebx2KRtFpDtuHhjYQtUAhdYSHpceK; Expires=Sun, 12 Oct 2025 19:51:24 GMT; Path=/ AWSALBCORS=5MblHKkTGYPS2Wy2g8SuI+3L7YYyiGP1+xyim+vFVFejGimR2UMB8x53Kw9gwRDEvZ+EnT/E/Ig8iCRxq6jDXjlnc3w9NRGebx2KRtFpDtuHhjYQtUAhdYSHpceK; Expires=Sun, 12 Oct 2025 19:51:24 GMT; Path=/; SameSite=None] Strict-Transport-Security:[max-age=31536000] Vary:[Cookie] Via:[1.1 6225fd23298b677711e0721417a30ae2.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[Qs5_n4Lu873j6OxpeMhZYafQjtEa_mLt60BO_yiErFKUXLntAb6oGQ==] X-Amz-Cf-Pop:[IAD61-P10] X-Cache:[Miss from cloudfront] X-Content-Type-Options:[nosniff] X-Drupal-Cache:[HIT] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[1; mode=block]]
```

## theverge.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[580] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[no-store,private] Connection:[keep-alive] Content-Length:[889548] Content-Security-Policy:[frame-ancestors https://platform.theverge.com https://*.theverge.com https://platform.theverge.com https://*.theverge.com 'self'] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:29 GMT] Etag:["jw5knjpm2kj1sg"] Set-Cookie:[vmidv1=77dd7fec-cba6-413e-866e-d54138644a85;Expires=Fri, 04 Oct 2030 19:51:29 GMT;Domain=www.theverge.com;Path=/;SameSite=Lax;Secure _vm_consent_type=opt-out; expires=Mon, 06 Oct 2025 19:51:29 GMT; path=/;] Strict-Transport-Security:[max-age=31556952; preload] Vary:[Accept-Encoding, x-user-state] Via:[1.1 varnish] Vm-Cyclone-Community-Id:[815a6122-a71c-47a0-a311-32f264c80c8a] X-Cache:[HIT] X-Cache-Hits:[1] X-Middleware-Rewrite:[/resource/homepage] X-Powered-By:[Next.js] X-Served-By:[cache-iad-kiad7000163-IAD] X-Timer:[S1759693890.756323,VS0,VE8]]
```

## gsmarena.com

```
200 OK
map[Connection:[Upgrade] Content-Security-Policy:[frame-ancestors 'self' *.gsmarena.com;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:30 GMT] Server:[Apache] Upgrade:[h2] X-Powered-By:[PHP/7.4.33]]
```

## amzn.to

```
405 Method Not Allowed
map[Allow:[GET, POST, PUT, DELETE, OPTIONS] Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[0] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:31 GMT] Expires:[-1] Pragma:[no-cache] Server:[Server] Set-Cookie:[skin=noskin; path=/; domain=.amazon.com] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent,Content-Type,Accept-Encoding,User-Agent] X-Amz-Rid:[WG7B9B176H03RERWZEZX] X-Amzn-Cdn-Id:[ak-0.12c83017.1759693891.28e6f93d] X-Cache:[NotCacheable from child] X-Frame-Options:[SAMEORIGIN]]
```

## canva.com

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f74451ee6823e-IAD] Content-Length:[8536] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:51:31 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Nel:[{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Report-To:[{"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=oNSd1rnW%2BvPPCVmdXwObjNsr%2FJXzwDb5bfwELFxg1kofwsv6vyjuSt7AC89i6FayiFi%2FcrUrV%2FANV5XQrMJePufola26gSA%2BFu2OI9duI7E88sQCi9yP%2FYM93v65FCI%3D"}],"group":"cf-nel","max_age":604800}] Server:[cloudflare] Server-Timing:[chlray;desc="989f74451ee6823e"] Set-Cookie:[__cf_bm=y4SSr7lckjdwGJq0vJjfyfOOxxOMq07FXHhYQ.nN0q8-1759693891-1.0.1.1-mDV7iPs0uz796KhonzWMq3_1TFlf0FgJirSDls6reVRZLER08AMVttYlzFmhRzX1TVfJ1kizTuJ_5hujlLdLc123eGfitaDsvD4GWaLqirc; path=/; expires=Sun, 05-Oct-25 20:21:31 GMT; domain=.canva.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## spiegel.de

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[public, max-age=0,s-maxage=90] Content-Length:[1969289] Content-Security-Policy:[frame-ancestors 'self'] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:32 GMT] Strict-Transport-Security:[max-age=31536000;] Vary:[X-Forwarded-Proto, X-Authorized-Sppur, Accept-Encoding] Via:[1.1 google] X-Cache:[HIT] X-Cache-Grace:[3600.000]]
```

## ziddu.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000, h3-29=":443"; ma=2592000, h3-Q050=":443"; ma=2592000, h3-Q046=":443"; ma=2592000, h3-Q043=":443"; ma=2592000, quic=":443"; ma=2592000; v="43,46"] Connection:[Keep-Alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:32 GMT] Etag:["1165370-1759576008;;;"] Keep-Alive:[timeout=5, max=100] Link:[<https://www.ziddu.com/wp-json/>; rel="https://api.w.org/" <https://www.ziddu.com/wp-json/wp/v2/pages/10186>; rel="alternate"; type="application/json" <https://www.ziddu.com/>; rel=shortlink] Server:[LiteSpeed] X-Dns-Prefetch-Control:[on] X-Litespeed-Cache:[hit]]
```

## vice.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:33 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://www.vice.com/wp-json/>; rel="https://api.w.org/"] Server:[nginx] Vary:[Accept-Encoding] X-Cache:[STALE] X-Frame-Options:[SAMEORIGIN] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca8 0 40 9980]]
```

## get.google.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-9rbxBP-TPB8riXS5pbItEg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:33 GMT] Expires:[Sun, 05 Oct 2025 19:51:33 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5vl3w0ZoGp60tKyRNrBp_AeG1bH5EeafiGEm2uHc3yFFpd1LE_Nmro; expires=Fri, 03-Apr-2026 19:51:33 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax NID=525=ORoYNdV9VA3vWY6DcTHD2UIMEWrDr7AtQMNhT-FqT-rQXBhJCne_PAD2MPtbvnF2JmG1aY-FaH9P1HJVhQjrW4GHHp0ruEAbiKzUzk4n9avQ3jH4VM8mBe7WImUuJCftwoflXdelyM3BoGKUPFWVsIuHqvPMl4gxSTxtEdOcsgMWvbPvFSHzrPfWBAP8vQhSqjaGnVLIoCZicUKwx1w; expires=Mon, 06-Apr-2026 19:51:33 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## microsoft.com

```
200 OK
map[Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:51:38 GMT] Etag:["85de642e1467807f64f7e10807df3869:1711562737.176211"] Last-Modified:[Tue, 26 Mar 2024 18:16:43 GMT] Server:[AkamaiNetStorage]]
```

## ibm.com

```
200 OK
map[Cache-Control:[max-age=600] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests] Content-Type:[text/html;charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:38 GMT] Etag:["2cee1-6406e142ce199-gzip"] Expires:[Sun, 05 Oct 2025 20:01:38 GMT] Last-Modified:[Sun, 05 Oct 2025 19:09:49 GMT] Set-Cookie:[_abck=489A1A6D8C7FB226C011E147475F7B2A~-1~YAAQqYnMF+fVX6aZAQAA/APutQ7WtUMziR0ssN7LKwEhupZqE8tGsWPCLiRAl4ISjoVP+YSlmMhMS4asIOd4pFTUQyHkruh8k2OnQ/BDp/deky9pXW5FvolL4M3mP9gW6Q7DnImwkx6B+3GRbuxm815JVGwhVGJWgEhsth1atSIZ9fHY0IwHVHvYId6I+a3y2uZHr+wRH3YAtcZ7WUXI729mH2GMF/21oUZg3jo0sBdHqsiT6+z5DI+QUNPhgS9uoLsoK+JfbbwCsfSDxR7GXt+Y/cyhFSnfXYDBtd1h8evCAGdSoMdGSO+ayWu8G7HvFWItqYI736SyOZSlTukuOGMadTgPq01rJQ/zc6dIWXh9+3HFYLrWF+qcIIByDSkdXOSITxkjESOWW8A5yY7irlV3gQH2YXsVkpMfaPRklZCF9fQMAK0QNDZa8CcuehiAQJB/xxQwbF4iEAdTq16gCGo=~-1~-1~-1~-1~-1; Domain=.ibm.com; Path=/; Expires=Mon, 05 Oct 2026 19:51:38 GMT; Max-Age=31536000; Secure bm_sz=3B1E943FB4C2A1096CF88EA46850B388~YAAQqYnMF+jVX6aZAQAA/APutR2OhmvY/XoKNE/lIpuFkp+h+AnOkR50tT68zKY6rTBeIuGtBfaKnsuO7WAJ3AXxfzQvucFu5JVex91zXwuX2tx3KNFUTP7H/3332OAMgzO1bjNFA7+bwQDh7TASQbpvpbxncdItfbCUzrlES2xzR8l3yse30ZdHETmj2RUKBCCfVK/iZVnyRBw7p0PbvPQcBg5Z29e+TTslCg4SohIn06DAH+kCBkknPV8jnpumNIn0yaQO6HvID5OqIWFzZbIQQdqm6BWR5b+ORp1K2S53BzKLUf7UQzhFtVRxbZzFn7vft75mEzX5EzYUdRFcqgP2RBlir0e9~4403505~4538672; Domain=.ibm.com; Path=/; Expires=Sun, 05 Oct 2025 23:51:38 GMT; Max-Age=14400] Strict-Transport-Security:[max-age=31536000] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## target.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[private, no-cache] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' https://*.target.com;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:39 GMT] Etag:["mmgodn80759zi0"] Referrer-Policy:[no-referrer-when-downgrade] Set-Cookie:[adScriptData=VA; Domain=target.com; Path=/; SameSite=none; Secure; Max-Age=86400; TealeafAkaSid=HVPw_nR_rHATKzCHqv9gJ-OnHbe9mLiB; Expires=TueTealeafAkaSid=HVPw_nR_rHATKzCHqv9gJ-OnHbe9mLiB; Expires=Tue, 04 Nov 2025 19:51:39 GMT; Path=/; Domain=target.com; idToken=eyJhbGciOiJub25lIn0.eyJzdWIiOiI2MjljYWQzOS0xNzA2LTQ3OWItYjQ5OC1mMTI3Njk2M2ViMGEiLCJpc3MiOiJNSTYiLCJleHAiOjE3NTk3ODAyOTgsImlhdCI6MTc1OTY5Mzg5OCwiYXNzIjoiTCIsInN1dCI6IkciLCJjbGkiOiJlY29tLXdlYi0xLjAuMCIsInBybyI6eyJmbiI6bnVsbCwiZm51IjpudWxsLCJlbSI6bnVsbCwicGgiOmZhbHNlLCJsZWQiOm51bGwsImx0eSI6ZmFsc2UsInN0IjoiVkEiLCJzbiI6bnVsbH19.; Domain=target.com; Path=/; SameSite=none; Secure; visitorId=0199B5EE04A20201A4F86EE13722B338; Max-Age=63072000; Expires=Tue, 05 Oct 2027 19:51:38 GMT; Path=/; Domain=.target.com; Secure; SameSite=None fiatsCookie=DSI_1420|DSN_Chesapeake%20Sq%20Mall|DSZ_23321|server; Domain=.target.com; Path=/; Secure; SameSite=Lax sddStore=DSI_1420|DSN_Chesapeake%20Sq%20Mall|DSZ_23321|server; Domain=.target.com; Path=/ GuestLocation=23703|36.840|-76.370|VA|US;Path=/; Secure; Max-Age=86400 sapphire=1; Max-Age=2629746; Expires=Wed, 05 Nov 2025 06:20:44 GMT; Path=/; Domain=.target.com; Secure; SameSite=None refreshToken=qnMHyvwhjC0e6HJAWc9qMAzBFEv609QSf_SxOGVM4V03uOtrG5NtEgOShiDft8FxSX1icvlhv7HVCmnuxPopYQ; Domain=target.com; Path=/; SameSite=none; Secure; HttpOnly; Max-Age=15552000; accessToken=eyJraWQiOiJlYXMyIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2MjljYWQzOS0xNzA2LTQ3OWItYjQ5OC1mMTI3Njk2M2ViMGEiLCJpc3MiOiJNSTYiLCJleHAiOjE3NTk3ODAyOTgsImlhdCI6MTc1OTY5Mzg5OCwianRpIjoiVEdULjJlOTE1MjNkNTA4ZjQ1NDg4ZGMwZTI5NzU0ZjcyMDE4LWwiLCJza3kiOiJlYXMyIiwic3V0IjoiRyIsImRpZCI6IjQ0ZWE1ODllNTc1MjA1ODhjNDE0Zjc0NjVmYmUyZmE5YjI1MDk4ZjlhZjI1ZDkxYmE2YTE5NDgwMzkzZGY3MzAiLCJzY28iOiJlY29tLm5vbmUsb3BlbmlkIiwiY2xpIjoiZWNvbS13ZWItMS4wLjAiLCJhc2wiOiJMIn0.MCkq-Hr4KjJ8aykUNkcfh56oU5YYXisY-zLgfqYy-beaCfk7SsnsbEiJAM8WELAgTpZcFd6IvLgIYhsp_8h7-WbC6E4oYWBQCX5y7_d27Xz5msnm3kuT7MarnkcSrv7iPBJsWfEP-yJBvGQvKziVE7BM6hsRHu3T_U8ZHZ43w_7whubgfohGDqg1vBXxy0lstrcVFFEQYYZQTeAP21zw6mwrO2j49epMcvYOYByfEbJQR4ru_zBVM4ZTOzAEei8ANKkQYahl_HRkTgd0RZ8530jjfSlfvgJa5Gsd6iYI4hOYtxrMeEEjA5nvGKroMEjD1rHR-rqtVpSQx47S9z64oQ; Domain=target.com; Path=/; SameSite=none; Secure; HttpOnly; egsSessionId=98bc2460-f4cc-4d69-b950-856fb49829cc; Domain=target.com; Path=/; SameSite=none; Secure; HttpOnly; Max-Age=3600;] Strict-Transport-Security:[max-age=31536000; includeSubDomains] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Sigsci-Origin-Status:[200]]
```

## justice.gov

```
200 OK
map[Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[public, max-age=98312] Connection:[keep-alive] Content-Language:[en] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:39 GMT] Etag:["1759533010"] Expires:[Mon, 06 Oct 2025 23:10:11 GMT] Last-Modified:[Fri, 03 Oct 2025 23:10:10 GMT] Server:[nginx] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Age:[0] X-Ah-Environment:[prod] X-Cache-Hits:[2] X-Content-Type-Options:[nosniff] X-Drupal-Dynamic-Cache:[MISS] X-Frame-Options:[SAMEORIGIN] X-Generator:[Drupal 10 (https://www.drupal.org)] X-Request-Id:[v-1c037174-a0ae-11f0-ae2a-63ed0fa55875] X-Xss-Protection:[1; mode=block]]
```

## alexa.com

```
405 Method Not Allowed
map[Allow:[GET, POST, PUT, DELETE, OPTIONS] Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[0] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:39 GMT] Expires:[-1] Pragma:[no-cache] Server:[Server] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent,Content-Type,Accept-Encoding,User-Agent] X-Amz-Rid:[5SGNQ9PSV19M00XCPNE3] X-Amzn-Cdn-Id:[ak-0.12c83017.1759693899.28e73b81] X-Cache:[NotCacheable from child] X-Frame-Options:[SAMEORIGIN]]
```

## aliexpress.com

```
200 
map[Access-Control-Allow-Credentials:[true] Bxpunish:[1] Bxuuid:[de7ac4dcbade1fdaae678a3a74bbd27b] Cache-Control:[no-store] Connection:[keep-alive] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:41 GMT] Eagleeye-Traceid:[213bd97f17596939007345916eee16] Edge-Control:[bypass-cache] Server:[Tengine/Aserver] Strict-Transport-Security:[max-age=31536000] Timing-Allow-Origin:[*] Vary:[Accept-Encoding]]
```

## forms.gle

```
400 Bad Request
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Accept-Ranges:[bytes] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[script-src 'unsafe-inline' https: http:;object-src 'none';base-uri 'self';report-uri /_/DurableDeepLinkUi/cspreport;worker-src 'self',require-trusted-types-for 'script';report-uri /_/DurableDeepLinkUi/cspreport] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[unsafe-none] Date:[Sun, 05 Oct 2025 19:51:41 GMT] Expires:[Mon, 01 Jan 1990 00:00:00 GMT] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*] Pragma:[no-cache] Vary:[Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site, x-fh-requested-host, accept-encoding] X-Cache:[MISS] X-Cache-Hits:[0] X-Served-By:[cache-iad-kcgs7200164-IAD] X-Timer:[S1759693901.244544,VS0,VE70]]
```

## hollywoodreporter.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests frame-ancestors 'none'] Content-Security-Policy-Report-Only:[default-src data: 'unsafe-inline' 'unsafe-eval' https: blob: http://*.files.wordpress.com wss://www.hollywoodreporter.com; report-uri https://pmcuri.report-uri.com/r/d/csp/reportOnly] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:41 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://www.hollywoodreporter.com/wp-json/>; rel="https://api.w.org/" <https://wp.me/cEQmt>; rel=shortlink] Server:[nginx] Strict-Transport-Security:[max-age=31536000] Vary:[Accept-Encoding] X-Cache:[MISS] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca5 0 20 9980] X-Ua-Compatible:[IE=Edge]]
```

## kakao.com

```
200 OK
map[Accept-Ranges:[none] Connection:[keep-alive] Content-Length:[166183] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:43 GMT] Etag:["28927-7TJobijfmYReTJ4zlKT7UBgXR2E"] Set-Cookie:[isEnglish=false; Path=/] Strict-Transport-Security:[max-age=15724800] Vary:[Accept-Encoding]]
```

## video.google.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-cie2JeTp1MBd-yJ1s6bkRA' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:43 GMT] Expires:[Sun, 05 Oct 2025 19:51:43 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5seRSjJkqON0VvJKc-P3VAAHz4vX3luoeFiV1rBDPx_wLESlg6yUQ; expires=Fri, 03-Apr-2026 19:51:43 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax NID=525=jQro3tlX3fzAAxvrs8WXNtF2MMoqUHSUG7PKsJMQSCQX6EYVz5B6EImAhN7vZ2xFWamc9Ydrabh5D1YTF-OGBj94jSNEVUQg4j5jjUDFxtwYEXzUsZZLbGkC-U42y2rcjNF70h68BllYi_a57U78Lxn8JEMJsQ_hvwBvsNoWIIDspmXNPh4vNT_rM-Fm_0Mnjktg3UZKsblCZqSji_WS; expires=Mon, 06-Apr-2026 19:51:43 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## freepik.com

```
403 Forbidden
map[Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[no-cache, no-store, must-revalidate] Connection:[keep-alive] Content-Length:[4090] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:51:43 GMT] Expires:[0] Mime-Version:[1.0] Pragma:[no-cache] Strict-Transport-Security:[max-age=31536000 ; includeSubDomains ; preload]]
```

## francetvinfo.fr

```
200 OK
map[Access-Control-Allow-Origin:[*] Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[public, max-age=48] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:44 GMT] Etag:["dc366b4db39455db8b905842a96f90c8-gzip"] Server:[Microsoft IIS 4.0] Strict-Transport-Security:[max-age=31536000] Version:[1.0] X-Content-Type-Options:[nosniff] X-Xss-Protection:[1; mode=block]]
```

## interia.pl

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[441743] Content-Security-Policy:[upgrade-insecure-requests] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:50 GMT] Etag:["68e2cc32-6bd8f"] Keep-Alive:[timeout=20] Last-Modified:[Sun, 05 Oct 2025 19:51:14 GMT] Server:[nginx] Set-Cookie:[inpl_mobile=m;Domain=.interia.pl;Path=/;Max-Age=260000] Vary:[*] X-Content-Type-Options:[nosniff] X-Xss-Protection:[1; mode=block]]
```

## reddit.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[private, s-maxage=1, max-age=1, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[child-src 'self' blob: accounts.google.com;connect-src 'self' events.redditmedia.com o418887.ingest.sentry.io *.redd.it *.reddit.com www.redditstatic.com vimeo.com alb.reddit.com accounts.google.com/gsi/ www.google.com/recaptcha/ w3-reporting.reddit.com reddit-uploaded-emoji.s3-accelerate.amazonaws.com reddit-uploaded-media.s3-accelerate.amazonaws.com reddit-uploaded-video.s3-accelerate.amazonaws.com reddit-subreddit-uploaded-media.s3-accelerate.amazonaws.com wss://*.wss.redditmedia.com wss://gql-realtime.reddit.com gql-realtime.reddit.com *.giphy.com js.stripe.com support.reddithelp.com matrix.redditspace.com www.google.com/ccm/ styles.redditmedia.com a.thumbs.redditmedia.com b.thumbs.redditmedia.com;default-src 'self';font-src 'self' data:;form-action 'none';frame-ancestors 'self' *.reddit.com *.snooguts.net;frame-src 'self' www.reddit.com www.youtube.com www.youtube-nocookie.com player.vimeo.com *.redditmedia.com cdn.embedly.com redgifs.com www.redgifs.com embed.reddit.com accounts.google.com/gsi/ www.google.com/recaptcha/ recaptcha.google.com/recaptcha/ js.stripe.com hooks.stripe.com *.devvit.net td.doubleclick.net/ www.googletagmanager.com/ https://www.tiktok.com/;img-src 'self' data: blob: https:;manifest-src 'self' www.redditstatic.com;media-src 'self' blob: data: *.redd.it www.redditstatic.com matrix.redditspace.com;object-src 'none';script-src 'self' 'strict-dynamic' 'report-sample' 'unsafe-inline' 'unsafe-eval' 'nonce-ARQ/EA2r5MicHnlM+2ufqQ==';style-src 'self' 'unsafe-inline' www.redditstatic.com *.reddit.com accounts.google.com/gsi/style;style-src-attr 'unsafe-inline';worker-src 'self' blob:;report-to csp;report-uri https://w3-reporting-csp.reddit.com/reports] Content-Security-Policy-Report-Only:[object-src 'none';script-src 'nonce-ARQ/EA2r5MicHnlM+2ufqQ==' 'report-sample' 'unsafe-eval' 'strict-dynamic' https:;frame-ancestors 'self' *.reddit.com *.snooguts.net;base-uri 'self';report-to csp;report-uri https://w3-reporting-csp.reddit.com/reports] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:50 GMT] Nel:[{"report_to": "w3-reporting-nel", "max_age": 14400, "include_subdomains": false, "success_fraction": 1.0, "failure_fraction": 1.0}] Report-To:[{"group": "w3-reporting-nel", "max_age": 14400, "include_subdomains": true,  "endpoints": [{ "url": "https://w3-reporting-nel.reddit.com/reports" }]}, {"group": "w3-reporting", "max_age": 14400, "include_subdomains": true, "endpoints": [{ "url": "https://w3-reporting.reddit.com/reports" }]}, {"group": "w3-reporting-csp", "max_age": 14400, "include_subdomains": true, "endpoints": [{ "url": "https://w3-reporting-csp.reddit.com/reports" }]}] Server:[snooserv] Set-Cookie:[loid=000000001z8ku78qw1.2.1759693910519.Z0FBQUFBQm80c3hXbHNwdkt4ME44M3B6T0pCSjFKTVNhV0tXUUZYVzZrLUlkR0NKSmd1aHBXMm5mUDdkZE9Bamo0UlZZRTJRT0pHbldXcUdWT2lzQUwwUlFDYUNzcVVLSTdjd1ZUY0RSU1ZUeTFtdGlwdmNSWGlGWHluS0VrdHdxWTRiRmZjb1BYMUM; path=/; expires=Tue, 05 Oct 2027 19:51:50 GMT; domain=.reddit.com; samesite=none; secure session_tracker=oeqkqcnamobeqojjof.0.1759693910523.Z0FBQUFBQm80c3hXSExrSGZuQjl3Q2hWWVZyTWNLekJwajE1VVExNlVuMzN2T1dZMmRNRXNqUEdmUTNFNTgtTHV0S3I0WjVFbi1pRks3OXNrZHBhWm5iSlJla1pLeklsRmpTZEtNS09QNzhIaVNmd3EyNU50MnJpX1hqTGt0OU5aLVlUdHI0MV9tQnI; path=/; domain=.reddit.com; secure; SameSite=None; Secure csrf_token=00dafb8ed4442b542805e06494514b86; path=/; domain=.reddit.com; samesite=strict; secure token_v2=eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJsb2lkIiwiZXhwIjoxNzU5NzgwMzEwLjUxOTQ4OCwiaWF0IjoxNzU5NjkzOTEwLjUxOTQ4OCwianRpIjoieXhnaEVPSHZkVVV0SjJaSTNJc2pRRzhrbDJfanZBIiwiY2lkIjoiMFItV0FNaHVvby1NeVEiLCJsaWQiOiJ0Ml8xejhrdTc4cXcxIiwibGNhIjoxNzU5NjkzOTEwNTE5LCJzY3AiOiJlSnhra2RHT3REQUloZC1GYTVfZ2Y1VV9tMDF0Y1lhc0xRYW9rM243RFZvY2s3MDdjRDRwSFA5REtvcUZEQ1pYZ3FuQUJGZ1RyVERCUnVUOW5MbTNnMmlOZTh0WXNabkNCRm13RkRya21MR3NpUVFtZUpJYXl4c21vSUxOeUZ5dXRHTk5MVDBRSnFoY01yZUZIcGMyb2JrYmk1NmRHRlc1ckR5b3NWZmwwdGpHRkxZbnhqY2JxdzJwdUM2bk1rbkxRdmtzWHZUak45VzM5dm16X1NhMEo4T0txdW1CM2hsSkNHNHNmcGltM2Q5VGs1NnRDeGExOTNxUTJ1ZDYzSzU5MWl3ME83ZWY2X2xySXhtWFkyaC1KdnQzMXktaEE0ODhMelBxQUVhczRVY1pkbVFkX2xVSFVMbWdKR01KNHRNSTVNcmwyMzhKdG12VHY4YnRFejk4TS1LbU5feldETlJ6Q2VMUXBfSDFHd0FBX184UTFlVFIiLCJmbG8iOjF9.pcSRwfHJdRFoV-iamovmmA7oiNEP3z0iOpkWvyiIYtshocLapBr0WjVhFW_dwbBH2X3mLwYhxFDz2iq1jIoi2sCD--UXoyvAGEB3pOh_Oyx1Xhnq67_MUo2JukIWcg0DTVtmsgp_pIJsUnAhf1SQnsntpgPGWWJc1H88pynhnZZ3LDvtacVxwGURFrd58DG27Migk0G5artLtAK4t7OKavSHs1_Cz28fBN5mJSRkmusjHfzeXzubap5CLc-Jot1vSrOGZhYuO0X49euzZTQHAsSBN_duwGqCKSVON1w7D2j0Rq7z4uCfObiDFjqR14zB2fBZZ9w9BrU2n5RjiTlr6g; Path=/; Domain=reddit.com; Expires=Mon, 06 Oct 2025 19:51:50 GMT; HttpOnly; Secure csv=2; Max-Age=63072000; Domain=.reddit.com; Path=/; Secure; SameSite=None edgebucket=bLM8egxnm3j7dGuiZF; Domain=reddit.com; Max-Age=63071999; Path=/;  secure] Strict-Transport-Security:[max-age=31536000; includeSubdomains] Vary:[Accept-Encoding,accept-language] Via:[1.1 varnish] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Is-Wrs:[false] X-Ratelimit-Remaining:[199.0] X-Ratelimit-Reset:[489] X-Ratelimit-Used:[1] X-Xss-Protection:[1; mode=block]]
```

## whitehouse.gov

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests; frame-ancestors 'none'] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:50 GMT] Referrer-Policy:[strict-origin-when-cross-origin] Server:[nginx] Strict-Transport-Security:[max-age=31536000;includeSubdomains;preload] Vary:[Accept-Encoding] X-Cache:[STALE] X-Content-Type-Options:[nosniff] X-Frame-Options:[DENY] X-Rq:[dca5 181 253 80] X-Xss-Protection:[1; mode=block]]
```

## google.es

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-om4qlaVgv7MJp3Y6fPFOmg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:55 GMT] Expires:[Sun, 05 Oct 2025 19:51:55 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5sxiGS0e19LuLOhH718hToRbQCxWRi3JPPYK58b_oHUIO09CIiZkZ4; expires=Fri, 03-Apr-2026 19:51:55 GMT; path=/; domain=.google.es; Secure; HttpOnly; SameSite=lax NID=525=TPjhh4AVeYyMCHZmk7gsRybv9COdbqIPvzvoOlAklIS4aiUeyAJkdhupuxCRlySmM85MB6h7kDpBDJbR34cZZw_vfCsq5yBPSawlU9QISUpEfJkWg6yfIUADscjYrmeIdzPRaGLVcehG4Rl-U_Ifxy3ot-D-X9u4u_TPTXQQRBCDaASQDm9zjPtzWra9VhLrzn6838MI1ODTpbLhUjI; expires=Mon, 06-Apr-2026 19:51:55 GMT; path=/; domain=.google.es; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## psychologytoday.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[1428] Cache-Control:[max-age=5529600, public] Connection:[keep-alive] Content-Language:[en] Content-Length:[172911] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:56 GMT] Etag:[W/"1759692482-gzip"] Expires:[Sun, 19 Nov 1978 05:00:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:26:12 GMT] Link:[<//cdn2.psychologytoday.com>; rel="preconnect"; crossorigin="1", <//cdn2.psychologytoday.com>; rel="dns-prefetch", <https://www.psychologytoday.com/au>; rel="alternate"; hreflang="en-AU", <https://www.psychologytoday.com/ca>; rel="alternate"; hreflang="en-CA", <https://www.psychologytoday.com/gb>; rel="alternate"; hreflang="en-GB", <https://www.psychologytoday.com/ie>; rel="alternate"; hreflang="en-IE", <https://www.psychologytoday.com/nz>; rel="alternate"; hreflang="en-NZ", <https://www.psychologytoday.com/sg>; rel="alternate"; hreflang="en-SG", <https://www.psychologytoday.com/us>; rel="alternate"; hreflang="en-US", <https://www.psychologytoday.com/za>; rel="alternate"; hreflang="en-ZA", <https://www.psychologytoday.com/ar>; rel="alternate"; hreflang="es-AR", <https://www.psychologytoday.com/cl>; rel="alternate"; hreflang="es-CL", <https://www.psychologytoday.com/es>; rel="alternate"; hreflang="es-ES", <https://www.psychologytoday.com/mx>; rel="alternate"; hreflang="es-MX", <https://www.psychologytoday.com/co>; rel="alternate"; hreflang="es-CO", <https://www.psychologytoday.com/gt>; rel="alternate"; hreflang="es-GT", <https://www.psychologytoday.com/cr>; rel="alternate"; hreflang="es-CR", <https://www.psychologytoday.com/pa>; rel="alternate"; hreflang="es-PA", <https://www.psychologytoday.com/pr>; rel="alternate"; hreflang="es-PR", <https://www.psychologytoday.com/pe>; rel="alternate"; hreflang="es-PE", <https://www.psychologytoday.com/uy>; rel="alternate"; hreflang="es-UY", <https://www.psychologytoday.com>; rel="alternate"; hreflang="x-default", </theme-assets/touch-icons/apple-touch-icon.png>; rel="apple-touch-icon", <//cdn2.psychologytoday.com>; rel=preconnect; crossorigin] Server:[Apache] Strict-Transport-Security:[max-age=31536000] Vary:[Cookie,Origin,Accept-Encoding] Via:[1.1 ZZ] X-Cache:[HIT] X-Cache-Hits:[2217] X-Consumer-Id:[848de849-ea1d-442f-a4ec-cfe472f6a19f] X-Content-Type-Options:[nosniff] X-Country-Code:[US] X-Drupal-Cache:[MISS] X-Frame-Options:[SAMEORIGIN] X-Region-Code:[VA] X-Served-By:[content-varnish-primary-i-0e2d4f65ab99f6b69.ptwww.internal] X-Varnish:[342108692 345343118] Xkey:[fQEX Lcck hD2v KLlM 7yIT F8ja VgQb X806 YeL1 e-HI 9fG4 36DO 2OQo hJUX PEta bJcX Ton2 XuDL Pks5 EwUD gMzE fCnT 4TG_ 0sDY _GAW 9HSw MSBx iN81 __Ju J2hr Bf76 2aeR 1yY5 uTrn 16GH rIqW 6Sl0 Z-xt cDC1 ljAN Nn-S MsYZ 68c1 ct64 pTQ0 -ht1 Uv4Y dPrC IyWs u1nC 7QY- RAhe vSRG BvBs 94RV ra7g PiIj Ay0I Rvwb Feuw bz6P 5tCH PoGK cWkI oUwh hhy9 awGJ emmh mBoe i-00 H3s1 4o33 6Kbm UlS3 ijWS 29hc yUlc Aw6e 4oXq 641m 1ltQ 1yYT 5Z0p qFa0 qR9l zIbB QqvA roHR hRSt TXuJ ddyd vODb jOdD XY1C Z_Km TtC5 RKPl Tm9J Ty2z Fj7Y Ieo_ wdyg odjP sHHJ 0-LU 8WNT QSCW DeAQ j4LV Fk_T 8lSc F6pS Zsy2 40sq fgDL 0oEP KNDV AGlR sbKR Ny-N XUJj TLg0 xabd EjH1 Kx6E jyi3 veCQ 0ZHk snhN sRde XRf_ KCvA MvV3 kMuJ MpRE wkzg 73TU Qbn0 X_iJ q_cu sOLn XgFM 1-4d O8dJ vD7t F0-_ WUtp wqHR dEeO qhjf EOV3 CaK4 HGEm XyqP 2bRh d6cI BYd8 Pecr L3bs PmWm C_XS OaVj cxel BWxF YcD9 zMot r2zn r3sJ ce9u 0H0k xvhb fJjG vZQm UcKc 8bgo vbHd meU2 rLlk rfiD a3PR rQFz UDbt 75IO HVSa qaB5 2M_T IIiP DcCw qTRA UYDZ CN4d 3Obu T06s 0R00 WFep zYmM qXnw qEaI 1ENg 4zvo GS6A JumO O-uy G7mI hL4v TTYc fdvN xpBl 96Y3 vStc 0fxA 8WjC Goo7 xygE 5kyS r0Os jALr jiU7 evIg 3QFQ bBv0 dBbN nFOC O11P oL_J XOuA lyPt _PaU PQzV hs7t sExy uUDQ zSy- 2YZT atHj owEh qZp_ aMc5 oWsK oSDl b5Ex 0D-t F0lD RmDG _Os1 f3He _SpR sXHH ec2U xWxz V38a sO2x NwW5 kJ3G RxAP nHt8 INbV 3vFC gGUE PLZe OSpF Cumu JnYM BmFG AfbT OlIB rdUt A9Bd tomE AsfR idCc EQwD BYVn 4loF P9SA xILn TQ8A w-PQ 1xq- fnYO P2eQ wXQd G_PS U-Ja g0Lm EhTv P4ym Gkfw cQGt V5dF _Six TYQ7 0HNp 3f8b qLwN QBaD 9wv5]]
```

## ja.wikipedia.org

```
200 OK
map[Accept-Ch:[] Accept-Ranges:[bytes] Age:[15323] Cache-Control:[private, s-maxage=0, max-age=0, must-revalidate, no-transform] Content-Language:[ja] Content-Length:[123558] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 15:36:33 GMT] Last-Modified:[Sun, 05 Oct 2025 15:35:44 GMT] Nel:[{ "report_to": "wm_nel", "max_age": 604800, "failure_fraction": 0.05, "success_fraction": 0.0}] Report-To:[{ "group": "wm_nel", "max_age": 604800, "endpoints": [{ "url": "https://intake-logging.wikimedia.org/v1/events?stream=w3c.reportingapi.network_error&schema_uri=/w3c/reportingapi/network_error/1.0.0" }] }] Server:[mw-web.eqiad.main-7d67679796-xrxrb] Server-Timing:[cache;desc="hit-front", host;desc="cp1110"] Set-Cookie:[WMF-Last-Access=05-Oct-2025;Path=/;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT WMF-Last-Access-Global=05-Oct-2025;Path=/;Domain=.wikipedia.org;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT WMF-DP=a21;Path=/;HttpOnly;secure;Expires=Mon, 06 Oct 2025 00:00:00 GMT GeoIP=US:VA:Portsmouth:36.87:-76.39:v4; Path=/; secure; Domain=.wikipedia.org NetworkProbeLimit=0.001;Path=/;Secure;SameSite=None;Max-Age=3600 WMF-Uniq=q6P4i6SJjeeFM9Romjl5bgKDAAAAAFvdVevtCNVnlfkQEELVSGDqc44aoRz9a9HE;Domain=.wikipedia.org;Path=/;HttpOnly;secure;SameSite=None;Expires=Mon, 05 Oct 2026 00:00:00 GMT] Strict-Transport-Security:[max-age=106384710; includeSubDomains; preload] Vary:[Accept-Encoding,X-Subdomain,Cookie,Authorization,User-Agent] X-Analytics:[] X-Cache:[cp1110 miss, cp1110 hit/48] X-Cache-Status:[hit-front] X-Client-Ip:[74.99.95.85] X-Content-Type-Options:[nosniff]]
```

## telegram.me

```
200 OK
map[Cache-Control:[no-store] Connection:[keep-alive] Content-Length:[18025] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:51:56 GMT] Pragma:[no-cache] Server:[nginx/1.18.0] Set-Cookie:[stel_ssid=2b3f163bf2d8fee20f_6685622451613972833; expires=Mon, 06 Oct 2025 06:58:36 GMT; path=/; samesite=None; secure; HttpOnly] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Frame-Options:[SAMEORIGIN]]
```

## enable-javascript.com

```
200 OK
map[Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:51:57 GMT] Server:[nginx] Strict-Transport-Security:[max-age=31536000; includeSubdomains; preload]]
```

## de.wikipedia.org

```
200 OK
map[Accept-Ch:[] Accept-Ranges:[bytes] Age:[1977] Cache-Control:[private, s-maxage=0, max-age=0, must-revalidate, no-transform] Content-Language:[de] Content-Length:[85624] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:19:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:14:11 GMT] Nel:[{ "report_to": "wm_nel", "max_age": 604800, "failure_fraction": 0.05, "success_fraction": 0.0}] Report-To:[{ "group": "wm_nel", "max_age": 604800, "endpoints": [{ "url": "https://intake-logging.wikimedia.org/v1/events?stream=w3c.reportingapi.network_error&schema_uri=/w3c/reportingapi/network_error/1.0.0" }] }] Server:[mw-web.eqiad.main-7d67679796-4sqx7] Server-Timing:[cache;desc="hit-front", host;desc="cp1110"] Set-Cookie:[WMF-Last-Access=05-Oct-2025;Path=/;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT WMF-Last-Access-Global=05-Oct-2025;Path=/;Domain=.wikipedia.org;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT GeoIP=US:VA:Portsmouth:36.87:-76.39:v4; Path=/; secure; Domain=.wikipedia.org NetworkProbeLimit=0.001;Path=/;Secure;SameSite=None;Max-Age=3600 WMF-Uniq=YjOHw3eZRWa1uBNjpgvRhQKDAAAAAFvdXl3WjgqmwruAYNSV7jg65NWTL7yQ5_IZ;Domain=.wikipedia.org;Path=/;HttpOnly;secure;SameSite=None;Expires=Mon, 05 Oct 2026 00:00:00 GMT] Strict-Transport-Security:[max-age=106384710; includeSubDomains; preload] Vary:[Accept-Encoding,X-Subdomain,Cookie,Authorization,User-Agent] X-Analytics:[] X-Cache:[cp1110 miss, cp1110 hit/6] X-Cache-Status:[hit-front] X-Client-Ip:[74.99.95.85] X-Content-Type-Options:[nosniff]]
```



# Program Usage

# Project cookie-fetcher

This program fetches cookies from a list of websites and generates a report on their attributes. The name of the file for the list of sites needs to be sites.txt, and should be formated as site.com\nsite2.ninja. There is also a config.yaml that needs to be present to configure the end report.

```yaml

reporterName: "Reporter"
reportTitle: "Cookie site analysis"
reportDescription: |
    reason for report would go here
reportFilename: "../README.md" # Report file name
programUsageReadmePath: "README.md" # if you wish to add this project readme to the Readme ensure it exists here.
```

## Getting Started

Either download a compiled version of the software in the links below or if you have GoLang and installed run a make run, and it will begin parsing.

## Releases
I know Releases would typically done via the githost of the project, but for your convenience i'll put them here. Sorry too Lazy to remote in to my Mac and actually make an ARM build.

[Windows](https://github.com/gameguyalien/cs533-f25/releases/download/assigment-3/cookie-fetcher-windows-amd64.exe)

[Linux](https://github.com/gameguyalien/cs533-f25/releases/download/assigment-3/cookie-fetcher-linux-amd64)

[OSX(Darwin)](https://github.com/gameguyalien/cs533-f25/releases/download/assigment-3/cookie-fetcher-darwin-amd64)

## MakeFile


Run build make command natively
```bash
make build
```

build scoped to create a Linux executable
``` bash 
make build-linux
```

build scoped to create a Windows executable
``` bash 
make build-windows
```

build scoped to create a OSX(Darwin) executable
``` bash 
make build-darwin
```

Creates Builds for all platforms 
```bash
make build-all
```

Run the application directly without compiling
```bash
make run
```

Clean up binary from the last build:
```bash
make clean
```
