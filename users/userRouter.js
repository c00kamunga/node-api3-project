const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  if(req.body.name) {
    const newUser = db.insert({name: req.body.name})
    const users = db.get()
    if (users) {
      res.json(users)
      res.status(201)
    } else {
      res
      .status(500)
      .json({ errorMessage: "Error saving user to database"})
    } 
  } else {
      res
      .status(400)
      .json({ errorMessage: "No name for user" })
    }
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
