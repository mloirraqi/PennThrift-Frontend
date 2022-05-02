const User = require('../models/user.model');
const Item = require('../models/item.model')
const router = require('express').Router();

router.route('/views/:username').get((req, res) => {
    User.findOne({username: req.params.username}, {profile_views: 1})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error! ' + err))
});

module.exports = router;