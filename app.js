// include packages and define server related variables
const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const bodyParser =require('body-parser')
const generatePassword = require('./generate_password')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// settiing body-parser
app.use(express.urlencoded ({ extended: true }))

// setting routes 
app.get('/', (req, res) => {
  res.render('index')
})

// setting body-parser
app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password: password, options: options } )
})

// start and listen on the Express sever
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})