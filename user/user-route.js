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
const tokenGenerator = require('../auth/tokenGenerator');

// register user, send token and user id
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const newUser = req.body;

  if (password) {
    const hash = bcrypt.hashSync(newUser.password, 5);
    newUser.password = hash;
  }

  if ((!username, !password)) {
    res
      .status(400)
      .json({ message: 'Username and password required, please try again.' });
  }

  try {
    const user = await users.add(newUser);
    console.log(user);

    if (user) {
      const token = tokenGenerator.newToken(user);
      res.status(200).json({
        message: 'Registration successful',
        user_id: user.id,
        token
      });
    } else {
      res.status(500).json({ message: 'Registration failure' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// login user, send token and user id
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if ((!username, !password)) {
    res
      .status(400)
      .json({ message: 'Username and password required, please try again.' });
  }
  try {
    const user = await users.getBy(username);

    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const token = tokenGenerator.newToken(user);
        res.status(200).json({
          message: 'Login successful',
          user_id: user.id,
          token
        });
      } else {
        res
          .status(401)
          .json({ message: 'Invalid credentials, please try again.' });
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Invalid credentials, please try again.' });
  }
});

// apply admin to this endpoint and move to restricted
// protected route, admin access only
router.get('/users', auth, (req, res) => {
  users
    .get()
    .then(users => {
      res.json({ users });
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: 'Internal server error or invalid token' })
    );
});

// query user by id
router.get('/user/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const user = await users.getById(id);

    if (!user) {
      res
        .status(404)
        .json({ message: `No user with matching id, please try again.` });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// apply admin to this endpoint and move to restricted
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
    res.status(500).json({ message: 'Internal server error' });
  }
});

// logout handles on client side, must destroy token
module.exports = router;
