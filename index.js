const express = require('express');
const phones = require('./phones.json');
const cors = require('cors');

const app = express();
const port = 8088;
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello from the server side.");
})

app.get('/data', (req, res) => {
  res.send("Data coming sooooooooooooon.");
})


app.get('/phones', (req, res) => {
  res.send(phones);
})

app.get('/phones/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const findPhone = phones.find(phone => phone.id === id);
  const filteredPhones = phones.filter(phone=>phone.id<=id);
  res.send(findPhone);
})

app.listen(port, () => {
  console.log("This server running in the port no: " + port);
})