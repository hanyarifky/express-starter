const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(5000, 'localhost', () => {
  console.log('Server sedang berjalan');
});
