const { response }  = require('express');
const express       = require('express');
const router        = express.Router();
const authSchema    = require('../models/AuthSchema');
const bcrypt        = require('bcrypt');
const passport      = require('passport');

router.post('/register', async(request, response) =>{
    const username = request.body.username;
    const email = request.body.email;
    const password = request.body.password;

    const exists = await authSchema.exists({username:username});

    if(!exists){
        bcrypt.genSalt(10,(err, salt) =>{
            if(err) return next(err);
            bcrypt.hash(password, salt, (err, hash) =>{
                if(err) return next(err);
                const newUser = new authSchema({
                    username:username,
                    email:email,
                    password:hash,
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
        
    }else{
        response.json("error");
    }
    
});

router.post('/login',passport.authenticate('local',{
}),(request, response) => {
    passport.authenticate('local',(err, user, info)=>{
        response.json(user);
    })
});

module.exports = router;