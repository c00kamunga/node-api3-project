const express = require('express');

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
  // do your magic!
});

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
