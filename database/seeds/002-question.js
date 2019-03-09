const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('post').insert([
        {
          id: 1,
          question: 'How does ISO help with low light photography',
          category: 'Photography',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          fk: 1
        },
        {
          id: 2,
          question: "What's the relationship between aperture and ISO?",
          category: 'Photography',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          fk: 1
        },
        {
          id: 3,
          question:
            'What is the benefit of shooting with a prime lens. Is it really worth the cost?',
          category: 'Photography',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          fk: 1
        },
        {
          id: 4,
          question: 'What are megapixels and ',
          category: 'Photography',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          fk: 1
        },
        {
          id: 5,
          question: 'Where to I start when building a local server?',
          category: 'Development',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          fk: 1
        },
        {
          id: 7,
          question: 'How do I keep my api key secret when publishing my work',
          category: 'Development',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          fk: 1
        },
        {
          id: 8,
          question: 'What Are Megapixels?',
          category: 'Development',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          fk: 1
        },
        {
          id: 9,
          question: 'What Are Megapixels?',
          category: 'Development',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          fk: 1
        },
        {
          id: 10,
          question: 'What Are Megapixels?',
          category: 'Development',
          photo_path: faker.image.image(),
          file_path: faker.system.filePath(),
          fk: 1
        }
      ]);
    });
};
