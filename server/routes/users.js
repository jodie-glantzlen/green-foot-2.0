const express = require('express')
const db = require('../db/functions/users')
const router = express.Router()

// POST /api/v1/users
router.post('/', (req, res) => {
  const newUser = req.body
  db.insertUser(newUser)
  .then((idArr) => {
    const newUserId = idArr[0]
    return db.selectUserById(newUserId)
  })
  .then((newUserObj) => {
    res.json(newUserObj)
  })
  .catch((err) => res.status(500).json({ msg: err.message }))
})

module.exports = router