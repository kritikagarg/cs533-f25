$sitesFile = "sites.txt"
$responses = "responses"

New-Item -ItemType Directory -Force -Path $responses | Out-Null


$ua = "curl/8.x (+course-assignment; HEAD-only)"
$opts = @("--head","-L","-S","-k","--max-redirs","50","--connect-timeout","10","-A",$ua)

$sites = Get-Content $sitesFile | Where-Object { $_.Trim() -ne "" }
$i=0

foreach ($site in $sites) {
    $i++
    $name = $site.Trim()

    # Sanitize filename
    $clean = ($name -replace 'https?://','') -replace '[^\w\.-]','_'
    $file  = Join-Path $responses ($clean + ".txt")

    Write-Host "[$i/$($sites.Count)] $name → $file"

    # Try raw
    & curl @opts $name | Out-File -Encoding utf8 $file

    # Try HTTPS
    if ((Get-Item $file).Length -eq 0) {
        & curl @opts ("https://" + $name) | Out-File -Encoding utf8 $file
    }

    # Try HTTP
    if ((Get-Item $file).Length -eq 0) {
        & curl @opts ("http://" + $name) | Out-File -Encoding utf8 $file
    }
}

Write-Host "Done → responses/*.txt"