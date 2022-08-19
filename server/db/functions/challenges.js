const connection = require('../connection')

const selectAllChallenges = (db = connection) => {
  return db('challenges').select()
}

const insertChallenge = (id, db = connection) => {
  return db('completed_challenges').insert(id)
}

const selectChallengeById = (id, db = connection) => {
  return db('completed_challenges').where('id', id).select().first()
}

module.exports = {
  selectAllChallenges,
  insertChallenge,
  selectChallengeById
}
