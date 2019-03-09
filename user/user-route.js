// env access
require('dotenv').config();

// package imports
const express = require('express');
const bcrypt = require('bcryptjs');

// router extension
const router = express.Router();

// data imports
const users = require('./user-model');

// middleware
const { auth } = require('../auth/auth');
// const { checkRole } = require('../auth/checkRole'); // could use for admin panel if implemented

// incoming /api

// function import
const generateToken = require('../auth/generateToken');

// register user, send token and user id
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const newUser = req.body;

  const hash = bcrypt.hashSync(newUser.password, 5);
  newUser.password = hash;

  if ((!username, !password)) {
    res
      .status(400)
      .json({ message: 'Username and password required, please try again.' });
  }

  users
    .add(newUser)
    .then(user => {
      const token = generateToken(user);
      res
        .status(200)
        .json({ message: 'Registration successful', userId: user.id, token });
    })
    .catch(err => res.status(500).json({ message: err }));
});

// login user, send token and user id
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if ((!username, !password)) {
    // no username or password
    res
      .status(400)
      .json({ message: 'Username and password required, please try again.' });
  }

  users
    .getBy(username)
    .then(user => {
      if (bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res
          .status(200)
          .json({ message: 'Login successful', userId: user.id, token });
      } else {
        res
          .status(401)
          .json({ message: 'Invalid credentials, please try again.' });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: 'Invalid credentials, please try again.' })
    );
});

// protected route, admin access only
router.get('/users', auth, (req, res) => {
  users
    .get()
    .then(users => {
      res.json({ users });
    })
    .catch(err => res.json({ message: err }));
});

router.delete('/user/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const count = await users.remove(id);
    if (count === 1) {
      res.status(202).json({ message: `User successfully deleted` });
    } else {
      res
        .status(404)
        .json({ message: `No user with matching id, please try again.` });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// get user name, about by id

// logout handles on client side, must destroy token
module.exports = router;
