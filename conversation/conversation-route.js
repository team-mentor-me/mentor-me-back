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

// get conversation list by user id -- in progress -- not tested
router.get('/conversation-list/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const conversation_ids = await conversations.getConversationIds(id);

    res.status(200).json(conversation_ids);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error or invalid token' });
  }
});
// generate conversation

module.exports = router;
