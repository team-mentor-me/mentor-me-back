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
          created_at: '2019-03-10T05:18:46.713Z',
          username: faker.internet.userName(),
          password: '$2a$0J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: faker.name.findName(),
          email: faker.internet.email(),
          role: 'entrepreneur'
        },
        {
          id: 2,
          created_at: '2019-03-11T05:18:46.713Z',
          username: faker.internet.userName(),
          password: '$2a$05$J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: faker.name.findName(),
          email: faker.internet.email(),
          role: 'entrepreneur'
        },
        {
          id: 3,
          created_at: '2019-03-12T05:18:46.713Z',
          username: faker.internet.userName(),
          password: '$2a$05$LWbNEsLfw4z6RWNRWgwMjO2iC',
          name: faker.name.findName(),
          email: faker.internet.email(),
          role: 'entrepreneur'
        },
        {
          id: 4,
          created_at: '2019-03-10T05:18:46.713Z',
          username: faker.internet.userName(),
          password: '$2a$0J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: faker.name.findName(),
          email: faker.internet.email(),
          role: 'mentor'
        },
        {
          id: 5,
          created_at: '2019-03-11T05:18:46.713Z',
          username: faker.internet.userName(),
          password: '$2a$05$J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: faker.name.findName(),
          email: faker.internet.email(),
          role: 'mentor'
        }
      ]);
    });
};
