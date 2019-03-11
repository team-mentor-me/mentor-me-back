const db = require('../database/dbConfig');

module.exports = {
  add,
  get,
  getBy,
  getById,
  remove
};

function get() {
  return db('user');
}

function getBy(username) {
  return db('user')
    .where({ username })
    .first();
}

function getById(id) {
  return db('user as u')
    .select('u.id', 'u.name', 'u.role')
    .where({ id })
    .first();
}

async function add(newUser) {
  const [id] = await db('user').insert(newUser, 'id');

  return db('user')
    .where({ id })
    .first();
}

function remove(id) {
  return db('user')
    .where({ id })
    .delete();
}
