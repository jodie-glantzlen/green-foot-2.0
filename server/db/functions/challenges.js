const connection = require('../connection')

const selectAllChallenges = (db = connection) => {
  return db('challenges').select()
}

const insertChallenge = (id, db = connection) => {
  return db('completed_challenges').insert(id)
}
module.exports = {
  selectAllChallenges,
  insertChallenge,
}
