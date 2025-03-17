const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /users/:userId/food
router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.locals.pantry = user.pantry;
    res.locals.userId = req.params.userId;
    res.render('foods/index.ejs');
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

// GET /users/:userId/foods/new
router.get('/new', (req, res) => {
  res.render('foods/new.ejs', { userId: req.params.userId });
});

// POST /users/:userId/foods
router.post('/', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    user.pantry.push(req.body);
    await user.save();
    res.redirect(`/users/${req.params.userId}/foods`);
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

module.exports = router;