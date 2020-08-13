const express = require('express');
const userDb = require('./userDb');

const router = express.Router();

router.post('/', (req, res) => {
  if(req.body.name) {
    const newUser = db.insert({name: req.body.name})
    const users = userDB.get()
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

router.get('/', async (req, res) => {
  try {
    const users = await userDb.get()
    res.status(200).json(users)
  } catch (error) {
    res
    .status(500)
    .json({ error: "The user information could not be retrieved" })
  }
});

router.get('/:id', (req, res) => {
  // do your magic!
  const id = req.params.id
  const user = userDb.getById(id)

  if(user) {
    try {
      res
      .json(user)
    } 
    catch(error) {
      res
      .status(500)
      .json ({ errorMessage: "User information could not be found" })
    }
  } else {
    res
    .status(404)
    .json({ message: "user with specified ID does not exist" })
  }
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  const userToDelete = userDb.remove(id)

  if(!userToDelete) {
res.status(500).json({ errorMessage: "This does not work!" })
  } else if(userToDelete) {
    db.remove(id)
    res
    .status(200)
    .json(userToDelete)
  } else {
    res
    .status(404)
    .json({ errorMessage: "The user ID does not exist" })
  }
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
