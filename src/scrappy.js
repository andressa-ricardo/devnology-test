import puppeteer from "puppeteer";

export async function scrappy(marca) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops"
  );

  const notebooks = await page.evaluate(function (marca) {
    const all = document.querySelectorAll(".card-body");
    const products = [];

    for (let i = 0; i < all.length; i++) {
      const title = all[i].querySelector("a").title.toLowerCase(); // pegando o titulo pelo elemento title 
      // verificando se o título do produto contém a marca especificada
      if (title.includes(marca.toLowerCase())) {
        const image = all[i].querySelector("img").src || "";
        const href =
          "https://webscraper.io" +
            all[i].querySelector("a").getAttribute("href") || "";
        const description = all[i].querySelector(".description").innerText;
        const ratings = all[i].querySelector(".review-count").innerText;
        const starsContainer = all[i]
          .querySelector(".ratings")
          ?.querySelectorAll(".ws-icon-star");
        const stars = starsContainer ? starsContainer.length : 0;

        products.push({
          title,
          image,
          href,
          description,
          ratings,
          stars,
        });
      }
    }

    return products;
  }, marca);

  //clicando no produto e pegando as informações que tem dentro dele
  for (let i = 0; i < notebooks.length; i++) {
    const product = notebooks[i];
    await page.goto(product.href);

    const options = await page.evaluate(async () => {
      const btns = document.querySelectorAll(".swatches button");

      const values = [];
      for (let j = 0; j < btns.length; j++) {
        const button = btns[j];
        button.click();
        values.push({
          //pegando os dados necessarios. valor do price, valor do hdd e vendo se contém disabled
          hdd: button.value,
          price: document.querySelector(".caption > .price").innerText,
          disabled: button.classList.contains("disabled"),
        });
      }
      return values;
    });
    product["buy_options"] = options;
    console.log((notebooks[i] = product));
  }
  await browser.close();
  return { notebooks };
}

scrappy("lenovo");
