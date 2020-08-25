const express = require('express');
const app = express();
const axios = require('axios')
const port = 3031;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log('Listening at Port:', port)
})
