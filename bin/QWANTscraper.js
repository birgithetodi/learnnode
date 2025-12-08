import * as cheerio from "cheerio";
import fs from "fs";
import md5 from "md5";

const sleep = ms => new Promise(r => setTimeout(r, ms));
let cacheDir = import.meta.dirname + "/../cache";

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir);
}

const BASE_URL = "https://qwantz.com/";
let url = BASE_URL;

for (let i = 0; i < 10; i++) {
  let body;

  const cacheFile = `${cacheDir}/${md5(url)}.html`;
  if (fs.existsSync(cacheFile)) {
    body = fs.readFileSync(cacheFile, "utf8");
  } else {
    await sleep(1000);
    let res = await fetch(url);
    body = await res.text();
    fs.writeFileSync(cacheFile, body);
  }

  const $ = cheerio.load(body);

  const img = $("img.comic"); 
  const imgUrl = BASE_URL + img.attr("src");
  const imgAlt = img.attr("title") || img.attr("alt") || "(no alt text)";

  console.log(imgUrl);
  console.log(imgAlt);

  let prev = $("a[rel='prev'], a:contains('Previous')").first();

  if (!prev || !prev.attr("href")) {
    console.log("Previous link puudub. Stopp.");
    break;
  }

  url = BASE_URL + prev.attr("href");
}