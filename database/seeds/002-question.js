const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('question')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('question').insert([
        {
          id: 1,
          question: 'How does ISO help with low light photography',
          category: 'Photography',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          user_fk: 3,
          conversation_fk: 1
        },
        {
          id: 2,
          question: "What's the relationship between aperture and ISO?",
          category: 'Photography',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          user_fk: 3,
          conversation_fk: 2
        },
        {
          id: 3,
          question:
            'What is the benefit of shooting with a prime lens. Is it really worth the cost?',
          category: 'Photography',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          user_fk: 4,
          conversation_fk: 3
        },
        {
          id: 4,
          question:
            'How do I stand out in a sea of photos that are all edited the same?',
          category: 'Photography',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          user_fk: 5,
          conversation_fk: 4
        },
        {
          id: 5,
          question: 'Where to I start when building a local server?',
          category: 'Development',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          user_fk: 6,
          conversation_fk: 5
        },
        {
          id: 7,
          question: 'How do I keep my api key secret when publishing my work?',
          category: 'Development',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          user_fk: 6,
          conversation_fk: 6
        },
        {
          id: 8,
          question:
            'What is the difference between a SQL and a NoSQL database?',
          category: 'Development',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          user_fk: 7,
          conversation_fk: 7
        },
        {
          id: 9,
          question: 'Where can I learn about React Hooks?',
          category: 'Development',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          user_fk: 7,
          conversation_fk: 8
        },
        {
          id: 10,
          question: 'When should I implement redux into my project?',
          category: 'Development',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          user_fk: 8,
          conversation_fk: 9
        }
      ]);
    });
};
