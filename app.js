const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

//Importar as rotas
const rotaProduto = require('./rotas/produto_rotas');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Configuração do Mongoose
mongoose.connect('mongodb://localhost:27017/app_produtos')
  .then(() => { 
    console.log('BD conectado')
  }).catch((error) => {
    console.log('Erro ao conectar ao BD')
  });

//Uso das rotas
app.use('/api/produtos', rotaProduto);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})