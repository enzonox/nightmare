const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://coinmarketcap.com/pt-br/')
  //.click('a.currency-name-container.link-secondary')
  //.click('a.price')
  //.wait('#r1-0 a.result__a')
  .evaluate(() => {
        
        nome = document.querySelector('a.currency-name-container.link-secondary').innerText;
        moeda = document.querySelector('a.price').innerText;
        v = [nome,moeda];
        return v;
      })
  .end()
  .then(result => { // ou (result) =>{
    console.log(result);
  })
  .catch(error => {
    console.error('Search failed:', error)
  })