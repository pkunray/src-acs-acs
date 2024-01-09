const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// for parsing application/json 
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/greet/:name', (req, res) => {
  res.send(`<h2>Hello ${req.params.name}!</h2>`)
})

app.get('/translate/:lang/:text', (req, res) => {
  // call google transtation api
})

app.post('/post', (req, res) => {
  const body = req.body
  res.send('Hello ' + body.name);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})