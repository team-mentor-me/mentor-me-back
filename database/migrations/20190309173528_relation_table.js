exports.up = function(knex, Promise) {
  return knex.schema.createTable('relation_table', table => {
    table
      .integer('user_fk')
      .unsigned()
      .references('id')
      .inTable('user');
    table
      .integer('conversation_fk')
      .unsigned()
      .references('id')
      .inTable('conversation');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('relation_table');
};
