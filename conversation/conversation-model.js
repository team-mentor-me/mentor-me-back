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

function getById(id) {
  return db('conversation')
    .where({ id })
    .first();
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
