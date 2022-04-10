const express = require('express');
const passport = require('passport');
const cors = require('cors');
const { strategy, serialize, deserialize } = require('./passport-config');
const userRoutes = require('./controllers/user.controller');
const authRoutes = require('./controllers/auth.controller');
require('dotenv').config();
const db = require('./db-config');
const webapp = express();

webapp.use(express.json());
webapp.use(
  express.urlencoded({
    extended: true,
  })
);

webapp.use(cors());
passport.use(strategy);
passport.serializeUser(serialize);
passport.deserializeUser(deserialize);
webapp.use(passport.initialize());

// Root endpoint
// webapp.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

// Start server
const port = process.env.PORT || 4000;
webapp.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

webapp.use('/auth', authRoutes);
webapp.use('/user', userRoutes);