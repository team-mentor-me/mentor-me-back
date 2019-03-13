const db = require('../database/dbConfig');

module.exports = {
  add,
  get,
  getBy,
  getById,
  remove,
  update
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
    .select(
      'u.id as user_id',
      'u.username',
      'u.name',
      'u.email',
      'u.role',
      'u.about',
      'u.photo'
    )
    .where({ id })
    .first();
}

async function add(newUser) {
  const [id] = await db('user').insert(newUser, 'id');

  return db('user')
    .where({ id })
    .first();
}

// cannot delete user if relation exists
function remove(id) {
  return db('user')
    .where({ id })
    .delete();
}

function update(id, changes) {
  return db('user')
    .where({ id })
    .update(changes);
}
