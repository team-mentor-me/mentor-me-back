const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('post').insert([
        // conversation id 1
        {
          post_id: 1,
          created_at: '2019-03-05T05:18:46.713Z',
          post: "What's the relationship between aperture and ISO?",
          category: 'Photography',
          type: 'question',
          photo_path: faker.image.image(),
          user_fk: 1,
          conversation_fk: 1
        },
        {
          post_id: 2,
          created_at: '2019-03-05T05:18:55.713Z',
          post: 'message from mentor',
          category: 'Photography',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 4,
          conversation_fk: 1
        },
        {
          post_id: 3,
          created_at: '2019-03-06T05:24:56.713Z',
          post: 'message from entrepreneur',
          category: 'Photography',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 1,
          conversation_fk: 1
        },
        {
          post_id: 4,
          created_at: '2019-03-06T05:24:57.713Z',
          post: 'message from mentor',
          category: 'Photography',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 4,
          conversation_fk: 1
        },
        {
          post_id: 5,
          created_at: '2019-03-06T05:24:58.713Z',
          post: 'message from entrepreneur',
          category: 'Photography',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 1,
          conversation_fk: 1
        },

        // conversation id 2
        {
          post_id: 6,
          created_at: '2019-03-02T04:18:46.713Z',
          post: 'What is the difference between a SQL and a NoSQL database?',
          category: 'Development',
          type: 'question',
          photo_path: faker.image.image(),
          user_fk: 2,
          conversation_fk: 2
        },
        {
          post_id: 7,
          created_at: '2019-03-07T06:24:47.713Z',
          post: 'message from mentor',
          category: 'Development',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 5,
          conversation_fk: 2
        },
        {
          post_id: 8,
          created_at: '2019-03-07T06:24:48.713Z',
          post: 'message from entrepreneur',
          category: 'Development',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 2,
          conversation_fk: 2
        },

        // conversation id 3
        {
          post_id: 9,
          created_at: '2019-03-12T01:23:50.713Z',
          post: 'Where to I start when building a local server?',
          category: 'Development',
          type: 'question',
          photo_path: faker.image.image(),
          user_fk: 3,
          conversation_fk: 3
        },
        {
          post_id: 10,
          created_at: '2019-03-07T06:24:51.713Z',
          post: 'message from mentor',
          category: 'Development',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 5,
          conversation_fk: 3
        },
        {
          post_id: 11,
          created_at: '2019-03-07T06:24:52.713Z',
          post: 'message from entrepreneur',
          category: 'Development',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 3,
          conversation_fk: 3
        },
        // conversation id 4

        {
          post_id: 12,
          created_at: '2019-03-10T08:18:52.713Z',
          post:
            'How do I stand out in a sea of photos that are all edited the same?',
          category: 'Photography',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 1,
          conversation_fk: 4
        },
        {
          post_id: 13,
          created_at: '2019-03-10T05:24:54.713Z',
          post: 'message from entrepreneur',
          category: 'Photography',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 4,
          conversation_fk: 4
        },
        {
          post_id: 14,
          created_at: '2019-03-10T05:24:55.713Z',
          post: 'message from mentor',
          category: 'Photography',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 1,
          conversation_fk: 4
        },
        {
          post_id: 15,
          created_at: '2019-03-10T05:24:56.713Z',
          post: 'message from entrepreneur',
          category: 'Photography',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 4,
          conversation_fk: 4
        },

        // conversation id 5
        {
          post_id: 16,
          created_at: '2019-03-14T02:18:46.713Z',
          post: 'How do I keep my api key secret when publishing my work?',
          category: 'Development',
          type: 'question',
          photo_path: faker.image.image(),
          user_fk: 2,
          conversation_fk: 5
        },
        {
          post_id: 17,
          created_at: '2019-03-07T06:24:47.713Z',
          post: 'message from mentor',
          category: 'Development',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 5,
          conversation_fk: 5
        },
        {
          post_id: 18,
          created_at: '2019-03-07T06:25:48.713Z',
          post: 'message from entrepreneur',
          category: 'Development',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 2,
          conversation_fk: 5
        },
        {
          post_id: 19,
          created_at: '2019-03-07T06:26:46.713Z',
          post: 'message from mentor',
          category: 'Development',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 5,
          conversation_fk: 5
        },
        {
          post_id: 20,
          created_at: '2019-03-07T06:27:46.713Z',
          post: 'message from mentor',
          category: 'Development',
          type: 'message',
          photo_path: faker.image.image(),
          user_fk: 5,
          conversation_fk: 5
        }
      ]);
    });
};
