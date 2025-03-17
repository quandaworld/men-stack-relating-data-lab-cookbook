const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /users/:userId/food
router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.render('foods/index.ejs', { pantry: user.pantry });
  } catch (err) {
    console.log(error);
    res.redirect('/');
  }
});

module.exports = router;