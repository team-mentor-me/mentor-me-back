exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments();
    table
      .string('username', 255)
      .notNullable()
      .unique();
    table.string('password', 255).notNullable();
    table.string('name', 255);
    table.string('email', 255);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');
};
