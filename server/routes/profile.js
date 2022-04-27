const User = require('../models/user.model');
const router = require('express').Router();

// get all profiles/users
router.route('/').get((req, res) => {
    // using .find() without a parameter will match on all user instances
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json('Error! ' + err))
});

// get profile/ user info by username
router.route('/:username').get((req, res) => {
    User.findOne({username: req.params.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error! ' + err))
});

// delete profile/user by id
router.route('/delete/:username').delete((req, res) => {
    User.deleteOne({ username: req.params.username })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
});

// edit profile/user info by id
router.route('/edit/:username').put((req, res) => {
    User.findOneAndUpdate({username: req.params.username }, req.body)
        .then(user => res.json('Success! User updated.'))
        .catch(err => res.status(400).json('Error! ' + err))
});

// get items of user
router.route('/items/:username').get((req, res) => {
    User.findOne({ username: req.params.username }, {username: 1, items: 1})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error! ' + err))
});

module.exports = router;