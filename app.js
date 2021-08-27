const express = require('express')
//const fs = require('fs')
const app = express()
const port = 3000

const produtos = [
  {id:1, nome:"produto1", preco: 10 },
  {id:2, nome:"produto2", preco: 20 },
  {id:3, nome:"produto3", preco: 30 }
];
let idGerado = 4;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//const produtos2 = JSON.parse(fs.readFileSync("./bd.json", "utf8"));

app.get('/produtos', (req, res) => {
  res.json(produtos)
})

app.get('/produtos/:id', (req, res) => {
  for (const produto of produtos) {
    if(req.params.id == produto.id) {
      return res.json(produto);
    }      
  }
  res.status(404).json({erro:"Produto nao encontrado"});
})

app.post('/produtos', (req, res) => {
  const novoProduto = req.body;
  novoProduto.id = idGerado++;
  produtos.push(novoProduto);
  return res.status(201).json(novoProduto);
})

app.put('/produtos/:id', (req, res) => {
  for (const produto of produtos) {
    if(req.params.id == produto.id) {
      produto.nome = req.body.nome;
      produto.preco = req.body.preco;
      return res.json(produto);
    }      
  }
  res.status(404).json({erro:"Produto nao encontrado"});
})

app.delete('/produtos/:id', (req, res) => {
  for (const indice in produtos) {
    if(req.params.id == produtos[indice].id) {
      const produtoDeletado = produtos.splice(indice,1);
      return res.json(produtoDeletado[0]);
    }      
  }
  res.status(404).json({erro:"Produto nao encontrado"});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})