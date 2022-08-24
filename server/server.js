const express = require('express')
const path = require('path')
const challengesRoutes = require('./routes/challenges')
const usersRoute = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/challenges', challengesRoutes)
server.use('/api/v1/users', usersRoute)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
