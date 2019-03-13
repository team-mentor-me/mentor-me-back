// package imports
const express = require('express');

// router extension
const router = express.Router();

// data import
const conversations = require('./conversation-model');
const users = require('../user/user-model');
const posts = require('../post/post-model');

// get messages from a conversation by id
router.get('/conversations/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const conversation = await conversations.getById(id);

    if (!conversation) {
      res.status(404).json({
        message: `No conversation with matching id, please try again.`
      });
    } else {
      res.status(200).json(conversation);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error or invalid token' });
  }
});

// get conversation list by user id -- in progress -- not tested
router.get('/test/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const { user_id, name, username, photo } = await users.getById(id);
    const ids = await conversations.getConversationIds(id);

    const list = await ids
      .map(id =>
        conversations.getById(id).then(conversation => {
          return { ...conversation };
        })
      )
      .catch(err => console.log(err));

    res.status(200).json({ user_id, name, username, photo, list: [...list] });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error or invalid token' });
  }
});
// generate conversation

module.exports = router;
