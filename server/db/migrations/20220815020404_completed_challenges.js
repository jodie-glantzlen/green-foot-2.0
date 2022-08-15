exports.up = function (knex) {
  return knex.schema.createTable('completed_challenges', table => {
    table.increments('id')
    table.integer('challenge_id')
    table.string('user_email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('completed_challenges')
}