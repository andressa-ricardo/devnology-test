## 💻 Test Devnology

## ⌨️ Como usar:

- git clone https://github.com/andressa-ricardo/devnology-test.git 
- <code>npm install</code> ou <code>yarn</code> para instalar as dependências.
- <code>npm start</code> ou <code>yarn start</code> para iniciar o servidor.
- Acesse: http://localhost:3000?marca=lenovo no seu navegador e atualize para requisitar.
- Se quiser filtrar notebooks de outra marca, apenas troque a mesma na url e você vai ter acesso aos resultados da marca escolhida.
- No final do scraping será criado um arquivo chamado: "dados.json". Dentro dele estará o resultado. 
  
<hr/>

##  📖 Resposta do servidor: 

```
{
  title: 'lenovo v110-15iap',
  image: 'https://webscraper.io/images/test-sites/e-commerce/items/cart2.png',
  href: 'https://webscraper.io/test-sites/e-commerce/allinone/product/63',
  description: 'Lenovo V110-15IAP, 15.6" HD, Celeron N3350 1.1GHz, 4GB, 128GB SSD, Windows 10 Home',
  ratings: '5 reviews',
  stars: 3,
  buy_options: [
    { hdd: '128', price: '$321.94', disabled: false },
    { hdd: '256', price: '$341.94', disabled: false },
    { hdd: '512', price: '$361.94', disabled: false },
    { hdd: '1024', price: '$381.94', disabled: true }
  ]
}
```

<hr/>

##  📖 Bibliotecas usadas:

- puppeteer
- express
- bodyparser
- fs
  
<hr/>


