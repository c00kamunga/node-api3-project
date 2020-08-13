const express = require('express');

const server = express();

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const time = new Date().toISOString()
  console.log(`IP Address:${req.ip}, method: ${req.method}, URL:${req.url}, ${time}`)

  next()
}

module.exports = server;
