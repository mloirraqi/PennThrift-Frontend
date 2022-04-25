const User = require('../models/user.model');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const saltRounds = 10;


router.post('/register', async(req, res) =>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const usernameIsRegistered = await User.exists({username:username});

    if (!usernameIsRegistered) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                return next(err);
            }
            bcrypt.hash(password, salt, (err, hashedPassword) => {
                if (err) {
                    return next(err);
                }
                const newUser = new User({
                    username: username,
                    email: email,
                    password: hashedPassword,
                });
            
                newUser.save()
                .then((data) => {
                    res.json(data);
                })
                .catch((err) => {
                    res.json(err);
                });
            });
        });
    } else {
        res.json("user is registered");
    }
});

router.post('/login',passport.authenticate('local', {}), (req, res) => {
    passport.authenticate('local', (err, user, info) => {
        res.json(user);
    });
});

module.exports = router;