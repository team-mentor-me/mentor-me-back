const db = require('../database/dbConfig');

module.exports = {
  get,
  getById,
  add,
  remove,
  getConversations
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

// async function getConversationList(id) {
//   const current_user = await db('user as u')
//     .select('u.id as user_id', 'u.name', 'u.photo')
//     .where({ id })
//     .first();

//   const conversations = await db('relation_table')
//     .where({ user_fk: id })
//     .select('conversation_fk');
//   // .select('conversation_fk');

//   const posts = await db('post as p');

//   const mappedPosts = await db('post').where({ conversation_fk: 1 });

//   const conversation_ids = [
//     ...conversations.map(conversation => conversation.conversation_fk)
//   ];

//   return {
//     current_user,
//     conversations: [...conversations] // who is user 1 having a conversation with?
//   };
// }

async function getConversations(id) {
  const conversations = await db('relation_table as r').join(
    'user as u',
    'u.user_id',
    'r.user_fk'
  );

  const con = await db('conversation');
  // .join('user as u', 'u.user_id', 'r.user_fk');

  return conversations;
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
