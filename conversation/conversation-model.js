const db = require('../database/dbConfig');

module.exports = {
  getById,
  getConversationIds,
  conversationsByUser,
  // add,
  remove,
  testingEndpoint
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

async function conversationsByUser(id) {
  const messages = db('relation_table as r')
    .where('r.user_fk', id)
    .join('conversation as c', 'r.conversation_fk', 'c.id')
    .join('post as p', 'c.id', 'p.conversation_fk')
    .select(
      'p.user_fk',
      'p.conversation_fk',
      'p.id as post_id',
      'p.post',
      'p.description',
      'p.category',
      'p.type'
    );

  return messages;
}

// model not currently working, trying to generate conversation and receive id back.
// async function add() {
//   const [id] = await db('conversation').insert(null, 'id');

//   return db('conversation')
//     .where({ id })
//     .first();
// }

function remove(id) {
  return db('conversation')
    .where({ id })
    .delete();
}

async function testingEndpoint(id) {
  const ids = await db('relation_table as r')
    .join('conversation as c', 'r.conversation_fk', 'c.id')
    .join('post as p', 'c.id', 'p.conversation_fk')
    .join('user as u', 'r.user_fk', 'u.id')
    .select(
      'p.id as post_id',
      'post',
      'r.user_fk as user_id',
      'u.name',
      'r.conversation_fk as conversation_id'
    )
    // .groupBy('r.conversation_fk')
    .orderBy('p.id');

  return ids;
}
