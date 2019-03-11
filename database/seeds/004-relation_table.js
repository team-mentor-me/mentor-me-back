exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { user_fk: 1, conversation_fk: 1 },
        { user_fk: 4, conversation_fk: 1 },

        { user_fk: 2, conversation_fk: 2 },
        { user_fk: 5, conversation_fk: 2 },

        { user_fk: 3, conversation_fk: 3 },
        { user_fk: 5, conversation_fk: 3 },

        { user_fk: 1, conversation_fk: 4 },
        { user_fk: 4, conversation_fk: 4 },

        { user_fk: 2, conversation_fk: 5 },
        { user_fk: 5, conversation_fk: 5 }
      ]);
    });
};
