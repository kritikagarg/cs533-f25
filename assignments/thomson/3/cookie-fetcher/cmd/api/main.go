package main

import (
	"crypto/tls"
	"fmt"
	"net/http"
	"os"
	"strings"
	"time"
)

var httpOnlyCounter, secureCounter, sameSiteCounter, ssLaxCounter, ssStrictCounter, ssNoneCounter, pathCounter, nonRootPathCounter, rootPathCounter, cookieCounter int
var table string

func fetchCookies(url string) {

	tr := &http.Transport{
		TLSClientConfig: &tls.Config{
			ServerName:         url,
			InsecureSkipVerify: true,
		},
		TLSHandshakeTimeout: 5 * time.Second,
	}
	client := &http.Client{Transport: tr}

	req, err := http.NewRequest(http.MethodHead, "https://"+url+":443", nil)
	if err != nil {
		fmt.Println("Error In Creating Request:", err)
		return
	}

	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error In processing request:", err)
		return
	}

	fmt.Println("Response Status:", resp.Status)
	fmt.Println("Response Headers:", resp.Header)

	for _, cookie := range resp.Cookies() {
		fmt.Println("----- COOKIE -----")
		cookieCounter++
		if cookie.HttpOnly == true {
			fmt.Println("Cookie is HttpOnly")
			httpOnlyCounter++
		}
		if cookie.Secure == true {
			fmt.Println("Cookie is Secure")
			secureCounter++
		}
		switch cookie.SameSite {
		case http.SameSiteDefaultMode:
			fmt.Println("Cookie SameSite: DefaultMode")
			sameSiteCounter++
		case http.SameSiteLaxMode:
			fmt.Println("Cookie SameSite: LaxMode")
			sameSiteCounter++
			ssLaxCounter++
		case http.SameSiteStrictMode:
			fmt.Println("Cookie SameSite: StrictMode")
			sameSiteCounter++
			ssStrictCounter++
		case http.SameSiteNoneMode:
			fmt.Println("Cookie SameSite: NoneMode")
			sameSiteCounter++
			ssNoneCounter++
		default:
			fmt.Println("SameSite unknown or not present")
		}
		switch cookie.Path {
		case "":
			fmt.Println("Cookie Path: Not Present")
		case "/":
			fmt.Println("Cookie Path: Root")
			pathCounter++
			rootPathCounter++
		default:
			fmt.Println("Cookie Path:", cookie.Path)
			pathCounter++
			nonRootPathCounter++
		}
		fmt.Println("---------------------")
		row := addRow(url, resp.Status, cookieCounter, httpOnlyCounter, secureCounter, sameSiteCounter, ssStrictCounter, ssLaxCounter, ssNoneCounter, pathCounter, nonRootPathCounter)
		table += row
		defer resp.Body.Close()
	}
}

func addRow(url string, statusCode string, numCookies int, numHttpOnly int, numSecure int, numSameSite int, numSsStrict int, numSsLax int, numSsNone int, numPath int, numNoneRootPath int) string {
	row := fmt.Sprintf("| %s | %s | %d | %d | %d | %d | %d | %d | %d | %d | %d |\n", url, statusCode, numCookies, numHttpOnly, numSecure, numSameSite, numSsStrict, numSsLax, numSsNone, numPath, numNoneRootPath)
	return row
}
func main() {
	sitelist, err := os.ReadFile("../sites.txt")
	if err != nil {
		fmt.Println("Error In reading file:", err)
		return
	}
	sites := strings.Split(string(sitelist), "\n")
	for _, site := range sites {
		if site != "" {
			fmt.Println("Fetching cookies for:", site)
			fetchCookies(site)
		}
	}
	fmt.Println("----- SUMMARY -----")
	fmt.Println("Total Cookies:", cookieCounter)
	fmt.Println("HttpOnly Cookies:", httpOnlyCounter)
	fmt.Println("Secure Cookies:", secureCounter)
	fmt.Println("Cookies with SameSite attribute:", sameSiteCounter)
	fmt.Println(" - Lax:", ssLaxCounter)
	fmt.Println(" - Strict:", ssStrictCounter)
	fmt.Println(" - None:", ssNoneCounter)
	fmt.Println("Cookies with Path attribute:", pathCounter)
	fmt.Println(" - Non-root Path:", nonRootPathCounter)
	fmt.Println(" - Root Path:", rootPathCounter)

}
