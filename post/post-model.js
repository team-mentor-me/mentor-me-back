const db = require('../database/dbConfig');

module.exports = {
  add,
  get,
  getPostById,
  remove,
  getQuestions,
  getQuestionsWithUsers
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

async function getQuestionsWithUsers() {
  const questions = await db('post').where({ type: 'question' });

  const mappedQuestions = questions.map(question => {
    return {
      id: question.id,
      post: question.post,
      description: question.description,
      category: question.category,
      type: question.type,

      user_id: question.user_fk // using this fk, how do I get the user name and photo and nest it in
    };
  });

  return { mappedQuestions };
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
