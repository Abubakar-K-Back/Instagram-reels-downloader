const express = require('express')
const app = express()
const port = process.env.PORT || 5000

var cors = require('cors')


var bodyparser= require('body-parser')

app.use(bodyparser.json());

const route=require('./routes')

app.use(cors());

app.use('/api',route)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


