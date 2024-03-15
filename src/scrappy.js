import puppeteer from "puppeteer";

async function scrappy() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops");
    await browser.close();
}

scrappy();