exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('auth0_id')
    table.string('email')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
