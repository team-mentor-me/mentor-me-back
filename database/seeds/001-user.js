const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          username: faker.internet.userName(),
          role: 'business_owner',
          name: faker.name.findName(),
          email: faker.internet.email(),
          about: faker.lorem.sentence(),
          photo: faker.image.avatar()
        },
        {
          id: 2,
          username: faker.internet.userName(),
          role: 'entrepreneur',
          name: faker.name.findName(),
          email: faker.internet.email(),
          about: faker.lorem.sentence(),
          photo: faker.image.avatar()
        },
        {
          id: 3,
          username: faker.internet.userName(),
          role: 'business_owner',
          name: faker.name.findName(),
          email: faker.internet.email(),
          about: faker.lorem.sentence(),
          photo: faker.image.avatar()
        },
        {
          id: 4,
          username: faker.internet.userName(),
          role: 'entrepreneur',
          name: faker.name.findName(),
          email: faker.internet.email(),
          about: faker.lorem.sentence(),
          photo: faker.image.avatar()
        },
        {
          id: 5,
          username: faker.internet.userName(),
          role: 'entrepreneur',
          name: faker.name.findName(),
          email: faker.internet.email(),
          about: faker.lorem.sentence(),
          photo: faker.image.avatar()
        },
        {
          id: 6,
          username: faker.internet.userName(),
          role: 'entrepreneur',
          name: faker.name.findName(),
          email: faker.internet.email(),
          about: faker.lorem.sentence(),
          photo: faker.image.avatar()
        }
      ]);
    });
};
