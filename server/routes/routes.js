
const express       = require('express');
const router        = express.Router();
const authSchema    = require('../models/AuthSchema');
const bcrypt        = require('bcrypt');
const passport      = require('passport');

router.post('/register', async(request, response) =>{
    const {username, email, password} = request.body;

    const exists = await authSchema.exists({username:username});

    if(!exists){
        bcrypt.genSalt(10,(err, salt) =>{
            if(err) return (err);
            bcrypt.hash(password, salt, (err, hash) =>{
                if(err) return console.log(err);
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
    response.json('ok')
});

module.exports = router;