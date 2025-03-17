const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.render('users/index.ejs', { users });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

module.exports = router;