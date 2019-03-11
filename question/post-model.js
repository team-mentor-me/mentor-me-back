const db = require('../database/dbConfig');

module.exports = {
  add,
  get,
  getById,
  remove
};

function get() {
  return db('post');
}

function getById(id) {
  return db('post')
    .where({ id })
    .first();
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
