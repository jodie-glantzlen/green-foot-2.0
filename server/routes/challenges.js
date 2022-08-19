const express = require('express')
const router = express.Router()
const db = require('../db/functions/challenges')

// GET /api/v1/challenges

router.get('/', (req, res) => {
  db.selectAllChallenges()
    .then((allChallenges) => {
      //console.log('GET from routes: ', allChallenges)
      res.json(allChallenges)
    })
    .catch((err) => res.status(500).json({ msg: err.message }))
})

// POST /api/v1/challenges

router.post('/', (req, res) => {
  const id = req.body
  console.log('POST from routes: ', id)
  db.insertChallenge(id)
    .then((arr) => {
      res.json(arr)
    })
    .catch((err) => res.status(500).json({ msg: err.message }))
})

module.exports = router
