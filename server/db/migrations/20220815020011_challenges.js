exports.up = function (knex) {
  return knex.schema.createTable('challenges', table => {
    table.increments('id')
    table.string('title')
    table.string('description')
    table.string('icon')
    table.integer('points_rewarded')
    table.integer('points_required')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('challenges')
}