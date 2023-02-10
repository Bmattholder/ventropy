const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const port = 8000;
const app = express();


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
  console.log(`The server has started on port ${port}`);
});
