
const express       = require('express');
const router        = express.Router();
const User    = require('../models/user.model');
const bcrypt        = require('bcrypt');
const passport      = require('passport');
const saltRounds = 10;

router.post('/register', async(request, response) =>{
    const {username, email, password} = request.body;

    const usernameIsRegistered = await User.exists({username:username});

    if (!usernameIsRegistered) {
        bcrypt.genSalt(saltRounds, (err, salt) =>{
            if (err) return (err);
            bcrypt.hash(password, salt, (err, hashedPassword) =>{
                if (err) return console.log(err);
                const newUser = new User({
                    username:username,
                    email: email,
                    password: hashedPassword,
                });
            
                newUser.save()
                .then((data) =>{
                    response.json(data);
                })
                .catch((error) =>{
                    response.json(error);
                });
            })
        })
        
    } else {
        response.json("Error: User is already registered");
    }
    
});

router.post('/login',passport.authenticate('local', {
}), (request, response) => {
    passport.authenticate('local',(err, user, info)=>{
        response.json(user);
    })
    response.json('ok')
});

module.exports = router;