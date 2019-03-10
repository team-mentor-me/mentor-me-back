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
          password:
            '$2a$05$LWbNEsLfdBNJlsDA1J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          role: 'business_owner',
          name: faker.name.findName(),
          email: faker.internet.email()
        },
        {
          id: 2,
          username: faker.internet.userName(),
          password:
            '$2a$05$LWbNEsLfdBNJlsDA1J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          role: 'business_owner',
          name: faker.name.findName(),
          email: faker.internet.email()
        },
        {
          id: 3,
          username: faker.internet.userName(),
          password:
            '$2a$05$LWbNEsLfdBNJlsDA1J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          role: 'entrepreneur',
          name: faker.name.findName(),
          email: faker.internet.email()
        },
        {
          id: 4,
          username: faker.internet.userName(),
          password:
            '$2a$05$LWbNEsLfdBNJlsDA1J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          role: 'entrepreneur',
          name: faker.name.findName(),
          email: faker.internet.email()
        },
        {
          id: 5,
          username: faker.internet.userName(),
          password:
            '$2a$05$LWbNEsLfdBNJlsDA1J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          role: 'entrepreneur',
          name: faker.name.findName(),
          email: faker.internet.email()
        },
        {
          id: 6,
          username: faker.internet.userName(),
          password:
            '$2a$05$LWbNEsLfdBNJlsDA1J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          role: 'entrepreneur',
          name: faker.name.findName(),
          email: faker.internet.email()
        },
        {
          id: 7,
          username: faker.internet.userName(),
          password:
            '$2a$05$LWbNEsLfdBNJlsDA1J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          role: 'entrepreneur',
          name: faker.name.findName(),
          email: faker.internet.email()
        },
        {
          id: 8,
          username: faker.internet.userName(),
          password:
            '$2a$05$LWbNEsLfdBNJlsDA1J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          role: 'entrepreneur',
          name: faker.name.findName(),
          email: faker.internet.email()
        }
      ]);
    });
};
