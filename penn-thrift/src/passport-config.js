const db = require('./db-config');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = {
    strategy: new localStrategy(
        {
            passReqToCallBack:true
        }, 
        function (username, password, done) {
            User.findOne({username:username}, (err, user) => {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {message:'Incorrect username'});
                }
    
                bcrypt.compare(password, user.password, (err, res) => {
                    if (err) {
                        return done(err);
                    }
    
                    if (res === false) {
                        return done(null, false, 
                            {message:'Incorrect password'});
                    }
                    return done(null, user);
                });
            });
        }
    ),
  serialize: function (user, done) {
    done(null, user._id);
  },
  deserialize: async function (id, done) {
    await User.findById(id, (err, user) => {
        done(err, user);
    });
  },
};