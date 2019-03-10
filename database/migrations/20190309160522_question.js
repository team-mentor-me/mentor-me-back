exports.up = function(knex, Promise) {
  return knex.schema.createTable('question', table => {
    table.increments();
    table
      .text('question', 500)
      .notNullable()
      .unique();
    table.string('category', 255).notNullable();
    table.string('type').notNullable();
    table.string('photo_path');
    table.string('file_path');
    table
      .integer('question_fk')
      .unsigned()
      .references('id')
      .inTable('user');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('question');
};
