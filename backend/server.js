const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const secret = 'secret-key';

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.post('/register', (req, res) => {
  const user = req.body;

  const token = jwt.sign({ user }, 'secretkey', { expiresIn: '1h' });

  console.log(token);
  res.status(200).send({
    token: token,
  });
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
