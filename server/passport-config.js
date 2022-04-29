const localStrategy = require('passport-local').Strategy;
const User          = require('./models/user.model');
const bcrypt        = require('bcrypt')

function initialize(passport){

    const authenticateUser = async (username, password, done) =>{
        User.findOne({username:username}, (err, user) => {
            if (err) return done(err);
    
            if (!user) return done(null, false, {message:'Incorrect username'});
            
            bcrypt.compare(password, user.password, (err, res) => {
                if (err) return done(err);
    
                if (res === false) return done(null, false, {message:'Incorrect password'});
    
                
                return done(null, user);
                
            })
        })
    }    
    passport.use(new localStrategy(authenticateUser));
    passport.serializeUser( (user, done) =>{
        done(null, user._id);
    });
    
    passport.deserializeUser((id, done) => {
       User.findById(id, (err, user) => {
            done(err, user);
        })
    });
}

module.exports = initialize;