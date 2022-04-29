const mongoose = require('mongoose');
const path = require('path')
//require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
require('dotenv').config();

const conn = mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conn;