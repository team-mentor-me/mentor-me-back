const db = require('../database/dbConfig');

module.exports = {
  get,
  getById,
  add,
  remove
};

function get() {
  return db('conversation');
}

function getBy(user) {
  // join conversation and relation_table to get all conversations by user
}

// query conversation between users
function getById(id) {
  return db('post as p')
    .where({ conversation_fk: id })
    .join('user as u', 'p.user_fk', 'u.id')
    .select(
      'p.id as post_id',
      'p.post',
      'p.description',
      'p.category',
      'p.type',
      'p.conversation_fk',
      'u.id as user_id',
      'u.name'
    );
}

async function add(newUser) {
  const [id] = await db('conversation').insert(newUser, 'id');

  return db('conversation')
    .where({ id })
    .first();
}

function remove(id) {
  return db('conversation')
    .where({ id })
    .delete();
}
