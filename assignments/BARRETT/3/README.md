Assignment 3

This assignment analyzes the cookie practices of 100 websites randomly assigned from Mozilla's Top 500.  
Using `curl` with the `-ILsk` flags, I collected HTTP response headers and stored them in the `responses/` directory.  
I then parsed these responses with a PowerShell script to extract:
- Final HTTP status codes
- Number of cookies per site
- Cookie attributes: `HttpOnly`, `Secure`, `SameSite`, `Path`

## Directory Layout
All work for this assignment is organized under `assignments/BARRETT/3` and separated into three directories:

* [responses](responses) — Raw HTTP responses for each site  
* [sites.txt](sites.txt) — List of the 100 assigned domains  
* [format.ps1](format.ps1) — This shows how the table information was formatted
* [fetch-cookies2.ps1](fetch-cookies2.ps1) — Script to collect HTTP headers  
* [parse-cookies.ps1](parse-cookies.ps1) — Script to parse responses and extract cookie data  
* [README.md](README.md) — This report



| No. | Site | Status | Total Cookies | HttpOnly | Secure | SameSite Strict | SameSite Lax | SameSite None | SameSite Unset | Path Set | Path != '/' |
|-----|------|--------|---------------|----------|--------|----------------|--------------|---------------|----------------|----------|-------------|
| 1 | abcnews.go.com | 200 | 4 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 0 |
| 2 | adobe.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | amazon.com | 503 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | amebaownd.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 5 | android.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 6 | aol.com | 429 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 7 | apache.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 8 | apnews.com | 200 | 2 | 2 | 1 | 0 | 0 | 1 | 1 | 2 | 0 |
| 9 | archives.gov | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 10 | britannica.com | 200 | 6 | 2 | 1 | 0 | 0 | 1 | 5 | 6 | 0 |
| 11 | buzzfeed.com | 200 | 6 | 0 | 0 | 0 | 0 | 0 | 6 | 5 | 0 |
| 12 | cbc.ca | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 13 | cbslocal.com | 200 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |
| 14 | cdc.gov | 200 | 3 | 0 | 3 | 0 | 0 | 3 | 0 | 3 | 0 |
| 15 | change.org | 200 | 3 | 2 | 3 | 1 | 1 | 1 | 0 | 3 | 0 |
| 16 | cloudflare.com | 200 | 7 | 4 | 5 | 1 | 3 | 1 | 2 | 7 | 0 |
| 17 | cpanel.net | 200 | 2 | 2 | 2 | 0 | 0 | 2 | 0 | 2 | 0 |
| 18 | discord.com | 200 | 4 | 4 | 3 | 0 | 2 | 1 | 1 | 4 | 0 |
| 19 | doi.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 20 | dropbox.com | 200 | 5 | 3 | 4 | 1 | 0 | 3 | 1 | 5 | 0 |
| 21 | estadao.com.br | 200 | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 22 | europapress.es | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 23 | fandom.com | 200 | 3 | 0 | 1 | 0 | 0 | 1 | 2 | 3 | 0 |
| 24 | g.co | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 25 | get.google.com | 200 | 2 | 2 | 1 | 0 | 1 | 0 | 1 | 2 | 0 |
| 26 | giphy.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 27 | gizmodo.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 28 | globo.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 29 | gofundme.com | 200 | 4 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 0 |
| 30 | goo.gl | 400 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 31 | goodreads.com | 200 | 3 | 1 | 0 | 0 | 0 | 0 | 3 | 3 | 0 |
| 32 | google.co.jp | 200 | 2 | 2 | 1 | 0 | 1 | 0 | 1 | 2 | 0 |
| 33 | google.com.tw | 200 | 2 | 2 | 1 | 0 | 1 | 0 | 1 | 2 | 0 |
| 34 | google.es | 200 | 2 | 2 | 1 | 0 | 1 | 0 | 1 | 2 | 0 |
| 35 | google.it | 200 | 2 | 2 | 1 | 0 | 1 | 0 | 1 | 2 | 0 |
| 36 | google.ru | 200 | 2 | 2 | 1 | 0 | 1 | 0 | 1 | 2 | 0 |
| 37 | gravatar.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 38 | harvard.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 39 | histats.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 40 | howstuffworks.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 41 | independent.co.uk | 200 | 19 | 2 | 9 | 0 | 0 | 0 | 19 | 18 | 0 |
| 42 | instructables.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 43 | jstor.org | 200 | 3 | 0 | 3 | 0 | 2 | 1 | 0 | 3 | 0 |
| 44 | lemonde.fr | 200 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| 45 | line.me | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 46 | mail.google.com | 200 | 3 | 3 | 3 | 0 | 0 | 0 | 3 | 3 | 0 |
| 47 | mashable.com | 200 | 2 | 2 | 1 | 0 | 0 | 1 | 1 | 2 | 0 |
| 48 | merriam-webster.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 49 | msn.com | 404 | 7 | 4 | 2 | 0 | 0 | 1 | 6 | 6 | 0 |
| 50 | narod.ru | 200 | 8 | 2 | 0 | 0 | 0 | 0 | 8 | 8 | 0 |
| 51 | nba.com | 200 | 2 | 0 | 1 | 0 | 0 | 0 | 2 | 2 | 0 |
| 52 | nbcnews.com | 200 | 2 | 0 | 2 | 0 | 0 | 2 | 0 | 2 | 0 |
| 53 | newsweek.com | 403 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 54 | nhk.or.jp | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 55 | ovh.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 56 | ovh.net | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 57 | pbs.org | 200 | 2 | 0 | 2 | 0 | 0 | 2 | 0 | 2 | 0 |
| 58 | photos1.blogger.com | 404 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 59 | pinterest.com | 200 | 4 | 3 | 3 | 0 | 1 | 1 | 2 | 4 | 0 |
| 60 | playstation.com | 200 | 2 | 0 | 2 | 0 | 0 | 0 | 2 | 2 | 0 |
| 61 | plesk.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 62 | privacyshield.gov | 200 | 10 | 2 | 10 | 0 | 0 | 1 | 9 | 10 | 0 |
| 63 | psychologytoday.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 64 | rakuten.co.jp | 200 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| 65 | sakura.ne.jp | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 66 | salesforce.com | 200 | 4 | 0 | 2 | 0 | 0 | 1 | 3 | 4 | 0 |
| 67 | sciencemag.org | 403 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 1 | 0 |
| 68 | scmp.com | 403 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 1 | 0 |
| 69 | search.yahoo.com | 500 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 70 | sfgate.com | 405 | 4 | 0 | 4 | 1 | 0 | 1 | 2 | 4 | 0 |
| 71 | spiegel.de | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 72 | ssl-images-amazon.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 73 | stackoverflow.com | 200 | 12 | 12 | 6 | 0 | 2 | 6 | 4 | 12 | 0 |
| 74 | stanford.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 75 | substack.com | 200 | 19 | 11 | 12 | 4 | 6 | 6 | 3 | 19 | 0 |
| 76 | surveymonkey.com | 200 | 5 | 1 | 5 | 0 | 0 | 5 | 0 | 5 | 0 |
| 77 | t-online.de | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 78 | telegra.ph | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 79 | theguardian.com | 200 | 8 | 0 | 4 | 0 | 0 | 0 | 8 | 8 | 0 |
| 80 | thetimes.co.uk | 200 | 10 | 0 | 1 | 0 | 0 | 0 | 10 | 9 | 0 |
| 81 | translate.google.com | 200 | 2 | 2 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |
| 82 | tripadvisor.com | 403 | 2 | 1 | 1 | 0 | 1 | 0 | 1 | 2 | 0 |
| 83 | twitter.com | 520 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 84 | unesco.org | 200 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 1 | 0 |
| 85 | unsplash.com | 200 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 2 | 0 |
| 86 | usatoday.com | 200 | 8 | 0 | 8 | 0 | 8 | 0 | 0 | 8 | 0 |
| 87 | variety.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 88 | vistaprint.com | 200 | 14 | 3 | 7 | 0 | 0 | 7 | 7 | 14 | 0 |
| 89 | vk.com | 418 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 90 | walmart.com | 200 | 3 | 2 | 1 | 0 | 0 | 1 | 2 | 3 | 0 |
| 91 | webnode.page | 200 | 19 | 9 | 3 | 0 | 3 | 0 | 16 | 9 | 0 |
| 92 | weibo.com | 200 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 |
| 93 | wikihow.com | 200 | 3 | 0 | 3 | 0 | 0 | 0 | 3 | 3 | 0 |
| 94 | wikimedia.org | 200 | 8 | 4 | 8 | 0 | 0 | 3 | 5 | 8 | 0 |
| 95 | workspace.google.com | 200 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| 96 | www.gov.uk | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 97 | www.over-blog.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 98 | yandex.com | 200 | 13 | 2 | 5 | 0 | 0 | 0 | 13 | 13 | 0 |
| 99 | ytimg.com | N/A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 100 | ziddu.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Total Websites: 100 | N/A | Total Cookies: 242 | HttpOnly Cookies: 100 | Secure Cookies: 142 | SameSite Cookies: 100 | Strict Cookies: 8 | Lax Cookies: 36 | None Cookies: 56 | Path Cookies: 260 | Path (excluding '/') Cookies: 0 |
| Cookie Stats | Min Cookies: 0 | Max Cookies: 19 | Mean Cookies: 2.74 | Median Cookies: 1 |