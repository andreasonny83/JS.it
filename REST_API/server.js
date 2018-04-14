const express = require('express');
const helmet = require('helmet');
const fraseDelGiorno = require('./frase-del-giorno');
const app = express();

const PORT = 3000;

app.use(helmet());

app.get('/', (req, res) => {
  res.status(201)
    .send('Hello da JS.it');
});

app.get('/status', (req, res) => {
  res.status(200)
    .send({
      messaggio: `JS.it API è in ascolto alla porta ${PORT}`
    });
});

app.get('/frase-del-giono', (req, res) => {
  res.status(200)
    .send(fraseDelGiorno());
});

app.listen(PORT, () => {
  console.log(`Server in ascolto alla porta ${PORT}`);
});
