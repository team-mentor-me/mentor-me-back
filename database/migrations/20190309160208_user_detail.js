exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_detail', table => {
    table
      .string('about', 255)
      .notNullable()
      .unique();
    table.string('photo', 255).notNullable();
    table
      .integer('user_fk')
      .unsigned()
      .references('id')
      .inTable('user');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_detail');
};
