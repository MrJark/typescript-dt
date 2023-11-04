import express from 'express' // para usar esta forma necesitas intalar el type/express

// const express = require('express') // esta forma de trabajar node con js es la forma correcta de hacerlo
const app = express()
const port = 3000

app.get('/', (req, res) => {
  
  res.json({
    pokemon: 'mew',
    id: 151,
    power: 'max'
  })
  
  res.status(401).json({
    ok: false,
    msg: 'There is not token'
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})