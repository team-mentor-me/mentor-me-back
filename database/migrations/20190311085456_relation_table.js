exports.up = function(knex, Promise) {
  return knex.schema.createTable('relation_table', table => {
    table
      .integer('user_fk')
      .unsigned()
      .references('user_id')
      .inTable('user');
    table
      .integer('conversation_fk')
      .unsigned()
      .references('conversation_id')
      .inTable('conversation');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('relation_table');
};
