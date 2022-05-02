const User = require('../models/user.model');
const Item = require('../models/item.model')
const router = require('express').Router();

router.route('/profile/views/:username').get((req, res) => {
    User.findOne({username: req.params.username}, {profile_views: 1})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error! ' + err))
});

router.route('/profile/update/:username').put((req, res) => {
    User.findOneAndUpdate({username: req.params.username}, req.body)
    .then(user => res.json('Success! User analytics updated.'))
    .catch(err => res.status(400).json('Error! ' + err))
})

module.exports = router;