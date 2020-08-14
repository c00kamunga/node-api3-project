const express = require('express');
const userDb = require('./userDb');
const postDb = require('../posts/postDb');

const router = express.Router();

////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////

router.post('/:id/posts', (req, res) => {
  if (!req.body.text) {
    res
    .status(400)
    .json({ errorMessage: "Please provide text for the post" })
  } else if (req.body.post_id !== Number(req.params.id)) {
    res
    .status(400)
    .json({ message: "The specified post ID does not match the request ID." })
  } else if (!postDb.getById(req.params.id)) {
    res
    .status(404)
    .json({ message: "The post with the specified ID does not exist." })
  } else {
    postDb.insert(req.body)
    .then(newPost => {
      return res
      .status(201)
      .json(newComment)
    })
    .catch(error => {
      error: "There was an error while saving the post to the database "
    })
  }
});

///////////////////////////////////////////////////

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


//////////////////////////////////////////////////

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


/////////////////////////////////////////////////////

router.get('/:id/posts', (req, res) => {
  userDb.getUserPosts(req.params.id)
  .then(user => {
    if(user.length === 0) {
      return
      res
      .status(404)
      .json({ message: "The user does not exist" })
    } else {
      res
      .status(200)
      .json(user)
    }
  })
  .catch(error => {
    res
    .status(500)
    .json({ error: "The user's posts could not be retrieved " })
  })
});

//////////////////////////////////////////////////////

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


/////////////////////////////////////////////////////////

router.put('/:id', (req, res) => {
  const updateUser = req.body
  const id = req.params.id
  const userID = userDb.update(id)

  if(!userID) {
    res.status(404)
    .json({ errorMessage: "User ID does not exist" })
  } else if(!updatedUser.name) {
    res
    .status(400)
    .json({ errorMessage: "Please edit the name of the user" })
  } else if(userID) {
    userDb.update(userID, updatedUser)
    res
    .status(200)
    .json(updatedUser)
  } else {
    res
    .status(500)
    .json({ errorMessage: "There was an issue with the server" })
  }
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
