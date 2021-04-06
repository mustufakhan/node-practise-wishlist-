// const getfunc = require('./test')
// console.log(getfunc.mul(2,5))
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./models/wish')
const PORT = process.env.PORT || 5000
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require('./routes')(app)

app.set('view engine','ejs')

app.listen(PORT,()=>{
    console.log("running")
})