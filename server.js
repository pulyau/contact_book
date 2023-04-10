const express = require("express")
const path = require('path')
var bodyParser = require('body-parser')
var insertContact = require('./database/insert_contact') 

const app = express();

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/scss', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/scss')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './public/views/index.html'))
});

app.get("/add_contact", (req, res) => {
  res.sendFile(path.join(__dirname, './public/views/add_contact_form.html'))
});

app.post("/add_contact_request", urlencodedParser, (req,res) =>{
  insertContact.insert_contact(req.body.fname, req.body.lname, req.body.email, req.body.phone);
  res.sendStatus(200);
})

app.listen(8080, () => {
  console.log('Listening on port ' + 8080);
});