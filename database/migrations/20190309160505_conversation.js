exports.up = function(knex, Promise) {
  return knex.schema.createTable('conversation', table => {
    table.increments('conversation_id');
    table
      .integer('user_fk')
      .unsigned()
      .references('user_id')
      .inTable('user');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('conversation');
};
