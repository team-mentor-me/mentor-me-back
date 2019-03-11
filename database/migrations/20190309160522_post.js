exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', table => {
    table.increments('post_id');
    table
      .text('post', 500)
      .notNullable()
      .unique();
    table.string('category', 255).notNullable();
    table.string('type').notNullable();
    table.string('photo_path');
    table.string('file_path');
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
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post');
};
