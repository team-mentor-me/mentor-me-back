// package imports
const express = require('express');

// router extension
const router = express.Router();

// data import
const conversations = require('./conversation-model');

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

// get conversation ids by user id
router.get('/conversation-list/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const conversation_ids = await conversations.getConversationIds(id);

    res.status(200).json(conversation_ids);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error or invalid token' });
  }
});

// in development, endpoint not currently working
router.post('/conversations-test', async (req, res) => {
  try {
    const conversation = await conversations.add();
    console.log(conversation);
    if (conversation) {
      res.status(201).json({ message: 'Conversation created' });
    } else {
      res.status(500).json({ message: 'Conversation creation failure' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// generate list of users logged in user is having a conversation with
router.get('/test/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const test = await conversations.testingEndpoint(id);

    const ids = await conversations.getConversationIds(id);

    const mapped = res.status(200).json({ ids, test });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error or invalid token' });
  }
});

module.exports = router;
