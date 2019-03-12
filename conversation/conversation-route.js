// package imports
const express = require('express');

// router extension
const router = express.Router();

// data import
const conversations = require('./conversation-model');

router.get('/conversations', async (req, res) => {
  try {
    const convers = await conversations.get();

    res.status(200).json({ convers });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error or invalid token' });
  }
});

module.exports = router;
