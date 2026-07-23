const siteUrl = "https://www.iamstivai.com";
const key = "50837edc0df43ec1f57419c430c726fa";
const keyLocation = `${siteUrl}/${key}.txt`;

const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Could not read sitemap: ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>(https:\/\/www\.iamstivai\.com[^<]+)<\/loc>/g)]
  .map((match) => match[1])
  .filter((url) => !url.includes("/opengraph-image"));

if (urlList.length === 0) {
  throw new Error("No canonical URLs were found in the sitemap.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "www.iamstivai.com",
    key,
    keyLocation,
    urlList,
  }),
});

if (!response.ok && response.status !== 202) {
  throw new Error(`IndexNow submission failed: ${response.status}`);
}

console.log(`Submitted ${urlList.length} URLs to IndexNow (${response.status}).`);

