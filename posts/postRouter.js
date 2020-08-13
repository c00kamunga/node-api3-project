const express = require('express');
const dbConfig = require('../data/dbConfig');
const postDb = require('./postDb');
const server = require('../server');

const router = express.Router();

///////////////////////////////////////////////

router.get('/', async (req, res) => {
  try {
    const posts = await postDb.get()
    res
    .status(200)
    .json(posts)
  } catch(error) {
    res
    .status(500)
    .json({ error: "Theposts information could not be retrieved" })
  }
});

///////////////////////////////////////////////////

router.get('/:id', (req, res) => {
  postDb.getById(req.params.id)
  .then(post => {
    if(post.length === 0) {
      return res
      .status(404)
      .json({ message: "The post with the specified ID does not exist." })
    } else {
      res
      .status(200)
      .json(post)
    }
  })
  .catch(error => {
    res
    .status(500)
    .json({ error: "The post information could not be retrieved." })
  })
});

////////////////////////////////////////////////

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
