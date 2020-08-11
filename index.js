// code away!
const express = require('express')
const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')
const server = express()
const port = 1010

server.use(express.json())

server.use('/', postRouter, userRouter)

server.listen(port, () => {
    console.log(`\n *** server is listening on port ${port} *** \n`)
})
