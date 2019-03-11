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
<<<<<<< HEAD
          username: 'Angelllo',
          password: '$2a$0J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: 'Angello Lopez',
          email: 'angello@gmail.com',
          about:
            'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa',
          photo:
            'https://images.unsplash.com/photo-1474312650852-739d4703e766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
=======
          username: faker.internet.userName(),
          password: '$2a$0J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: faker.name.findName(),
          email: faker.internet.email(),
>>>>>>> 0e2e0a3b23ffb2da28ef7eac7464b0a8922b0a88
          role: 'entrepreneur'
        },

        {
          id: 2,
          created_at: '2019-03-11T05:18:46.713Z',
<<<<<<< HEAD
          username: 'hello_ethan',
          password: '$2a$05$J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: 'Ethan Hoover',
          email: 'ethan@helloworld.com',
          about:
            'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa',
          photo:
            'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
=======
          username: faker.internet.userName(),
          password: '$2a$05$J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: faker.name.findName(),
          email: faker.internet.email(),
>>>>>>> 0e2e0a3b23ffb2da28ef7eac7464b0a8922b0a88
          role: 'entrepreneur'
        },
        {
          id: 3,
          created_at: '2019-03-12T05:18:46.713Z',
<<<<<<< HEAD
          username: 'Milton_N',
          password: '$2a$05$LWbNEsLfw4z6RWNRWgwMjO2iC',
          name: 'Nicole Milton',
          email: 'miltonn@gmail.com',
          about:
            'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa',
          photo:
            'https://images.unsplash.com/photo-1508440767412-59ce0b206bbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
=======
          username: faker.internet.userName(),
          password: '$2a$05$LWbNEsLfw4z6RWNRWgwMjO2iC',
          name: faker.name.findName(),
          email: faker.internet.email(),
>>>>>>> 0e2e0a3b23ffb2da28ef7eac7464b0a8922b0a88
          role: 'entrepreneur'
        },
        {
          id: 4,
          created_at: '2019-03-10T05:18:46.713Z',
<<<<<<< HEAD
          username: 'Lucyy',
          password: '$2a$0J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: 'Lucy Lee',
          email: 'LuckyL@gmail.com',
          about:
            'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa',
          photo:
            'https://images.unsplash.com/photo-1535639085232-4feb48fcba0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
=======
          username: faker.internet.userName(),
          password: '$2a$0J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: faker.name.findName(),
          email: faker.internet.email(),
>>>>>>> 0e2e0a3b23ffb2da28ef7eac7464b0a8922b0a88
          role: 'mentor'
        },
        {
          id: 5,
          created_at: '2019-03-11T05:18:46.713Z',
<<<<<<< HEAD
          username: 'jMiller',
          password: '$2a$05$J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: 'Jacob Miller',
          email: 'jmiller@gmail.com',
          about:
            'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa',
          photo:
            'https://images.unsplash.com/photo-1546830167-a7eb0518c0b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
=======
          username: faker.internet.userName(),
          password: '$2a$05$J9HuuNmX52aLzoT/DQvw4z6RWNRWgwMjO2iC',
          name: faker.name.findName(),
          email: faker.internet.email(),
>>>>>>> 0e2e0a3b23ffb2da28ef7eac7464b0a8922b0a88
          role: 'mentor'
        }
      ]);
    });
};
