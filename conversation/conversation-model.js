const db = require('../database/dbConfig');

module.exports = {
  getById,
  add,
  remove,
  getConversationIds
};

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

// get list of conversation ids a user is having
async function getConversationIds(id) {
  const ids = await db('relation_table as r').where({
    user_fk: id
  });

  const mapped = ids.map(id => id.conversation_fk);

  return mapped;
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
