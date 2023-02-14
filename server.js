const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.post('/register', (req, res) => {
  const user = req.body;

  const token = jwt.sign({ user }, 'secretkey', { expiresIn: '1hr' });

  res.status(200).send({
    token: token,
  });
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
