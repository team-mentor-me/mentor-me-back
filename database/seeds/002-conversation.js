exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conversation')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('conversation').insert([
        // add user fk
        { conversation_id: 1, created_at: '2019-03-06T05:01:46.713Z' },
        { conversation_id: 2, created_at: '2019-03-07T05:50:46.713Z' },
        { conversation_id: 3, created_at: '2019-03-08T08:26:10.713Z' },
        { conversation_id: 4, created_at: '2019-03-11T02:05:55.713Z' },
        { conversation_id: 5, created_at: '2019-03-15T04:26:46.713Z' }
      ]);
    });
};
