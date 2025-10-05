# Assignment 3

Reporter Name: Ryan Thomson

Report Date: 10-05-2025


[[_TOC_]]

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
| amazon.com | 405 Method Not Allowed | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |  |
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
| tinyurl.com | 503 Service Unavailable | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |
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
| alexa.com | 200 OK | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |
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
| Totals | N/A | 152 | 59 | 97 | 69 | 2 | 16 | 51 | 151 | 151 | 1 |  |




# Cookie Summary

|Min| Max | Median | Mean |
|--------|-------|--------|-------|
| 0 | 18 | 1.00 | 1.57 |
# HTTP responses
 ## amazon.com

```
405 Method Not Allowed
map[Allow:[GET, POST, PUT, DELETE, OPTIONS] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[0] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:29:28 GMT] Expires:[-1] Pragma:[no-cache] Server:[Server] Set-Cookie:[skin=noskin; path=/; domain=.amazon.com] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent,Content-Type,Accept-Encoding,User-Agent] Via:[1.1 72f4d18bf03f8b7dda07e802ed060738.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[Pk0avO2Bwvn7_i-0R_kZ32oKvZqCeH4-9LqPnaA9a8peEN41FrCi1A==] X-Amz-Cf-Pop:[IAD55-P10] X-Amz-Rid:[2GW5V0RX7RJQGG8DXMHB] X-Cache:[Error from cloudfront] X-Frame-Options:[SAMEORIGIN]]
```

## news.google.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Content-Length:[0] Content-Security-Policy:[script-src 'unsafe-inline' https: http:;object-src 'none';base-uri 'self';report-uri /_/DotsSplashUi/cspreport;worker-src 'self' require-trusted-types-for 'script';report-uri /_/DotsSplashUi/cspreport] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[same-origin-allow-popups] Cross-Origin-Resource-Policy:[same-site] Date:[Sun, 05 Oct 2025 19:29:29 GMT] Expires:[Mon, 01 Jan 1990 00:00:00 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*] Pragma:[no-cache] Reporting-Endpoints:[default="/_/DotsSplashUi/web-reports?context=eJzjctDikmII1pBi-LxjBmvrzXOsk4HYUOESqz0QX06_xFokcYW1AYg_Vd1gFai-wZrEfpO1AIhND95idQZiIR6OmX3dx9kEfsx49JpJSTkpvzA-Jb-kuLggJ7E4ozi1qCy1KN7IwMjUwNLYQM_AMr7AAAAg8SuO"] Server:[ESF] Set-Cookie:[NID=525=SjkOwgPUBB8ByVQYSPPwcTfn8Kd44k0NCaTM-u_s5sKAJGPkI8sBMfGv2tDbDcQTMgCuN-e7Y_gMVW22IlvSj2IeS0sZ1MfSg1aCWQ1NkcuJXmwh5rixdiQ4iEf52IXSon2pYk6MvjHEO7F5xQ5dc1X02eQ8Km0fybaHlwGrY8guofvuFbOM2Lc1MFsk8eeMio0NTEUAMKCLmCPgzk7v; expires=Mon, 06-Apr-2026 19:29:29 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none GN_PREF=W251bGwsIkNBSVNDd2laam92SEJoREF6c0JZIl0_; Expires=Mon, 06-Apr-2026 07:29:29 GMT; Path=/; Secure] Strict-Transport-Security:[max-age=31536000] Vary:[Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Ua-Compatible:[IE=edge] X-Xss-Protection:[0]]
```

## biblegateway.com

```
200 OK
map[Age:[3471] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 18:31:38 GMT] Server:[nginx] Strict-Transport-Security:[max-age=7776000] Vary:[Accept-Encoding] Via:[1.1 77dc0904034d14a129bafe4c9d954f08.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[W40RY07HhGvmLL62h4ksRuDofCnArq3Wai41EUXYAEHwwkI5Vx1nTQ==] X-Amz-Cf-Pop:[IAD50-C2] X-Cache:[Hit from cloudfront]]
```

## oup.com

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f5403e91e96a2-IAD] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:29:30 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f5403e91e96a2"] Set-Cookie:[__cf_bm=1ffTZKeqxSz.Uk3O.xv7xv0Ci_8Z4sTvoPI.bVohVtM-1759692570-1.0.1.1-qWVSFdxysilYIGxoXmikOfgKJcHeN5IDijonNdF1l64ULwMGLzLMTPqTfzJTtbwT7w.Ay8U0XOwqvbqxD5PI_tXE.np4uzWcnW9wFJcTzQQ; path=/; expires=Sun, 05-Oct-25 19:59:30 GMT; domain=.corp.oup.com; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## whatsapp.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, no-cache, no-store, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[default-src 'self' blob:;script-src *.whatsapp.com *.whatsapp.net *.facebook.com *.facebook.net 'nonce-4HufagKi' 'self' blob:;style-src *.whatsapp.com *.whatsapp.net 'unsafe-inline' *.facebook.com 'self' data: blob:;connect-src *.whatsapp.com *.whatsapp.net wss://*.facebook.com:* *.fbcdn.net 'self' data: blob:;font-src *.whatsapp.com *.whatsapp.net *.facebook.com static.xx.fbcdn.net data:;img-src *.whatsapp.com *.whatsapp.net *.facebook.com *.fbcdn.net static.xx.fbcdn.net *.cdninstagram.com 'self' data: blob:;media-src *.fbcdn.net 'self' data: blob:;child-src 'self' data: blob:;frame-src *.facebook.com *.whatsapp.com 'self' data: blob:;manifest-src 'self' data: blob:;object-src 'self' data: blob:;worker-src *.whatsapp.com *.whatsapp.net *.facebook.com *.facebook.net 'nonce-4HufagKi' 'self' data: blob:;block-all-mixed-content;upgrade-insecure-requests;] Content-Type:[text/html; charset="utf-8"] Cross-Origin-Embedder-Policy-Report-Only:[require-corp;report-to="coep_report"] Cross-Origin-Opener-Policy:[same-origin-allow-popups] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:29:30 GMT] Document-Policy:[include-js-call-stacks-in-crash-reports] Expires:[Sat, 01 Jan 2000 00:00:00 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(), attribution-reporting=(), autoplay=(), bluetooth=(), camera=(), ch-device-memory=(), ch-downlink=(), ch-dpr=(), ch-ect=(), ch-rtt=(), ch-save-data=(), ch-ua-arch=(), ch-ua-bitness=(), ch-viewport-height=(), ch-viewport-width=(), ch-width=(), clipboard-read=(), clipboard-write=(), compute-pressure=(), display-capture=(), encrypted-media=(), fullscreen=(self), gamepad=(), geolocation=(), gyroscope=(), hid=(), idle-detection=(), interest-cohort=(), keyboard-map=(), local-fonts=(), magnetometer=(), microphone=(), midi=(), otp-credentials=(), payment=(), picture-in-picture=(), private-state-token-issuance=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), shared-storage=(), shared-storage-select-url=(), private-state-token-redemption=(), usb=(), unload=(self), window-management=(), xr-spatial-tracking=();report-to="permissions_policy"] Pragma:[no-cache] Report-To:[{"max_age":2592000,"endpoints":[{"url":"https:\/\/www.facebook.com\/browser_reporting\/coop\/?minimize=0"}],"group":"coop_report","include_subdomains":true}, {"max_age":86400,"endpoints":[{"url":"https:\/\/www.facebook.com\/browser_reporting\/coep\/?minimize=0"}],"group":"coep_report"}, {"max_age":259200,"endpoints":[{"url":"https:\/\/www.whatsapp.com\/whatsapp_browser_error_reports\/?brsid=7557822039501142075&cpp=C3&cv=1028015759&st=1759692570369"}]}, {"max_age":21600,"endpoints":[{"url":"https:\/\/www.whatsapp.com\/whatsapp_browser_error_reports\/"}],"group":"permissions_policy"}] Reporting-Endpoints:[coop_report="https://www.facebook.com/browser_reporting/coop/?minimize=0", coep_report="https://www.facebook.com/browser_reporting/coep/?minimize=0", default="https://www.whatsapp.com/whatsapp_browser_error_reports/?brsid=7557822039501142075&cpp=C3&cv=1028015759&st=1759692570369", permissions_policy="https://www.whatsapp.com/whatsapp_browser_error_reports/"] Set-Cookie:[wa_csrf=GmVPea6xidNj_f44ldlYqt; path=/; domain=.whatsapp.com; secure; httponly; SameSite=None wa_lang_pref=en; expires=Sun, 12-Oct-2025 19:29:30 GMT; Max-Age=604800; path=/; domain=.whatsapp.com; secure; SameSite=None wa_ul=25c898ec-ad90-4f2e-998f-fb6a49cc0c92; expires=Sat, 03-Jan-2026 19:29:30 GMT; Max-Age=7776000; path=/; domain=.www.whatsapp.com; secure; httponly; SameSite=Lax] Strict-Transport-Security:[max-age=31536000; preload; includeSubDomains] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Fb-Connection-Quality:[EXCELLENT; q=0.9, rtt=11, rtx=0, c=14, mss=1380, tbw=4303, tp=-1, tpl=-1, uplat=345, ullat=0] X-Fb-Debug:[Mq1YMR9xXnd7AMFQo69rcb86PV08A0hpEiosCwIV4BCw0/KpFZe/cvhU7NA3aIUOidIvU1OP9wb8pFtOhfs/6g==] X-Frame-Options:[DENY] X-Xss-Protection:[0]]
```

## buydomains.com

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f5426399c878b-IAD] Content-Length:[8520] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:29:35 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f5426399c878b"] Set-Cookie:[__cf_bm=62iVy_kPjQg1bjCpvS6BTBAKv5IW8RqDEXgK5W6WF08-1759692575-1.0.1.1-E3J9m6aN4bueFUrB50cpJ9qj40AT0L2YtlnDj8iT4ywxz2870h9EQbpReiUyDQD8BMOOTHbpHBbnhWx4BEwpPA6fKJ573JfmoXwy_PQHQEM; path=/; expires=Sun, 05-Oct-25 19:59:35 GMT; domain=.buydomains.com; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## estadao.com.br

```
200 OK
map[Accept-Ch:[Sec-CH-UA,Sec-CH-UA-Mobile,Sec-CH-UA-Platform,Sec-CH-UA-Arch,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Model,Sec-CH-Device-Memory] Cache-Control:[private, max-age=60] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:29:36 GMT] Etag:[W/"1428cb-LvDzmPGhUjNuK7pF/lFAg4tutNA"] Expires:[Sun, 05 Oct 2025 19:30:36 GMT] Last-Modified:[Sun, 05 Oct 2025 19:28:37 GMT] Mpulse_cdn_cache:[HIT] Mpulse_origin_time:[0] Server:[openresty] Server-Timing:[ak_p; desc="1759692575963_34697817_131543086_59_166556_13_69_-";dur=1] Set-Cookie:[datadome=FgdgrEOpcc~3GrAaGgF0akOSPuyBPXvb8ssdygblEFi6~NZ5njq8Mv_o6TOHiCtylEr1YBsVmgyqSIQ3GhRhvQ1oWxL9gaUAwsKkixWW4wv~QmweP~ujUN~8LHbjpej0; Max-Age=31536000; Domain=.estadao.com.br; Path=/; Secure; SameSite=Lax] X-Arc-Edgecontroller:[1.1.0] X-Arc-Pb-Mx-Id:[00000000] X-Arc-Pb-Request-Id:[3280feb9-3c28-454d-8a4b-090768c50c11] X-Arc-Request-Id:[0.59721102.1759692575.7d7302e] X-Arc-Ttl:[120] X-Datadome:[protected]]
```

## berkeley.edu

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f54298fef8544-IAD] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:29:36 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f54298fef8544"] Set-Cookie:[__cf_bm=6tbjqDMqbuZuDKndxQgCoqgHEXYl7_8EvO75DhDlqmc-1759692576-1.0.1.1-ci3bzfgp01TSVzbNxDbtRgA5GFR.umQ0msBq4BPYqN824eMp8XwuKkfS5SeIfEy0ZoEN0VRII4auPEYQiyb.yJNUCZvZg2lZZ6118UMuMWo; path=/; expires=Sun, 05-Oct-25 19:59:36 GMT; domain=.berkeley.edu; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## pinterest.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Full,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Model,Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443";ma=604800] Connection:[keep-alive] Content-Security-Policy:[default-src 'self' blob: s.pinimg.com s1.pinimg.com; font-src 'self' m.media-amazon.com *.amazon-adsystem.com s.pinimg.com s1.pinimg.com data: fonts.googleapis.com fonts.gstatic.com use.typekit.net; style-src 'self' blob: 'unsafe-inline' data: *.pinimg.com *.pinterest.com accounts.google.com fonts.googleapis.com *.adyen.com *.adyenpayments.com; img-src blob: data: *; base-uri 'none'; connect-src 'self' blob: m.media-amazon.com *.amazon-adsystem.com htlb.casalemedia.com *.ada.support *.pinimg.com *.pinterest.com accounts.google.com *.adyen.com pinterest-salvador.s3.amazonaws.com *.adyenpayments.com *.facebook.com www.recaptcha.net https://pinterest-api.arkoselabs.com/ www.googleapis.com *.dropboxapi.com pinterest-aberdeen.s3.amazonaws.com pinterest-aberdeen.s3.us-east-1.amazonaws.com pinterest-anaheim.s3.amazonaws.com pinterest-anaheim.s3.us-east-1.amazonaws.com pinterest-hilo.s3.amazonaws.com pinterest-hilo.s3.us-east-1.amazonaws.com pinterest-sim-toontown.s3.amazonaws.com pinterest-sim-toontown.s3.us-east-1.amazonaws.com pinterest-media-upload.s3.amazonaws.com pinterest-media-upload.s3.us-east-1.amazonaws.com pinterest-media-upload.s3-accelerate.amazonaws.com pinterest-media-upload.s3-accelerate.us-east-1.amazonaws.com pinterest-milwaukee.s3.amazonaws.com pinterest-milwaukee.s3.us-east-1.amazonaws.com pinterest-poughkeepsie.s3.amazonaws.com pinterest-poughkeepsie.s3.us-east-1.amazonaws.com pinterest-waterloo.s3.amazonaws.com pinterest-waterloo.s3.us-east-1.amazonaws.com pinterest-plymouth.s3.amazonaws.com pinterest-plymouth.s3.us-east-1.amazonaws.com pinterest-salvador.s3.us-east-1.amazonaws.com pinterest-yamagata.s3.amazonaws.com pinterest-yamagata.s3.us-east-1.amazonaws.com *.cedexis.com *.cedexis-radar.net *.tvpixel.com api.pinadmin.com *.live-video.net https://*.daily.co https://*.pluot.blue wss://*.wss.daily.co api.basistheory.com; form-action 'self' *.adyen.com *.klarna.com *.tink.com *.adyenpayments.com; frame-src 'self' *.ada.support *.pinimg.com *.pinterest.com *.adyen.com static-sandbox.dlocal.com static.dlocal.com *.google.com *.facebook.com www.recaptcha.net https://iframe.arkoselabs.com/ https://pinterest-api.arkoselabs.com/ api.sardine.ai api.sandbox.sardine.ai pinterest-hilo.s3.amazonaws.com pinterest-hilo.s3.us-east-1.amazonaws.com pinterest-sim-toontown.s3.amazonaws.com pinterest-sim-toontown.s3.us-east-1.amazonaws.com pinterest-milwaukee.s3.amazonaws.com pinterest-milwaukee.s3.us-east-1.amazonaws.com pinterest-waterloo.s3.amazonaws.com pinterest-waterloo.s3.us-east-1.amazonaws.com pinterest-tolu.s3.amazonaws.com *.pinterdev.com content.googleapis.com *.youtube.com *.youtube-nocookie.com *.ytimg.com player.vimeo.com calendly.com vine.co bid.g.doubleclick.net *.fls.doubleclick.net pinlogs.s3.amazonaws.com pinlogs.s3.us-east-1.amazonaws.com advertising-delivery-metric-reports.s3.amazonaws.com advertising-delivery-metric-reports.s3.us-east-1.amazonaws.com servedby.flashtalking.com pinterest-uk.admo.tv pinterest-uk-web.admo.tv fbrpc://call *.linkedin.com px.ads.linkedin.com api.basistheory.com js.basistheory.com 3ds.basistheory.com; media-src 'self' blob: m.media-amazon.com data: *.pinimg.com *.live-video.net; object-src 'self'; script-src 'nonce-1c1428797361600d6b9ab426e0cc11ef' 'strict-dynamic' 'self' blob: 'unsafe-inline' *.pinimg.com *.pinterest.com *.adyen.com js.dlocal.com js-sandbox.dlocal.com static-sandbox.dlocal.com static.dlocal.com *.adyenpayments.com 'report-sample' *.google.com connect.facebook.net *.google-analytics.com *.facebook.com *.googleadservices.com *.doubleclick.net *.googletagmanager.com radar.cedexis.com *.cedexis-test.com www.gstatic.com/recaptcha/ www.gstatic.cn/recaptcha/ www.recaptcha.net https://pinterest-api.arkoselabs.com/ api.sardine.ai api.sandbox.sardine.ai 'wasm-unsafe-eval' js.basistheory.com 3ds.basistheory.com; worker-src 'self' blob: 'unsafe-inline'; report-uri /_/_/csp_report/?rid=3556269148346541; frame-ancestors 'self' , script-src 'self' blob: 'unsafe-inline' *.pinimg.com *.pinterest.com *.adyen.com js.dlocal.com js-sandbox.dlocal.com static-sandbox.dlocal.com static.dlocal.com *.adyenpayments.com 'report-sample' *.google.com connect.facebook.net *.google-analytics.com *.facebook.com *.googleadservices.com *.doubleclick.net *.googletagmanager.com radar.cedexis.com *.cedexis-test.com www.gstatic.com/recaptcha/ www.gstatic.cn/recaptcha/ www.recaptcha.net https://pinterest-api.arkoselabs.com/ api.sardine.ai api.sandbox.sardine.ai 'wasm-unsafe-eval' js.basistheory.com 3ds.basistheory.com; report-uri /_/_/csp_report/?rid=3556269148346541] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy-Report-Only:[same-origin; report-to="coop-endpoint"] Date:[Sun, 05 Oct 2025 19:29:41 GMT] Link:[<https://i.pinimg.com>; rel=preconnect; crossorigin=anonymous, <https://s.pinimg.com>; rel=preconnect; crossorigin=anonymous, <https://v1.pinimg.com>; rel=preconnect; crossorigin=anonymous] Origin-Trial:[AvlUIFJouPpJAKljRGh7EnYm2Brnx/eu51h39Z7p11vbzNlw2YhkUhxvxZdkS709VlGGNw4Gcg/a9mAzHDrEcQ0AAAB5eyJvcmlnaW4iOiJodHRwczovL3BpbnRlcmVzdC5jb206NDQzIiwiZmVhdHVyZSI6IlNlbmRGdWxsVXNlckFnZW50QWZ0ZXJSZWR1Y3Rpb24iLCJleHBpcnkiOjE2ODQ4ODYzOTksImlzU3ViZG9tYWluIjp0cnVlfQ==] P3p:[CP="This is not a P3P policy. See https://www.pinterest.com/_/_/help/articles/pinterest-and-p3p for more info."] Pinterest-Generated-By:[coreapp-webapp-prod-0a011403] Pinterest-Version:[53b4edc] Referrer-Policy:[origin] Reporting-Endpoints:[coop-endpoint="https://www.pinterest.com/_/_/coop_report/", coep-endpoint="https://www.pinterest.com/_/_/coep_report/"] Set-Cookie:[csrftoken=c9321ce5b4b58fdb6aad0ca38c55c244; path=/; expires=Mon, 05 Oct 2026 19:29:41 GMT; samesite=lax; secure _pinterest_sess=TWc9PSZ6SU9NVGhjeXAxOUNOV3pQREVKSW84UE5XUTk3OE04L3Vrc2s5R2hZaTMvRlIrLzVFejhnbFR1WjFnYTNXS2RRTnorODlVYXU0eFp2SzlTc1NiYVY4R3kwZW1NRlNyMXc5NFl2alI4N2hSbz0mVDY0SDQ0aWdUTDJRZzlaMFJ4dUJ2U0svSFBJPQ==; path=/; expires=Wed, 30 Sep 2026 19:29:41 GMT; domain=.pinterest.com; samesite=none; secure; httponly _auth=0; path=/; expires=Wed, 30 Sep 2026 19:29:41 GMT; domain=.pinterest.com; secure; httponly _routing_id="63b71097-f90e-45f1-8617-0f8f551cfc13"; Max-Age=86400; Path=/; HttpOnly] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Timing-Allow-Origin:[https://pinterest.com] Vary:[User-Agent, Accept-Encoding] X-Cdn:[fastly] X-Content-Type-Options:[nosniff] X-Envoy-Upstream-Service-Time:[29] X-Frame-Options:[SAMEORIGIN] X-Pinterest-Rid:[3556269148346541] X-Pinterest-Rid-128bit:[1706ce1a8d0424ac04ef70cb7b49a3c6] X-Ua-Compatible:[IE=edge] X-Xss-Protection:[1; mode=block]]
```

## ietf.org

```
200 OK
map[Age:[2548] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[public, max-age=14400] Cf-Cache-Status:[HIT] Cf-Ray:[989f544b0c8a1dd5-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:29:41 GMT] Expires:[Sun, 05 Oct 2025 23:29:41 GMT] Last-Modified:[Sun, 05 Oct 2025 18:32:37 GMT] Referrer-Policy:[same-origin] Server:[cloudflare] Set-Cookie:[__cf_bm=OK9nd4fmXMbuF0QEmYNQsEHNsyidDTO00v2ThGNeWic-1759692581-1.0.1.1-TwKD_Vb4VZUjKWfQSS7dyyFg.iacO6y2v3IoTU0qx7yh9oG0uugw414b27s9qiEw4mc46NoZ.r5v4nSU2oxJinM3s5gJ_13ddLm6ww4fGLw; path=/; expires=Sun, 05-Oct-25 19:59:41 GMT; domain=.ietf.org; HttpOnly; Secure; SameSite=None] Vary:[Cookie] X-Content-Type-Options:[nosniff] X-Frame-Options:[DENY]]
```

## theguardian.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[0] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[max-age=60, stale-while-revalidate=6, stale-if-error=864000, private,no-transform] Connection:[keep-alive] Content-Length:[1241171] Content-Security-Policy:[upgrade-insecure-requests; default-src https:; script-src https: 'unsafe-inline' 'unsafe-eval' blob: 'unsafe-inline'; frame-src https: data:; style-src https: 'unsafe-inline'; img-src https: data: blob:; media-src https: data: blob:; font-src 'self' https://assets.guim.co.uk https://pasteup.guim.co.uk https://interactive.guim.co.uk https://dashboard.ophan.co.uk data:; connect-src https: wss: blob:; child-src https: blob:; object-src 'none'; base-uri 'none'] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:12 GMT] Etag:[W/"hash-4082089699072908338"] Feature-Policy:[camera 'none'; microphone 'none'; midi 'none'; geolocation 'none'] Link:[<https://assets.guim.co.uk/polyfill.io/v3/polyfill.min.js?rum=0&features=es6%2Ces7%2Ces2017%2Ces2018%2Ces2019%2Cdefault-3.6%2CHTMLPictureElement%2CIntersectionObserver%2CIntersectionObserverEntry%2CURLSearchParams%2Cfetch%2CNodeList.prototype.forEach%2Cnavigator.sendBeacon%2Cperformance.now%2CPromise.allSettled&flags=gated&callback=guardianPolyfilled&unknown=polyfill&cacheClear=1>; rel=prefetch,<https://assets.guim.co.uk/assets/frameworks.client.web.6b5647f09664a1f0b5f4.js>; rel=prefetch,<https://assets.guim.co.uk/assets/index.client.web.b951e9cd37def3460e83.js>; rel=prefetch,<https://assets.guim.co.uk/commercial/64e2212ea0dfddf4a1b4/graun.standalone.commercial.js>; rel=prefetch,,<https://assets.guim.co.uk/>; rel=preconnect,<https://i.guim.co.uk>; rel=preconnect,<https://j.ophan.co.uk>; rel=preconnect,<https://ophan.theguardian.com>; rel=preconnect,<https://api.nextgen.guardianapps.co.uk>; rel=preconnect,<https://hits-secure.theguardian.com>; rel=preconnect,<https://interactive.guim.co.uk>; rel=preconnect,<https://phar.gu-web.net>; rel=preconnect,<https://static.theguardian.com>; rel=preconnect,<https://support.theguardian.com>; rel=preconnect] Onion-Location:[https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/us] Permissions-Policy:[camera=(), microphone=(), midi=(), geolocation=(), interest-cohort=(), clipboard-read=(), unload=()] Referrer-Policy:[no-referrer-when-downgrade] Set-Cookie:[GU_mvt_id=492311; expires=Sat, 03 Jan 2026 19:32:12 GMT; path=/; domain=.theguardian.com; Secure gu_client_ab_tests=; path=/; max-age=2592000 gu_v2_mvt_id=219; path=/; max-age=2592000 GU_geo_country=US; path=/; Secure] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Gu-Dotcomponents:[true] X-Gu-Edition:[us] X-Gu-Frontend-Git-Commit-Id:[29999cae32786d35cccd60ea63165177c2169312] X-Timer:[S1759692582.757776,VS0,VS0,VE150483] X-Xss-Protection:[1; mode=block]]
```

## joomla.org

```
200 OK
map[Cache-Control:[no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f57f95cbd5878-IAD] Connection:[keep-alive] Content-Security-Policy:[default-src 'self'; script-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com https://*.google-analytics.com https://*.googletagmanager.com https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.joomla.org https://*.pingdom.net https://*.googleapis.com https://*.doubleclick.net https://*.amazon-adsystem.com https://completion.amazon.com; style-src 'self' 'unsafe-inline' https://*.joomla.org https://hcaptcha.com https://*.hcaptcha.com https://fonts.googleapis.com; connect-src 'self' https://*.joomla.org https://hcaptcha.com https://*.hcaptcha.com https://*.pingdom.net https://*.doubleclick.net https://*.google-analytics.com; frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://*.google.com https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com https://www.slideshare.net; font-src 'self' https://fonts.gstatic.com https://*.joomla.org; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com https://*.joomla.org https://*.pingdom.net https://*.doubleclick.net https://*.gstatic.com https://*.google.com https://*.googleapis.com https://img.youtube.com  https://i1.ytimg.com https://i.ytimg.com https://i9.ytimg.com https://s.ytimg.com https://*.amazon-adsystem.com https://*.ssl-images-amazon.com https://*.assoc-amazon.com https://m.media-amazon.com https://opensourcematters.org https://*.opensourcematters.org; media-src 'self' https://*.googlevideo.com; report-uri https://wwwjorg.report-uri.com/r/t/csp/enforce] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:32:12 GMT] Expires:[Wed, 17 Aug 2005 00:00:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:18:23 GMT] Nel:[{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}] Permissions-Policy:[interest-cohort=()] Pragma:[no-cache] Referrer-Policy:[no-referrer-when-downgrade] Report-To:[{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Uj3SrW5IdcuxmDervEczDbRCYkoen4eP%2BQhwyUhQXsQHRrixijTtFYwj9SSKYTQRzHpeQrxs9%2FNiY1pFNt45e1rZwlRBDib8agTvwAs%3D"}]}] Server:[cloudflare] Strict-Transport-Security:[max-age=31536000; includeSubDomains] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Litespeed-Cache:[hit] X-Turbo-Charged-By:[LiteSpeed] X-Xss-Protection:[1; mode=block]]
```

## dan.com

```
200 OK
map[Cache-Control:[s-maxage=15, stale-while-revalidate] Connection:[keep-alive] Content-Length:[123095] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:13 GMT] Etag:["11f21rtbkrs2mtk"] Server:[envoy] Set-Cookie:[traceid=0dcae3ff86cfb3d46c647127be54d415; Max-Age=120; Path=/; Expires=Sun, 05 Oct 2025 19:34:13 GMT fb_sessiontraffic=S_TOUCH=&pathway=9da280dc-bdea-4443-be69-6f2040248890&V_DATE=&pc=0; Path=/; Domain=afternic.com; Expires=Sun, 05 Oct 2025 19:52:13 GMT pathway=9da280dc-bdea-4443-be69-6f2040248890; Path=/; Domain=afternic.com; Expires=Sun, 05 Oct 2025 19:52:13 GMT visitor=vid=9da280dc-bdea-4443-be69-6f2040248890; Path=/; Domain=afternic.com; Expires=Sun, 04 Oct 2026 19:32:13 GMT _policy={"restricted_market":false,"tracking_market":"none"}; Path=/; Domain=afternic.com; Expires=Mon, 05 Oct 2026 19:32:13 GMT market=en-US; expires=Mon, 05-Oct-2026 19:32:13 GMT; path=/; domain=.afternic.com _abck=F376C2F5EBFBF24877E3709F32B65970~-1~YAAQTBAgF/dDi5aZAQAAgTzctQ5q/Lm3XidcFL+jTPFDdxKpwd0SJlbBf8/YG9TLjp48bAl0H6Y/AJuYLqAe2CYHZInXOV4qjMwRaGiZPv4FXzjZCAScTdoCXjMhWrtRNrDPF4dD3yKeH4k9Uvqjm4ZzX0FUp6jPxis4I/Nk7y/dzM2VjUzFubfk/PQ9dFn5OnW6tUcXhjqpuBS8Dfw8BKcNEc6YLYXTC+DGfhR03smta20MHGniFRtcEjSwUC7fkYekVhBdAh5961eKXlU9bUsXI2meAJ9ibW9kj+cvhU8tKaw9KzLPzpNcn0tJP1mgLjcD+QpAOOnjV1a2QVMKV0SCOH4HFzjiDgHahJ9Uq1T69rBjoBGUiv016Y+XMm98bYbKoZA1KDdF0VkqiMLDNZTyZYRUZvsWzC0uUXg1IIoloAvMf/gmubYv43CjREQ0zjv6U5bYekcxWJqzpyz/GIn1Jc9tsw==~-1~-1~-1~-1~-1; Domain=.afternic.com; Path=/; Expires=Mon, 05 Oct 2026 19:32:13 GMT; Max-Age=31536000; Secure bm_sz=6678ECE49AF0C16C76BEF5BF60ADFE13~YAAQTBAgF/hDi5aZAQAAgTzctR0pb3yjzSGZAHDsz2LSIs09F5sYph6/0nS3L9gf0TEPzD6pzFDFJRQvPP3I+uPF/HEs6VF0Nwr+NoICnz2TuK28su++JRX8GbsCCps22iRIn7wzqmeSQAwI1uK8Xv22GXGf7jC2RXB90BXpWa3utvh5J9Bh7N9fjFuZay8DADoxG5jfJA8Ry+SZWSh8I2TIO+oa+gA3Y6Y2MixznntV1VWjhm7EOHKK95sZYgYurZEWQc56uyqDkQiCZ6zZZyW7rw8Asssg5A/HuWd7wGvYxpjGrRS9TV75DwLy0HwNQA2Smupfgw56ro4dullbBKEzDMTTvqEuszLu+/zs~3752257~3162421; Domain=.afternic.com; Path=/; Expires=Sun, 05 Oct 2025 23:32:12 GMT; Max-Age=14399] X-Arc:[2] X-Envoy-Upstream-Service-Time:[15] X-Nextjs-Cache:[STALE] X-Powered-By:[Express]]
```

## java.com

```
403 Forbidden
map[Akamai-Grn:[0.6cc83017.1759692733.b28bf349] Akamai-Request-Bc:[[a=23.48.200.108,b=2995516233,c=g,n=US_VA_ASHBURN,o=20940]] Cache-Control:[max-age=1800] Content-Length:[358] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:32:13 GMT] Expires:[Sun, 05 Oct 2025 20:02:13 GMT] Mime-Version:[1.0] Server:[AkamaiGHost] Server-Timing:[ak_p; desc="1759692733607_389073004_2995516233_18_22411_8_14_-";dur=1]]
```

## sina.com.cn

```
204 No Content
map[Cache-Control:[no-cache] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:16 GMT] Sinawap-Debug:[sinawap-mainpage-online-f585dd8bc-xfhms] X-Custom:[Method is illegal] X-Powered-By:[PHP/7.0.15]]
```

## ads.google.com

```
429 Too Many Requests
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Content-Length:[1103] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:17 GMT]]
```

## www.over-blog.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[253] Cache-Control:[public, s-maxage=3600] Content-Length:[229152] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:28:03 GMT] Referrer-Policy:[no-referrer-when-downgrade] Strict-Transport-Security:[max-age=31536000;preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[DENY] X-Xss-Protection:[1;mode=block]]
```

## code.google.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, must-revalidate] Content-Length:[5418] Content-Security-Policy:[script-src 'nonce-aQr64XBxatPBrCWAeoA1yA' 'report-sample' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline' http: https:; object-src 'none'; report-uri https://csp.withgoogle.com/csp/codesite; base-uri 'none'] Content-Security-Policy-Report-Only:[require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/codesite] Content-Type:[text/html] Cross-Origin-Opener-Policy:[same-origin; report-to="codesite"] Cross-Origin-Resource-Policy:[cross-origin] Date:[Sun, 05 Oct 2025 19:32:17 GMT] Expires:[Fri, 01 Jan 1990 00:00:00 GMT] Last-Modified:[Tue, 17 Sep 2024 06:08:00 GMT] Pragma:[no-cache] Report-To:[{"group":"codesite","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/codesite"}]}] Server:[sffe] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Xss-Protection:[0]]
```

## google.com.tw

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-flNR04Asof7NtrYYgeS2mg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:17 GMT] Expires:[Sun, 05 Oct 2025 19:32:17 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5tgg4T5nPCRZ98YQUSGV88QYhsAMc_NAnTrNPbrzPhpRLlKZxctfw; expires=Fri, 03-Apr-2026 19:32:17 GMT; path=/; domain=.google.com.tw; Secure; HttpOnly; SameSite=lax NID=525=FwLlTMWNOEF32lgC29KLzFffyupU1qis07OiuFXyUXgYmRvcxtOlSNijT_Dr73SVvNvm4dk6l4z6i9VdQb7wP0f9tytF8WEGIx4OdijqMMvUFDkHT1si_2litFgYFihS8WAOBW1cyRpl5UcVeP_lI7_I2oSlFgW1TUKe-BZekfrHNjWWJqMfgUMjiZn5zFDVvWPquYPj2Qyxi3AcwC8U; expires=Mon, 06-Apr-2026 19:32:17 GMT; path=/; domain=.google.com.tw; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## public-api.wordpress.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:22 GMT] Host-Header:[WordPress.com] Link:[<https://wp.me/p2gHKz-pRl>; rel=shortlink] Server:[nginx] Server-Timing:[a8c-cdn, dc;desc=dca, cache;desc=HIT;dur=1.0] Strict-Transport-Security:[max-age=31536000] Vary:[Accept-Encoding accept, content-type, cookie] X-Ac:[4.dca _dca HIT] X-Frame-Options:[SAMEORIGIN] X-Hacker:[Want root?  Visit join.a8c.com/hacker and mention this header.]]
```

## narod.ru

```
200 OK
map[Accept-Ranges:[bytes] Connection:[keep-alive] Content-Length:[2024] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:21 GMT] Etag:["68dbaa72-7e8"] Keep-Alive:[timeout=60] Last-Modified:[Tue, 30 Sep 2025 10:01:22 GMT] Server:[ddos-guard] Set-Cookie:[__ddg8_=i8XYM4i8zYQLKmK5; Domain=.narod.ru; Path=/; Expires=Sun, 05-Oct-2025 19:52:22 GMT __ddg10_=1759692742; Domain=.narod.ru; Path=/; Expires=Sun, 05-Oct-2025 19:52:22 GMT __ddg9_=74.99.95.85; Domain=.narod.ru; Path=/; Expires=Sun, 05-Oct-2025 19:52:22 GMT __ddg1_=UI0wXbAGRKlZ0CgZS9sg; Domain=.narod.ru; HttpOnly; Path=/; Expires=Mon, 05-Oct-2026 19:32:22 GMT]]
```

## bigcommerce.com

```
200 OK
map[Age:[2583] Alt-Svc:[h3=":443"; ma=86400] Bc-Ray:[1] Cache-Control:[public, max-age=0, must-revalidate] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f583b8eb2e5b8-IAD] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' app.makeswift.com] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:23 GMT] Document-Policy:[js-profiling] Referrer-Policy:[no-referrer-when-downgrade] Server:[cloudflare] Set-Cookie:[c_consent=%7B%22anonymousId%22%3A%2208c7fd7f-2455-44cb-8cfc-ac06760ed345%22%2C%22geo%22%3A%7B%22country%22%3A%22United%20States%20of%20America%22%7D%2C%22gpc%22%3Afalse%7D; Path=/; Expires=Mon, 05 Oct 2026 19:32:23 GMT; Domain=bigcommerce.com; SameSite=lax c_user=%7B%22anonymousId%22%3A%2208c7fd7f-2455-44cb-8cfc-ac06760ed345%22%2C%22traits%22%3A%7B%7D%7D; Path=/; Expires=Mon, 05 Oct 2026 19:32:23 GMT; Domain=bigcommerce.com; SameSite=lax ajs_anonymous_id=08c7fd7f-2455-44cb-8cfc-ac06760ed345; Path=/; Expires=Mon, 05 Oct 2026 19:32:23 GMT; Domain=bigcommerce.com; SameSite=lax segmentAnonId=08c7fd7f-2455-44cb-8cfc-ac06760ed345; Path=/; Expires=Mon, 05 Oct 2026 19:32:23 GMT; Domain=bigcommerce.com; SameSite=lax __cf_bm=kB2pBDpP5VkTdwNYNAYIgI1lKj58k03ToIrdrXPSrUE-1759692743-1.0.1.1-85FDh5YzofwDPywdvm4ATrPd_cl2vITcYf.mPTdI9YBtRSrpCHfli4zWLKeeAsyaqIq2TMA9lmgpOEbCQ3baLP99g40VJodO_9KE0MnhpyM; path=/; expires=Sun, 05-Oct-25 20:02:23 GMT; domain=.bigcommerce.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=2592000; includeSubDomains] X-Matched-Path:[/en-US/[[...path]]] X-Powered-By:[Next.js] X-Vercel-Cache:[HIT] X-Vercel-Id:[iad1::iad1::g4rgz-1759692742980-696a59fe8d61]]
```

## howstuffworks.com

```
200 OK
map[Age:[57] Connection:[keep-alive] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:31:26 GMT] Expires:[Sun, 05 Oct 2025 15:41:25 -0400] Server:[nginx] Via:[1.1 347bcc361d70e358fe09ee2d36913dd6.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[aJZGXvv7eY0AquUvQp989iZcQbil6XnVwnVOdokCPel769oI1DCuTw==] X-Amz-Cf-Pop:[JFK52-P6] X-Cache:[Hit from cloudfront]]
```

## justgiving.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[34] Cache-Control:[public, max-age=60] Connection:[keep-alive] Content-Length:[3763] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:28 GMT] Etag:["5ccfba8338195771d8c30ecc05a80b05"] Last-Modified:[Thu, 04 Sep 2025 07:03:10 GMT] Referrer-Policy:[same-origin] Server:[AmazonS3] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Via:[1.1 37033dfd15a7c41505f3b46a193d0f06.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[-G0C2ZB1d6x-27ClN1arSmE2HzpCFLubD5aSLx1uG0M8LgedXam7JA==] X-Amz-Cf-Pop:[JFK50-P15] X-Amz-Server-Side-Encryption:[AES256] X-Amz-Version-Id:[HLLUDBb4iNLpM_1V1IFtjp93EceKHkHM] X-Cache:[Hit from cloudfront] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[1; mode=block]]
```

## www.livejournal.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[0] Cache-Control:[private, proxy-revalidate] Connection:[keep-alive] Content-Md5:[Zhb5ezXyZI54a1VPAzTq5Q] Content-Security-Policy:[default-src 'self' *.livejournal.com *.livejournal.net *.dsp-rambler.ru *.google.com google.com *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru *.tiktok.com tiktok.com *.youtube.com youtube.com; script-src 'self' *.livejournal.com *.livejournal.net *.24smi.net *.adfox.ru *.adlooxtracking.com adlooxtracking.com *.adlooxtracking.ru adlooxtracking.ru ad.mail.ru api.giphy.com bs.serving-sys.ru cdn.ampproject.org cdn.jsdelivr.net cdnjs.smi2.ru *.cdn-vk.ru content.adriver.ru *.criteo.com *.criteo.net *.doubleclick.net *.dropbox.com dsp-rambler.ru *.dsp-rambler.ru embed.bsky.app *.exelator.com *.facebook.com *.facebook.net gist.github.com googleads.g.doubleclick.net *.google-analytics.com *.googleapis.com *.google.com google.com *.google.ru *.googlesyndication.com *.googletagmanager.com googletagmanager.com *.googletagservices.com *.gstatic.com *.instagram.com js.mamydirect.com *.lj.ru mc.yandex.com mc.yandex.ru *.newrelic.com *.nr-data.net *.ok.ru openstat.net pingback.giphy.com *.pingdom.com *.pingdom.net *.pinterest.com *.plista.com privacy-cs.mail.ru *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru rb.infox.sg r.mradx.net *.rnet.plus *.rubiconproject.com r.webturn.ru *.scorecardresearch.com sdk.canva.com *.services.livejournal.com smi2.ru ssl.p.jwpcdn.com static.smi2cdn.ru static.smi2.net static.xx.fbcdn.net stat.media telegram.org tiktokcdn-us.com *.tiktok.com tiktok.com tns-counter.ru *.top100.ru top-fwz1.mail.ru tpc.googlesyndication.com *.ttwstatic.com twemoji.maxcdn.com *.twimg.com *.twitter.com *.videos.livejournal.com vk.com *.vk.com vk.ru *.vk.ru *.weborama.fm weborama.fm *.weborama.fr weborama.fr *.weborama.ru weborama.ru *.weborama-tech.ru weborama-tech.ru *.webturn.ru *.webvisor.org *.yahooapis.com *.yandex.ru yandex.ru yastatic.net ymetrica.com *.youtube.com youtube.com z.moatads.com 'unsafe-inline' 'unsafe-eval'; style-src http: https: data: 'unsafe-inline'; img-src blob: http: https: data:; frame-src http: https:; font-src http: https: data:; connect-src 'self' *.livejournal.com *.livejournal.net ad.adriver.ru ad.mail.ru *.ad-tech.ru api.giphy.com bs.serving-sys.ru cdn.ampproject.org *.criteo.com csi.gstatic.com data00.adlooxtracking.com dsp-rambler.ru *.dsp-rambler.ru *.eaglecdn.com export-download.canva.com sdk.canva.com *.g.doubleclick.net googleads.g.doubleclick.net *.google-analytics.com *.googleapis.com *.google.com google.com *.googletagmanager.com googletagmanager.com graph.facebook.com gstatic.com *.lj.ru lj.stat.eagleplatform.com mc.yandex.by mc.yandex.com mc.yandex.md mc.yandex.ru pingback.giphy.com *.pingdom.net privacy-cs.mail.ru *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru rb.infox.sg *.rnet.plus *.services.livejournal.com *.ssp.rambler.ru ssp.rambler.ru static-mon.yandex.net static.xx.fbcdn.net stat.media stats.g.doubleclick.net smi2.net smi2.ru sve.online.sberbank.ru *.tiktok.com tiktok.com top-fwz1.mail.ru *.twitter.com *.webturn.ru *.webvisor.org wss://www.livejournal.com yandexmetrica.com yandexmetrica.com:29010 yandexmetrica.com:30103 *.yandex.net *.yandex.ru yandex.ru yastatic.net ymetrica1.com ymetrica.com *.youtube.com youtube.com; report-uri https://www.livejournal.com/csp_reports; report-to livejournal; media-src http: https: blob: data: storage.mds.yandex.net; frame-ancestors 'self'; worker-src 'self' blob:; object-src 'self' blob: *.livejournal.net youtube.com *.youtube.com; child-src 'self' blob:;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:29 GMT] Etag:[GgZzW/Zhb5ezXyZI54a1VPAzTq5Q] Keep-Alive:[timeout=50] P3p:[CP="NON DSP NID ADMa DEVa TAIa PSAa PSDa OUR IND UNI COM NAV"] Permissions-Policy:[browsing-topics=()] Referrer-Policy:[no-referrer-when-downgrade] Reporting-Endpoints:[livejournal="https://www.livejournal.com/csp_reports"] Server:[nginx] Set-Cookie:[luid=URNKAGjix81av8nvpR16AgB=; expires=Thu, 31-Dec-37 23:55:55 GMT; domain=.livejournal.com; path=/; secure; samesite=none] Vary:[Accept-Encoding,ETag] X-Aws-Id:[kr-ws12] X-Lj-Flow-Id:[aOLHzNhUbPsVF15dQ8DOwgAAABk] X-Splittest:[none] X-Varnish:[859965482] X-Vws-Id:[3dt-varn02.lj.rambler.tech]]
```

## weather.com

```
200 OK
map[Access-Control-Allow-Credentials:[false] Access-Control-Allow-Headers:[*] Access-Control-Allow-Methods:[GET,POST,OPTIONS] Access-Control-Allow-Origin:[*] Access-Control-Max-Age:[86400] Akamai-Grn:[0.05643017.1759692749.3943adaa] Cache-Control:[max-age=0, no-cache] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:29 GMT] Etag:["17faa9-4eVyKd2eXsPb8Pma65PEIX5fM3k"] Expires:[Sun, 05 Oct 2025 19:32:29 GMT] Pragma:[no-cache] Property-Id:[TWC-WX-Prod] Set-Cookie:[ci=TWC-Locale-Group=US&TWC-Device-Class=mobile&X-Origin-Hint=PROD-AWS-Daybreak-home&TWC-Network-Type=wifi&TWC-GeoIP-Country=US&TWC-GeoIP-Lat=36.7522&TWC-GeoIP-Long=-76.2168&TWC-Privacy=usa-va&TWC-GeoIP-DMA=544&TWC-GeoIP-City=CHESAPEAKE&TWC-GeoIP-Region=VA; path=/; domain=.weather.com; secure gbuuid=e5896f0e-ca9c-4fd6-beb8-2ecbc38f83b3; Expires=Tue, 04 Nov 2025 19:32:29 GMT; Domain=.weather.com; Path=/ ] Strict-Transport-Security:[max-age=15552000; preload] Twc-Ak-Req-Id:[3943adaa] Twc-Device-Class:[mobile] Twc-Experiment:[e30=] Twc-Geoip-City:[CHESAPEAKE] Twc-Geoip-Country:[US] Twc-Geoip-Dma:[544] Twc-Geoip-Latlong:[36.7522,-76.2168] Twc-Geoip-Region:[VA] Twc-Locale-Group:[US] Twc-Path-Locale:[/] Twc-Privacy:[usa-va] Twc-Subs:[none] Twc-Unit:[u] Webcakes-App-Name:[daybreak-home] Webcakes-App-Version:[1.0.0-937cf4493b] Webcakes-Region:[us-east-2] X-Content-Type-Options:[nosniff] X-Dns-Prefetch-Control:[off] X-Download-Options:[noopen] X-Frame-Options:[SAMEORIGIN] X-In-Ew-Prod:[True] X-Lma:[PS] X-Origin-Hint:[PROD-AWS-Daybreak-home] X-Xss-Protection:[1; mode=block]]
```

## themeforest.net

```
200 OK
map[Age:[1534] Cache-Control:[max-age=1800, public, stale-while-revalidate=300, stale-if-error=28800] Cf-Cache-Status:[HIT] Cf-Ray:[989f5864aee8703c-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:29 GMT] Etag:[W/"36b3709e8d58597f2367938b91dffa1b"] Link:[<https://assets.market-storefront.envato-static.com/storefront/assets/styles-6c9e4c66b95218621e92b7dde84114b72086b294d927dc693bc5ab27f5f14fae.css>; rel=preload; as=style; type=text/css,<https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/search-header-05971474482f1a21d041838addc1f022fa748078e6e4d40f6f728e743231b234.webp>; rel=preload; as=image; type=image/webp,<https://assets.market-storefront.envato-static.com/storefront/assets/logos/themeforest-dd57a83e1947d49586491f03d1c3eedc4c6a438d2740328c5277e6b67bc46ad9.webp>; rel=preload; as=image; type=image/webp,<https://assets.market-storefront.envato-static.com/storefront/assets/styles-6c9e4c66b95218621e92b7dde84114b72086b294d927dc693bc5ab27f5f14fae.css>; rel=preload; as=style; nopush,<https://assets.market-storefront.envato-static.com/storefront/assets/datadog-63af54d672d0e3f0dca938d8e51990edb7cd6b1287f2aee19557c5af87f6a7c3.js>; rel=preload; as=script; crossorigin=anonymous; nopush] Referrer-Policy:[strict-origin-when-cross-origin] Server:[cloudflare] Set-Cookie:[__cf_bm=WVOHlqYN0nfjV8OY6d7TNYQvucE.9dThK4.VjlIOiDI-1759692749-1.0.1.1-8UEeOXkyC4HVBhZyjSny8aNYnCmezuWPPI9ZsbYolxBj6x1gJlTRCgQiPMOvP7bEK9D9gjfdaFmRH7shPtjc37y67wJDwVa3O.DGV.pZm28; path=/; expires=Sun, 05-Oct-25 20:02:29 GMT; domain=.themeforest.net; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=31536000] X-Content-Digest:[7118b84b809bd8a3ea0c23c7e188c067a598f6dd] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Permitted-Cross-Domain-Policies:[none] X-Rack-Cache:[fresh] X-Request-Id:[83ba9e96-3496-4a63-809f-5235c015270d] X-Runtime:[0.209931] X-Xss-Protection:[0]]
```

## bestfreecams.club

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f5865ddc50805-IAD] Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:32:29 GMT] Last-Modified:[Sun, 17 Jan 2021 11:50:09 GMT] Nel:[{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}] Report-To:[{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OQ0MW6DLrwMsUeR7L1E%2F1Xf7NTYUQA1Jf3P4JgdAH%2Fy9GHxg3uM0QlS2VPMoglYDv2MlCj0k67tawYED%2B3g4sS7r9raKizxMHkxBnKFLHGrh0VamTA%3D%3D"}]}] Server:[cloudflare] X-Amz-Id-2:[f/Ul4c/+8HeyLpihFzxNwHX32w6t8Yirxu/kGpZk2KpKdKnxXEAAQJUNYgXl2G36YwQyI77VCfwHrj2FIdnxMnThq3vThHwu] X-Amz-Request-Id:[4DDRP7J0GXGWEZR9]]
```

## scmp.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[public, max-age=5, stale-while-revalidate=3600] Cf-Cache-Status:[HIT] Cf-Ray:[989f586709f80809-IAD] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'none'] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:29 GMT] Last-Modified:[Sun, 05 Oct 2025 19:31:22 GMT] Server:[cloudflare] Set-Cookie:[__cf_bm=fR99T1lNWNeho0VvVXP8oOfMH8LtQaY2xuKN2VmH0aE-1759692749-1.0.1.1-k01rO4rxEmyTqvhWnCR8u96gAn6J8HQbKYOCDczpBLRU812zkzpgk72j_F.BVWuDmtVAd8NELHoW7WFVCV3PuVVpjqOWIJ9N2nMjvpZ6jgA; path=/; expires=Sun, 05-Oct-25 20:02:29 GMT; domain=.scmp.com; HttpOnly; Secure; SameSite=None] Vary:[Accept-Encoding] X-Cache-Control:[public, max-age=60, stale-while-revalidate=3600] X-Cached-By:[production-varnish-scmp-pwa-v2-6479c54978-jrfqg] X-Content-Encoding:[br] X-Hits:[1] X-Url:[/]]
```

## techcrunch.com

```
200 OK
map[Accept-Ranges:[bytes] Access-Control-Allow-Methods:[*] Access-Control-Allow-Origin:[https://techcrunch.com] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[default-src 'self' *.techcrunch.com; frame-ancestors 'self'; frame-src 'self' https: data:; style-src 'self' 'unsafe-inline' *; img-src 'self' * data:; connect-src 'self' https:; object-src 'none'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; worker-src 'self' blob:; media-src 'self' *.youtube.com *.jetpackdigital.com; font-src 'self' * data:; upgrade-insecure-requests; block-all-mixed-content; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:35 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://techcrunch.com/wp-json/>; rel="https://api.w.org/"] Permissions-Policy:[autoplay=(), camera=(), fullscreen=*, geolocation=*, display-capture=(self), microphone=()] Referrer-Policy:[no-referrer-when-downgrade] Server:[nginx] Strict-Transport-Security:[max-age=300;includeSubdomains] Vary:[Accept-Encoding, Origin] X-Cache:[HIT] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca8 181 249 80]]
```

## gizmodo.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache, no-store, must-revalidate] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f58870d94ef66-IAD] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests; frame-ancestors 'self'] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:32:35 GMT] Last-Modified:[Sun, 05 Oct 2025 19:20:00 GMT] Nel:[{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}] Permissions-Policy:[autoplay=(*), fullscreen=(*), accelerometer=(*), geolocation=(*)] Referrer-Policy:[no-referrer-when-downgrade] Report-To:[{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gJR9GjJZlCJWbcLHJfwDA38UjFtU78mhWrszRQ%2F7IUroC9ttQJuJIgFVx51NhvrB85w6iD%2FtvPd2nAvH8Fcc5NxonBCNwv3p"}]}] Server:[cloudflare] Server-Timing:[cfCacheStatus;desc="DYNAMIC" cfEdge;dur=3,cfOrigin;dur=6] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] Vary:[Accept-Encoding, Cookie] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Rocket-Nginx-Serving-Static:[Yes]]
```

## metro.co.uk

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:35 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://metro.co.uk/wp-json/>; rel="https://api.w.org/"] Server:[nginx] Strict-Transport-Security:[max-age=31536000] Vary:[Accept-Encoding] X-Cache:[MISS] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca5 0 10 9980]]
```

## indiatimes.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[max-age=465] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' *.indiatimes.com] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:35 GMT] Expires:[Sun, 05 Oct 2025 19:40:20 GMT] Geo-Info:[Country:US;Continent:NA] Permissions-Policy:[ch-ua=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-model=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-mobile=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-platform=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com"), ch-ua-platform-version=(self "https://ase.clmbtech.com" "https://ade.clmbtech.com")] Server:[Bhoot] Strict-Transport-Security:[max-age=25920000; includeSubdomains] X-Content-Header:[gzip] X-Frame-Options:[sameorigin] X-Xss-Protection:[1; mode=block]]
```

## tinyurl.com

```
503 Service Unavailable
map[Alt-Svc:[h3=":443"; ma=86400] Cf-Cache-Status:[DYNAMIC] Cf-Ray:[989f58aadd2d597a-IAD] Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:32:40 GMT] Server:[cloudflare] Set-Cookie:[__cf_bm=bBusNGRLLWGEJbs7vk1diJBlprKKa1juk53YaWYibp8-1759692760-1.0.1.1-bSCGLvjIL_c2Ouf8AOpLNsfn6Fu11ELA8hHsyIldVJU_tRRK8FCZu7UjKh3vgnmy81.wFQJns8kIqjVhfUkmu9br3xZRhkHerhSUMz5gYoo; path=/; expires=Sun, 05-Oct-25 20:02:40 GMT; domain=.tinyurl.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload]]
```

## amazon.es

```
405 Method Not Allowed
map[Allow:[GET, POST, PUT, DELETE, OPTIONS] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[0] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:41 GMT] Expires:[-1] Pragma:[no-cache] Server:[Server] Set-Cookie:[session-id=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:32:41 GMT session-id-time=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:32:41 GMT session-token=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:32:41 GMT ubid-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:32:41 GMT at-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:32:41 GMT lc-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:32:41 GMT x-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:32:41 GMT x-wl-uid=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:32:41 GMT sess-at-acbes=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:32:41 GMT UserPref=-; path=/; domain=.www.amazon.es; expires=Sat, 05-Oct-2013 19:32:41 GMT] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent,Content-Type,X-Amazon-Wtm-Tag-OPF-ES-ENV-VAR-LRA-SEARCH,X-Amazon-Wtm-Tag-OPF-ES-ENV-VAR-LRA,X-Amazon-Wtm-Tag-OPF-ES-ENV-VAR-DP-LRA,Accept-Encoding,User-Agent] Via:[1.1 000a463d8b8776d3a29c30db441ca64e.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[SnKKMdNsh-R2nCkm2UeEvnJ9FW0wNon1xlWc64vlkPaA6RtKiYqh6Q==] X-Amz-Cf-Pop:[IAD61-P7] X-Amz-Rid:[YKHS55879EG5XP71TV7G] X-Cache:[Error from cloudfront] X-Frame-Options:[SAMEORIGIN]]
```

## smh.com.au

```
200 OK
map[Accept-Ch:[sec-ch-ua-model,sec-ch-ua-platform-version] Accept-Ranges:[bytes] Age:[9] Cache-Control:[public, max-age=20, no-transform] Connection:[keep-alive] Content-Length:[1198008] Content-Security-Policy:[frame-ancestors 'self' *.ffxblue.com.au *.ffx.io *.smh.com.au *.theage.com.au *.brisbanetimes.com.au *.watoday.com.au *.cdn.ampproject.org *.platform.ink; upgrade-insecure-requests] Content-Security-Policy-Report-Only:[child-src blob: data: https:; connect-src https: wss:; default-src blob: data: https: 'report-sample' 'unsafe-eval' 'unsafe-inline'; font-src data: https:; form-action https:; frame-src data: https:; img-src blob: data: https:; media-src blob: data: https:; object-src https:; script-src https: 'unsafe-eval' 'unsafe-inline'; style-src https: 'unsafe-inline'; report-uri https://csp.ffx.io/; report-to csp-endpoint] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:41 GMT] Permissions-Policy:[camera=(), geolocation=(), microphone=()] Referrer-Policy:[no-referrer-when-downgrade] Report-To:[{"endpoints":[{"url":"https://csp.ffx.io/"}],"group":"csp-endpoint","include_subdomains":true,"max_age":7884000}] Strict-Transport-Security:[max-age=31536000] Uber-Trace-Id:[426fd96cccb53d58:426fd96cccb53d58:0:0] Vary:[Accept-Encoding, app-vary, app-vary] Via:[1.1 varnish, 1.1 varnish] X-Brand-Short-Name:[smh] X-Cache:[MISS, HIT, HIT] X-Cache-Hits:[0, 6, 1] X-Content-Type-Options:[nosniff] X-Frame-Options:[sameorigin] X-Render-Name:[rw] X-Served-By:[cache-syd10125-SYD, cache-syd10173-SYD, cache-iad-kiad7000162-IAD] X-Varnish-Grace:[normal hit] X-Xss-Protection:[0]]
```

## zendesk.com

```
200 OK
map[Age:[292] Cache-Control:[public, max-age=3600] Cf-Cache-Status:[HIT] Cf-Ray:[989f58b16a3dc96b-IAD] Connection:[keep-alive] Content-Security-Policy:[default-src * wss://*.zopim.com 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' app.optimizely.com *.zendesk.com *.zendesk.co.jp *.zendesk.co.uk *.zendesk.com.br *.zendesk.com.mx *.zendesk.de *.zendesk.es *.zendesk.fr *.zendesk.kr *.zendesk.nl *.zendesk.tw *.zendesk.hk; font-src * data:; img-src * data:; media-src * blob:;worker-src 'self' blob:] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:41 GMT] Expires:[Sun, 05 Oct 2025 20:32:41 GMT] Last-Modified:[Sun, 05 Oct 2025 19:27:49 GMT] Link:[<https://web-assets.zendesk.com>; rel=preconnect, </scripts/adobe-websdk.js>; rel=preload; as=script] Nc:[T] Server:[cloudflare] Set-Cookie:[__cf_bm=UpIPVnAXuztm7xpBEP1T3HUpKTgNK6ZI5Rkq8wjbAk0-1759692761-1.0.1.1-n4m9AoPGeaeNMquCpJJJuK9mCU_n5tq8qEYmXOrW06NUjbrrGjIlJJZ4PUrqUzWKUkrXOqEQlLJb4nfSugI0qLvNkbMEMmo4bvHWhJyPlsY; path=/; expires=Sun, 05-Oct-25 20:02:41 GMT; domain=.www.zendesk.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=0; preload] X-Content-Type-Options:[nosniff]]
```

## gravatar.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache, must-revalidate, max-age=0] Connection:[keep-alive] Content-Language:[en] Content-Security-Policy:[default-src gravatar.com *.gravatar.com; script-src gravatar.com *.gravatar.com *.wp.com *.google-analytics.com *.googletagmanager.com *.facebook.net apis.google.com/js/ 'nonce-5aeac86c2be2' 'nonce-ef497722175b' telegram.org/js/; style-src 'self' gravatar.com *.gravatar.com *.wp.com fonts.googleapis.com 'nonce-ef497722175b' 'nonce-d77537ad45f5' 'sha256-NE3gBSsVG0IdyINKOXv7oHDjOD1hoJpOCZQDS8LzvUc=' 'sha256-biLFinpqYMtWHmXfkA1BPeCY0/fNt46SAZ+BBk5YUog=' 'sha256-ONA8DqqhBTsIrZzU3/jZyRdkNkkAGEU74EH252dbGS8=' 'sha256-uYx4ryugsGdahnaIId0IhtdPIgBkKBfNZg2/H0eWhqk=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-xi7Iu5TcqJkb4mlu0FHpAYfWWCETn5kNH3GPA4Coh4M=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-YrOy05n87EW8L5yLZin6THAZq/8Vb6v4uqVq1nOY9X8=' 'sha256-Fw2RK+YpRih15zbXuAaoQAV98ZS+OLAX6wDQ2AkaEho=' 'sha256-t9/679CRyrVA6r3JGaAzcO+diam/7WLn6KXJHJuOzUI=' 'sha256-h0RPO0+/L+WC46JS6RvM6D3KN9C2LfMai6hxwzVFU2k=' 'sha256-YIktaUP7IBRwVksGEOmRykAcO2jHTw97BHns4OnHTIw=' 'sha256-MSTZvl0psO46WYZImeDzGMr7OqGRUy5RPDaeL19QpBk='; font-src data: gravatar.com *.gravatar.com *.wp.com fonts.gstatic.com; img-src data: https: blob:; media-src https://videos.files.wordpress.com/ s.gravatar.com blob:; frame-src gravatar.com *.gravatar.com automattic.crowdsignal.net widgets.wp.com td.doubleclick.net www.googletagmanager.com oauth.telegram.org; connect-src gravatar.com *.gravatar.com *.wp.com data: blob: *.google-analytics.com *.analytics.google.com analytics.google.com googleadservices.com www.googleadservices.com google.com https://public-api.wordpress.com/ *.pexels.com *.giphy.com *.google.com stats.g.doubleclick.net; object-src 'none'; base-uri 'self'; report-uri https://public-api.wordpress.com/csp/; worker-src 'self' blob:;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:47 GMT] Expires:[Wed, 11 Jan 1984 05:00:00 GMT] P3p:[CP="CAO PSA"] Server:[nginx] Strict-Transport-Security:[max-age=31536000; includeSubdomains; preload] Vary:[Accept-Encoding] X-Frame-Options:[SAMEORIGIN]]
```

## googleblog.com

```
200 OK
map[Access-Control-Allow-Origin:[*] Content-Language:[en-us] Content-Length:[0] Content-Security-Policy:[script-src 'self' 'strict-dynamic' 'unsafe-inline' *.googleanalytics.com *.google-analytics.com *.youtube.com youtube.com optimize.google.com https://s.ytimg.com *.googletagmanager.com storage.googleapis.com *.googleapis.com *.google.com cdn.ampproject.org *.gstatic.com gstatic.com googleadservices.com *.googleadservices.com 'sha256-hdPneczWRi+c9LQVo+PzNzlNr9TacChC0CW0fiDBHkI=' 'sha256-DE/j4w1a1HDIXysWgFTrJCJK6JWEcHqScfyMr9zq9R4=' 'sha256-Ehy9lGqrTi8OqqWxX1HN6hKJT7iwwYMFJ+HLjpEobO0=' 'sha256-s/yvuH0ZHyO+7N8dM5CshPem4K1PknDExYN18xHq0LI=' 'sha256-MWQdkIAX5J//suH1t5P3PFFwFUiphY0PxD6VVzbBehQ=' 'sha256-587vJAV9t9k86IMQixmyKa7lbPaDhkGzrJsdngtoiAA=' 'sha256-nlbIOie3vmdUUZjQFDMa7iipxS6Qst8pPhTLjibMsRk=' 'sha256-+LJ+tgqOXIri3+D/uJC785tov3eXewv8x+Pkenx+3Z8=' 'sha256-PnD9J8UK8zpwVizQXkEtbZOvTiv9C/05Nn81NEwPBoQ=' 'sha256-LH1mE8uiAlSGs6/ejmL47sTk8G+/Hh6T1ydVxa0idaM=' 'sha256-GuPeLJgWIkkS7hCKcSc+mQs6jTN0D8QzfW624B4OMME=' 'sha256-CDqe41szG4ZmAxS54wSNKisRTrwu1wxcuRQv09PB3Nk=' 'sha256-Xyk5Ei/Yh7DuZgaxNfbPswkpmMKHk5Jy18vkxjfPMj0=' 'sha256-Q+8W9SyZ6wnayM05rLv0YuHooUH/nnzpE2XQZJ/ekjY=' 'sha256-1lOrojGb+aoV56bZpsODLpb+j+HHbONNEpX/YqVtiUU=' 'sha256-sAsQphoZozaLVFpcda3bvT5euqcGL4MqVnizAR+Xla4=' 'sha256-ZlqdbaXB1F4Evuv/nmY3QGBLFBbrfiNndyYxbgdQn7g=' 'sha256-OEwIbDcQTxJYhU2ONmKA0LutIDdkmge2c+9IPFv5vFE='; frame-src 'self' www.google.com *.youtube.com youtube.com accounts.google.com *.doubleclick.net apis.google.com optimize.google.com *.google.com *.cdn.ampproject.org https://www.gstatic.com/ https://www.youtube-nocookie.com/; img-src * data: blob:; object-src 'none'; require-trusted-types-for 'script'; style-src 'self' 'unsafe-inline' fonts.googleapis.com *.gstatic.com storage.googleapis.com *.google.com cdn.ampproject.org; connect-src 'self' cdn.ampproject.org *.google.com storage.googleapis.com https://services.google.com/fb/submissions/thekeywordtest/ https://services.google.com/fb/submissions/0a65d7733e1f11ea9701614fc033d30c/ *.gstatic.com gstatic.com *.cdn.ampproject.org *.doubleclick.net https://readaloud.googleapis.com/ *.google-analytics.com https://www.youtube.com/; default-src 'self' *.gstatic.com storage.googleapis.com; media-src 'self' data: *.gstatic.com storage.googleapis.com *.googlevideo.com; font-src 'self' themes.googleusercontent.com *.gstatic.com https://fonts.gstatic.com storage.googleapis.com fonts.googleapis.com *.cdn.ampproject.org; base-uri 'none'] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:47 GMT] Server:[Google Frontend] X-Cloud-Trace-Context:[bbff918063f5f28a1ce51f9e1bf07f83]]
```

## uol.com.br

```
200 OK
map[Cache-Control:[no-transform, max-age=10, must-revalidate, proxy-revalidate] Connection:[keep-alive] Content-Length:[787422] Content-Security-Policy:[frame-ancestors 'self' *.intranet *.uolinc.com;] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:48 GMT] Etag:["a6ae1135ee5113465be146f2bfd77e57"] Expires:[Sun, 05 Oct 2025 19:32:58 GMT] Last-Modified:[Sun, 05 Oct 2025 19:32:43 GMT] Referrer-Policy:[no-referrer-when-downgrade] Server:[marrakesh 1.25.0] Strict-Transport-Security:[max-age=31536000; includeSubDomains] Vary:[Accept-Encoding,User-Agent] Via:[1.1 153c5cd2b3e635613d0a2fa0f107993a.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[Vv_bnYBiFvJNr9MAYh8-CcOfpLi-S-e-n-rxfemqtQ6HRdkCVSpcHQ==] X-Amz-Cf-Pop:[JFK50-P3] X-Cache:[Miss from cloudfront]]
```

## disney.com

```
403 Forbidden
map[Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[max-age=0] Content-Length:[368] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:32:49 GMT] Expires:[Sun, 05 Oct 2025 19:32:49 GMT] Mime-Version:[1.0] Server:[AkamaiGHost] X-Origin:[Matterhorn_TLS]]
```

## taringa.net

```
200 OK
map[Accept-Ranges:[bytes] Age:[42919] Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Length:[5524] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 07:37:31 GMT] Etag:["dad326e0c72e97f50d1f97bd43485350"] Last-Modified:[Thu, 10 Oct 2024 14:30:42 GMT] Server:[AmazonS3] Via:[1.1 2af44885a7fc4faf5a3444e606d6c02c.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[cuEcVJCADRHxGORweUIvny1s6I-qGWPqZbi48WnQHzcvt19honLeMQ==] X-Amz-Cf-Pop:[IAD61-P10] X-Amz-Server-Side-Encryption:[aws:kms] X-Amz-Server-Side-Encryption-Aws-Kms-Key-Id:[arn:aws:kms:us-east-1:746669208358:key/e6ff8e56-eef8-4594-92b3-60c63580f79c] X-Amz-Server-Side-Encryption-Bucket-Key-Enabled:[true] X-Cache:[Hit from cloudfront]]
```

## sky.com

```
200 OK
map[Cache-Control:[max-age=0, no-cache, no-store] Connection:[keep-alive] Content-Security-Policy:[default-src 'none';  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.awin1.com *.bskyb.com *.clicktale.net *.contentsquare.com *.contentsquare.net *.demdex.net *.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.googletagmanager.com *.intercom.io *.intercomcdn.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.lucidcx.com *.medallia.eu *.optimizely.com *.paa-reporting-advertising.amazon *.qualtrics.com *.redditstatic.com *.sky.com *.skyassets.com *.snapchat.com *.stripe.com *.taggstar.com *.tvsquared.com *.yext-pixel.com *.yimg.com *.zenaps.com aax-eu.amazon-adsystem.com acdn.adnxs.com analytics.tiktok.com analytics.twitter.com android-webview-video-poster: answers2-embed.sky.com.pagescdn.com api.branch.io api2.branch.io app.link assets.adobedtm.com assets.sitescdn.net bat.bing.com britishskybroadcasti.tt.omtrdc.net c.amazon-adsystem.com c5.adalyser.com cdn-assets-prod.s3.amazonaws.com cdn.branch.io cdn.co-buying.com cdn.privacy-mgmt.com cdn.spatialbuzz.com cdn.tt.omtrdc.net cdnjs.cloudflare.com connect.facebook.net content.zeotap.com edge.adobedc.net https://cdn.prod.uidapi.com https://js.adsrvr.org ib.adnxs.com js-cdn.dynatrace.com js.smct.co js.smct.io lantern.roeyecdn.com maps.googleapis.com platform.twitter.com players.brightcove.net rules.quantcount.com s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com secure.quantserve.com servedby.flashtalking.com sky.likewizesupport.com skycustomer.likewizesupport.com smct.co smct.io static.ads-twitter.com tagmanager.google.com the.sciencebehindecommerce.com unpkg.com vjs.zencdn.net www.dwin1.com www.facebook.com www.googleadservices.com www.gstatic.com yahoo.com;  style-src 'self' 'unsafe-inline' *.clicktale.net *.contentsquare.net *.doubleclick.net *.googlesyndication.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.medallia.eu *.sky.com *.skyassets.com assets.adobedtm.com assets.sitescdn.net fonts.googleapis.com players.brightcove.net s0.2mdn.net sky.likewizesupport.com sky.lucidcx.com skycustomer.likewizesupport.com tagmanager.google.com www.facebook.com www.googletagmanager.com www.gstatic.com;  font-src 'self' data: *.google.co.uk *.google.com *.google.ie *.intercomcdn.com *.kampyle.com *.medallia.eu *.sky.com *.skyassets.com *.snapchat.com fonts.gstatic.com fonts.smct.co fonts.smct.io players.brightcove.net sky.likewizesupport.com sky.lucidcx.com skycustomer.likewizesupport.com use.typekit.net www.pinterest.com;  img-src 'self' android-webview-video-poster: data: *.akamaihd.net *.atdmt.com *.awin1.com *.boltdns.net *.brightcove.com *.brightcovecdn.com *.clicktale.net *.cloudfront.net *.contentsquare.net *.contentstack.io *.demdex.net *.doubleclick.net *.g.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.googletagmanager.com *.gumgum.com *.intercom.io *.intercomassets.com *.intercomassets.eu *.intercomcdn.com *.intercomcdn.eu *.kampyle.com *.liveperson.net *.lpsnmedia.net *.lucidcx.com *.medallia.eu *.mktgcdn.com *.online-metrix.net *.optimizely.com *.qualtrics.com *.reddit.com *.sky *.sky.com *.skyassets.com *.snapchat.com *.tvsquared.com *.yahoo.com *.yext-pixel.com *.zenaps.com 8th.io aax-eu.amazon-adsystem.com acdn.adnxs.com ad.doubleclick.net ade.googlesyndication.com adservice.google.com analytics.tiktok.com analytics.twitter.com api.branch.io api2.branch.io app.link assets.adobedtm.com bat.bing.com c.amazon-adsystem.com c5.adalyser.com cdn.branch.io cdn.privacy-mgmt.com cdn.smct.co cdn.smct.io cdn.spatialbuzz.com cms.quantserve.com connect.facebook.net ct.pinterest.com dmp.v.fwmrm.net ep.smct.co ep.smct.io events.smct.co ib.adnxs.com lantern.roeye.com live.staticflickr.com maps.googleapis.com maps.gstatic.com match.adsrvr.org mwzeom.zeotap.com pixel.quantserve.com players.brightcove.net pm.w55c.net px.smct.co px.smct.io s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com servedby.flashtalking.com sky.likewizesupport.com skycustomer.likewizesupport.com smct.co smct.io ssl.gstatic.com t.co tags.w55c.net tracking.audio.thisisdax.com www.facebook.com www.googleadservices.com www.gstatic.com www.pinterest.com;  connect-src 'self' android-webview-video-poster: blob: *.akamaihd.net *.akstat.io *.analytics.google.com *.assistant.watson.appdomain.cloud *.bf.dynatrace.com *.boltdns.net *.brightcovecdn.com *.bskyb.com *.clicktale.net *.contentsquare.net *.contentstack.io *.demdex.net *.doubleclick.net *.g.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.googletagmanager.com *.intercom.io *.intercomcdn.com *.intercomcdn.eu *.intercomusercontent.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.lucidcx.com *.medallia.eu *.optimizely.com *.paa-reporting-advertising.amazon *.qualtrics.com *.reddit.com *.redditstatic.com *.sky.com *.skyassets.com *.snapchat.com *.taggstar.com *.tvsquared.com *.wepowerconnections.com *.yext-pixel.com *.yext.com *.yextapis.com *.yimg.com aax-eu.amazon-adsystem.com acdn.adnxs.com ad.doubleclick.net analytics.tiktok.com api.amplitude.com api.amplitude.com api.branch.io api.iperceptions.com api.taggstar.com api2.branch.io app.link assets.adobedtm.com awk.epgsky.com bat.bing.com britishskybroadcasti.tt.omtrdc.net c.amazon-adsystem.com cdn-assets-prod.s3.amazonaws.com cdn.branch.io cdn.privacy-mgmt.com cdn.spatialbuzz.com cdn.taggstar.com cfg.smct.co cfg.smct.io cognito-identity.eu-west-1.amazonaws.com connect.facebook.net ct.pinterest.com dmp.v.fwmrm.net edge.adobedc.net edge.api.brightcove.com ep.smct.co ep.smct.io faro-collector-prod-eu-west-0.grafana.net firehose.eu-west-1.amazonaws.com https://*.google.com https://*.prod.uidapi.com https://prod.uidapi.com ib.adnxs.com insight.adsrvr.org ipb.smct.co ipb.smct.io ipl.smct.co ipl.smct.io js.smct.co js.smct.io maps.googleapis.com match.adsrvr.org mwzeom.zeotap.com paa-reporting-advertising.amazon pagead2.googlesyndication.com players.brightcove.net pm.w55c.net poc.idscan.cloud prod.idscan.cloud qa.taggstar.com s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com sky.likewizesupport.com skycustomer.likewizesupport.com smct.co smct.io spl.zeotap.com the.sciencebehindecommerce.com vip.timezonedb.com wss://*.liveperson.net wss://*.sky.com www.facebook.com www.googleadservices.com www.gstatic.com www.pinterest.co.uk www.pinterest.com www.zenaps.com;  frame-src 'self' blob: *.awin1.com *.bskyb.com *.clicktale.net *.contentsquare.net *.demdex.net *.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.kampyle.com *.liveperson.net *.lpsnmedia.net *.medallia.eu *.online-metrix.net *.optimizely.com *.paa-reporting-advertising.amazon *.qualtrics.com *.sky.com *.skyassets.com *.snapchat.com *.stripe.com *.zenaps.com 12660277.fls.doubleclick.net 1580034.fls.doubleclick.net 3662759.fls.doubleclick.net 6993240.fls.doubleclick.net aax-eu.amazon-adsystem.com acdn.adnxs.com analytics.twitter.com answers2-embed.sky.com.pagescdn.com api.branch.io api2.branch.io app.link assets.adobedtm.com c.amazon-adsystem.com cdn.branch.io cdn.privacy-mgmt.com cdn.spatialbuzz.com connect.facebook.net ct.pinterest.com d2d7do8qaecbru.cloudfront.net dmp.v.fwmrm.net ib.adnxs.com insight.adsrvr.org lantern.roeye.com live.tvgenius.net ls.smct.co ls.smct.io match.adsrvr.org paa-reporting-advertising.amazon players.brightcove.net pm.w55c.net s.pinimg.com s0.2mdn.net sc-static.net secure.adnxs.com servedby.flashtalking.com sky.likewizesupport.com sky.lucidcx.com skycustomer.likewizesupport.com smct.co smct.io td.doubleclick.net universal.iperceptions.com w.etadirect.com www.facebook.com www.googleadservices.com www.googletagmanager.com www.pinterest.co.uk www.pinterest.com;  frame-ancestors 'self';  worker-src blob: 'self' *.liveperson.net *.sky.com *.skyassets.com assets.adobedtm.com;  child-src 'self' blob: *.intercom-sheets.com;  media-src 'self' blob: data: *.akamaihd.net *.boltdns.net *.brightcovecdn.com *.cf.brightcove.com *.clicktale.net *.contentsquare.net *.contentstack.io *.demdex.net *.doubleclick.net *.google-analytics.com *.google.co.uk *.google.com *.google.ie *.googlesyndication.com *.intercomcdn.com *.liveperson.net *.lpsnmedia.net *.media.brightcove.com *.sky.com *.skyassets.com assets.adobedtm.com bat.bing.com www.facebook.com;  object-src 'self' *.sky.com;  form-action *.intercom.help *.intercom.io;  report-uri /csp-reports] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:49 GMT] Etag:["13bx9h5ogn35tnn"] Expires:[Sun, 05 Oct 2025 19:32:49 GMT] Link:[<https://stage.static.skyassets.com>; rel="preconnect"] Pragma:[no-cache] Server:[Google Frontend] Set-Cookie:[countryAKA=other; path=/; domain=.sky.com; secure optimizelyEndUserId=3d1142ba6a37180c5b75e5ec40e3e193; expires=Fri, 03-Apr-2026 19:32:49 GMT; path=/; domain=.sky.com _abck=F58C438D2BAB2ADCAE0FD37C2DDF634A~-1~YAAQu2QwF7wUkouZAQAAVMnctQ48IUnKfHpLuIFD79NxB8N1XaFNmKuyepoVjP8wMXD8/QAGiEDn8PY6x7YabidyNQ+iDdmffcrH1fN9L6mOKWaVkDsNAnVTiXW8aIA0y7vfhOmLURVLinZter6WR7OfCLhgRIgX7YBpNlTNzohavhLLtT0qeCSJBpddkpc3S368joKv5btje1WYSMLkoi67Yja0hn70Nr+nr90Pzq3tdQgmLIzril+qqouMU4ivV5Fi3K6UWyh3pUW0lb4BQ1Qb7ZLYPUPD3FhsGs14mwKcTIPtazdAhyxP1VUkKqb8tlC3XzSerf+oIITWmWIIC9ol7mjG5+yRPheBf+7Z8h+lpAWrZvD1hrJcAmHG3qjTKIL3GQZR7l1mE1Jzc5QbqPDTt5nm2Cev9f/hqrs1WImV1/V+vmB5mEVCNVaH8fGHCvQexCvrRhPGvxwqnB+bgpA=~-1~-1~-1~-1~-1; Domain=.sky.com; Path=/; Expires=Mon, 05 Oct 2026 19:32:49 GMT; Max-Age=31536000; Secure bm_sz=6D2D1EA2D1A9E77EC8B362BB46C9425E~YAAQu2QwF70UkouZAQAAVMnctR3718sW2pLpElaUCDh4h7b2BgrDTBUlYHNvxhHHnH5xiqewlqpaehHGE40sgNVM9d6zjmMzx5d1MJ+h3NL5cB696I9+vEsp1g8j34X5fu6osx28awe4yJxNZsYYQjOjVfA2j8w1tJXw8buVu6y3cAD4ssk3/l0LZiylbvE8RG1LbdW3+A/DxE+NrJ0jM59uJLneM4dlA9QFX40p0liiUQFq9cETIAyIoZEU/I6LNifpwtxAUaQ1kkEtU45k2QCpeRnNw36284LquEH+yig415I/UEtieAZr8Ll4enw5DILkpfKaD6hyJC0acl2uibvSgMY3MqzcWw==~4602178~3291448; Domain=.sky.com; Path=/; Expires=Sun, 05 Oct 2025 23:32:49 GMT; Max-Age=14400] Strict-Transport-Security:[max-age=63072000; preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Powered-By:[Next.js] X-Queueit-Connector:[akamai]]
```

## newyorker.com

```
200 OK
map[Age:[542] Alt-Svc:[h3=":443"; ma=86400] Back-Lae-Origin-Response-Start:[1759692233113] Cache-Control:[stale-while-revalidate=60, stale-if-error=86400, s-maxage=900] Connection:[keep-alive] Content-Length:[2266552] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:23:53 GMT] Modified-At:[1759684334] Server:[CloudFront] Set-Cookie:[xid1=1; Expires=Sun, 05 Oct 2025 19:33:10 GMT; Domain=.newyorker.com; path=/; CN_segments=co.w2541; Expires=Fri, 03 Apr 2026 19:32:55 GMT; Domain=.newyorker.com; path=/; CN_xid_refresh=6ecfab18-1eee-42a1-c98e-ee6c3fd80d84; Expires=Mon, 05 Oct 2026 19:32:55 GMT; Domain=.newyorker.com; path=/; Secure; httponly; SameSite=None; CN_xid=6ecfab18-1eee-42a1-c98e-ee6c3fd80d84; Expires=Fri, 03 Apr 2026 19:32:55 GMT; Domain=.newyorker.com; path=/; Secure; SameSite=None; CN_geo_country_code=US; Expires=Fri, 03 Apr 2026 19:32:55 GMT; path=/; Domain=.newyorker.com;  Secure; SameSite=None;] Vary:[accept-encoding] Via:[1.1 978b1b29b70b082668c3d920b0bbe7d4.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[Xorz58PvCGyzt34c3RJ2ZQNMA7x2zuYaEuemIP_VQKQcK2odn-B5IQ==] X-Amz-Cf-Pop:[IAD55-P6] X-Cache:[Hit from cloudfront] X-Content-Type-Options:[nosniff] X-Organization-Slug:[the-new-yorker] X-Ua-Device:[mobile]]
```

## depositfiles.com

```
200 OK
map[Cache-Control:[no-store, no-cache, must-revalidate] Content-Security-Policy:[frame-ancestors depositfiles.com *.depositfiles.com depositfiles.org *.depositfiles.org dfiles.eu *.dfiles.eu dfiles.com *.dfiles.com] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:55 GMT] Expires:[Thu, 19 Nov 1981 08:52:00 GMT] Pragma:[no-cache] Server:[nginx] Set-Cookie:[uprand=79613dbb61ed855f04297444318780fe; path=/; domain=.depositfiles.com] X-Frame-Options:[SAMEORIGIN]]
```

## intel.com

```
403 Forbidden
map[Access-Control-Allow-Origin:[*] Alt-Svc:[h3=":443"; ma=93600] Content-Length:[367] Content-Security-Policy:[frame-ancestors 'self' https://premiersupport.intel.com https://c0.avaamo.com *.intel.com; object-src 'self';] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:32:55 GMT] Expires:[Sun, 05 Oct 2025 19:32:55 GMT] Mime-Version:[1.0] Server:[AkamaiGHost] Set-Cookie:[detected_bandwidth=HIGH; path=/; domain=.intel.com; secure; HttpOnly src_countrycode=us; path=/; domain=.intel.com; secure; HttpOnly] Strict-Transport-Security:[max-age=31536000 ; includeSubDomains ; preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Grn:[0.8d0c0317.1759692775.5b59bdf5] X-Xss-Protection:[1; mode=block]]
```

## thenai.org

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f5909db466ff7-IAD] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:32:55 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f5909db466ff7"] Set-Cookie:[__cf_bm=4M3HFc_F8XgIgk.Gt6g2jSdJIj7nbW9lxcjmfHaWmg4-1759692775-1.0.1.1-5aAZnwwvQa2.yon4yKHmnzw2Tkod6QouRy8bY2U70nUaFX8nIGLh.78eFneCwmje8ZaLfrN4PCp.Ecx6PrGLnazaObTMLFrz4nLNFCNdMd4; path=/; expires=Sun, 05-Oct-25 20:02:55 GMT; domain=.thenai.org; HttpOnly; Secure; SameSite=None] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## sciencemag.org

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f590c890c8651-IAD] Content-Length:[8627] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:32:56 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Server:[cloudflare] Server-Timing:[chlray;desc="989f590c890c8651"] Set-Cookie:[__cf_bm=CfgPPqsAWpLGrMLH0iovv8ZLlW17uN1L656IjZparrM-1759692776-1.0.1.1-G9wSoN0Om_w0QZuLKzOGpS3jmWIunuFaiE98LMkeRMiEit0jgtWhd.P_6b2P43q2lfaOwYx8DE3P_neXV8CN9_sAVq7I.rRKlRdf5KnKp7c; path=/; expires=Sun, 05-Oct-25 20:02:56 GMT; domain=.www.sciencemag.org; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=15552000] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## tmz.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Platform, Sec-CH-UA] Age:[24] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[max-age=30, public, s-maxage=60] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:32:56 GMT] Link:[<https://imagez.tmz.com>; rel="preconnect"; crossorigin="anonymous",<https://static.tmz.com>; rel="preconnect"; crossorigin="anonymous",<https://strike.fox.com>; rel="preconnect",<https://prod-foxkit.kts.fox>; rel="preconnect",<https://prod-foxkit.kts.fox>; rel="preconnect"] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-mobile=*, ch-ua-model=*, ch-ua-platform-version=*, ch-ua-platform=*, ch-ua=*] Referrer-Policy:[unsafe-url] Server:[Apache] Strict-Transport-Security:[max-age=63072000; includeSubDomains; preload] Vary:[CloudFront-Viewer-Country,CloudFront-Is-Mobile-Viewer,CloudFront-Is-Tablet-Viewer] Via:[1.1 ade18dc841d2e1cc8ef49611c5d4c93e.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[0dXCjHMQC76EB-WjNLrq1bvoj9ZO3b1_384hPuI2w4HKbKlcaRZpTg==] X-Amz-Cf-Pop:[IAD89-C2] X-Cache:[Miss from cloudfront] X-Content-Type-Options:[nosniff] X-Fpc:[hit] X-Fpc-Key:[88f72662f8c1b3a6edd2e2adba09ff1d2bfa80f2d23f2ad38feb695258dd657b] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[1; mode=block]]
```

## draft.blogger.com

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, must-revalidate] Content-Length:[168646] Content-Security-Policy:[script-src  'nonce-Sv2SoHmOhi08nFpyKBO_kw' 'report-sample' 'strict-dynamic' 'unsafe-eval' 'unsafe-hashes' 'unsafe-inline' http: https:; object-src 'none'; report-uri https://csp.withgoogle.com/csp/blogger-tech; base-uri 'self'] Content-Type:[text/html] Cross-Origin-Opener-Policy-Report-Only:[same-origin; report-to="blogger-tech"] Cross-Origin-Resource-Policy:[cross-origin] Date:[Sun, 05 Oct 2025 19:33:02 GMT] Expires:[Fri, 01 Jan 1990 00:00:00 GMT] Last-Modified:[Tue, 06 May 2025 06:08:00 GMT] Pragma:[no-cache] Report-To:[{"group":"blogger-tech","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/blogger-tech"}]}] Server:[sffe] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Xss-Protection:[0]]
```

## policies.google.com

```
200 OK
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Content-Length:[0] Content-Security-Policy:[script-src 'unsafe-inline' https: http:;object-src 'none';base-uri 'self';report-uri /_/IdentityPoliciesUi/cspreport;worker-src 'self' require-trusted-types-for 'script';report-uri /_/IdentityPoliciesUi/cspreport] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[unsafe-none] Cross-Origin-Resource-Policy:[same-site] Date:[Sun, 05 Oct 2025 19:33:02 GMT] Expires:[Mon, 01 Jan 1990 00:00:00 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*] Pragma:[no-cache] Reporting-Endpoints:[default="/_/IdentityPoliciesUi/web-reports?context=eJwB-AAH_wq8ASoKGgBQKBoAsCK4Aqs6uwI3YOQCsHjmAjtH6AJP_OkCNtqXBdnflwXeYZgFhdnOBZPZzgXmis8F3_zPBTEg0gU_INIFchjUBYAY1AXRX9QF7qjUBaxC1QVJLdYFJUrXBWux1wXc1tcF8nrYBRB72AViB9kFcAfZBeOM2QWVcdoFNcHaBUPB2gXW39sFRgbcBbq63AXlx9wFYd_cBa3h3AUlp90F1ZtJBrbMSQbA9EkGQvRKBhuqSwZR9EwGEgwI7o-LxwYQ-NHpkgEiKWJvcV9pZGVudGl0eXBvbGljaWVzc2VydmVyXzIwMjUwOTMwLjAwX3AwJXppzQ"] Server:[ESF] Set-Cookie:[NID=525=hotLakgd5mD9ICudtvOpegfOt44KtPH9NBXH53QDgCU0muMnEehJXWsEGN-PwwHHc0NxBDba9pYMKV95H2Sz8EYz7FRrkarNt4Qy6_85yTNjRkH9LPoIX7svwZyE0hP7zwE0Tu-asukpUBuEAaL4RgmY2uMFB41eVGjFjmetzFSWgZOMTt6LSJuVjXMWQuaXvlJCPq5MmLE5D08wR6x5Mw; expires=Mon, 06-Apr-2026 19:33:02 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none] Vary:[Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site] X-Content-Type-Options:[nosniff] X-Ua-Compatible:[IE=edge] X-Xss-Protection:[0]]
```

## reverbnation.com

```
200 OK
map[Cache-Control:[max-age=0, private, must-revalidate] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:02 GMT] Etag:[W/"df1043ba82dee7dd47f2d8e7733a094e"] P3p:[CP="DSP ALL COR OUR SAMi UNRi CUR ADM TAI IVA IVD CONo BUS DEM UNI STA LOC NAV COM INT", policyref="/w3c/p3p.xml"] Rn-App-Events:[1] Server:[Apache] Set-Cookie:[_reverbnation_session=87f56a2e74647699a849971fcaf184df; domain=.reverbnation.com; path=/; expires=Mon, 06 Oct 2025 07:33:02 GMT; secure; HttpOnly; SameSite=None] X-Digits-Of-Pi:[] X-Frame-Options:[SAMEORIGIN] X-Request-Id:[7221f630-bdcc-473c-9de9-bdeafb1d09e4] X-Runtime:[0.040272] X-Ua-Compatible:[IE=Edge,chrome=1] X-Xss-Protection:[1; mode=block]]
```

## independent.co.uk

```
200 OK
map[Accept-Ranges:[bytes] Access-Control-Allow-Credentials:[true] Access-Control-Allow-Origin:[*] Age:[0] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Cache-Tag:[independent.co.uk,v11.22.0,us,section_1741,web_indy_prod_section_1741_publication_1,indy_prod,web_indy_prod,web_indy_prod_section_1741,web_indy_prod_publication_1,web_indy_prod_2025-10-05,web_indy_prod_2025-10-05_publication_1,web_indy_prod_us] Canary:[1] Connection:[keep-alive] Content-Language:[en] Content-Length:[358448] Content-Security-Policy:[default-src https: 'unsafe-inline' data: blob:; frame-src https: data:; script-src https: 'unsafe-inline' 'unsafe-eval' blob: 'unsafe-inline'; media-src https: 'unsafe-inline' data: blob:; img-src https: http: data: blob:; frame-ancestors https:] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:08 GMT] Etag:[W/"57830-3Hf2VlxVidZiJHZFoucLU4Fk9ms-gzip"] Feature-Policy:[camera 'none'; microphone 'none'; midi 'none'; geolocation 'none'] Link:[<https://static.independent.co.uk>; rel=dns-prefetch, <https://static.independent.co.uk>; rel=preconnect, <https://assets.the-independent.com>; rel=dns-prefetch, <https://assets.the-independent.com>; rel=preconnect] Permissions-Policy:[camera=(), microphone=(), midi=(), geolocation=(), interest-cohort=()] Referrer-Policy:[no-referrer-when-downgrade] Set-Cookie:[Locale=US ; Path=/ ; gdpr=0 ; Path=/ ; subscriber_origin=us ; Path=/ ; _pc_subscriber_origin=us ; Path=/ ; feat__support_now_donate_copy=true ; Path=/ ; Secure ; Expires=Thu, 30 Oct 2025 19:33:08 GMT ; is_mobile_or_tablet=true ; Path=/ ; Secure ; Expires=Mon, 05 Oct 2026 19:33:08 GMT ; feat__bulletin_taboola_feed=true ; Path=/ ; Secure ; Expires=Thu, 04 Dec 2025 19:33:08 GMT ; esi-uuid=2bbb4c21-f876-4121-bdea-94e3724ba92a ; Path=/ ; Secure; HttpOnly; Expires=Mon, 05 Oct 2026 19:33:08 GMT ; esi-permutive-id=2bbb4c21-f876-4121-bdea-94e3724ba92a; Path=/ ; Secure ; Locale=US ; Path=/ ; gdpr=0 ; Path=/ ; subscriber_origin=us ; Path=/ ; _pc_subscriber_origin=us ; Path=/ ; feat__support_now_donate_copy=true ; Path=/ ; Secure ; Expires=Thu, 30 Oct 2025 19:33:08 GMT ; is_mobile_or_tablet=true ; Path=/ ; Secure ; Expires=Mon, 05 Oct 2026 19:33:08 GMT ; feat__bulletin_taboola_feed=true ; Path=/ ; Secure ; Expires=Thu, 04 Dec 2025 19:33:08 GMT ; esi-uuid=2bbb4c21-f876-4121-bdea-94e3724ba92a ; Path=/ ; Secure; HttpOnly; Expires=Mon, 05 Oct 2026 19:33:08 GMT ; esi-permutive-id=2bbb4c21-f876-4121-bdea-94e3724ba92a; Path=/ ; Secure ;] Speculation-Rules:[/speculationrules.json] Strict-Transport-Security:[max-age=63072000;  preload] Via:[1.1 varnish, 1.1 varnish] X-Backend:[flow-us] X-Cache:[MISS, MISS] X-Cache-Hits:[0, 0] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Head-Hash:[] X-Served-By:[cache-lga21963-LGA, cache-iad-kiad7000121-IAD] X-Timer:[S1759692788.702192,VS0,VE362] X-Xss-Protection:[1; mode=block]]
```

## bp0.blogger.com

```
400 Bad Request
map[Access-Control-Allow-Origin:[*] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Content-Length:[1555] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:08 GMT] Server:[fife] Timing-Allow-Origin:[*] Vary:[Origin] X-Content-Type-Options:[nosniff] X-Xss-Protection:[0]]
```

## mega.io

```
200 OK
map[Connection:[keep-alive] Content-Security-Policy:[default-src 'self' data: blob: *.mega.co.nz *.mega.nz *.mega.io http://*.mega.nz http://*.mega.io; script-src 'self' *.mega.co.nz *.mega.nz *.mega.io https://*.googletagmanager.com https://analytics.google.com *.hsadspixel.net *.hs-analytics.net js.hscta.net *.hubspot.com static.hsappstatic.net *.usemessages.com *.hs-banner.com *.hubspotusercontent20.net *.hubspot.net *.hscollectedforms.net *.hsleadflows.net *.hsforms.net *.hsforms.com *.hs-scripts.com *.hubspotfeedback.com feedback.hubapi.com data: blob:; connect-src *.mega.co.nz *.mega.nz *.mega.io http://*.mega.nz http://*.mega.io https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com *.hubapi.com js.hscta.net *.hubspot.com *.hs-banner.com *.hscollectedforms.net *.hsforms.com; style-src 'self' 'unsafe-inline' *.mega.co.nz *.mega.nz *.mega.io *.hubspotusercontent20.net cdn2.hubspot.net data: blob:; frame-src 'self' *.megapay.nz mega: *.megaad.nz https://mega.nz/ https://mega.io/ *.hubspot.com *.hs-sites.com *.hubspot.net play.hubspotvideo.com *.hsforms.net *.hsforms.com; img-src 'self' *.mega.co.nz *.mega.nz *.mega.io data: blob: mega.nz *.hubspot.com js.hscta.net no-cache.hubspot.com *.hubspotusercontent20.net *.hubspot.net cdn2.hubspot.net *.hsforms.net *.hsforms.com; frame-ancestors 'self' https://mega.nz/; child-src 'self' *.mega.co.nz *.mega.nz *.mega.io data: blob: mega.nz *.hsforms.com;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:08 GMT] Server:[nginx] Strict-Transport-Security:[max-age=31536000] X-Cache-Status:[HIT] X-Content-Type-Options:[nosniff] X-Xss-Protection:[1; mode=block]]
```

## box.com

```
200 OK
map[Aaa-Loc-Header:[US] Age:[204670] Alt-Svc:[h3=":443"; ma=86400] Box-Country:[US] Cache-Control:[max-age=30, public, s-maxage=2592000] Cf-Cache-Status:[HIT] Cf-Ray:[989f59589c2439b5-IAD] Connection:[keep-alive] Content-Language:[en] Content-Security-Policy:[default-src * 'self' blob: data: 'unsafe-inline'; font-src 'self' data: fonts.googleapis.com fonts.gstatic.com] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:08 GMT] Expires:[Sun, 19 Nov 1978 05:00:00 GMT] Last-Modified:[Fri, 03 Oct 2025 10:32:02 GMT] Link:[<//assets.box.com>; rel=preconnect; crossorigin] Server:[cloudflare] Set-Cookie:[__cf_bm=trovpdbYYLAb.q30.HJMgfZpGYTQQX6KaIHx7BtIsbQ-1759692788-1.0.1.1-mQuhHMcjYVL6XfMoBW3f_VbikCtnEnT.BAi1PKOyvzuB1eiXgKyKMtBTd0It0.J3Rt_a_hpNcTJIjQqwzro8oUvg.Rd3H6UuEzySP_17VzU; path=/; expires=Sun, 05-Oct-25 20:03:08 GMT; domain=.box.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=2592000; includeSubDomains; preload] Vary:[Cookie,Box-Country,X-Box-Geo-Country,X-Frame-Options,Accept-Encoding] Via:[varnish] X-Ah-Environment:[prod] X-Box-Geo-Country:[US] X-Cache:[HIT] X-Cache-Hits:[12] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Request-Id:[v-33642ecc-a044-11f0-8d6a-839da39d07d2] X-Xss-Protection:[1; mode=block]]
```

## ovh.com

```
200 OK
map[Accept-Ranges:[bytes] Access-Control-Allow-Origin:[*] Cache-Control:[public, must-revalidate, max-age=90] Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:33:12 GMT] Vary:[Accept-Encoding] X-Cacheable:[Cacheable: miss] X-Cdn-Pop:[syd] X-Cdn-Pop-Ip:[139.99.229.0/27] X-Content-Type-Options:[nosniff] X-Frame-Options:[ORIGIN] X-Iplb-Instance:[54394] X-Iplb-Request-Id:[8B63E50B:BC14_C063418B:01BB_68E2C7F7_208241:4642] X-Request-Id:[7740682] X-Toujours-Debout-Branch:[B] X-Toujours-Debout-Location:[BHS] X-Xss-Protection:[1; mode=block]]
```

## nps.gov

```
200 OK
map[Access-Control-Allow-Origin:[*] Age:[360898] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[67534] Content-Type:[text/html;charset=UTF-8] Date:[Wed, 01 Oct 2025 15:18:14 GMT] P3p:[policyref="https://www.nps.gov/w3c/p3p.xml", CP="ALL DSP COR OTP PUB BUS OTC"] Pragma:[no-cache] Server:[Apache] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] Vary:[Accept-Encoding] Via:[1.1 028229e6bd0161988b8a68b3a1abfad2.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[zOPgSgGnxmvu_DliYH9Hxdv5tmdh1-FlDy3q_pKMyt_8XtubVJJi4Q==] X-Amz-Cf-Pop:[JFK52-P9] X-Cache:[Hit from cloudfront]]
```

## google.it

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-Om-idOsGmLA-RX1Mk2mjFA' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:12 GMT] Expires:[Sun, 05 Oct 2025 19:33:12 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5uEDe0WzBHSGw3ujIDMbgw2lkr-gpI4VuVDDI-SqORtBqeg28FW2zs; expires=Fri, 03-Apr-2026 19:33:12 GMT; path=/; domain=.google.it; Secure; HttpOnly; SameSite=lax NID=525=OoxRlBCNoUHqgJGhl7tc7CY3CHdYh8qZNOKttd5qiE4Ml-SXnQ9g46cF0RUfkOdNw0RLRKJVz9z1M6lYIvUCeOKuqfNSSsIYAm2uq70Vxg1IBTd8L2lSl4iI5FPznshdCOhM-GoGnb55pcS7_h3hAbDgLNSneoLTyi3LWoRC7xbSO6RxysqHoZb55lGC4pixJPZtt7LHKTpDe7Z3l-c; expires=Mon, 06-Apr-2026 19:33:12 GMT; path=/; domain=.google.it; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## tvtropes.org

```
200 OK
map[Age:[60] Cache-Control:[public, s-maxage=180, max-age=0] Cf-Cache-Status:[HIT] Cf-Ray:[989f5973086c3944-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:12 GMT] Last-Modified:[Sun, 05 Oct 2025 19:32:12 GMT] Link:[<https://assets.tvtropes.org/design/assets/bundle.css?rev=8dc2ef2b86ce864f0e6e4b541bec2c2e99d9869a>; rel=preload; as=style;] Server:[cloudflare] Vary:[Accept-Encoding] X-Frame-Options:[DENY]]
```

## ok.ru

```
200 
map[Cache-Control:[private, no-cache, no-store, max-age=0] Connection:[keep-alive] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:13 GMT] Expires:[Mon, 26 Jul 1997 05:00:00 GMT] Pragma:[no-cache] Referrer-Policy:[strict-origin-when-cross-origin] Server:[kittenx] Server-Timing:[tid;desc="YR4Kw2CzwEu_2GOzJn9YKHWlCu_74w",front;dur=13.997] Set-Cookie:[JSESSIONID=b8669c5ccfb561ecdab24b3514b042a47e6cd7661d7b2d8d.468831c3; Domain=.ok.ru; Path=/; HttpOnly bci=565046891252835454; Max-Age=2147483647; Expires=Fri, 23 Oct 2093 22:47:20 GMT; Domain=ok.ru; Path=/; HttpOnly _statid=c3819af1-2118-4a20-8635-13bdeda7f6eb; Max-Age=2147483647; Expires=Fri, 23 Oct 2093 22:47:20 GMT; Domain=ok.ru; Path=/; HttpOnly ss_mo=0tdGIa3ViQchBDi9sobSQctVw3cAiTyD5F9AhAiebxfQRczvD4sFcOmNZRVPWLQM7GJqYxZRLohmCDt06ZykWAGNRyQXMH58GCc; Secure; Max-Age=86400; HttpOnly; SameSite=None; Domain=m.ok.ru] Vary:[Accept-Encoding accept-encoding] X-Trace-Id:[YR4Kw2CzwEu_2GOzJn9YKHWlCu_74w]]
```

## google.co.jp

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-T6cp7qM5cNR3AGH-aTrWZA' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:14 GMT] Expires:[Sun, 05 Oct 2025 19:33:14 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5sZJv69M0s8GA6uFfIt_VBYAyAOiKqZFG_PLSq-7nQNYUSqEeQyXA; expires=Fri, 03-Apr-2026 19:33:14 GMT; path=/; domain=.google.co.jp; Secure; HttpOnly; SameSite=lax NID=525=n6xDDhuSKXlmgIq326HfLmmyDOAZceY7VU2suhEmAaoIad1Ujxia9iJ7jyxG2cRkRgHJV5cfg-KLAdnAUzPQkCOkUW4mWOMbDCyHBpTdSfwg444MUm4yj5N68X2C-ZL_YiAeP52qD4uVArYMkMHLvXMkcsJ0wFSB8ucHIqIld1yuuUfd3XPVFp3zuKu049FXr-1Ohu7-9HuezKQiOuE; expires=Mon, 06-Apr-2026 19:33:14 GMT; path=/; domain=.google.co.jp; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## doi.org

```
200 OK
map[Accept-Ranges:[bytes] Connection:[keep-alive] Content-Encoding:[gzip] Content-Length:[7326] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:33:15 GMT] Etag:["db5a053ebfb0c722cf72a3597173d425"] Last-Modified:[Thu, 02 Oct 2025 08:16:33 GMT] Server:[AmazonS3] Via:[1.1 434e1d253124c6f9517c35a2c6014518.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[5fQs2jDTJ2PiHLYYrhCCPfR_BjcfEBrBYTLw61bzKtudeB8sVi584A==] X-Amz-Cf-Pop:[IAD55-P10] X-Amz-Meta-Md5chksum:[db5a053ebfb0c722cf72a3597173d425] X-Amz-Server-Side-Encryption:[AES256] X-Cache:[Miss from cloudfront]]
```

## tiktok.com

```
200 OK
map[Access-Control-Allow-Credentials:[true] Access-Control-Expose-Headers:[x-tt-traceflag,x-tt-logid] Cache-Control:[max-age=0, no-cache, no-store] Connection:[keep-alive] Content-Security-Policy:[report-uri https://mon16-normal-useast5.tiktokv.us/monitor_browser/collect/batch/security/?bid=tiktok_pns&ev_type=csp&p=KpZCFgIee2DS8vDgItQS4&v=19; report-to csp-endpoint; upgrade-insecure-requests; default-src 'self' 'unsafe-eval' 'unsafe-inline' blob: bytedance: data: wss://*.tiktok.com wss://*.tiktokv.com wss://*.tiktokv.eu wss://tiktok.com wss://tiktokv.com *.adsintegrity.net *.akamaized.net *.amazonaws.com *.bing.com *.bitssec.com *.braintree-api.com *.braintreegateway.com *.bytedapm.com *.bytedgame.com *.bytehwm-row.com *.byteicdn.com *.byteintl.com *.byteintl.net *.byteintlapi.com *.byteintlstatic.com *.bytelemon.com *.byteoversea.com *.byteoversea.net *.bytevcloudapi.com *.capcut.com *.cloudflare.com *.ctfassets.net *.doubleclick.net *.evbuc.com *.eventim.de *.facebook.com *.facebook.net *.fbsbx.com *.fcdnstatic-intl.com *.fdmstatic.com *.g-p-static.com *.gauthmath.com *.giphy.com *.goofy-cdn.com *.goofy.app *.google.com *.googleadservices.com *.googleapis.com *.googletagmanager.com *.gstatic.com *.hsforms.com *.hsforms.net *.ibytedtos.com *.ibyteimg.com *.isnssdk.com *.jumio.ai *.kakao.com *.lemon8-app.com *.lemon8cdn.com *.licdn.com *.linkedin.com *.midtrans.com *.muscdn.com *.musical.ly *.oecstatic.com *.omise.co *.pangle-ads.com *.paypal.com *.pipopay.com *.pipopayment.us *.redditstatic.com *.resso.me *.sgsnssdk.com *.soundon.global *.tableau.com *.tenor.com *.tiktok-row.net *.tiktok.com *.tiktok.ru *.tiktok.vn *.tiktokapis.com *.tiktokcdn-eu.com *.tiktokcdn-in.com *.tiktokcdn-us.com *.tiktokcdn.com *.tiktokcreativeone.com *.tiktokforbusinessoutbound.com *.tiktokglobalshop.com *.tiktokmusic.me *.tiktokshop.com *.tiktokstaticb.com *.tiktokus.info *.tiktokv.com *.tiktokv.eu *.tiktokv.us *.tiktokw.eu *.tiktokw.us *.topbuzzcdn.com *.ttcdn-us.com *.ttlivecdn.com *.ttlstatic.com *.ttwstatic.com *.vimeo.com *.vodupload.com *.yahoo.co.jp *.yhgfb-static.com *.youtube-nocookie.com *.zhiliaoapp.com api.music.apple.com code.jquery.com facebook.com google.com i.ticketweb.com images.universe.com media.ticketmaster.eu play.itunes.apple.com res.cloudinary.com s1.ticketm.net static-label.frontgatetickets.com static.captchami.com t.co tikitoks.com tiktok.com tiktok.ua tiktok.vn tiktokfollowersfree.com tiktokv.com unpkg.com vimeo.com; connect-src * 'unsafe-inline' blob: data:; frame-src bytedance: *.kakao.com *.tiktok.com access.line.me accounts.google.com api.twitter.com appleid.apple.com assets.braintreegateway.com client-api.arkoselabs.com h.online-metrix.net lf16-web.tiktokcdn.com newassets.hcaptcha.com recaptcha.google.com tx41v.arkoselabs.com www.facebook.com www.google.com; script-src 'inline-speculation-rules' 'report-sample' 'unsafe-eval' *.tiktokcdn-us.com apis.google.com billshark-cdn.s3.amazonaws.com c.paypal.com cdnjs.cloudflare.com client-api.arkoselabs.com connect.facebook.net developers.kakao.com googleads.g.doubleclick.net js-cdn.music.apple.com/musickit/v3/musickit.js js.braintreegateway.com js.hcaptcha.com js.hsforms.net recaptcha.google.com s20.tiktokcdn.com s3.amazonaws.com sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/bric-captcha-ttweb/core-captcha/ static.captchami.com tiktok.captchami.com tx41v.arkoselabs.com unpkg.com vimeo.com www.facebook.net www.google.com www.googleadservices.com www.googleapis.com www.googletagmanager.com www.gstatic.com www.vimeo.com; worker-src www.tiktok.com/business/sw.js www.tiktok.com/embed/sw.js www.tiktok.com/firebase-messaging-sw.js www.tiktok.com/help/sw.js www.tiktok.com/sw.js www.tiktok.com/tiktokstudio/static/worker/ www.tiktok.com/tiktokstudio/sw.js www.tiktok.com/web-static-js/ www.tiktok.com/webapp-desktop/static/worker/; frame-ancestors tea-va.bytedance.net www.tiktok.com] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:14 GMT] Expires:[Sun, 05 Oct 2025 19:33:14 GMT] Feature-Policy:[microphone 'none'; geolocation 'none'] Pragma:[no-cache] Referrer-Policy:[strict-origin-when-cross-origin] Reporting-Endpoints:[csp-endpoint="https://mon16-normal-useast5.tiktokv.us/monitor_browser/collect/batch/security/?bid=tiktok_pns"] Server:[nginx] Server-Timing:[inner; dur=77 cdn-cache; desc=MISS, edge; dur=1, origin; dur=95] Set-Cookie:[tt_csrf_token=UHA0sTse-S8-NJMzyL9Q_G7odYg0MCxD8diI; path=/; domain=.tiktok.com; samesite=lax; secure; httponly ttwid=1%7Ct3JkXmD9ECcH90mklrqJ05m5dYV6A06L_ffSM1XEGYI%7C1759692794%7C43036cb2965282836fd1fea570270838ab55312825c0f4e7b112ae32399622b4; Domain=.tiktok.com; Path=/; Expires=Wed, 30 Sep 2026 19:33:14 GMT; HttpOnly; Secure tt_chain_token=T25ycU6vqrp4VcfQs5jakA==; path=/; expires=Fri, 03 Apr 2026 19:33:14 GMT; domain=.tiktok.com; secure; httponly] Strict-Transport-Security:[max-age=31536000; includeSubdomains] X-Akamai-Request-Id:[4018a7c5] X-Bytefaas-Enable-Stream:[true] X-Bytefaas-Execution-Duration:[74.98] X-Bytefaas-Request-Id:[202510051933144215048454D887749B5D] X-Cache:[TCP_MISS from a104-78-78-141.deploy.akamaitechnologies.com (AkamaiGHost/22.2.5-a9c17ad842a5a5bbb9fede73ebb832d8) (-)] X-Content-Type-Options:[nosniff] X-Download-Options:[noopen] X-Frame-Options:[SAMEORIGIN] X-Gw-Dst-Psm:[serverless.tiktok.mobile] X-Origin-Response-Time:[95,104.78.78.141] X-Powered-By:[Goofy Node] X-Pumbaa-Web-Avail:[1] X-Tt-Logid:[202510051933144215048454D887749B5D] X-Tt-Trace-Host:[010c966136dd1257098670741c48c54e431e518d4707f1ecbab763c979816c22b2fb623c7108462cce118a2e1c58773915d1eeedddb7258d05bca29d47f78ab37fc630c31b1976fcce16240a6b35110720797cf8aad52e52f25ea0c53df4c6241b] X-Tt-Trace-Id:[00-2510051933144215048454D887749B5D-54F5415748235DB1-00] X-Tt-Trace-Tag:[id=16;cdn-cache=miss;type=dyn] X-Xss-Protection:[1; mode=block]]
```

## wp.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:19 GMT] Host-Header:[WordPress.com] Server:[nginx] Server-Timing:[a8c-cdn, dc;desc=dca, cache;desc=BYPASS;dur=5.0] Set-Cookie:[tk_ai=FWu9fs7giuuPJrCzCiO8Uzkc; expires=Fri, 04 Oct 2030 19:33:19 GMT; Max-Age=157680000; path=/; domain=.wordpress.com; secure; SameSite=None tk_ai_explat=FWu9fs7giuuPJrCzCiO8Uzkc; expires=Fri, 04 Oct 2030 19:33:19 GMT; Max-Age=157680000; path=/; domain=.wordpress.com; secure; SameSite=None tk_qs=_en%3Dwpcom_experiment_variation_assigned%26_ut%3Danon%26_ui%3DFWu9fs7giuuPJrCzCiO8Uzkc%26_ts%3D1759692799777%26experiment_id%3D22340%26experiment_variation_id%3D5354%26reason%3Dset_by_anon_id; path=/; domain=.wordpress.com; secure; SameSite=Strict explat_test_aa_weekly_lohp_2025_week_40=treatment; expires=Mon, 20 Oct 2025 00:00:00 GMT; Max-Age=1225601; path=/; domain=.wordpress.com; secure; SameSite=None] Strict-Transport-Security:[max-age=31536000; preload] Vary:[Accept-Encoding Cookie] X-Ac:[1.dca _dca BYPASS] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Hacker:[Want root?  Visit join.a8c.com/hacker and mention this header.] X-Xss-Protection:[1; mode=block]]
```

## biglobe.ne.jp

```
200 OK
map[Accept-Ranges:[bytes] Connection:[keep-alive] Content-Length:[254] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:33:20 GMT] Last-Modified:[Thu, 22 May 2025 10:12:49 GMT] Server:[Apache] Strict-Transport-Security:[max-age=31536000]]
```

## standard.co.uk

```
200 OK
map[Access-Control-Allow-Credentials:[true] Age:[9] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[stale-if-error=604800, public, stale-while-revalidate=3600, max-age=60, s-maxage=10800] Cf-Cache-Status:[HIT] Cf-Ray:[989f59c2a8d38e40-IAD] Connection:[keep-alive] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:25 GMT] Server:[cloudflare] Set-Cookie:[__cf_bm=lFCT7RG.kZhkSwydOnI_1t7VC_nDG9kEO97oKvvgk9c-1759692805-1.0.1.1-LvjkOHkVYNKNXnjIBiam_.XDSXxr_KBUDMGZ.xA1CRsu9hmVG9zn4nI1y7NRxMfl73UVuFOKcfkxnWbD_Vgj0WxPJelxeq7fc9VigQFb_MA; path=/; expires=Sun, 05-Oct-25 20:03:25 GMT; domain=.www.standard.co.uk; HttpOnly; Secure; SameSite=None] Speculation-Rules:["/speculationrules.json"] Strict-Transport-Security:[max-age=63072000;  preload] Surrogate-Key:[standard.co.uk v2.7.7 section_28 web_standard_prod_section_28_publication_1 standard_prod web_standard_prod web_standard_prod_section_28 web_standard_prod_publication_1 web_standard_prod_2025-10-05 web_standard_prod_2025-10-05_publication_1 standard.co.uk_v2.7.7 v2.7.7_section standard.co.uk_v2.7.7_section] Vary:[Origin,Accept-Encoding]]
```

## un.org

```
200 OK
map[Age:[537] Cache-Control:[public, max-age=900] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' https://*.un.org;] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:24:28 GMT] Etag:["1759692109-0"] Expires:[Sun, 19 Nov 1978 05:00:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:21:49 GMT] Referrer-Policy:[strict-origin-when-cross-origin] Server:[Apache] Set-Cookie:[AWSALBTG=/GROwMV2DPrBin7IUd8MvufGtHjcX3rhLgJA/Ei+TxXn7J1XK5OzewkEliZOKyMnwGAf23PxHSBFxQCsCdXSnEhZ+ko9qb/keDehSTEggsHJ5FJwRPOCYoTbXe79WtIPxdjRHPagrCghBl32xIq6iVAoq82/nuM3y3N/I5EIZHEa; Expires=Sun, 12 Oct 2025 19:24:28 GMT; Path=/ AWSALBTGCORS=/GROwMV2DPrBin7IUd8MvufGtHjcX3rhLgJA/Ei+TxXn7J1XK5OzewkEliZOKyMnwGAf23PxHSBFxQCsCdXSnEhZ+ko9qb/keDehSTEggsHJ5FJwRPOCYoTbXe79WtIPxdjRHPagrCghBl32xIq6iVAoq82/nuM3y3N/I5EIZHEa; Expires=Sun, 12 Oct 2025 19:24:28 GMT; Path=/; SameSite=None; Secure AWSALB=PghXU9fVKx/Iuq/iZhDemlvx9AHnQMvCwWtWEHunnFPyuWktSJIwRHrp5aAsSowVJEXNYTBs62peMYpZ7RSWP3/coKeFkgGah2U0MKdbl/ZglwCUny2+F7+DRyzW; Expires=Sun, 12 Oct 2025 19:24:28 GMT; Path=/ AWSALBCORS=PghXU9fVKx/Iuq/iZhDemlvx9AHnQMvCwWtWEHunnFPyuWktSJIwRHrp5aAsSowVJEXNYTBs62peMYpZ7RSWP3/coKeFkgGah2U0MKdbl/ZglwCUny2+F7+DRyzW; Expires=Sun, 12 Oct 2025 19:24:28 GMT; Path=/; SameSite=None] Strict-Transport-Security:[max-age=31536000] Vary:[Cookie] Via:[1.1 b260b0d4d2162fe305bab4403f7e668c.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[uHDywhPa9HuE4DrmEe0moG7DylhiUhcKaFzD0_GmEtBx5FCYaRSCzQ==] X-Amz-Cf-Pop:[JFK50-P6] X-Cache:[Hit from cloudfront] X-Content-Type-Options:[nosniff] X-Drupal-Cache:[HIT] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[1; mode=block]]
```

## theverge.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[199] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[no-store,private] Connection:[keep-alive] Content-Length:[894425] Content-Security-Policy:[frame-ancestors https://platform.theverge.com https://*.theverge.com https://platform.theverge.com https://*.theverge.com 'self'] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:26 GMT] Etag:["s4twnbs0lcj5jp"] Set-Cookie:[vmidv1=45e5f8e9-b3dd-428f-8a02-17195de7cb8a;Expires=Fri, 04 Oct 2030 19:33:26 GMT;Domain=www.theverge.com;Path=/;SameSite=Lax;Secure _vm_consent_type=opt-out; expires=Mon, 06 Oct 2025 19:33:26 GMT; path=/;] Strict-Transport-Security:[max-age=31556952; preload] Vary:[Accept-Encoding, x-user-state] Via:[1.1 varnish] Vm-Cyclone-Community-Id:[815a6122-a71c-47a0-a311-32f264c80c8a] X-Cache:[HIT] X-Cache-Hits:[1] X-Middleware-Rewrite:[/resource/homepage] X-Powered-By:[Next.js] X-Served-By:[cache-iad-kiad7000063-IAD] X-Timer:[S1759692806.014739,VS0,VE5]]
```

## gsmarena.com

```
200 OK
map[Connection:[Upgrade] Content-Security-Policy:[frame-ancestors 'self' *.gsmarena.com;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:32 GMT] Server:[Apache] Upgrade:[h2] X-Powered-By:[PHP/7.4.33]]
```

## amzn.to

```
405 Method Not Allowed
map[Allow:[GET, POST, PUT, DELETE, OPTIONS] Alt-Svc:[h3=":443"; ma=86400] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[0] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:32 GMT] Expires:[-1] Pragma:[no-cache] Server:[Server] Set-Cookie:[skin=noskin; path=/; domain=.amazon.com] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Accept-Encoding,User-Agent,Content-Type,Accept-Encoding,User-Agent] Via:[1.1 5095a1d18851ef61b37c744e101caa82.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[MDs4pUcrj2-LMgRYPew1dNoPd3vkWfSuM8HsWzi5FKUeLQAuU0G30g==] X-Amz-Cf-Pop:[JFK50-P16] X-Amz-Rid:[DJK1CDPM8G86RCZAQC7T] X-Cache:[Error from cloudfront] X-Frame-Options:[SAMEORIGIN]]
```

## canva.com

```
403 Forbidden
map[Accept-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cache-Control:[private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0] Cf-Mitigated:[challenge] Cf-Ray:[989f59ee7f2a2d14-IAD] Content-Length:[8557] Content-Type:[text/html; charset=UTF-8] Critical-Ch:[Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA] Cross-Origin-Embedder-Policy:[require-corp] Cross-Origin-Opener-Policy:[same-origin] Cross-Origin-Resource-Policy:[same-origin] Date:[Sun, 05 Oct 2025 19:33:32 GMT] Expires:[Thu, 01 Jan 1970 00:00:01 GMT] Nel:[{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}] Origin-Agent-Cluster:[?1] Permissions-Policy:[accelerometer=(),autoplay=(),browsing-topics=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),interest-cohort=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=()] Referrer-Policy:[same-origin] Report-To:[{"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=q%2FJMmXT0BGuh5wV98qIr3Idd%2FkMQU67DgVUPrcUceLujtllUyio53Qa1bpgKXg4xuPCIcURi6mzPc6tE3fcB6pxJjGh0UHJsxn7C32HIna6RS3Leoqyf8Ueo3jzUT8U%3D"}],"group":"cf-nel","max_age":604800}] Server:[cloudflare] Server-Timing:[chlray;desc="989f59ee7f2a2d14"] Set-Cookie:[__cf_bm=T9jLkkzc_L777TSWF3egRFTpuZJnQyXwrwwWIxHHHtE-1759692812-1.0.1.1-2E5UE0c6KLOIl8BHo1XZAolPVj0Yqok1cHRnXlAAfN6CcGSY1vzcyzZnznU704VQczRnIyVi_BwcvcR3qVj3XTd9u7C2OcGTu6FLpoCLDGc; path=/; expires=Sun, 05-Oct-25 20:03:32 GMT; domain=.canva.com; HttpOnly; Secure; SameSite=None] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## spiegel.de

```
200 OK
map[Accept-Ranges:[bytes] Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[public, max-age=0,s-maxage=90] Content-Length:[1969225] Content-Security-Policy:[frame-ancestors 'self'] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:32:04 GMT] Strict-Transport-Security:[max-age=31536000;] Vary:[X-Forwarded-Proto, X-Authorized-Sppur, Accept-Encoding] Via:[1.1 google] X-Cache:[HIT] X-Cache-Grace:[3600.000]]
```

## ziddu.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000, h3-29=":443"; ma=2592000, h3-Q050=":443"; ma=2592000, h3-Q046=":443"; ma=2592000, h3-Q043=":443"; ma=2592000, quic=":443"; ma=2592000; v="43,46"] Connection:[Keep-Alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:34 GMT] Etag:["1165370-1759576008;;;"] Keep-Alive:[timeout=5, max=100] Link:[<https://www.ziddu.com/wp-json/>; rel="https://api.w.org/" <https://www.ziddu.com/wp-json/wp/v2/pages/10186>; rel="alternate"; type="application/json" <https://www.ziddu.com/>; rel=shortlink] Server:[LiteSpeed] X-Dns-Prefetch-Control:[on] X-Litespeed-Cache:[hit]]
```

## vice.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:34 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://www.vice.com/wp-json/>; rel="https://api.w.org/"] Server:[nginx] Vary:[Accept-Encoding] X-Cache:[HIT] X-Frame-Options:[SAMEORIGIN] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca8 0 40 9980]]
```

## get.google.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-PbdPojL2O5_rRNc8eYBogw' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:34 GMT] Expires:[Sun, 05 Oct 2025 19:33:34 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5tO9BdTTVA8uGkonYGNG2NnfYwSY-hW6wOm9_NvA2HaSKySaTRB8Q; expires=Fri, 03-Apr-2026 19:33:34 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax NID=525=YshixUEgp4jVu1i4YybsourNZ6X70dIpKdoiVvxB3NtCxDPSYfvCfD0V2_WOjE-hEpDTeETbpz9Hg1ytSLPqJDo0SLrya2bULdSFLcRGw50xjO525PM5y6HBJtaMqgmLhIoA6ci_V29-AM20i9yZy6YoFV2CtYKC7srqQnnMKJC7LzAngXuNHN863Hu8q8LhAUiSBI0oeawwrwDUkoHi; expires=Mon, 06-Apr-2026 19:33:34 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## microsoft.com

```
200 OK
map[Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:33:39 GMT] Etag:["85de642e1467807f64f7e10807df3869:1711562737.176211"] Last-Modified:[Tue, 26 Mar 2024 18:16:43 GMT] Server:[AkamaiNetStorage]]
```

## ibm.com

```
200 OK
map[Cache-Control:[max-age=600] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests] Content-Type:[text/html;charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:39 GMT] Etag:["2cee1-6406e142ce199-gzip"] Expires:[Sun, 05 Oct 2025 19:43:39 GMT] Last-Modified:[Sun, 05 Oct 2025 19:09:49 GMT] Set-Cookie:[_abck=C5782C450F479979CD214B7C137F1DC4~-1~YAAQqYnMF2tSWqaZAQAAsIzdtQ6CMCnEeUocbdXWK1P31bm8GaZTvE/24c11wIN1SmFsMPdfXvqiF3PsVb+v2vN8uvRZZmQqu2sMgezW3Q48EkApk/KOoPGakSnZwP9VoCj519O5qVxXUzJJW45LYbsiiCr5dF4EgVDjQEprDBVVkzvRYPDrm+3m99By4lGz9AY3O4KTxRVvGbLM1G4WO8zWXUPheBYmpPVmqp/Pwd5R8NGPN/Vs9ckX2zBkhqo2SxgaMMvpv1IEVETyTsmm+RvVsmLhtCXIqyg2WJI4ZbQnAkGb0FB/XzTTwQ52v1dMddJ9z35a/uFONawbvORUUFHgmudE0H5IWqk4ekV1PlaJAlrW9AUa+skOC8LP31mhz39RVaBVK7oHHjzdSdBrvzUE1jw5vygP9ePkQjkJIqdd5L17SiRh3t0+NbSovhK38wmEQG5Nee8zCCh3eVGqvyY=~-1~-1~-1~-1~-1; Domain=.ibm.com; Path=/; Expires=Mon, 05 Oct 2026 19:33:39 GMT; Max-Age=31536000; Secure bm_sz=5F73BAE63979FCB3F2EBC0CC1049EDFA~YAAQqYnMF2xSWqaZAQAAsIzdtR2QCjBTkcAfyJHdtXHmKnuoA7znp8uLjmpk7Ss0/FB0yOyEWT4zXlbheHLI6DI51QeJjYXLg8q3HOrIXBqBrpu4K2b622prbwzcLYQT4FQhLgm2dBXwxtppUkSmHrEae1w/4X1S+oL215T8xADmrObncFx9CYQvqO15rNk1xPQzayo/VP59BmKF20042nmxPSKLw8pJY4odoyk3Hjtgu1lW60FeoVlxgaeGLeqJ4QD2D3z8j7TAptF+x9eO9AYhehrQcFmeHArQ2Loxn0P42Ii5qeK17uht99fvpYcFHxQgFhdgNn09B/SGTHoSvRSe8n1rfsYS~3289142~3687220; Domain=.ibm.com; Path=/; Expires=Sun, 05 Oct 2025 23:33:39 GMT; Max-Age=14400] Strict-Transport-Security:[max-age=31536000] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN]]
```

## target.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[private, no-cache] Connection:[keep-alive] Content-Security-Policy:[frame-ancestors 'self' https://*.target.com;] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:40 GMT] Etag:["5iqxxlp1ki9zhs"] Referrer-Policy:[no-referrer-when-downgrade] Set-Cookie:[TealeafAkaSid=VpR8NhFbAgYYmz4XL5Fq43-CuSh4OJBx; Expires=TueTealeafAkaSid=VpR8NhFbAgYYmz4XL5Fq43-CuSh4OJBx; Expires=Tue, 04 Nov 2025 19:33:39 GMT; Path=/; Domain=target.com; adScriptData=VA; Domain=target.com; Path=/; SameSite=none; Secure; Max-Age=86400; idToken=eyJhbGciOiJub25lIn0.eyJzdWIiOiI5NDA0MWZiMi1jZWIzLTQ0ZGUtYjhkZS1jOTUzOTc1YzhjM2QiLCJpc3MiOiJNSTYiLCJleHAiOjE3NTk3NzkyMTksImlhdCI6MTc1OTY5MjgxOSwiYXNzIjoiTCIsInN1dCI6IkciLCJjbGkiOiJlY29tLXdlYi0xLjAuMCIsInBybyI6eyJmbiI6bnVsbCwiZm51IjpudWxsLCJlbSI6bnVsbCwicGgiOmZhbHNlLCJsZWQiOm51bGwsImx0eSI6ZmFsc2UsInN0IjoiVkEiLCJzbiI6bnVsbH19.; Domain=target.com; Path=/; SameSite=none; Secure; sapphire=1; Max-Age=2629746; Expires=Wed, 05 Nov 2025 06:02:45 GMT; Path=/; Domain=.target.com; Secure; SameSite=None fiatsCookie=DSI_1420|DSN_Chesapeake%20Sq%20Mall|DSZ_23321|server; Domain=.target.com; Path=/; Secure; SameSite=Lax sddStore=DSI_1420|DSN_Chesapeake%20Sq%20Mall|DSZ_23321|server; Domain=.target.com; Path=/ GuestLocation=23703|36.840|-76.370|VA|US;Path=/; Secure; Max-Age=86400 visitorId=0199B5DD8D540201B0772FB4FBBB2414; Max-Age=63072000; Expires=Tue, 05 Oct 2027 19:33:39 GMT; Path=/; Domain=.target.com; Secure; SameSite=None refreshToken=fy9Tl4RnqbDCaqKRi3Iis8Hf_R2G-TCbwnuIr8BNY9paTdMgM8NpEIz3kImuLcsdPFNrkRG8Qg8sYPdv_8RNZA; Domain=target.com; Path=/; SameSite=none; Secure; HttpOnly; Max-Age=15552000; accessToken=eyJraWQiOiJlYXMyIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5NDA0MWZiMi1jZWIzLTQ0ZGUtYjhkZS1jOTUzOTc1YzhjM2QiLCJpc3MiOiJNSTYiLCJleHAiOjE3NTk3NzkyMTksImlhdCI6MTc1OTY5MjgxOSwianRpIjoiVEdULmQ1MzQ3OTJhMTM0OTRmMjE5NzUyNzBjN2I2ODczYzhjLWwiLCJza3kiOiJlYXMyIiwic3V0IjoiRyIsImRpZCI6IjQwMmFhNmM4MzA2NDkzYjUyZGNkOWJjYWYxYTFlY2MyODJhYzcyODRjMGMwZDAwODg2OWEzMmQ1YTJmNjdkMmMiLCJzY28iOiJlY29tLm5vbmUsb3BlbmlkIiwiY2xpIjoiZWNvbS13ZWItMS4wLjAiLCJhc2wiOiJMIn0.UsVgxYHbgTmPjkDkivYAOhCsBEeBbd5YnIwJLsno9kSbXbNDjgS1A_13Lf6uLgM6Y2x3wmtuG1MMvii8maxhas9DhkM8BU__FZ3EpOGqThggc8Q2CVT41D8Q9H0uDXx_2ZmQOVhF72wgJZMC_kaBHdk0gG8htNXPIYrUUrdX4EBUahzuimFRRSjR1i1NgAvXFYNK7f5tmebUeBTTgTMVaI2oHRvy45lqMtaeX16Wy9XnexCwzm68FlkprpmT9OUSXh550ckz2zsIXDmh1X0INh2fYsIq7UiO_L7sOp9IugPpQfPz-MKaY-FWmw-YbbYC5Jty7p8gQNTy8UEXhOUAzw; Domain=target.com; Path=/; SameSite=none; Secure; HttpOnly; egsSessionId=2fbb2b11-a247-4c14-9131-ec429d68a2a8; Domain=target.com; Path=/; SameSite=none; Secure; HttpOnly; Max-Age=3600;] Strict-Transport-Security:[max-age=31536000; includeSubDomains] Vary:[Accept-Encoding] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Sigsci-Origin-Status:[200]]
```

## justice.gov

```
200 OK
map[Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[public, max-age=99386] Connection:[keep-alive] Content-Language:[en] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:45 GMT] Etag:["1759533010"] Expires:[Mon, 06 Oct 2025 23:10:11 GMT] Last-Modified:[Fri, 03 Oct 2025 23:10:10 GMT] Server:[nginx] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Age:[0] X-Ah-Environment:[prod] X-Cache-Hits:[2] X-Content-Type-Options:[nosniff] X-Drupal-Dynamic-Cache:[MISS] X-Frame-Options:[SAMEORIGIN] X-Generator:[Drupal 10 (https://www.drupal.org)] X-Request-Id:[v-1c037174-a0ae-11f0-ae2a-63ed0fa55875] X-Xss-Protection:[1; mode=block]]
```

## alexa.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=86400] Connection:[keep-alive] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:33:45 GMT] Server:[Server] Strict-Transport-Security:[max-age=47474747; includeSubDomains; preload] Vary:[Content-Type,Accept-Encoding,User-Agent] Via:[1.1 dd544307ffc0aa911ba150f7ec4bd3b4.cloudfront.net (CloudFront)] X-Amz-Cf-Id:[lBaX2ruDSgtFV8Pd_A_5kJB0Ha5rPcGK472BpNqBTxhg4zYAlIo1cA==] X-Amz-Cf-Pop:[IAD55-P10] X-Amz-Rid:[2DJMXVYGVXV6JMCB2D4K] X-Cache:[Miss from cloudfront]]
```

## aliexpress.com

```
200 
map[Access-Control-Allow-Credentials:[true] Bxpunish:[1] Bxuuid:[f05b1aff70534072f4db14d5e7ce1fa0] Cache-Control:[no-store] Connection:[keep-alive] Content-Type:[text/html;charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:47 GMT] Eagleeye-Traceid:[213bd97f17596928269347853eeddf] Edge-Control:[bypass-cache] Server:[Tengine/Aserver] Strict-Transport-Security:[max-age=31536000] Timing-Allow-Origin:[*] Vary:[Accept-Encoding]]
```

## forms.gle

```
400 Bad Request
map[Accept-Ch:[Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version] Accept-Ranges:[bytes] Alt-Svc:[h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400] Cache-Control:[no-cache, no-store, max-age=0, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[require-trusted-types-for 'script';report-uri /_/DurableDeepLinkUi/cspreport,script-src 'unsafe-inline' https: http:;object-src 'none';base-uri 'self';report-uri /_/DurableDeepLinkUi/cspreport;worker-src 'self'] Content-Type:[text/html; charset=utf-8] Cross-Origin-Opener-Policy:[unsafe-none] Date:[Sun, 05 Oct 2025 19:33:47 GMT] Expires:[Mon, 01 Jan 1990 00:00:00 GMT] Permissions-Policy:[ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*] Pragma:[no-cache] Vary:[Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site, x-fh-requested-host, accept-encoding] X-Cache:[MISS] X-Cache-Hits:[0] X-Served-By:[cache-iad-kiad7000121-IAD] X-Timer:[S1759692828.637031,VS0,VE77]]
```

## hollywoodreporter.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests frame-ancestors 'none'] Content-Security-Policy-Report-Only:[default-src data: 'unsafe-inline' 'unsafe-eval' https: blob: http://*.files.wordpress.com wss://www.hollywoodreporter.com; report-uri https://pmcuri.report-uri.com/r/d/csp/reportOnly] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:47 GMT] Host-Header:[a9130478a60e5f9135f765b23f26593b] Link:[<https://www.hollywoodreporter.com/wp-json/>; rel="https://api.w.org/" <https://wp.me/cEQmt>; rel=shortlink] Server:[nginx] Strict-Transport-Security:[max-age=31536000] Vary:[Accept-Encoding] X-Cache:[HIT] X-Hacker:[If you're reading this, you should visit https://join.a8c.com/viphacker and apply to join the fun, mention this header.] X-Powered-By:[WordPress VIP <https://wpvip.com>] X-Rq:[dca7 0 20 9980] X-Ua-Compatible:[IE=Edge]]
```

## kakao.com

```
200 OK
map[Accept-Ranges:[none] Connection:[keep-alive] Content-Length:[166183] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:49 GMT] Etag:["28927-z+z2vl0P9iXrRVKIdSieCn4nfB4"] Set-Cookie:[isEnglish=false; Path=/] Strict-Transport-Security:[max-age=15724800] Vary:[Accept-Encoding]]
```

## video.google.com

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-aa5Gw3DCxK2Acv4l3BdAIg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:49 GMT] Expires:[Sun, 05 Oct 2025 19:33:49 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5vGOQq0DLkFO_EC6tFMih2FzvC1xNMa44_iBLPLE2O3GESP1jkIEw; expires=Fri, 03-Apr-2026 19:33:49 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax NID=525=CdYgXObFGHaf9xhGp_qkGT_NItPTZQshjbbqq5g1SjIo5XjLgbuGnaMvJ5XvTCXPZLbRzsduxz3_Huv5av8PcuqVhAQ2ye7Yx_Db8F6GwljYGE9vplxVTVvqu_osoolK4ICr1oM0ABSc5yw-z1I8ICZ55zKF9FmKP2gO3dwXwCL6XIMxtest58C-uiMwUffn4_MkZg4Hw89sTSl6nhg; expires=Mon, 06-Apr-2026 19:33:49 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## freepik.com

```
403 Forbidden
map[Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[no-cache, no-store, must-revalidate] Connection:[keep-alive] Content-Length:[4090] Content-Type:[text/html] Date:[Sun, 05 Oct 2025 19:33:50 GMT] Expires:[0] Mime-Version:[1.0] Pragma:[no-cache] Strict-Transport-Security:[max-age=31536000 ; includeSubDomains ; preload]]
```

## francetvinfo.fr

```
200 OK
map[Access-Control-Allow-Origin:[*] Alt-Svc:[h3=":443"; ma=93600] Cache-Control:[public, max-age=38] Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:50 GMT] Etag:["a0cbbc7746e4b37e4e5a177d89844b66-gzip"] Server:[Microsoft IIS 4.0] Strict-Transport-Security:[max-age=31536000] Version:[1.0] X-Content-Type-Options:[nosniff] X-Xss-Protection:[1; mode=block]]
```

## interia.pl

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[no-cache] Connection:[keep-alive] Content-Length:[441595] Content-Security-Policy:[upgrade-insecure-requests] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:51 GMT] Etag:["68e2c817-6bcfb"] Keep-Alive:[timeout=20] Last-Modified:[Sun, 05 Oct 2025 19:33:43 GMT] Server:[nginx] Set-Cookie:[inpl_mobile=m;Domain=.interia.pl;Path=/;Max-Age=260000] Vary:[*] X-Content-Type-Options:[nosniff] X-Xss-Protection:[1; mode=block]]
```

## reddit.com

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[private, s-maxage=1, max-age=1, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[child-src 'self' blob: accounts.google.com;connect-src 'self' events.redditmedia.com o418887.ingest.sentry.io *.redd.it *.reddit.com www.redditstatic.com vimeo.com alb.reddit.com accounts.google.com/gsi/ www.google.com/recaptcha/ w3-reporting.reddit.com reddit-uploaded-emoji.s3-accelerate.amazonaws.com reddit-uploaded-media.s3-accelerate.amazonaws.com reddit-uploaded-video.s3-accelerate.amazonaws.com reddit-subreddit-uploaded-media.s3-accelerate.amazonaws.com wss://*.wss.redditmedia.com wss://gql-realtime.reddit.com gql-realtime.reddit.com *.giphy.com js.stripe.com support.reddithelp.com matrix.redditspace.com www.google.com/ccm/ styles.redditmedia.com a.thumbs.redditmedia.com b.thumbs.redditmedia.com;default-src 'self';font-src 'self' data:;form-action 'none';frame-ancestors 'self' *.reddit.com *.snooguts.net;frame-src 'self' www.reddit.com www.youtube.com www.youtube-nocookie.com player.vimeo.com *.redditmedia.com cdn.embedly.com redgifs.com www.redgifs.com embed.reddit.com accounts.google.com/gsi/ www.google.com/recaptcha/ recaptcha.google.com/recaptcha/ js.stripe.com hooks.stripe.com *.devvit.net td.doubleclick.net/ www.googletagmanager.com/ https://www.tiktok.com/;img-src 'self' data: blob: https:;manifest-src 'self' www.redditstatic.com;media-src 'self' blob: data: *.redd.it www.redditstatic.com matrix.redditspace.com;object-src 'none';script-src 'self' 'strict-dynamic' 'report-sample' 'unsafe-inline' 'unsafe-eval' 'nonce-nhMe7YfJ1aqgboRJlWhTCA==';style-src 'self' 'unsafe-inline' www.redditstatic.com *.reddit.com accounts.google.com/gsi/style;style-src-attr 'unsafe-inline';worker-src 'self' blob:;report-to csp;report-uri https://w3-reporting-csp.reddit.com/reports] Content-Security-Policy-Report-Only:[object-src 'none';script-src 'nonce-nhMe7YfJ1aqgboRJlWhTCA==' 'report-sample' 'unsafe-eval' 'strict-dynamic' https:;frame-ancestors 'self' *.reddit.com *.snooguts.net;base-uri 'self';report-to csp;report-uri https://w3-reporting-csp.reddit.com/reports] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:33:51 GMT] Nel:[{"report_to": "w3-reporting-nel", "max_age": 14400, "include_subdomains": false, "success_fraction": 1.0, "failure_fraction": 1.0}] Report-To:[{"group": "w3-reporting-nel", "max_age": 14400, "include_subdomains": true,  "endpoints": [{ "url": "https://w3-reporting-nel.reddit.com/reports" }]}, {"group": "w3-reporting", "max_age": 14400, "include_subdomains": true, "endpoints": [{ "url": "https://w3-reporting.reddit.com/reports" }]}, {"group": "w3-reporting-csp", "max_age": 14400, "include_subdomains": true, "endpoints": [{ "url": "https://w3-reporting-csp.reddit.com/reports" }]}] Server:[snooserv] Set-Cookie:[loid=000000001z8jq8whze.2.1759692831894.Z0FBQUFBQm80c2dmWGtMeEtKTXdUVDNubU16ZlJJY0c0TXpsTEtyVWRBWVcxamU5YnZfRi1UdVF2ZjVFVEtMeWNVSFlKaWJseUx3dTMzMngzbnFPX3ZVbWdBNG9rcjZWMURmUWNEY0ZESHdSM05ZWURQUjNUb0xReGlybHpSay1RaXBKZ1VEQU96Mk4; path=/; expires=Tue, 05 Oct 2027 19:33:51 GMT; domain=.reddit.com; samesite=none; secure session_tracker=hebfnglkjphdeckcgg.0.1759692831898.Z0FBQUFBQm80c2dmaHJPRGxvb2dUX0txRkx4RzdhMVo3UVFVM1ZrN0MwRWNTOW9vbzAydmVnZ2gyNTNXM0NfZUVHbmZSWFhScWUtdjJjNkVNZGxvRTcwc2prdEp3T1JjUW9pSVhUZnNLVDZEc0ZhTGE3aENydFdBbWxUR09VRXBzQzFKQWctOUgzb3c; path=/; domain=.reddit.com; secure; SameSite=None; Secure csrf_token=df5405fa713bb72ec36753c7b40416b7; path=/; domain=.reddit.com; samesite=strict; secure token_v2=eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJsb2lkIiwiZXhwIjoxNzU5Nzc5MjMxLjg5NDg1NiwiaWF0IjoxNzU5NjkyODMxLjg5NDg1NiwianRpIjoicVBtVTRuWkRDMUNBQkxjelAtNzBDV1JXSldpeDZnIiwiY2lkIjoiMFItV0FNaHVvby1NeVEiLCJsaWQiOiJ0Ml8xejhqcTh3aHplIiwibGNhIjoxNzU5NjkyODMxODk0LCJzY3AiOiJlSnhra2RHT3REQUloZC1GYTVfZ2Y1VV9tMDF0Y1lhc0xRYW9rM243RFZvY2s3MDdjRDRwSFA5REtvcUZEQ1pYZ3FuQUJGZ1RyVERCUnVUOW5MbTNnMmlOZTh0WXNabkNCRm13RkRya21MR3NpUVFtZUpJYXl4c21vSUxOeUZ5dXRHTk5MVDBRSnFoY01yZUZIcGMyb2JrYmk1NmRHRlc1ckR5b3NWZmwwdGpHRkxZbnhqY2JxdzJwdUM2bk1rbkxRdmtzWHZUak45VzM5dm16X1NhMEo4T0txdW1CM2hsSkNHNHNmcGltM2Q5VGs1NnRDeGExOTNxUTJ1ZDYzSzU5MWl3ME83ZWY2X2xySXhtWFkyaC1KdnQzMXktaEE0ODhMelBxQUVhczRVY1pkbVFkX2xVSFVMbWdKR01KNHRNSTVNcmwyMzhKdG12VHY4YnRFejk4TS1LbU5feldETlJ6Q2VMUXBfSDFHd0FBX184UTFlVFIiLCJmbG8iOjF9.g119HigXkgY0zLn7zFclMWmyoT8wPHrSEbbZsb12BYZW575Fo3cfO8N9w3nEA94ZttslVHxgUsmKS-Nx_4cMgp-K__1YM0PJl69oAwnAPAr5xCO72wHJmhvuoYNAbLn4S2NT-fsvIiIGqygCrKzLyZvHMNvz0E9546rvRrH3kALWvhlqO7-sNKHQo5qeU7XEOJwD5uUQ5kh4bYVg6d8DJabExdF2syBj2Mya_IwFknMEd3GnM7Dk25MFLyu0vYh_OmU_YB8z4JjR5b-ACvGK-f1WwkY_RP0OexpMLv11cqxOMm6v0ZjZErO5X-CbjX4vy1JPzVz6D09sY5qzs318Lg; Path=/; Domain=reddit.com; Expires=Mon, 06 Oct 2025 19:33:51 GMT; HttpOnly; Secure csv=2; Max-Age=63072000; Domain=.reddit.com; Path=/; Secure; SameSite=None edgebucket=GnWfQThxoVGOmberrU; Domain=reddit.com; Max-Age=63071999; Path=/;  secure] Strict-Transport-Security:[max-age=31536000; includeSubdomains] Vary:[Accept-Encoding,accept-language] Via:[1.1 varnish] X-Content-Type-Options:[nosniff] X-Frame-Options:[SAMEORIGIN] X-Is-Wrs:[false] X-Ratelimit-Remaining:[199.0] X-Ratelimit-Reset:[368] X-Ratelimit-Used:[1] X-Xss-Protection:[1; mode=block]]
```

## whitehouse.gov

```
200 OK
map[Accept-Ranges:[bytes] Cache-Control:[max-age=300, must-revalidate] Connection:[keep-alive] Content-Security-Policy:[upgrade-insecure-requests; frame-ancestors 'none'] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:52 GMT] Referrer-Policy:[strict-origin-when-cross-origin] Server:[nginx] Strict-Transport-Security:[max-age=31536000;includeSubdomains;preload] Vary:[Accept-Encoding] X-Cache:[HIT] X-Content-Type-Options:[nosniff] X-Frame-Options:[DENY] X-Rq:[dca5 181 253 80] X-Xss-Protection:[1; mode=block]]
```

## google.es

```
200 OK
map[Alt-Svc:[h3=":443"; ma=2592000,h3-29=":443"; ma=2592000] Cache-Control:[private] Content-Security-Policy-Report-Only:[object-src 'none';base-uri 'self';script-src 'nonce-NLgpkW27H2v0QbEHd8yWYw' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:57 GMT] Expires:[Sun, 05 Oct 2025 19:33:57 GMT] P3p:[CP="This is not a P3P policy! See g.co/p3phelp for more info."] Server:[gws] Set-Cookie:[AEC=AaJma5vBFgxYziPTrS0-PkV66gwY71iN71FN1ZL5Va1OlABirAvRpgP9XQ; expires=Fri, 03-Apr-2026 19:33:57 GMT; path=/; domain=.google.es; Secure; HttpOnly; SameSite=lax NID=525=EpxBHASbIZ9lCEV1tBfdlAQ7tzCSI900B2yLW5wlrCTUGETAOYPc8mesn4LU5u89SJKRe8a3IlKJp-dGc-D-j-kWeQeuZQ6HZrjqydX4Mu7n1df6cZc_VhC1pujSyUFiGVPeQXN0bLrysLM4BzODMa9xwmdyaLBXlH-fp1YTyZsqD2ftj4SAAW_cQEySNHdU4avBZXEwYEVYGJlCMRXy; expires=Mon, 06-Apr-2026 19:33:57 GMT; path=/; domain=.google.es; Secure; HttpOnly; SameSite=none] X-Frame-Options:[SAMEORIGIN] X-Xss-Protection:[0]]
```

## psychologytoday.com

```
200 OK
map[Accept-Ranges:[bytes] Age:[350] Cache-Control:[max-age=5529600, public] Connection:[keep-alive] Content-Language:[en] Content-Length:[172911] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:33:57 GMT] Etag:[W/"1759692482-gzip"] Expires:[Sun, 19 Nov 1978 05:00:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:26:12 GMT] Link:[<//cdn2.psychologytoday.com>; rel="preconnect"; crossorigin="1", <//cdn2.psychologytoday.com>; rel="dns-prefetch", <https://www.psychologytoday.com/au>; rel="alternate"; hreflang="en-AU", <https://www.psychologytoday.com/ca>; rel="alternate"; hreflang="en-CA", <https://www.psychologytoday.com/gb>; rel="alternate"; hreflang="en-GB", <https://www.psychologytoday.com/ie>; rel="alternate"; hreflang="en-IE", <https://www.psychologytoday.com/nz>; rel="alternate"; hreflang="en-NZ", <https://www.psychologytoday.com/sg>; rel="alternate"; hreflang="en-SG", <https://www.psychologytoday.com/us>; rel="alternate"; hreflang="en-US", <https://www.psychologytoday.com/za>; rel="alternate"; hreflang="en-ZA", <https://www.psychologytoday.com/ar>; rel="alternate"; hreflang="es-AR", <https://www.psychologytoday.com/cl>; rel="alternate"; hreflang="es-CL", <https://www.psychologytoday.com/es>; rel="alternate"; hreflang="es-ES", <https://www.psychologytoday.com/mx>; rel="alternate"; hreflang="es-MX", <https://www.psychologytoday.com/co>; rel="alternate"; hreflang="es-CO", <https://www.psychologytoday.com/gt>; rel="alternate"; hreflang="es-GT", <https://www.psychologytoday.com/cr>; rel="alternate"; hreflang="es-CR", <https://www.psychologytoday.com/pa>; rel="alternate"; hreflang="es-PA", <https://www.psychologytoday.com/pr>; rel="alternate"; hreflang="es-PR", <https://www.psychologytoday.com/pe>; rel="alternate"; hreflang="es-PE", <https://www.psychologytoday.com/uy>; rel="alternate"; hreflang="es-UY", <https://www.psychologytoday.com>; rel="alternate"; hreflang="x-default", </theme-assets/touch-icons/apple-touch-icon.png>; rel="apple-touch-icon", <//cdn2.psychologytoday.com>; rel=preconnect; crossorigin] Server:[Apache] Strict-Transport-Security:[max-age=31536000] Vary:[Cookie,Origin,Accept-Encoding] Via:[1.1 ZZ] X-Cache:[HIT] X-Cache-Hits:[568] X-Consumer-Id:[848de849-ea1d-442f-a4ec-cfe472f6a19f] X-Content-Type-Options:[nosniff] X-Country-Code:[US] X-Drupal-Cache:[MISS] X-Frame-Options:[SAMEORIGIN] X-Region-Code:[VA] X-Served-By:[content-varnish-primary-i-0e2d4f65ab99f6b69.ptwww.internal] X-Varnish:[342988098 345343118] Xkey:[fQEX Lcck hD2v KLlM 7yIT F8ja VgQb X806 YeL1 e-HI 9fG4 36DO 2OQo hJUX PEta bJcX Ton2 XuDL Pks5 EwUD gMzE fCnT 4TG_ 0sDY _GAW 9HSw MSBx iN81 __Ju J2hr Bf76 2aeR 1yY5 uTrn 16GH rIqW 6Sl0 Z-xt cDC1 ljAN Nn-S MsYZ 68c1 ct64 pTQ0 -ht1 Uv4Y dPrC IyWs u1nC 7QY- RAhe vSRG BvBs 94RV ra7g PiIj Ay0I Rvwb Feuw bz6P 5tCH PoGK cWkI oUwh hhy9 awGJ emmh mBoe i-00 H3s1 4o33 6Kbm UlS3 ijWS 29hc yUlc Aw6e 4oXq 641m 1ltQ 1yYT 5Z0p qFa0 qR9l zIbB QqvA roHR hRSt TXuJ ddyd vODb jOdD XY1C Z_Km TtC5 RKPl Tm9J Ty2z Fj7Y Ieo_ wdyg odjP sHHJ 0-LU 8WNT QSCW DeAQ j4LV Fk_T 8lSc F6pS Zsy2 40sq fgDL 0oEP KNDV AGlR sbKR Ny-N XUJj TLg0 xabd EjH1 Kx6E jyi3 veCQ 0ZHk snhN sRde XRf_ KCvA MvV3 kMuJ MpRE wkzg 73TU Qbn0 X_iJ q_cu sOLn XgFM 1-4d O8dJ vD7t F0-_ WUtp wqHR dEeO qhjf EOV3 CaK4 HGEm XyqP 2bRh d6cI BYd8 Pecr L3bs PmWm C_XS OaVj cxel BWxF YcD9 zMot r2zn r3sJ ce9u 0H0k xvhb fJjG vZQm UcKc 8bgo vbHd meU2 rLlk rfiD a3PR rQFz UDbt 75IO HVSa qaB5 2M_T IIiP DcCw qTRA UYDZ CN4d 3Obu T06s 0R00 WFep zYmM qXnw qEaI 1ENg 4zvo GS6A JumO O-uy G7mI hL4v TTYc fdvN xpBl 96Y3 vStc 0fxA 8WjC Goo7 xygE 5kyS r0Os jALr jiU7 evIg 3QFQ bBv0 dBbN nFOC O11P oL_J XOuA lyPt _PaU PQzV hs7t sExy uUDQ zSy- 2YZT atHj owEh qZp_ aMc5 oWsK oSDl b5Ex 0D-t F0lD RmDG _Os1 f3He _SpR sXHH ec2U xWxz V38a sO2x NwW5 kJ3G RxAP nHt8 INbV 3vFC gGUE PLZe OSpF Cumu JnYM BmFG AfbT OlIB rdUt A9Bd tomE AsfR idCc EQwD BYVn 4loF P9SA xILn TQ8A w-PQ 1xq- fnYO P2eQ wXQd G_PS U-Ja g0Lm EhTv P4ym Gkfw cQGt V5dF _Six TYQ7 0HNp 3f8b qLwN QBaD 9wv5]]
```

## ja.wikipedia.org

```
200 OK
map[Accept-Ch:[] Accept-Ranges:[bytes] Age:[14244] Cache-Control:[private, s-maxage=0, max-age=0, must-revalidate, no-transform] Content-Language:[ja] Content-Length:[123558] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 15:36:33 GMT] Last-Modified:[Sun, 05 Oct 2025 15:35:44 GMT] Nel:[{ "report_to": "wm_nel", "max_age": 604800, "failure_fraction": 0.05, "success_fraction": 0.0}] Report-To:[{ "group": "wm_nel", "max_age": 604800, "endpoints": [{ "url": "https://intake-logging.wikimedia.org/v1/events?stream=w3c.reportingapi.network_error&schema_uri=/w3c/reportingapi/network_error/1.0.0" }] }] Server:[mw-web.eqiad.main-7d67679796-xrxrb] Server-Timing:[cache;desc="hit-front", host;desc="cp1110"] Set-Cookie:[WMF-Last-Access=05-Oct-2025;Path=/;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT WMF-Last-Access-Global=05-Oct-2025;Path=/;Domain=.wikipedia.org;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT WMF-DP=a21;Path=/;HttpOnly;secure;Expires=Mon, 06 Oct 2025 00:00:00 GMT GeoIP=US:VA:Portsmouth:36.87:-76.39:v4; Path=/; secure; Domain=.wikipedia.org NetworkProbeLimit=0.001;Path=/;Secure;SameSite=None;Max-Age=3600 WMF-Uniq=hUnbH2sXE-7NzwDDumPb0gKDAAAAAFvdK7N8pwIappHJWjtNlAo7Ujeo0G88zesM;Domain=.wikipedia.org;Path=/;HttpOnly;secure;SameSite=None;Expires=Mon, 05 Oct 2026 00:00:00 GMT] Strict-Transport-Security:[max-age=106384710; includeSubDomains; preload] Vary:[Accept-Encoding,X-Subdomain,Cookie,Authorization,User-Agent] X-Analytics:[] X-Cache:[cp1110 miss, cp1110 hit/43] X-Cache-Status:[hit-front] X-Client-Ip:[74.99.95.85] X-Content-Type-Options:[nosniff]]
```

## telegram.me

```
200 OK
map[Cache-Control:[no-store] Connection:[keep-alive] Content-Length:[18028] Content-Type:[text/html; charset=utf-8] Date:[Sun, 05 Oct 2025 19:34:02 GMT] Pragma:[no-cache] Server:[nginx/1.18.0] Set-Cookie:[stel_ssid=0f70ad62e10c67b9ae_6797499117473447688; expires=Mon, 06 Oct 2025 06:40:42 GMT; path=/; samesite=None; secure; HttpOnly] Strict-Transport-Security:[max-age=31536000; includeSubDomains; preload] X-Frame-Options:[SAMEORIGIN]]
```

## enable-javascript.com

```
200 OK
map[Connection:[keep-alive] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:34:03 GMT] Server:[nginx] Strict-Transport-Security:[max-age=31536000; includeSubdomains; preload]]
```

## de.wikipedia.org

```
200 OK
map[Accept-Ch:[] Accept-Ranges:[bytes] Age:[903] Cache-Control:[private, s-maxage=0, max-age=0, must-revalidate, no-transform] Content-Language:[de] Content-Length:[85624] Content-Type:[text/html; charset=UTF-8] Date:[Sun, 05 Oct 2025 19:19:00 GMT] Last-Modified:[Sun, 05 Oct 2025 19:14:11 GMT] Nel:[{ "report_to": "wm_nel", "max_age": 604800, "failure_fraction": 0.05, "success_fraction": 0.0}] Report-To:[{ "group": "wm_nel", "max_age": 604800, "endpoints": [{ "url": "https://intake-logging.wikimedia.org/v1/events?stream=w3c.reportingapi.network_error&schema_uri=/w3c/reportingapi/network_error/1.0.0" }] }] Server:[mw-web.eqiad.main-7d67679796-4sqx7] Server-Timing:[cache;desc="hit-front", host;desc="cp1110"] Set-Cookie:[WMF-Last-Access=05-Oct-2025;Path=/;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT WMF-Last-Access-Global=05-Oct-2025;Path=/;Domain=.wikipedia.org;HttpOnly;secure;Expires=Thu, 06 Nov 2025 12:00:00 GMT GeoIP=US:VA:Portsmouth:36.87:-76.39:v4; Path=/; secure; Domain=.wikipedia.org NetworkProbeLimit=0.001;Path=/;Secure;SameSite=None;Max-Age=3600 WMF-Uniq=FFunmjVJL8sLgHf2c61bPwKDAAAAAFvd6sZSEjjVOlBZoc6Ri9jyMNoaR1UbxhQa;Domain=.wikipedia.org;Path=/;HttpOnly;secure;SameSite=None;Expires=Mon, 05 Oct 2026 00:00:00 GMT] Strict-Transport-Security:[max-age=106384710; includeSubDomains; preload] Vary:[Accept-Encoding,X-Subdomain,Cookie,Authorization,User-Agent] X-Analytics:[] X-Cache:[cp1110 miss, cp1110 hit/4] X-Cache-Status:[hit-front] X-Client-Ip:[74.99.95.85] X-Content-Type-Options:[nosniff]]
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
I know Releases would typically done via the githost of the project, but for your convenience i'll put them here.

[Windows]()

[Linux]()

[OSX(Darwin)]()

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
