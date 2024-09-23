const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ dest: './uploads/' });

app.post('/bfhl', upload.single('file_b64'), (req, res) => {
  // Logic for processing the request will go here
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});