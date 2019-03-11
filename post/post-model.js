const db = require('../database/dbConfig');

module.exports = {
  add,
  get,
  getPostById,
  remove,
  getQuestions
};

function get() {
  return db('post');
}

function getPostById(id) {
  return db('post')
    .where({ id })
    .first();
}

function getQuestions() {
  return db('post').where({ type: 'question' });
}

async function add(newPost) {
  const [id] = await db('post').insert(newPost, 'id');

  return db('post')
    .where({ id })
    .first();
}

function remove(id) {
  return db('post')
    .where({ id })
    .delete();
}
