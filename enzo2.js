const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://coinmarketcap.com/pt-br/')
  .evaluate(() => {
        //colunas = document.querySelector('tr').innerText;
        linhas = document.querySelector('tbody').innerText; 
    
        //var tabela =[colunas,linhas];
        return linhas;
      })
  .end()
  .then(result => { // ou (result) =>{
    console.log(result);
  })
  .catch(error => {
    console.error('Search failed:', error)
  })