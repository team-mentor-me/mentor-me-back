exports.up = function(knex, Promise) {
  return knex.schema.createTable('conversation', table => {
    table.increments();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('conversation');
};
