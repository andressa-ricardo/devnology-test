import puppeteer from "puppeteer";

async function scrappy(marca) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops"
  );

  const notebooks = await page.evaluate(function (marca) {
    const all = document.querySelectorAll(".card-body");
    const products = [];

    for (let i = 0; i < all.length; i++) {
      // Obter o título do produto
      const title = all[i].querySelector("a").title.toLowerCase(); // pegando o titulo pelo elemento title e nao pela classe
      // Verificar se o título do produto contém a marca especificada
      if (title.includes(marca.toLowerCase())) {
        const image = all[i].querySelector("img").src || "";
        const href =
          "https://webscraper.io" +
            all[i].querySelector("a").getAttribute("href") || "";
        const description = all[i].querySelector(".description").innerText;
        const price = all[i].querySelector(".price")?.textContent || "";
        const ratings = all[i].querySelector(".review-count").innerText;
        const starsContainer = all[i]
          .querySelector(".ratings")
          ?.querySelectorAll(".ws-icon-star");
        const stars = starsContainer ? starsContainer.length : 0;

        products.push({
          image,
          href,
          title,
          description,
          price,
          ratings,
          stars,
        });
      }
    }

    return products;
  }, "dell");

  console.log(notebooks);

  await browser.close();
}

scrappy("lenovo");
