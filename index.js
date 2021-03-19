const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // console.log('red', req);
  // console.log(res);
  return res.send('Hello World!')
})

app.listen(port, () => {
    console.log(port);
  console.log(`Example app listening at http://localhost:${port}`)
})