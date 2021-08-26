const express = require('express')
const app = express()
const port = 3000

app.get('/produtos', (req, res) => {
  res.send('Listando de Produtos')
})

app.get('/produtos/:id', (req, res) => {
  res.send('Buscando pelo id '+req.params.id);
})

app.post('/produtos', (req, res) => {
  res.status(201).send('Adicionando produto');
})

app.put('/produtos/:id', (req, res) => {
  res.send('Alterando o produto '+req.params.id);
})

app.delete('/produtos/:id', (req, res) => {
  res.send('Deletando o produto '+req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})