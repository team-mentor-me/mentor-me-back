exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', table => {
    table.increments();
    table.text('post', 500);
    table.text('description', 500);
    table.string('category', 255).notNullable();
    table.string('type').notNullable();
    table.string('photo_path');
    table.string('file_path');
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
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post');
};
