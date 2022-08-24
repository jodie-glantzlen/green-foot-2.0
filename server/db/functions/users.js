const connection = require('../connection')

const insertUser = (user, db = connection) => {
  return db('users').insert(user)
}

const selectUserById = (id, db = connection) => {
  return db('users').where('id', id).select().first()
}

module.exports = {
  insertUser,
  selectUserById
}