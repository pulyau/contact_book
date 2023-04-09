const express = require("express")
const path = require('path')

const app = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static('images'))
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'))
});

app.get("/add_contact", (req, res) => {
  res.sendFile(path.join(__dirname, './views/add_contact_form.html'))
});

app.listen(8080, () => {
  console.log('Listening on port ' + 8080);
});