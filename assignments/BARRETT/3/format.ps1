# Path to the CSV file created by parse.ps1
$csvFile = "data/per_site.csv"

# Import CSV
$sites = Import-Csv $csvFile

# Build Markdown table header
$mdTable = @()
$mdTable += "| No. | Site | Status | Total Cookies | HttpOnly | Secure | SameSite Strict | SameSite Lax | SameSite None | SameSite Unset | Path Set | Path != '/' |"
$mdTable += "|-----|------|--------|---------------|----------|--------|----------------|--------------|---------------|----------------|----------|-------------|"

# Iterate over sites
$index = 1
foreach ($site in $sites) {
$mdTable += "| $index | $($site.site) | $($site.final_status) | $($site.cookies_total) | $($site.cookies_httponly) | $($site.cookies_secure) | $($site.samesite_strict) | $($site.samesite_lax) | $($site.samesite_none) | $($site.samesite_unset) | $($site.path_set) | $($site.path_non_root) |"
$index++
}

# Output Markdown table
$mdTable -join "`n"
 