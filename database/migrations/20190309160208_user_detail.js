exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_detail', table => {});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_detail');
};
