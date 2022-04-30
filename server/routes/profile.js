const User = require('../models/user.model');
const Item = require('../models/item.model');
const router = require('express').Router();

// get all profiles/users
router.route('/').get((req, res) => {
  // using .find() without a parameter will match on all user instances
  User.find()
    .then((allUsers) => res.json(allUsers))
    .catch((err) => res.status(400).json('Error! ' + err));
});

// get profile/ user info by id
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error! ' + err));
});

// delete profile/user by id
router.route('/delete/:id').delete((req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((success) => res.json('Success! User deleted.'))
    .catch((err) => res.status(400).json('Error! ' + err));
});

// edit profile/user info by id
router.route('/edit/:id').put((req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json('Success! User updated.'))
    .catch((err) => res.status(400).json('Error! ' + err));
});

//add items under a user
router.route('/item/new').post((req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      const newItem = new Item(req.body);
      newItem
        .save()
        .then()
        .catch((err) => res.status(400).json(err));
      User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { items: newItem } }
      ).exec();
      res.json('Item added succesfully');
    })
    .catch((err) => res.status(400).json('Error! ' + err));
});

// get items of user
router.route('/items/:username').get((req, res) => {
  User.findOne({ username: req.params.username }, { username: 1, items: 1 })
    .populate('items')
    .exec((err, user) => {
      res.json(user);
    });
  // .catch(err => res.status(400).json('Error! ' + err))
});

module.exports = router;
