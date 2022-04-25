const express       = require('express');
const session       = require('express-session');
const passport      = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');
const mongoose      = require('mongoose');
const dotenv        = require('dotenv');
const routes        = require('./routes/routes');
const cors          = require('cors');
const app           = express();
const User          = require('./models/user.model');
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log('Database connected'),{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})



app.use(session({
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:true,
}))
app.use(express.urlencoded({extended:false}))

app.use(express.json());
app.use(cors());

//Passport
app.use(passport.initialize());
app.use(passport.session())

passport.serializeUser( (user, done) =>{
    done(null, user._id);
});

passport.deserializeUser(async(id, done) => {
   await User.findById(id, (err, user) => {
       
        done(err, user);
    })
});

passport.use(new localStrategy({passReqToCallBack:true}, (username, password, done) => {
    User.findOne({username:username}, (err, user) => {
        if(err) return done(err);

        if(!user) return done(null, false, {message:'Incorrect username'});

        bcrypt.compare(password, user.password, (err, res) => {
            if (err) return done(err);

            if (res === false) return done(null, false, {message:'Incorrect password'});

            
            return done(null, user);
            
        })
    })
}))

//routes
app.use('/api', routes);

//start server
app.listen(4000,() => console.log('server is running on port 4000'));