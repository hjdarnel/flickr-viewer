const express = require('express');
const cors = require('cors');
const { feed } = require('./routes/feed');
const app = express();
const port = 3000;

app.use(cors());

app.options('*', cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/feed', feed);

app.listen(port, () => {
  console.log(`Flickr app listening at http://localhost:${port}`);
});
