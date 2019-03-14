const db = require('../database/dbConfig');

module.exports = {
  add,
  get,
  getPostById,
  remove,
  getQuestions,
  getQuestionsWithUsers,
  update
};

function get() {
  return db('post');
}

async function getPostById(id) {
  const post = await db('post as p')
    .join('user as u', 'p.user_fk', 'u.id')
    .select(
      'p.id as post_id',
      'p.post',
      'p.description',
      'p.category',
      'u.id as user_id',
      'u.name',
      'u.photo'
    )
    .where('p.id', id)
    .first();

  return post;
}

function getQuestions() {
  return db('post').where({ type: 'question' });
}

async function getQuestionsWithUsers() {
  const questions = await db('post as p')
    .join('user as u', 'p.user_fk', 'u.id')
    .select(
      'p.id as post_id',
      'p.post',
      'p.description',
      'p.category',
      'u.id as user_id',
      'u.name',
      'u.photo'
    );

  return questions;
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

function update(id, changes) {
  return db('post')
    .where({ id })
    .update(changes);
}
