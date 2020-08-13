// code away!
const express = require('express')
const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')
const serverFile = require('./server')
const server = express()
const port = 1010

server.use(serverFile)

server.use(express.json())

server.use('/', postRouter, userRouter)


server.listen(port, () => {
    console.log(`\n *** server is listening on http://localhost:${port} *** \n`)
})
